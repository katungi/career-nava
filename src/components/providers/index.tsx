"use client";

import React, { useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import PlausibleProvider from "next-plausible";
import { TRPCReactProvider } from "~/trpc/react";
import { env } from "~/env.mjs";
import { useSearchParams } from "next/navigation";
import { ThemeProvider } from "./theme-provider";
import * as Sentry from "@sentry/nextjs";
import { TooltipProvider } from "~/components/ui/tooltip";
import ClientProvider from "./client-provider";
import { WebSocketProvider } from 'next-ws/client';

const Identification = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const user = session?.user;

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
                <TooltipProvider>
                  <Identification>{children}</Identification>
                </TooltipProvider>
              </ClientProvider>
          </PlausibleProvider>
        </SessionProvider>
      </TRPCReactProvider>
    </ThemeProvider >
  );
};

export default Providers;
