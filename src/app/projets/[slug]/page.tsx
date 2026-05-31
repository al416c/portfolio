import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../lib/projects';

export default function ProjectPage(props: unknown) {
  const { params } = props as { params: { slug: string } };
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-slate-100">
      <div className="relative mx-auto flex max-w-5xl flex-col px-6 py-20 sm:px-8 lg:px-10">
        <Link
          href="/projets"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          ← Retour à la liste des projets
        </Link>

        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/70 p-10 shadow-[0_0_60px_rgba(15,23,42,0.35)]">
          <div className="flex flex-col gap-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{project.category}</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            </div>
            <span className="rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              {project.year}
            </span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-300">{project.summary}</p>
              <p className="text-slate-400">{project.details}</p>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Technologies</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
