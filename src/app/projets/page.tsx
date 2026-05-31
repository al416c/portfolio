'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProjetsPage() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-slate-100">
      <Navbar />

      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.04),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-28 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-4"
        >
          <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan-300">
              Projets
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Travaux récents
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Une sélection de projets en cybersécurité, développement et data.
            Cliquez pour explorer chaque réalisation en détail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === cat
                  ? 'border border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                  : 'border border-slate-700/40 bg-slate-800/30 text-slate-400 hover:border-slate-600/60 hover:text-slate-300'
              }`}
            >
              {cat === 'all' ? 'Tous' : cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/projets/${project.slug}`}
                  className="block h-full"
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-slate-700/80 hover:shadow-[0_0_45px_rgba(15,23,42,0.5)]">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${project.color}18, transparent 70%)`,
                      }}
                    />

                    {/* Top border glow */}
                    <div
                      className="absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{project.icon}</span>
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {project.year}
                        </span>
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">
                        {project.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-slate-400">
                        {project.description}
                      </p>
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
                      <div className="mt-6 flex translate-y-2 items-center gap-2 text-sm text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Voir le projet{' '}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
