import "../globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Guilherme Guido | Data Analyst",
  description:
    "Data Analyst specialized in Power BI, SQL, Snowflake and process automation.",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-14">
          {children}
        </main>
      </body>
    </html>
  );
}
