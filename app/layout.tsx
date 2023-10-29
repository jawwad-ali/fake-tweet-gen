import { Providers } from "@/redux/provider";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake tweet Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="max-w-full mx-5 lg:mx-auto lg:max-w-7xl mt-14">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
