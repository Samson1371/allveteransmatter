import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Veterans Matter | No Veteran Left Behind",
  description:
    "Connecting veterans, transitioning service members, military families, and caregivers with trusted resources nationwide.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
