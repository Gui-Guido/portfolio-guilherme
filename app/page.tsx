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

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Resumo", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" },
  ];

  const contactItems: ContactItem[] = [
    {
      label: "Email",
      value: "gui.guido03@gmail.com",
      href: "mailto:gui.guido03@gmail.com",
      icon: Mail,
    },
    {
      label: "Telefone",
      value: "(11) 97037-6742",
      href: "tel:+5511970376742",
      icon: Phone,
    },
    {
      label: "Local",
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
      title: "Arquitetura AWS e Big Data",
      description:
        "S3, Redshift, Glue, Lambda, Firehose e Step Functions para operações críticas.",
      icon: Cloud,
    },
    {
      title: "Pipelines Escaláveis",
      description:
        "ETL/ELT com Python e PySpark, orquestração via Docker e práticas de Clean Code.",
      icon: Database,
    },
    {
      title: "Data Quality & Segurança",
      description:
        "Monitoramento contínuo, SLAs, IAM e criptografia para dados confiáveis.",
      icon: ShieldCheck,
    },
    {
      title: "BI Estratégico",
      description:
        "Power BI e Metabase para visões executivas e análise preditiva de riscos.",
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
      title: "Linguagens",
      icon: Code2,
      items: ["Python", "SQL (T-SQL, PostgreSQL)", ".NET Core"],
    },
    {
      title: "BI & Visualização",
      icon: BarChart3,
      items: ["Power BI", "Metabase", "Data Visualization"],
    },
    {
      title: "DevOps & Ferramentas",
      icon: Wrench,
      items: ["Docker", "Git/GitLab", "Jenkins", "CI/CD", "Jira", "Linux"],
    },
    {
      title: "Conceitos",
      icon: Sparkles,
      items: [
        "Data Science",
        "Estatística",
        "FinOps",
        "Data Quality",
        "Observabilidade",
        "OKRs",
      ],
    },
  ];

  const experiences: Experience[] = [
    {
      company: "Zig. The Global Funtech",
      role: "Analytics Engineer Sênior",
      period: "Jul 2024 - Presente",
      bullets: [
        "Liderança no design e manutenção de pipelines de dados escaláveis (ETL/ELT) com Python e PySpark.",
        "Sustentação da arquitetura cloud com Redshift, Lambda, Firehose e Step Functions, orquestrada via Docker.",
        "Rotinas de Data Quality e observabilidade para assegurar consistência e SLAs críticos.",
        "Camadas de segurança com criptografia e controle de acesso via IAM.",
        "Cultura data-driven: dashboards em Power BI/Metabase e análise preditiva de riscos.",
        "Foco em FinOps, performance e mentoria de boas práticas (GitLab e documentação técnica).",
      ],
    },
    {
      company: "Zig. The Global Funtech",
      role: "Analytics Engineer",
      period: "Out 2023 - Jun 2024",
      bullets: [
        "Implementação e manutenção de pipelines de dados robustos com Python e PySpark.",
        "Estruturação de dados em ambiente AWS visando performance e escalabilidade.",
        "Dashboards estratégicos em Power BI e Metabase para áreas de negócio.",
        "Análises preditivas para antecipação de riscos operacionais.",
      ],
    },
    {
      company: "Zig. The Global Funtech",
      role: "Analista de Processos Júnior",
      period: "Mar 2023 - Out 2023",
      bullets: [
        "Gestão de pesquisas de satisfação e análise de dados para melhorias contínuas.",
        "Automação de processos com Power Automate e ClickUp, reduzindo tarefas manuais.",
        "Desenvolvimento de CRM interno sob medida para a operação.",
        "Redesenho de processos ponta a ponta com foco em agilidade e eficiência.",
      ],
    },
    {
      company: "Banco Safra SA",
      role: "Desenvolvedor Front-end (Estagiário)",
      period: "Set 2021 - Dez 2022",
      bullets: [
        "Modernização de funcionalidades com Angular e .NET Core seguindo Clean Code.",
        "Versionamento com Git e GitLab, com domínio de Git Bash para CLI.",
        "Gestão de CI/CD via Jenkins com foco em deploys consistentes.",
        "Consumo de APIs RESTful e integração com MongoDB.",
        "Atuação em squads Scrum com gestão de tarefas via Jira.",
      ],
    },
    {
      company: "Ka Solution",
      role: "Suporte e Infraestrutura (Estagiário)",
      period: "Mar 2020 - Set 2021",
      bullets: [
        "Atendimento N1 e N2 com suporte remoto via AnyDesk.",
        "Gestão de chamados pelo GLPI com cumprimento de SLA de 3 horas.",
        "Administração de servidores Windows Server e Linux (Ubuntu).",
        "Manutenção de redes, VPN e ambientes virtualizados personalizados.",
      ],
    },
  ];

  const education: Education[] = [
    {
      title: "Pós-Graduação em Data Analytics",
      institution: "FIAP",
      period: "Previsão: 06/2026",
    },
    {
      title: "Bacharelado em Ciências da Computação",
      institution: "Universidade Paulista - UNIP",
      period: "Concluído: 06/2024",
    },
  ];

  const certifications: string[] = [
    "Gestão e Governança na Prática: Cobit, Scrum, ITIL e PMBOK | Ka Solution (2025)",
    "Fundamento de Gestão de Projetos | United Latino Students Association (2024)",
    "Lean Six Sigma White Belt Certification | United Latino Students Association (2024)",
    "Lean Six Sigma Yellow Belt | United Latino Students Association (2024)",
    "AWS Cloud Practitioner Foundational | Udemy (2022)",
    "Programação em Python do Básico ao Avançado | Udemy (2022)",
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-900 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pb-20">
        <section id="home" className="px-6 pt-20 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-wider text-emerald-400">
                <Sparkles className="w-4 h-4" />
                Disponível para novas oportunidades
              </div>

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
                  Analytics Engineer Sênior
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Guilherme Araujo Guido
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                  Analytics Engineer Sênior com sólida trajetória em engenharia de dados,
                  desenvolvimento e eficiência operacional. Especialista em arquitetura
                  cloud (AWS) e pipelines escaláveis com Python e PySpark, focado em
                  Data Quality, segurança e orquestração via Docker.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Fale comigo
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
                  href="#experiencia"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-500 transition hover:text-zinc-300"
                >
                  Ver experiência
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
                  Contato
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
                  Focos estratégicos
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

        <section id="sobre" className="px-6 py-24 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionTitle label="Resumo" title="Resumo Profissional" />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 backdrop-blur">
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Experiência comprovada em liderar a transição para culturas data-driven,
                integrando práticas de Clean Code e automação de processos para otimizar
                custos e acelerar a tomada de decisão estratégica. Atuação próxima a
                stakeholders para transformar desafios de negócio em soluções de dados
                seguras, confiáveis e escaláveis.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Cultura Data-Driven
                  </p>
                  <p className="text-sm text-zinc-400">
                    Integração de dados e métricas para decisões rápidas e alinhadas
                    ao negócio.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Governança & Qualidade
                  </p>
                  <p className="text-sm text-zinc-400">
                    Observabilidade, SLAs e consistência para dados confiáveis.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">
                    Eficiência & FinOps
                  </p>
                  <p className="text-sm text-zinc-400">
                    Otimização de custos e performance em cloud com foco em impacto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Expertise" title="Habilidades Técnicas" />

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

        <section id="experiencia" className="px-6 py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Carreira" title="Experiência Profissional" />

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

        <section id="formacao" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Educação" title="Formação e Certificações" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Formação Acadêmica
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4"
                    >
                      <p className="font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-zinc-400">
                        {item.institution}
                      </p>
                      <p className="text-xs text-zinc-600 mt-1">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Cursos e Certificações
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

        <section id="contato" className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 px-8 py-12 md:px-14 text-center backdrop-blur">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Vamos conversar?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                Estou aberto a novos projetos e oportunidades em dados, analytics e
                engenharia. Vamos construir algo relevante juntos.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:gui.guido03@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <Mail className="w-4 h-4" />
                  Enviar email
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

      <footer className="px-6 py-8 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Guilherme Araujo Guido. Todos os direitos reservados.
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
