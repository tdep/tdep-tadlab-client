import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import React from "react";
import Header from "@/app/_includes/header";
import Footer from "@/app/_includes/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trevor DePew - TadLab",
  description: "Personal Website",
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
