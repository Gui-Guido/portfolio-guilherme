export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Guilherme Guido</span>

        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600">Sobre</a>
          <a href="#projects" className="hover:text-blue-600">Projetos</a>
          <a
            href="https://www.linkedin.com/in/gui-guido/"
            target="_blank"
            className="hover:text-blue-600"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
