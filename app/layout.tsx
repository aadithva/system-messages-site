import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "System Messages — Microsoft Copilot Design Spec",
  description:
    "Classification framework for non-conversational messages in the Microsoft Copilot chat surface",
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
