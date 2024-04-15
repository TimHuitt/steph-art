import type { Metadata } from "next";
import "./globals.css";
import { WindowProvider } from '@/app/windowContext'

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
    <WindowProvider>
      <html lang="en">
          <body className="max-h-screen overflow-hidden">{children}</body>
      </html>
    </WindowProvider>
  );
}
