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
    <div className="flex flex-col max-w-[1000px] mx-auto pb-12">
      
      {/* Top Navigation Bar */}
      <nav className="mb-8 flex items-center justify-between">
        <Link
          href="/projets"
          className="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            &larr;
          </span>
          Back to Projects
        </Link>
        <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
          Status: Completed {project.year}
        </span>
      </nav>

      {/* Main Content Area - Split Layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* Left Column: Hero & Details */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Project Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="dashboard-card p-8 sm:p-10 border-t-4"
            style={{ borderTopColor: project.color }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 shadow-sm border border-slate-100 text-3xl"
                style={{ color: project.color }}
              >
                {project.icon}
              </div>
              <div>
                <span 
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {project.title}
                </h1>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-700 font-medium border-l-4 border-slate-200 pl-4 py-1">
              {project.summary}
            </p>
          </motion.div>

          {/* Project Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="dashboard-card p-8 sm:p-10"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
              Project Description
            </h2>
            <p className="text-base leading-loose text-slate-600">
              {project.details}
            </p>
          </motion.div>

        </div>

        {/* Right Column: Meta Info */}
        <div className="flex flex-col gap-6">
          
          {/* Key Highlights Card */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="dashboard-card p-6"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
              Key Highlights
            </h3>
            <ul className="flex flex-col gap-4">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies Card */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="dashboard-card p-6"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
              Technologies Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
