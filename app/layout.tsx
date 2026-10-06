import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Veterans Matter",
  description:
    "A landing page connecting veterans, military families, and caregivers to resources and support.",
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
