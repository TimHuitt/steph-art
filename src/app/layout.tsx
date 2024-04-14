import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Art by Steph Huitt",
  description: "Steph Huitt - Illustration, Painting, Sculpts, and More!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} bg-purple-100 overflow-auto`}>
        {children}
      </body>
    </html>
  );
}
