import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Guilherme Guido | Data Analyst",
  description:
    "Analista de Dados especializado em Power BI, SQL, Snowflake e automação de processos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-14">
          {children}
        </main>
      </body>
    </html>
  );
}
