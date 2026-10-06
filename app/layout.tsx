import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Veterans Matter",
  description:
    "Connecting veterans, transitioning service members, military families, and caregivers with trusted resources nationwide.",
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
