"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Code2,
  Database,
  Sparkles,
  Linkedin,
  Mail,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Power BI", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
    { name: "Snowflake", icon: Database, color: "from-blue-400 to-cyan-500" },
    { name: "Python", icon: Code2, color: "from-green-400 to-emerald-500" },
    { name: "SQL", icon: Database, color: "from-purple-400 to-pink-500" },
  ];

  const projects = [
    {
      title: "BI de Eventos e Riscos",
      description:
        "Dashboard em Power BI integrado ao ClickUp e Snowflake para análise de riscos operacionais.",
      tags: ["Power BI", "Snowflake", "ClickUp"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Automação de Dados",
      description:
        "Pipelines de dados via API, tratamento em SQL e Python com atualização automática.",
      tags: ["Python", "SQL", "APIs"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Análises Avançadas",
      description:
        "Consultas complexas, modelagem e visualização para suporte à tomada de decisão.",
      tags: ["SQL", "Analytics", "BI"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
              GG
            </div>
            <span className="font-bold text-xl">Guilherme Guido</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400">Início</a>
            <a href="#sobre" className="hover:text-blue-400">Sobre</a>
            <a href="#projetos" className="hover:text-blue-400">Projetos</a>
            <a
              href="https://www.linkedin.com/in/gui-guido/"
              target="_blank"
              className="hover:text-blue-400"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">
              Disponível para novas oportunidades
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Data & Operations
            <br />
            <span className="text-5xl md:text-6xl">Analyst</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10">
            Transformo dados em decisões estratégicas usando Power BI,
            Snowflake, Python e automação de processos.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projetos"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:shadow-lg"
            >
              Ver Projetos
            </a>

            <a
              href="https://www.linkedin.com/in/gui-guido/"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 font-semibold flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Sobre mim</h2>
        <p className="text-lg text-slate-300 leading-relaxed text-center">
          Analista Operacional Júnior na Zig The Global Funtech, com foco em
          análise de dados, dashboards gerenciais, automação e risco
          operacional.
        </p>

        <div className="mt-6 flex justify-center items-center gap-2 text-blue-400">
          <TrendingUp className="w-5 h-5" />
          <span>Foco em crescimento e resultados</span>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-slate-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-full bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-400 border-t border-white/10">
        © 2025 Guilherme Guido • Todos os direitos reservados
      </footer>
    </div>
  );
}
