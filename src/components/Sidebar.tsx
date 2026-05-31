'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../lib/projects';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsOpen(false);
      else setIsOpen(true);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-4 top-4 z-50 rounded-lg border border-slate-700/50 bg-slate-900/80 p-2.5 text-slate-300 backdrop-blur-md transition-colors hover:bg-slate-800"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 280 : isMobile ? 0 : 80,
          x: isMobile && !isOpen ? -280 : 0
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-800/60 bg-[#0a0f1a]/95 backdrop-blur-xl overflow-hidden ${
          !isOpen && !isMobile ? 'items-center' : ''
        }`}
      >
        <div className="flex h-20 shrink-0 items-center px-6">
          {(!isMobile || isOpen) && (
            <Link href="/" className="group flex items-center gap-3 whitespace-nowrap">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-transform group-hover:scale-105">
                AM
              </div>
              <span className={`text-lg font-semibold tracking-wide text-white transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                Portfolio
              </span>
            </Link>
          )}
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide py-6">
          <nav className="flex flex-col gap-6 px-4">
            {/* Global Navigation */}
            <div>
              {isOpen && (
                <p className="mb-3 ml-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Navigation
                </p>
              )}
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-200"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'}`}>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projets"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      pathname === '/projets' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'}`}>Tous les projets</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects List */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4"
              >
                {Object.entries(groupedProjects).map(([category, items]) => (
                  <div key={category} className="mb-6">
                    <p className="mb-3 ml-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {category}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {items.map((project) => {
                        const isActive = pathname === `/projets/${project.slug}`;
                        return (
                          <li key={project.slug}>
                            <Link
                              href={`/projets/${project.slug}`}
                              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                isActive
                                  ? 'bg-slate-800/60 text-white shadow-sm'
                                  : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
                              }`}
                            >
                              <span 
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] transition-transform group-hover:scale-110 ${
                                  isActive ? 'opacity-100' : 'opacity-70'
                                }`}
                                style={{ backgroundColor: `${project.color}15`, color: project.color }}
                              >
                                {project.icon}
                              </span>
                              <span className="truncate whitespace-nowrap">{project.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </nav>
        </div>
        
        {/* Desktop Collapse Toggle */}
        {!isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-14 shrink-0 items-center justify-center border-t border-slate-800/60 text-slate-500 transition-colors hover:bg-slate-800/30 hover:text-slate-300"
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        )}
      </motion.aside>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
