import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guilherme Guido | Data & Operations Analyst",
  description:
    "Portfolio of Guilherme Guido – Data Analysis, Power BI, ClickUp, Snowflake, Automation and BI projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
