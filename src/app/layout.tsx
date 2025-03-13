"use client";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Script from "next/script";
import { Suspense } from "react";
import { AppShell } from "~/components/patterns/app-shell";
import Providers from "~/components/providers";

import { TailwindIndicator } from "~/components/patterns/tailwind-indicator";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="beforeInteractive"
        />
        <Suspense>
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </Suspense>
        <Toaster />
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  );
}
