import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Guilherme Guido</span>
        <LanguageToggle />
      </div>
    </header>
  );
}
