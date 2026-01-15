'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  siteConfig,
  darkWorldContent,
  aboutContent,
  skillsContent,
  projectsContent,
  experienceContent,
  contactContent,
} from '@/config/content';

interface MatrixChar {
  id: number;
  x: number;
  delay: number;
  duration: number;
  char: string;
}

function generateMatrixChars(): MatrixChar[] {
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    char: chars[Math.floor(Math.random() * chars.length)],
  }));
}

export default function DarkWorld() {
  const [matrixChars] = useState<MatrixChar[]>(() => generateMatrixChars());
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  useEffect(() => {
    // Delay content reveal for dramatic effect
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="dark-mode bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Matrix rain background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {matrixChars.map((char) => (
          <motion.span
            key={char.id}
            className="absolute text-green-500 font-mono text-sm"
            style={{ left: `${char.x}%` }}
            initial={{ y: '-10%', opacity: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: char.duration,
              delay: char.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {char.char}
          </motion.span>
        ))}
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-30" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 backdrop-blur-md bg-black/50 border-b border-green-500/20"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            className="font-mono text-green-500 text-lg"
            whileHover={{ textShadow: '0 0 10px #00ff41' }}
          >
            <span className="text-green-400">root@</span>
            <span className="text-white">{siteConfig.name.toLowerCase().replace(' ', '-')}</span>
            <span className="text-green-400">:~$</span>
            <span className="animate-pulse ml-1">_</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-green-500 transition-colors cyber-link"
                whileHover={{ scale: 1.05 }}
              >
                ./{item.toLowerCase()}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Skull ASCII art */}
            <pre className="text-green-500/60 text-xs md:text-sm font-mono leading-none mx-auto inline-block">
{`    ░░░░░░░░░░░░░░░░░
   ░░░░▄▄▄▄▄▄▄▄▄▄▄░░░░
   ░░▄█░░░░░░░░░░░█▄░░
   ░█░░░░░░░░░░░░░░░█░
   █░░░▀▀░░░░░▀▀░░░░░█
   █░░░░░░░░░░░░░░░░░█
   █░░░░░▄▄▄▄▄░░░░░░░█
   ░█░░░░░░░░░░░░░░░█░
   ░░█░░▀▄▄▄▄▄▄▄▀░░█░░
   ░░░█░░░░░░░░░░░█░░░
   ░░░░▀▀▀▀▀▀▀▀▀▀▀░░░░`}
            </pre>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-white">{siteConfig.name.split(' ')[0]}</span>
            <br />
            <span className="text-green-500">{siteConfig.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-green-500/80 font-mono mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            &ldquo;{darkWorldContent.tagline}&rdquo;
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-green-500 text-black font-mono font-bold rounded-none
                         hover:bg-green-400 transition-all duration-300 border border-green-500
                         hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ./hire_me --urgent
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-transparent text-green-500 font-mono font-bold rounded-none
                         border border-green-500/50 hover:border-green-500 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              cat projects.txt
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-green-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="About" command="whoami" />
          
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {aboutContent.headline}
              </h3>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {aboutContent.description}
              </p>
            </div>

            <div className="space-y-6">
              {aboutContent.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="border border-green-500/30 p-4 bg-green-500/5"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    borderColor: 'rgba(0,255,65,0.8)',
                    boxShadow: '0 0 20px rgba(0,255,65,0.1)',
                  }}
                >
                  <div className="text-3xl font-mono text-green-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Skills" command="cat /etc/skills.conf" />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsContent.categories.map((category, i) => (
              <motion.div
                key={category.name}
                className="border border-gray-800 bg-[#0d0d0d] p-6 hover:border-green-500/50 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 40px rgba(0,255,65,0.1)',
                }}
              >
                <div className="text-2xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-green-500">›</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Projects" command="ls -la ~/projects/" />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {projectsContent.featured.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative border border-gray-800 bg-[#0d0d0d] overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgba(0,255,65,0.5)' }}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-mono px-2 py-1 ${
                    project.status === 'Active' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 border border-gray-700 text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-green-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Experience" command="history | grep -i career" />
          
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-green-500/30 -translate-x-1/2" />

            {experienceContent.timeline.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative flex md:items-center mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-green-500 font-mono text-sm">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-gray-500 text-sm">{exp.company}</p>
                  <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-mono text-gray-500 mb-6">{/* // */}Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {experienceContent.certifications.map((cert) => (
                <motion.span
                  key={cert}
                  className="px-4 py-2 border border-green-500/30 text-green-500 font-mono text-sm
                           hover:bg-green-500/10 hover:border-green-500 transition-all cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Contact" command="./connect.sh" centered />
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {contactContent.headline}
            </h2>
            <p className="text-xl text-green-500 mb-8">{contactContent.subheadline}</p>

            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="inline-block px-10 py-4 bg-green-500 text-black font-mono font-bold text-lg
                       hover:bg-green-400 transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {siteConfig.email}
            </motion.a>

            <p className="mt-8 text-gray-500 text-sm font-mono">{contactContent.pgpNote}</p>

            {/* Social links */}
            <div className="mt-12 flex justify-center gap-8">
              {contactContent.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-sm font-mono">{social.name}</div>
                  <div className="text-xs text-gray-600">{social.handle}</div>
                </motion.a>
              ))}
            </div>

            {/* Status */}
            <div className="mt-12 inline-flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-500 font-mono">{contactContent.status}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-gray-500 text-sm">
            <span className="text-green-500">©</span> {new Date().getFullYear()} {siteConfig.name}
          </div>
          <div className="font-mono text-gray-600 text-xs">
            {`// Built from the dark side`}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Section Header Component
function SectionHeader({ 
  title, 
  command, 
  centered = false 
}: { 
  title: string; 
  command: string; 
  centered?: boolean;
}) {
  return (
    <motion.div
      className={centered ? 'text-center' : ''}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="font-mono text-sm text-gray-600 mb-2">
        <span className="text-green-500">$</span> {command}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        <span className="text-green-500">#</span> {title}
      </h2>
    </motion.div>
  );
}
