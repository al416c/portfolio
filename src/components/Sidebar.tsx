'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { projects } from '../lib/projects';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col border-r border-slate-200 bg-white shadow-[2px_0_10px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out">
      {/* Brand Header */}
      <div className="flex h-20 shrink-0 items-center px-6 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-md shadow-blue-500/20 transition-transform hover:scale-105">
            AM
          </div>
          <span className="text-lg font-bold text-slate-800 tracking-tight">
            Alex Manfait
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <nav className="flex flex-col gap-8">
          
          {/* Main Navigation */}
          <div>
            <p className="mb-3 ml-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Overview
            </p>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                    pathname === '/' 
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                {/* HIGHLY VISIBLE PROJECTS TAB */}
                <Link
                  href="/projets"
                  className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-300 ${
                    pathname.startsWith('/projets') 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 translate-x-1' 
                      : 'bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <svg className={`h-5 w-5 shrink-0 ${pathname.startsWith('/projets') ? 'text-blue-200' : 'text-blue-500 group-hover:text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Projects
                  
                  {/* Indicator Dot */}
                  <span className="absolute right-3 flex h-2 w-2">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${pathname.startsWith('/projets') ? 'bg-white' : 'bg-blue-400'}`}></span>
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${pathname.startsWith('/projets') ? 'bg-blue-100' : 'bg-blue-500'}`}></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access to Projects */}
          <div>
            <p className="mb-3 ml-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Quick Links
            </p>
            <ul className="flex flex-col gap-1">
              {projects.slice(0, 4).map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projets/${project.slug}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-300 ${
                      pathname === `/projets/${project.slug}`
                        ? 'bg-blue-50/80 font-semibold text-blue-700'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span 
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[12px] bg-slate-100"
                    >
                      {project.icon}
                    </span>
                    <span className="truncate">{project.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </nav>
      </div>

      {/* Footer User Profile Area */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50 cursor-pointer">
          <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200 border border-slate-300" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">Admin</span>
            <span className="text-[11px] text-slate-500">Security Dept.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
