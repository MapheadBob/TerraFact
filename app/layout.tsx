import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraFact",
  description: "General multiple-choice geography trivia game.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
