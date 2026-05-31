'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '../../../lib/projects';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Background ambient glow inside the card */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.color}40, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Breadcrumb / Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Retour
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/60 text-3xl shadow-inner ring-1 ring-white/10"
                style={{ color: project.color }}
              >
                {project.icon}
              </div>
              <div>
                <span 
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                <span className="ml-3 border-l border-slate-700 pl-3 text-xs font-medium text-slate-500">
                  {project.year}
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-200 font-medium">
              {project.summary}
            </p>
            <div className="h-px w-12 bg-slate-800" />
            <p className="text-base leading-loose text-slate-400">
              {project.details}
            </p>
          </motion.div>

          {/* Sidebar Data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Highlights */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Points clés
              </h3>
              <ul className="flex flex-col gap-4">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: project.color, color: project.color }}
                    />
                    <span className="text-sm leading-relaxed text-slate-300">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                    className="rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 border-t border-slate-800/50 pt-10"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Explorer plus
            </h3>
            <Link 
              href="/projets"
              className="text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Voir tout →
            </Link>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((other) => (
                <Link key={other.slug} href={`/projets/${other.slug}`} className="group outline-none rounded-xl">
                  <div className="flex items-center gap-4 rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600/80 hover:bg-slate-800/60 group-focus-visible:ring-2 ring-cyan-400/50">
                    <div 
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950/50 ring-1 ring-white/5 transition-transform group-hover:scale-110"
                      style={{ color: other.color }}
                    >
                      {other.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                        {other.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        {other.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
