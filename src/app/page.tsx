'use client';

import Link from 'next/link';
import { projects } from '../lib/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-10">
      {/* Header Section */}
      <header className="mb-2">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Dashboard Overview
        </h1>
        <p className="text-slate-500">
          Welcome back to the command center. Here is a summary of recent activities and security projects.
        </p>
      </header>

      {/* Stats Cards Row */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Projects', value: projects.length, change: '+2 this month', icon: '📁' },
          { label: 'Security Audits', value: 12, change: '+3 this month', icon: '🛡️' },
          { label: 'Active Threats', value: 0, change: 'All clear', icon: '✅' },
          { label: 'Uptime', value: '99.9%', change: 'Stable', icon: '⚡' },
        ].map((stat, i) => (
          <div key={i} className="dashboard-card p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Main Content Grid */}
      <section className="grid gap-8 lg:grid-cols-3">
        {/* Recent Projects Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Recent Projects</h2>
            <Link href="/projets" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              View All &rarr;
            </Link>
          </div>
          
          <div className="grid gap-4">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projets/${project.slug}`}>
                <div className="dashboard-card p-5 flex items-center justify-between group cursor-pointer hover:border-blue-200">
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 shadow-sm border border-slate-100 transition-transform group-hover:scale-105"
                      style={{ color: project.color }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-0.5">{project.category}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-sm font-medium text-slate-400 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                      Review <span className="text-lg">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Profile / Skills Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-900">System Profile</h2>
          
          <div className="dashboard-card p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-white shadow-sm">
                AM
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Alex Manfait</h3>
                <p className="text-sm text-slate-500">Security Engineer</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Cybersecurity professional specializing in penetration testing, threat analysis, and secure systems development.
            </p>

            <div className="space-y-4 border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Capabilities</h4>
              
              {[
                { name: 'Offensive Security', level: 90 },
                { name: 'Defensive Architecture', level: 85 },
                { name: 'Secure Development', level: 80 }
              ].map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-1.5 font-medium">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
