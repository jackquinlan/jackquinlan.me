import type React from "react";
import type { Metadata } from "next";

import { GeistMono } from "geist/font/mono";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Jack Quinlan",
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
      <body className={`${GeistMono.variable}`}>{children}</body>
    </html>
  );
}
