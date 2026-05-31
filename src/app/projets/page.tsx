'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../lib/projects';

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
    <div className="flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col gap-3"
      >
        <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Travaux récents
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Exploration de mes projets en cybersécurité, développement et data.
          Utilisez les filtres ci-dessous pour affiner votre recherche.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
              filter === cat
                ? 'border border-cyan-400/50 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                : 'border border-slate-700/50 bg-slate-800/40 text-slate-400 hover:border-slate-600 hover:bg-slate-700/50 hover:text-slate-200'
            }`}
          >
            {cat === 'all' ? 'Tous les projets' : cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ 
                duration: 0.4, 
                delay: i * 0.05,
                layout: { type: 'spring', bounce: 0.1, duration: 0.6 }
              }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="block h-full outline-none ring-cyan-400/50 focus-visible:ring-2 rounded-2xl"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/20 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-800/40 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] sm:p-8">
                  {/* Subtle Glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 80% 0%, ${project.color}15, transparent 50%)`,
                    }}
                  />

                  {/* Top line accent */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/50 text-2xl shadow-inner ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: project.color }}
                      >
                        {project.icon}
                      </div>
                      <span className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <div className="mt-6">
                      <p 
                        className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </p>
                      <h2 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-white">
                        {project.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-900/50 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-400 ring-1 ring-inset ring-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="rounded-md bg-slate-900/50 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-500 ring-1 ring-inset ring-slate-700/50">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: project.color }}>
                        Explorer 
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
