import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavPanel from "@/app/_includes/navPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trevor DePew",
  description: "Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
