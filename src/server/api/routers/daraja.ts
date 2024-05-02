import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type MpesaStkRequestBody } from "~/types";
import { z } from "zod";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "~/server/db";
import { toast } from "sonner";
import { getServerAuthSession } from "~/server/auth";

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  return `https://rnyss-196-201-218-201.a.free.pinggy.link${path}`;
}


type MpesaApiResponseToken = {
  access_token: string;
  expires_in: string;
};
const generateTimestamp = () => {
  const date = new Date();
  const timestamp = `${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}${date
      .getHours()
      .toString()
      .padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}${date
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
  return timestamp;
};
const getToken = async () => {
  const consumerKey = process.env.CONSUMER_KEY!;
  const consumerSecret = process.env.CONSUMER_SECRET!;
  const url = process.env.GENERATETOKENURL!;

  const encodedCredentials = Buffer.from(
    `${consumerKey}:${consumerSecret}`,
  ).toString("base64");
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  if (response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await response.json();
    return res as MpesaApiResponseToken;
  }
};
export const mpesaPaymentRouter = createTRPCRouter({
  getToken: publicProcedure.query(async () => {
    const response = await getToken();
    return response;
  }),
  stkPush: publicProcedure
    .input(z.object({
      amount: z.string(),
      phoneNumber: z.string(),
      FormData: z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        mentorId: z.string(),
        meetingLink: z.string(),
      })
    }))
    .mutation(async ({ input }) => {
      const session = await getServerAuthSession();
      const url = process.env.STKPUSHURL!;
      const passkey = process.env.PASSKEY!;
      const shortcode = process.env.SHORTCODE!;

      const timestamp = generateTimestamp();
      const stk_password = Buffer.from(
        `${shortcode}${passkey}${timestamp}`,
      ).toString("base64");
      const requestBody: MpesaStkRequestBody = {
        BusinessShortCode: shortcode,
        Password: stk_password,
        Timestamp: timestamp,
        TransactionType: "CustomerBuyGoodsOnline",
        Amount: input.amount,
        PartyA: input.phoneNumber,
        PartyB: shortcode,
        PhoneNumber: input.phoneNumber,
        CallBackURL: absoluteUrl("/api/callback"),
        AccountReference: "account",
        TransactionDesc: "test",
      };
      const token = await getToken();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token?.access_token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        console.log(response.statusText);
        console.log(response.json());

        return Response.json("An error occurred", {
          status: response.status,
        });
      }
      if (response.ok) {
        const dbSession = await db.bookingSession.create({
          data: {
            title: input.FormData.title,
            description: input.FormData.description,
            startTime: new Date(input.FormData.startTime),
            endTime: new Date(input.FormData.endTime),
            // mentorId: input.FormData.mentorId,
            // menteeId: session?.user?.id!,
            paymentStatus: "pending",
            status: "pending",
            mentor: {
              connect: {
                id: input.FormData.mentorId,
              },
            },
            mentee: {
              connect: {
                id: session?.user.id,
              },
            }
          }
        })

        console.log(dbSession)
        return NextResponse.json("sucess", {
          status: response.status,
        });
      }
    }),
});
