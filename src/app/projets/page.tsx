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
    <div className="flex flex-col gap-8">
      {/* Header */}
      <header className="mb-2">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Project Directory
        </h1>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
          Explore the complete portfolio of cybersecurity audits, development tools, and data visualizations. Use the filters below to navigate by category.
        </p>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? 'bg-slate-800 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.3, 
                delay: i * 0.05,
              }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
              >
                <div className="dashboard-card h-full flex flex-col overflow-hidden group border border-slate-200 bg-white">
                  
                  {/* Card Header with Icon */}
                  <div className="p-6 pb-4 flex justify-between items-start border-b border-slate-50 bg-slate-50/50">
                    <div 
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: project.color }}
                    >
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p 
                      className="text-[11px] font-bold uppercase tracking-wider mb-2"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </p>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-500 line-clamp-3 mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded bg-slate-50 border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
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
