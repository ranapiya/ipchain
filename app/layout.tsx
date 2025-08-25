import React, { ReactNode } from "react";
import { Manrope, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Providers from "./providers";
import { Metadata } from "next";
import PoweredByLogo from "@/modules/ui/PoweredByLogo";

// Font configs
const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "IPChain - Tokenize Your Intellectual Property",
  description:
    "Professional IP tokenization and management platform on Andromeda blockchain",
};

interface Props {
  children?: ReactNode;
}

const RootLayout = async (props: Props) => {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} dark`}
    >
      <body className="antialiased">
        <Providers>
          {children}
          <PoweredByLogo />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
