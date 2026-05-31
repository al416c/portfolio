'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '../../../lib/projects';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-slate-100">
      <Navbar />

      {/* Background with project color */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${project.color}0a, transparent 40%), radial-gradient(circle at 70% 80%, ${project.color}06, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col px-6 pb-20 pt-28 sm:px-8 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projets"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Retour aux projets
          </Link>
        </motion.div>

        {/* Project Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/70 p-8 backdrop-blur-sm md:p-10"
        >
          {/* Top border glow */}
          <div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            }}
          />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="text-4xl">{project.icon}</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-cyan-300">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">
                {project.title}
              </h1>
            </div>
            <span className="self-start rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              {project.year}
            </span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-300">
                {project.summary}
              </p>
              <p className="leading-relaxed text-slate-400">
                {project.details}
              </p>
            </div>

            <div className="space-y-6">
              {/* Highlights */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">
                  Points clés
                </p>
                <div className="grid gap-3">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-sm text-slate-300">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
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
        </motion.div>

        {/* Other projects navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-slate-500">
            Autres projets
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((other, i) => (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <Link href={`/projets/${other.slug}`} className="block">
                    <div className="group rounded-xl border border-slate-800/60 bg-slate-950/50 p-5 transition-all duration-300 hover:border-slate-700/70 hover:bg-slate-900/50">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{other.icon}</span>
                        <div>
                          <h3 className="font-medium text-white transition-colors group-hover:text-cyan-100">
                            {other.title}
                          </h3>
                          <p className="text-xs text-slate-500">
                            {other.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
