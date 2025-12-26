import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function EnglishHome() {
  return (
    <>
      {/* HERO */}
      <section className="mb-28">
        <h1 className="text-4xl font-bold">Guilherme Guido</h1>

        <p className="text-xl text-zinc-400 mt-3">
          Data Analyst | Power BI | SQL | Snowflake | Analytics & Automation
        </p>

        <p className="mt-6 max-w-3xl text-zinc-400">
          Data Analyst with solid experience in operational analytics,
          Business Intelligence, and process automation. I work transforming
          large volumes of data into strategic insights used by executive and
          leadership teams.
        </p>
      </section>

      {/* ABOUT */}
      <Section title="About Me">
        <p className="text-zinc-400 max-w-4xl leading-relaxed">
          I am a Senior Operations Analyst at Zig The Global Funtech, with a
          strong focus on data analysis, BI, and automation. I have experience
          integrating data from ClickUp, Snowflake, and AWS RDS, contributing to
          the design of analytical data models and the development of
          management-level dashboards in Power BI.
          <br />
          <br />
          I have a strong analytical mindset, clear communication skills, and a
          results-driven approach, supporting strategic decision-making and
          operational risk mitigation. I am currently pursuing a Postgraduate
          degree in Data Analytics at FIAP.
        </p>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Professional Experience">
        <div className="space-y-6 text-zinc-400 max-w-4xl">
          <div>
            <h3 className="font-semibold text-zinc-200">
              Zig The Global Funtech — Senior Operations Analyst
            </h3>
            <p className="text-sm text-zinc-500 mb-2">
              Mar 2023 – Present
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Managed and analyzed operational data using ClickUp, supporting
                strategic decisions for large-scale projects.
              </li>
              <li>
                Built over 20 management dashboards in Power BI for Operations,
                Finance, and Executive teams.
              </li>
              <li>
                Automated manual processes, reducing reporting time by more
                than 60%.
              </li>
              <li>
                Identified operational risks through predictive analysis,
                contributing to a 25% reduction in operational failures.
              </li>
              <li>
                Actively participated in the design and modeling of Snowflake
                data structures for Power BI consumption.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-200">
              Banco Safra — Front-End Development Intern
            </h3>
            <p className="text-sm text-zinc-500 mb-2">
              Sep 2021 – Dec 2022
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Developed and maintained the SafraPay system using Angular 8,
                JavaScript, and MongoDB.
              </li>
              <li>
                Delivered new features focused on performance and usability.
              </li>
              <li>
                Integrated and consumed RESTful APIs to display real-time data.
              </li>
              <li>
                Worked in Scrum sprints with continuous delivery cycles.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Featured Projects">
        <div className="grid gap-6 max-w-4xl">
          <ProjectCard
            title="Operational BI Platform"
            description="Development of management dashboards in Power BI to monitor operational, financial, and strategic KPIs."
            tech="Power BI • DAX • SQL • Snowflake"
          />

          <ProjectCard
            title="Automated Data Pipeline"
            description="Creation of automated pipelines for API data extraction, transformation, and continuous BI updates."
            tech="Python • APIs • AWS RDS • ClickUp"
          />

          <ProjectCard
            title="Operational Risk Analysis"
            description="Predictive analysis and risk indicators to reduce operational failures in large-scale projects."
            tech="Power BI • SQL • Data Modeling"
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Technical Skills">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-400 max-w-4xl">
          <li>Power BI (Advanced DAX)</li>
          <li>SQL (Snowflake, SQL Server, MySQL)</li>
          <li>Python (ETL, APIs)</li>
          <li>Apache Spark</li>
          <li>ClickUp (Data & Automation)</li>
          <li>AWS & Azure</li>
          <li>Angular & React</li>
          <li>MongoDB</li>
          <li>Agile Methodologies (Scrum, OKRs)</li>
          <li>Make & n8n</li>
          <li>GPT, Claude & Codex</li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <p className="text-zinc-400">
          📧 gui.guido03@gmail.com <br />
          📍 São Paulo, Brazil <br />
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
