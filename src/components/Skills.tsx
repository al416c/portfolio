'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Sécurité Offensive',
    icon: '⚔️',
    color: '#f43f5e',
    skills: [
      { name: 'Pentest', level: 90 },
      { name: 'Red Team', level: 85 },
      { name: 'Exploitation', level: 80 },
      { name: 'OSINT', level: 75 },
    ],
  },
  {
    name: 'Sécurité Défensive',
    icon: '🛡️',
    color: '#22d3ee',
    skills: [
      { name: 'SIEM / SOC', level: 88 },
      { name: 'Incident Response', level: 82 },
      { name: 'Forensics', level: 78 },
      { name: 'Threat Intel', level: 85 },
    ],
  },
  {
    name: 'Développement',
    icon: '💻',
    color: '#a78bfa',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'PHP', level: 75 },
      { name: 'Bash / Shell', level: 80 },
    ],
  },
  {
    name: 'Infrastructure',
    icon: '🏗️',
    color: '#34d399',
    skills: [
      { name: 'Linux', level: 90 },
      { name: 'Docker / Containers', level: 85 },
      { name: 'Cloud (AWS/GCP)', level: 78 },
      { name: 'Réseau / TCP-IP', level: 88 },
    ],
  },
];

export default function Skills() {
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
            Arsenal
          </span>
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">Compétences</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:border-slate-700/80"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${category.color}12, transparent 70%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${category.color}80, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1 + j * 0.1,
                            ease: [0.25, 1, 0.5, 1],
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
