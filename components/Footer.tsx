export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-zinc-500 text-center">
        © {new Date().getFullYear()} Guilherme Guido • All rights reserved
      </div>
    </footer>
  );
}
