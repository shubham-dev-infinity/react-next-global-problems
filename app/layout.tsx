import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalRenderer } from "@/components/modals/core/modal-renderer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React/Next Global Problem Solving",
  description: "This repo is created to solve common global react or next problems like modals , notifications , dialogues etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <ModalRenderer />
    </html>
  );
}
