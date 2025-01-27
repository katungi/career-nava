'use client';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import '~/styles/globals.css';

import { Inter } from 'next/font/google';
import NextTopLoader from "~/components/loaders/NextTopLoader";
import { Suspense } from 'react';
import { AppShell } from '~/components/patterns/app-shell';
import Providers from '~/components/providers';
import { Toaster } from '~/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NextTopLoader />
        {/* <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="beforeInteractive"
        /> */}
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
