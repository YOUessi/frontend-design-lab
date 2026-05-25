export default function ProjectCard({ project, onOpen }) {
  const canOpen = Boolean(project.route);

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="h-48 p-4" style={{ background: project.cover }}>
        <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-white/20 bg-black/10 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-black text-white">
              {project.category}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-black ${
              project.status === "Done" ? "bg-emerald-400 text-emerald-950" : "bg-white/85 text-neutral-900"
            }`}>
              {project.status}
            </span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              {project.location}
            </p>
            <h3 className="mt-1 text-2xl font-black tracking-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-20 text-sm font-medium leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-bold text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <button
          onClick={() => canOpen && onOpen(project.route)}
          disabled={!canOpen}
          className={`mt-6 w-full rounded-2xl px-5 py-3 text-sm font-black transition ${
            canOpen
              ? "bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-amber-100"
              : "cursor-not-allowed bg-white/10 text-slate-500"
          }`}
        >
          {canOpen ? "Open live preview" : "Coming soon"}
        </button>
      </div>
    </article>
  );
}
