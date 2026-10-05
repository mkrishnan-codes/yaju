import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edge Sample",
  description: "A tiny static Next.js page for Cloudflare testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
