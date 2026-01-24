import "../globals.css";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Guilherme Araujo Guido | Senior Analytics Engineer",
  description:
    "Senior Analytics Engineer focused on AWS, PySpark, data quality, and BI.",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="bg-zinc-950">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
