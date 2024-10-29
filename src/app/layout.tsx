import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "keen-slider/keen-slider.min.css";
import "./globals.scss";
import { getServerSession } from "next-auth";
import RootLayoutClient from "./layout.client";
import SessionProvider from "@/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BekMovie",
  description: "Welcome of movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <RootLayoutClient>{children}</RootLayoutClient>
        </SessionProvider>
      </body>
    </html>
  );
}
