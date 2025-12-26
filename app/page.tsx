import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mb-28">
        <h1 className="text-4xl font-bold">Guilherme Guido</h1>

        <p className="text-xl text-zinc-400 mt-3">
          Data Analyst | Power BI | SQL | Snowflake | Analytics & Automation
        </p>

        <p className="mt-6 max-w-3xl text-zinc-400">
          Analista de Dados com sólida experiência em análise operacional,
          Business Intelligence e automação de processos. Atuo transformando
          grandes volumes de dados em insights estratégicos utilizados por áreas
          executivas e diretoria.
        </p>
      </section>

      {/* ABOUT */}
      <Section title="Sobre Mim">
        <p className="text-zinc-400 max-w-4xl leading-relaxed">
          Sou Analista de Operações Sênior na Zig The Global Funtech, com forte
          atuação em análise de dados, BI e automação. Tenho experiência na
          integração de dados provenientes do ClickUp, Snowflake e AWS RDS,
          participando da estruturação de bases analíticas e desenvolvimento de
          dashboards gerenciais em Power BI.
          <br />
          <br />
          Possuo perfil analítico, comunicação clara e foco em geração de
          insights acionáveis, apoiando decisões estratégicas e mitigação de
          riscos operacionais. Atualmente curso Pós-Graduação em Data Analytics
          pela FIAP.
        </p>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experiência Profissional">
        <div className="space-y-6 text-zinc-400 max-w-4xl">
          <div>
            <h3 className="font-semibold text-zinc-200">
              Zig The Global Funtech — Analista de Operações Sênior
            </h3>
            <p className="text-sm text-zinc-500 mb-2">Mar/2023 – Atual</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Gestão e análise de dados operacionais utilizando ClickUp,
                apoiando decisões estratégicas em projetos de grande porte.
              </li>
              <li>
                Criação de mais de 20 dashboards gerenciais em Power BI para
                Operações, Financeiro e Diretoria.
              </li>
              <li>
                Automatização de processos manuais, reduzindo o tempo de geração
                de relatórios em mais de 60%.
              </li>
              <li>
                Identificação de riscos operacionais por meio de análises
                preditivas, reduzindo falhas operacionais em 25%.
              </li>
              <li>
                Participação ativa na estruturação e modelagem de dados em
                Snowflake para consumo no Power BI.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-200">
              Banco Safra — Estagiário de Desenvolvimento Front-End
            </h3>
            <p className="text-sm text-zinc-500 mb-2">Set/2021 – Dez/2022</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Desenvolvimento e manutenção do sistema SafraPay utilizando
                Angular 8, JavaScript e MongoDB.
              </li>
              <li>
                Implementação de novas funcionalidades com foco em performance e
                usabilidade.
              </li>
              <li>
                Integração e consumo de APIs RESTful para exibição de dados em
                tempo real.
              </li>
              <li>
                Atuação em sprints Scrum com entregas contínuas.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Projetos em Destaque">
        <div className="grid gap-6 max-w-4xl">
          <ProjectCard
            title="Plataforma de BI Operacional"
            description="Desenvolvimento de dashboards gerenciais em Power BI para monitoramento operacional, financeiro e indicadores estratégicos."
            tech="Power BI • DAX • SQL • Snowflake"
          />

          <ProjectCard
            title="Automação de Pipeline de Dados"
            description="Criação de pipelines automatizados para extração de dados via API, tratamento e atualização contínua de dashboards."
            tech="Python • APIs • AWS RDS • ClickUp"
          />

          <ProjectCard
            title="Análise de Riscos Operacionais"
            description="Análises preditivas e indicadores de risco para redução de falhas operacionais em projetos de grande escala."
            tech="Power BI • SQL • Modelagem de Dados"
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Competências Técnicas">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-400 max-w-4xl">
          <li>Power BI (DAX avançado)</li>
          <li>SQL (Snowflake, SQL Server, MySQL)</li>
          <li>Python (ETL, APIs)</li>
          <li>Apache Spark</li>
          <li>ClickUp (Automações & Dados)</li>
          <li>AWS & Azure</li>
          <li>Angular & React</li>
          <li>MongoDB</li>
          <li>Metodologias Ágeis (Scrum, OKR)</li>
          <li>Make & n8n</li>
          <li>GPT, Claude & Codex</li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section title="Contato">
        <p className="text-zinc-400">
          📧 gui.guido03@gmail.com <br />
          📍 São Paulo – SP <br />
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/guilherme-guido-b06623163/"
            className="underline"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </Section>
    </>
  );
}
