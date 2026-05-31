import Link from 'next/link';
import { projects } from '../../lib/projects';

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-slate-100">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-20 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projets</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Travaux récents
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Une sélection de projets présentée de manière claire et professionnelle. Cliquez pour accéder à chaque fiche projet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-[2rem] border border-slate-800/70 bg-slate-950/70 p-8 shadow-[0_0_45px_rgba(15,23,42,0.35)] transition hover:border-cyan-400/40 hover:bg-slate-900/80"
            >
              <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 uppercase tracking-[0.22em] text-cyan-300">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-4 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projets/${project.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
              >
                Voir le projet <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
