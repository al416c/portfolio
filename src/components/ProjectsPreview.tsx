'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../lib/projects';

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-300">
            Missions
          </span>
        </div>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Projets</h2>
          <Link
            href="/projets"
            className="text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            Voir tous →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/projets/${project.slug}`} className="block h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:border-slate-700/80">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color}18, transparent 70%)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <span className="text-3xl">{project.icon}</span>
                    <div className="mt-4 flex gap-2 text-xs uppercase tracking-[0.18em]">
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-cyan-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Voir le projet{' '}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
