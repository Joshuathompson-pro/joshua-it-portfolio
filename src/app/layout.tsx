import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua | IT Portfolio",
  description: "Joshua's portfolio of practical IT systems, support, networking, and security projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
