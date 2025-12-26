export default function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string;
}) {
  return (
    <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-zinc-400 mt-2">{description}</p>
      <p className="text-sm text-zinc-500 mt-3">{tech}</p>
    </div>
  );
}
