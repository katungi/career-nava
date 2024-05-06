"use client";

import React, { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import { SessionProvider, useSession } from "next-auth/react";
import PlausibleProvider from "next-plausible";
import { TRPCReactProvider } from "~/trpc/react";
import { env } from "~/env.mjs";
import { useSearchParams } from "next/navigation";
import { ThemeProvider } from "./theme-provider";
import * as Sentry from "@sentry/nextjs";
import { TooltipProvider } from "~/components/ui/tooltip";
import ClientProvider from "./client-provider";

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_API_KEY!, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST!,
  });
}

const Identification = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const posthog = usePostHog();
  const user = session?.user;

  const params = useSearchParams();
  const newLoginState = params.get("loginState");

  if (newLoginState == "signedIn" && session) {
    posthog.identify(user?.id);
  }
  useEffect(() => {
    Sentry.setUser({ id: user?.id, email: user?.email ?? "" });
  }, [user]);

  return <>{children}</>;
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TRPCReactProvider>
        <SessionProvider>
          <PlausibleProvider
            scriptProps={{
              src: env.NEXT_PUBLIC_PLAUSIBLE_SELFHOSTED_URL,
            }}
            domain={env.NEXT_PUBLIC_DEPLOYMENT_URL.replace("https://", "")}
          >
            <ClientProvider>
              <PostHogProvider client={posthog}>
                <TooltipProvider>
                  <Identification>{children}</Identification>
                </TooltipProvider>
              </PostHogProvider>
            </ClientProvider>
          </PlausibleProvider>
        </SessionProvider>
      </TRPCReactProvider>
    </ThemeProvider >
  );
};

export default Providers;
