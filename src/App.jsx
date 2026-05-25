import { useMemo, useState } from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import { projectCategories, projects } from "./data/projects.js";
import PotlerCafe from "./projects/potler-cafe/PotlerCafe.jsx";

export default function App() {
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("home");

  const filteredProjects = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((project) => project.category === category);
  }, [category]);

  if (view === "potler") {
    return <PotlerCafe onBack={() => setView("home")} />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b10] text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-amber-500/12 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[30%] h-[32rem] w-[32rem] rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#080b10]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <div>
            <div className="text-xl font-black tracking-tight">Frontend Design Lab</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
              You Tang · UI Portfolio
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#categories" className="transition hover:text-white">Categories</a>
            <a href="https://github.com/YOuess/frontend-design-lab" className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white hover:text-slate-950">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-100">
                React · Vite · Tailwind CSS
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                A curated lab for modern frontend interface design.
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-300">
                This portfolio collects restaurant websites, café websites, AI product dashboards, landing pages and web application prototypes.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-100">
                  Explore projects
                </a>
                <button onClick={() => setView("potler")} className="rounded-full border border-white/15 bg-white/[0.055] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  View POTLER demo
                </button>
              </div>
            </div>

            <div className="relative min-h-[520px] rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.12),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(245,158,11,.12),transparent_34%)]" />
              <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">Selected Work</div>
                  <div className="mt-2 text-3xl font-black tracking-tight">POTLER Cafe Website</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[2rem] bg-[linear-gradient(135deg,#f5e8d2,#c79564)] p-5 text-[#35251f]">
                    <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-black">Restaurant & Cafe</div>
                    <div className="mt-24 text-4xl font-black tracking-tight">S’more Café</div>
                    <p className="mt-3 text-sm font-bold text-[#604535]">Multilingual menu and reservation experience.</p>
                  </div>

                  <div className="rounded-[2rem] bg-[#3b2a23] p-5">
                    <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#35251f]">Set Menu</div>
                    <div className="mt-8 space-y-4">
                      {["A Set · 8.9", "B Set · 9.9", "C Set · 12.0"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-black">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["UI", "Cafe", "Booking"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-center text-sm font-black text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="border-y border-white/10 bg-white/[0.035] py-8">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 lg:px-8">
            {projectCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${
                  category === item
                    ? "bg-white text-slate-950"
                    : "border border-white/10 bg-white/[0.045] text-slate-300 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-100/70">Project Gallery</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">UI design works</h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-7 text-slate-400">
              Add new designs by creating a component under <code className="rounded bg-white/10 px-1.5 py-0.5">src/projects</code> and registering it in <code className="rounded bg-white/10 px-1.5 py-0.5">src/data/projects.js</code>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setView} />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm font-bold text-slate-500 lg:px-8">
        Frontend Design Lab · You Tang · Built with React, Vite and Tailwind CSS
      </footer>
    </div>
  );
}
