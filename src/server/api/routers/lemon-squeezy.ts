import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  createCheckout,
  createWebhook,
  getProduct,
  getVariant,
  lemonSqueezySetup,
  listProducts,
  listVariants,
  listWebhooks,
} from "@lemonsqueezy/lemonsqueezy.js";
import { env } from "~/env.mjs";

const setupLemonSqueezy = () => {
  lemonSqueezySetup({
    apiKey: env.LEMON_SQUEEZY_API_KEY,
    onError(error) {
      console.log(error);
    },
  });
};

export async function hasWebhook() {
  setupLemonSqueezy();

  if (!env.LEMON_SQUEEZY_WEBHOOK_URL) {
    throw new Error(
      "Missing required WEBHOOK_URL env variable. Please, set it in your .env file.",
    );
  }

  // Check if a webhook exists on Lemon Squeezy.
  const allWebhooks = await listWebhooks({
    filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
  });

  // Check if WEBHOOK_URL ends with a slash. If not, add it.
  const webhookUrl = env.LEMON_SQUEEZY_WEBHOOK_URL;

  const webhook = allWebhooks.data?.data.find(
    (wh) => wh.attributes.url === webhookUrl && wh.attributes.test_mode,
  );

  return webhook;
}

export const lemonSqueezyRouter = createTRPCRouter({
  getSubscriptionByUserId: protectedProcedure.query(async ({ ctx }) => {
    setupLemonSqueezy();
    const user = ctx.session?.user;

    if (!user) {
      throw new Error("User not found in session");
    }

    const subscription = await ctx.db.lemonSqueezySubscription.findFirst({
      where: { userId: user.id },
    });

    const variant = subscription?.variantId
      ? await getVariant(subscription?.variantId)
      : null;

    return { subscription, variant };
  }),
  getProductById: publicProcedure
    .input(
      z.object({
        productId: z.string(),
        hideDefaultVariant: z.boolean().optional(),
      }),
    )
    .query(async ({ input }) => {
      setupLemonSqueezy();
      const getProductQuery = await getProduct(input.productId);
      const getProductVariantsQuery = await listVariants({
        filter: { productId: input.productId },
      });

      const variants = getProductVariantsQuery.data?.data.filter((variant) => {
        if (input.hideDefaultVariant) {
          return variant.attributes.status !== "pending";
        }
        return true;
      });

      const product = getProductQuery.data;

      return {
        product,
        variants,
      };
    }),
  createCheckoutForVariant: publicProcedure
    .input(
      z.object({
        variantId: z.string(),
        embed: z.boolean().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      setupLemonSqueezy();

      const user = ctx.session?.user;

      if (!env.LEMON_SQUEEZY_STORE_ID) {
        throw new Error(
          "Missing required LEMON_SQUEEZY_STORE_ID env variable. Please, set it in your .env file.",
        );
      }

      const checkout = await createCheckout(
        env.LEMON_SQUEEZY_STORE_ID,
        input.variantId,
        {
          checkoutData: {
            email: user?.email ?? "undefined",
            custom: {
              userIdInDatabase: user?.id,
            },
          },
          productOptions: {
            redirectUrl: `${env.NEXTAUTH_URL}/billing`,
          },
          checkoutOptions: {
            embed: input.embed,
          },
        },
      );

      return checkout;
    }),

  createLsWebhook: protectedProcedure.mutation(async () => {
    lemonSqueezySetup({
      apiKey: env.LEMON_SQUEEZY_API_KEY,
      onError(error) {
        console.log(error);
      },
    });
    console.log({ env });

    if (!env.LEMON_SQUEEZY_WEBHOOK_URL) {
      throw new Error(
        "Missing required LEMON_SQUEEZY_WEBHOOK_URL env variable. Please, set it in your .env file.",
      );
    }
    // Check if WEBHOOK_URL ends with a slash. If not, add it.
    const webHookUrl = env.LEMON_SQUEEZY_WEBHOOK_URL;

    // Do not set a webhook on Lemon Squeezy if it already exists.
    const webHook = await hasWebhook();

    // If the webhook does not exist, create it.
    if (!webHook) {
      await createWebhook(env.LEMON_SQUEEZY_STORE_ID!, {
        secret: env.LEMON_SQUEEZY_WEBHOOK_SECRET!,
        url: webHookUrl,
        testMode: true, // will create a webhook in Test mode only!
        events: [
          "subscription_created",
          "subscription_expired",
          "subscription_updated",
        ],
      });
    }
  }),
  getWebhook: protectedProcedure.query(async () => {
    const webhook = await hasWebhook();

    return webhook;
  }),
  createPlansFromLemonSqueezyVariants: protectedProcedure.mutation(
    async ({ ctx }) => {
      setupLemonSqueezy();

      // Fetch variants from Lemon Squeezy
      const variantsResponse = await listVariants(); // Adjust to use the correct parameters/filters as necessary
      const variants = variantsResponse.data?.data;

      if (!variants) {
        throw new Error("Failed to fetch variants from Lemon Squeezy.");
      }

      // Iterate over each variant and create a plan in the database
      const plans = await Promise.all(
        variants.map(async (variant) => {
          const existingPlan = await ctx.db.plan.findUnique({
            where: {
              lemonSqueezyVariantId: variant.id,
            },
          });

          if (!existingPlan) {
            return await ctx.db.plan.create({
              data: {
                lemonSqueezyVariantId: variant.id, // Assuming this is the correct mapping
                name: variant.attributes.name,
              },
            });
          }

          return existingPlan;
        }),
      );

      return plans;
    },
  ),
  getProductsFromLemonSqueezy: protectedProcedure.query(async ({ ctx }) => {
    setupLemonSqueezy();

    const products = await listProducts();
    const variants = await listVariants();

    // Fetch all plans from the database to check against the variants
    const plansInDatabase = await ctx.db.plan.findMany({
      select: {
        lemonSqueezyVariantId: true, // Assuming this field links your plans to Lemon Squeezy variants
      },
    });
    const planVariantIdsInDB = plansInDatabase.map(
      (plan) => plan.lemonSqueezyVariantId,
    );

    // Iterate over products and their variants, checking if each variant has a corresponding plan in the database
    const productsWithVariants = products.data?.data.map((product) => {
      const productVariants = variants.data?.data
        .filter(
          (variant) => String(variant.attributes.product_id) === product.id,
        )
        .map((variant) => {
          // Check if the variant has a corresponding plan in the database
          const hasCorrespondingPlanInDB = planVariantIdsInDB.includes(
            variant.id,
          );
          // Add an attribute to each variant for this
          return { ...variant, hasCorrespondingPlanInDB };
        });

      // Note: It's not clear how hasPlanInDatabase was intended to be used on the product level,
      // since its relevance seems more suited to individual variants. Hence, it's implemented at the variant level above.

      return {
        ...product,
        variants: productVariants,
      };
    });

    return productsWithVariants;
  }),
});
