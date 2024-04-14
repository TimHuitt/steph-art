import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Cabin_Sketch } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Art by Steph Huitt",
  description: "Steph Huitt - Illustration, Painting, ",
};

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});


const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} bg-purple-100`}>{children}</body>
    </html>
  );
}
