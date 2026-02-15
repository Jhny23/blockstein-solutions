import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockstein Solutions | Strategic Growth for Tech & Modern Brands",
  description: "We help tech companies & modern brands scale through structured branding, strategic distribution, and performance marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
