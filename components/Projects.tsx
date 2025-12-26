const projects = [
  {
    title: "BI de Eventos e Riscos",
    description:
      "Dashboard em Power BI integrado ao ClickUp e Snowflake para análise de riscos operacionais.",
  },
  {
    title: "Automação de Dados",
    description:
      "Pipelines de dados via API, tratamento em SQL e Python com atualização automática.",
  },
  {
    title: "Análises Avançadas",
    description:
      "Consultas complexas, modelagem e visualização para suporte à tomada de decisão.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
