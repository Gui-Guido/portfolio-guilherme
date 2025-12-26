export default function Hero() {
  return (
    <section className="py-28 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Data & Operations Analyst
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
        Transformo dados em decisões estratégicas usando Power BI,
        Snowflake, SQL, Python e automação de processos.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Ver Projetos
        </a>

        <a
          href="https://www.linkedin.com/in/gui-guido/"
          target="_blank"
          className="px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
