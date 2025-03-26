import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/providers";
import "@/globals.css";

export const metadata: Metadata = {
  title: "hi, i'm jack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={GeistSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
