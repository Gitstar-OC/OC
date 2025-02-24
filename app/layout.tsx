import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });  

export const metadata: Metadata = {
  title: "OC",
  description: "Design and AI Engineer",
  openGraph: {
    title: "OC",
    description: "Design and AI Engineer",
    url: "https://iamoc.me",
    siteName: "OC Portfolio",
    images: [
      {
        url: "https://github.com/gitstar-oc.png",
        width: 800,
        height: 600,
        alt: "OC Profile Picture",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OC",
    description: "Design and AI Engineer",
    creator: "@IamnotOC",
    images: ["https://github.com/gitstar-oc.png"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" enableSystem={true}> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

import "./globals.css";
