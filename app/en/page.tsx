"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

const {
  ArrowUpRight,
  BarChart3,
  Cloud,
  Code2,
  Database,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  X,
} = LucideIcons;

interface SectionTitleProps {
  label: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label, title }) => (
  <div className="mb-12">
    <p className="text-xs uppercase tracking-[0.4em] text-emerald-400 mb-3">
      {label}
    </p>
    <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
    <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
  </div>
);

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Highlight {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
}

const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const contactItems: ContactItem[] = [
    {
      label: "Email",
      value: "gui.guido03@gmail.com",
      href: "mailto:gui.guido03@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(11) 97037-6742",
      href: "tel:+5511970376742",
      icon: Phone,
    },
    {
      label: "Location",
      value: "São Paulo, SP",
      icon: MapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/guilherme-araujo-guido",
      href: "https://www.linkedin.com/in/guilherme-araujo-guido",
      icon: Linkedin,
    },
  ];

  const highlights: Highlight[] = [
    {
      title: "AWS & Big Data Architecture",
      description:
        "S3, Redshift, Glue, Lambda, Firehose, and Step Functions for critical operations.",
      icon: Cloud,
    },
    {
      title: "Scalable Pipelines",
      description:
        "ETL/ELT with Python and PySpark, Docker orchestration, and Clean Code practices.",
      icon: Database,
    },
    {
      title: "Data Quality & Security",
      description:
        "Continuous monitoring, SLAs, IAM, and encryption for reliable data.",
      icon: ShieldCheck,
    },
    {
      title: "Strategic BI",
      description:
        "Power BI and Metabase for executive insights and predictive risk analysis.",
      icon: BarChart3,
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      title: "Big Data & Cloud",
      icon: Cloud,
      items: [
        "AWS (S3, Redshift, Glue)",
        "Lambda, Firehose",
        "Step Functions",
        "PySpark",
        "ETL/ELT",
      ],
    },
    {
      title: "Languages",
      icon: Code2,
      items: ["Python", "SQL (T-SQL, PostgreSQL)", ".NET Core"],
    },
    {
      title: "BI & Visualization",
      icon: BarChart3,
      items: ["Power BI", "Metabase", "Data Visualization"],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      items: ["Docker", "Git/GitLab", "Jenkins", "CI/CD", "Jira", "Linux"],
    },
    {
      title: "Concepts",
      icon: Sparkles,
      items: [
        "Data Science",
        "Statistics",
        "FinOps",
        "Data Quality",
        "Observability",
        "OKRs",
      ],
    },
  ];

  const experiences: Experience[] = [
    {
      company: "Zig. The Global Funtech",
      role: "Senior Analytics Engineer",
      period: "Jul 2024 - Present",
      bullets: [
        "Leading the design and maintenance of scalable data pipelines (ETL/ELT) with Python and PySpark.",
        "Sustaining cloud architecture with Redshift, Lambda, Firehose, and Step Functions, orchestrated via Docker.",
        "Data Quality and observability routines to ensure consistency and critical SLAs.",
        "Security layers with encryption and access control via IAM.",
        "Data-driven culture: dashboards in Power BI/Metabase and predictive risk analysis.",
        "Focus on FinOps, performance, and mentoring best practices (GitLab and technical documentation).",
      ],
    },
    {
      company: "Zig. The Global Funtech",
      role: "Analytics Engineer",
      period: "Oct 2023 - Jun 2024",
      bullets: [
        "Implementation and maintenance of robust data pipelines with Python and PySpark.",
        "Data structuring in AWS environment focusing on performance and scalability.",
        "Strategic dashboards in Power BI and Metabase for business areas.",
        "Predictive analyses for anticipating operational risks.",
      ],
    },
    {
      company: "Zig. The Global Funtech",
      role: "Junior Process Analyst",
      period: "Mar 2023 - Oct 2023",
      bullets: [
        "Management of satisfaction surveys and data analysis for continuous improvements.",
        "Process automation with Power Automate and ClickUp, reducing manual tasks.",
        "Development of custom internal CRM for operations.",
        "End-to-end process redesign focused on agility and efficiency.",
      ],
    },
    {
      company: "Banco Safra SA",
      role: "Front-end Developer (Intern)",
      period: "Sep 2021 - Dec 2022",
      bullets: [
        "Modernization of features with Angular and .NET Core following Clean Code.",
        "Version control with Git and GitLab, mastering Git Bash for CLI.",
        "CI/CD management via Jenkins focusing on consistent deployments.",
        "RESTful API consumption and MongoDB integration.",
        "Working in Scrum squads with task management via Jira.",
      ],
    },
    {
      company: "Ka Solution",
      role: "Support & Infrastructure (Intern)",
      period: "Mar 2020 - Sep 2021",
      bullets: [
        "N1 and N2 support with remote assistance via AnyDesk.",
        "Ticket management through GLPI with 3-hour SLA compliance.",
        "Windows Server and Linux (Ubuntu) server administration.",
        "Network maintenance, VPN, and customized virtualized environments.",
      ],
    },
  ];

  const education: Education[] = [
    {
      title: "Postgraduate in Data Analytics",
      institution: "FIAP",
      period: "Expected: 06/2026",
    },
    {
      title: "Bachelor's in Computer Science",
      institution: "Universidade Paulista - UNIP",
      period: "Completed: 06/2024",
    },
  ];

  const certifications: string[] = [
    "Practical Management and Governance: Cobit, Scrum, ITIL and PMBOK | Ka Solution (2025)",
    "Project Management Fundamentals | United Latino Students Association (2024)",
    "Lean Six Sigma White Belt Certification | United Latino Students Association (2024)",
    "Lean Six Sigma Yellow Belt | United Latino Students Association (2024)",
    "AWS Cloud Practitioner Foundational | Udemy (2022)",
    "Python Programming from Basic to Advanced | Udemy (2022)",
    "Querying Data with Transact-SQL - SQL Server | Ka Solution (2021)",
  ];

  const mainStack: string[] = [
    "AWS",
    "PySpark",
    "Python",
    "SQL",
    "Power BI",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-lg">GG</span>
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              Guilherme Guido
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Education",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-900 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pb-20">
        {/* Hero Section */}
        <section id="home" className="px-6 pt-20 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-wider text-emerald-400">
                <Sparkles className="w-4 h-4" />
                Available for new opportunities
              </div>

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
                  Senior Analytics Engineer
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Guilherme Araujo Guido
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                  Senior Analytics Engineer with proven track record in data engineering,
                  development, and operational efficiency. Specialist in cloud architecture
                  (AWS) and scalable pipelines with Python and PySpark, focused on Data
                  Quality, security, and Docker orchestration.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-araujo-guido"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-600 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-500 transition hover:text-zinc-300"
                >
                  View experience
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {mainStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
                  Contact
                </p>
                <div className="space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-zinc-300 hover:text-emerald-400 break-all transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-300">{item.value}</span>
                    );

                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                          <Icon className="h-4 w-4 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-zinc-600">
                            {item.label}
                          </p>
                          <div className="mt-1">{content}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
                  Strategic Focus
                </p>
                <div className="space-y-4">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                          <Icon className="h-4 w-4 text-cyan-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {item.title}
                          </p>
                          <p className="text-sm text-zinc-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-24 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionTitle label="Overview" title="Professional Summary" />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 backdrop-blur">
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Proven experience in leading the transition to data-driven cultures,
                integrating Clean Code practices and process automation to optimize costs
                and accelerate strategic decision-making. Close collaboration with
                stakeholders to transform business challenges into secure, reliable, and
                scalable data solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Data-Driven Culture
                  </p>
                  <p className="text-sm text-zinc-400">
                    Integration of data and metrics for fast, business-aligned decisions.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Governance & Quality
                  </p>
                  <p className="text-sm text-zinc-400">
                    Observability, SLAs, and consistency for reliable data.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Efficiency & FinOps
                  </p>
                  <p className="text-sm text-zinc-400">
                    Cloud cost and performance optimization with focus on impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Expertise" title="Technical Skills" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Career" title="Professional Experience" />

            <div className="space-y-6 border-l-2 border-zinc-800 pl-8">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="relative">
                  <div className="absolute -left-[37px] top-7 h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-zinc-600">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-emerald-400 font-semibold mb-4">
                      {exp.role}
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-emerald-400 mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Learning" title="Education & Certifications" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Academic Education
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4"
                    >
                      <p className="font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-zinc-400">{item.institution}</p>
                      <p className="text-xs text-zinc-600 mt-1">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Courses & Certifications
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {certifications.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 px-8 py-12 md:px-14 text-center backdrop-blur">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Let's talk?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                I'm open to new projects and opportunities in data, analytics, and
                engineering. Let's build something meaningful together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:gui.guido03@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <Mail className="w-4 h-4" />
                  Send email
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-araujo-guido"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-600 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Guilherme Araujo Guido. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:gui.guido03@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-araujo-guido"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
