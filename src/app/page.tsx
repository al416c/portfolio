'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { ISourceOptions } from '@tsparticles/engine';
import { projects } from '../lib/projects';

type ViewState = 'surveillance' | 'validating' | 'portfolio';

export default function Home() {
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<ViewState>('surveillance');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [validationText, setValidationText] = useState('VALIDATION DES ACCRÉDITATIONS');
  const [validationGlitch, setValidationGlitch] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  const networkTokens = useMemo(
    () => [
      '192.168.0.1',
      '10.0.0.53',
      '172.16.2.44',
      '0x4F',
      '0xA1',
      '0x9E',
      'SYN',
      'ACK',
      'FIN',
      'PORT:443',
      'PORT:22',
      'TCP/IP',
      '[ENCRYPTED]',
      'ADMIN_ACCESS_ATTEMPT',
      'HEX:4A2F',
      'UDP',
      'DENY',
      'ALLOW',
    ],
    []
  );

  const validationCommands = useMemo(
    () => [
      'sudo tcpdump -i eth0 -n -s 0 port 443',
      "tshark -r capture.pcap -Y 'http.request'",
      'nmap -sS -A 10.0.0.0/24',
      'arpspoof -i wlan0 -t 192.168.1.10',
      'ss -tulpn | grep LISTEN',
      'aircrack-ng -w wordlist.txt handshake.cap',
      '[+] SESSION_CAPTURED',
      '[*] DECRYPTING_TLS_TRAFFIC...',
      '[!] ANOMALY_DETECTED',
      'PROMISCUOUS_MODE: ENABLED',
      'MITM_ACTIVE',
      'BYPASS_FIREWALL_RULES',
      'INJECTING_PAYLOAD...',
      'WPA2_HANDSHAKE_INTERCEPTED',
      'TCP [SYN]',
      'TCP [SYN, ACK]',
      'TCP [RST, ACK]',
      'ICMP Echo Request',
      'DNS Standard query A',
      'TLSv1.3 Client Hello',
      'ARP Who has 10.0.0.1?',
      '192.168.1.254',
      '10.13.37.5',
      '172.16.0.42',
      'FF:FF:FF:FF:FF:FF',
      '00:1A:2B:3C:4D:5E',
      'PORT:443',
      'PORT:22',
      'PORT:8080',
      '0x90909090',
      '0x7F454C46',
      '0x4A2F88CC',
      '0x00000000',
      '0xFFFFFFFF',
    ],
    []
  );

  const nodeParticleOptions = useMemo<ISourceOptions>(
    () => ({
      background: { color: '#081725' },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: ['grab', 'repulse'] },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: 0.9 },
          },
          repulse: {
            distance: 90,
            duration: 0.35,
          },
        },
      },
      particles: {
        color: { value: ['#8ee7ff', '#5ee3ff', '#7dd3fc'] },
        links: {
          color: '#89cfff',
          distance: isTransitioning ? 85 : 125,
          enable: true,
          opacity: isTransitioning ? 0.9 : 0.34,
          width: isTransitioning ? 1.6 : 1,
        },
        move: {
          direction: 'right' as const,
          enable: true,
          outModes: { default: 'out' },
          random: true,
          speed: isTransitioning ? 7.2 : 0.95,
          straight: false,
          drift: 0.12,
          angle: { offset: 0, value: 10 },
          attract: { enable: false },
        },
        number: {
          density: { enable: true, width: 1000, height: 900 },
          value: 110,
        },
        opacity: {
          value: { min: 0.16, max: 0.45 },
          animation: {
            enable: true,
            speed: 1.4,
            sync: false,
            minimumValue: 0.08,
          },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1.2, max: 3.5 },
          animation: {
            enable: true,
            speed: 2.2,
            sync: false,
            minimumValue: 0.8,
          },
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: { min: -0.25, max: 0.28 },
        },
      },
      detectRetina: true,
    }),
    [isTransitioning]
  );

  const textParticleOptions = useMemo<ISourceOptions>(
    () => ({
      background: { color: 'transparent' },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: ['grab', 'repulse'] },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 190,
            links: { opacity: 1 },
          },
          repulse: {
            distance: 110,
            duration: 0.35,
          },
        },
      },
      particles: {
        color: { value: ['#c2f0ff', '#8be9ff', '#7dd3fc'] },
        links: {
          color: '#8ee7ff',
          distance: isTransitioning ? 100 : 135,
          enable: true,
          opacity: isTransitioning ? 0.95 : 0.28,
          width: isTransitioning ? 1.5 : 0.9,
        },
        move: {
          direction: 'right' as const,
          enable: true,
          outModes: { default: 'out' },
          random: true,
          speed: isTransitioning ? 8.6 : 0.65,
          straight: false,
          drift: 0.08,
          angle: { offset: 0, value: 6 },
        },
        number: {
          density: { enable: true, width: 1000, height: 900 },
          value: 55,
        },
        opacity: {
          value: { min: 0.15, max: 0.62 },
          animation: {
            enable: true,
            speed: 1.8,
            sync: false,
            minimumValue: 0.12,
          },
        },
        shape: {
          type: 'character',
          options: {
            character: {
              value: networkTokens,
              font: 'JetBrains Mono',
              style: '',
              weight: '700',
              fill: true,
            },
          },
        },
        size: {
          value: { min: 7, max: 20 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
            minimumValue: 6,
          },
        },
      },
      detectRetina: true,
    }),
    [isTransitioning, networkTokens]
  );

  const handleIntercept = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setState('validating');
      setIsTransitioning(false);
    }, 520);
  };

  useEffect(() => {
    if (state !== 'validating') return;

    const target = 'VALIDATION DES ACCRÉDITATIONS';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let frame = 0;
    const totalFrames = 44;

    const scramble = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;

      const next = target
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index / target.length < progress) return char;
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');

      setValidationText(next);

      if (frame >= totalFrames) {
        clearInterval(scramble);
        setValidationText(target);
        setValidationGlitch(false);
      }
    }, 42);

    const timer = setTimeout(() => {
      setState('portfolio');
    }, 1950);

    return () => {
      clearInterval(scramble);
      clearTimeout(timer);
    };
  }, [state]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#081624] text-slate-100 [font-family:var(--font-inter)]">
      <nav className="pointer-events-none absolute inset-x-0 top-0 z-40 flex justify-end px-6 py-6 md:px-12">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.22)]">
          <Link href="/" className="rounded-full px-3 py-2 text-slate-100 transition hover:bg-slate-900/80">
            Accueil
          </Link>
          <Link href="/projets" className="rounded-full bg-cyan-500/15 px-3 py-2 text-cyan-200 transition hover:bg-cyan-500/25">
            Projets
          </Link>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {state === 'surveillance' && (
          <motion.section
            key="surveillance"
            className="relative flex min-h-screen items-center justify-center overflow-hidden [font-family:var(--font-mono)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: isTransitioning ? 1.18 : 1,
              filter: isTransitioning ? 'contrast(1.35) saturate(1.35)' : 'contrast(1) saturate(1)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: isTransitioning ? 0.5 : 0.4, ease: [0.2, 0.9, 0.25, 1] }}
          >
            {ready && (
              <>
                <Particles
                  id="network-monitor"
                  className="absolute inset-0"
                  options={nodeParticleOptions}
                />
                <Particles
                  id="network-text-stream"
                  className="absolute inset-0"
                  options={textParticleOptions}
                />
              </>
            )}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(18,70,110,0.32),transparent_42%)]" />

            <AnimatePresence>
              {isTransitioning && (
                <motion.div
                  className="absolute inset-0 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(125,211,252,0.85) 0%, rgba(34,211,238,0.35) 22%, rgba(7,18,31,0) 55%)',
                    }}
                    initial={{ scale: 0.2, opacity: 0.15 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)',
                    }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 0.38, repeat: 1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
              <motion.div
                className="relative flex items-center justify-center rounded-2xl border border-cyan-300/35 bg-slate-950/60 p-9 backdrop-blur-3xl"
                animate={isTransitioning ? { scale: 1.12, opacity: 0.15 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.34 }}
                style={{ boxShadow: '0 0 80px rgba(34, 211, 238, 0.2), inset 0 0 24px rgba(16, 185, 129, 0.1)' }}
              >
                <motion.span
                  className="pointer-events-none absolute h-44 w-44 rounded-full border border-cyan-300/30"
                  animate={{ scale: [0.85, 1.35], opacity: [0.5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.span
                  className="pointer-events-none absolute h-56 w-56 rounded-full border border-emerald-300/20"
                  animate={{ scale: [0.8, 1.45], opacity: [0.35, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.45 }}
                />
                <motion.span
                  className="pointer-events-none absolute h-[17rem] w-[17rem] rounded-full border border-cyan-200/15"
                  animate={{ scale: [0.75, 1.5], opacity: [0.28, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
                />
                <motion.span
                  className="pointer-events-none absolute h-[20rem] w-[20rem] rounded-full border border-emerald-200/10"
                  animate={{ scale: [0.72, 1.62], opacity: [0.18, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.25 }}
                />

                <motion.button
                  onClick={handleIntercept}
                  className="group relative overflow-hidden rounded-xl border border-cyan-300/55 bg-cyan-500/10 px-10 py-4 text-base font-bold uppercase tracking-[0.22em] text-cyan-100 [font-family:var(--font-mono)]"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 45px rgba(34, 211, 238, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <motion.span
                    className="relative block"
                    animate={isTransitioning ? { opacity: 0.4 } : { opacity: 1 }}
                    whileHover={{ x: [0, -1, 1, -1, 0] }}
                    transition={{ duration: 0.18 }}
                  >
                    INTERCEPTER LE TRAFIC
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {state === 'portfolio' && (
          <motion.section
            key="portfolio"
            className="relative min-h-screen bg-[#0a0f1a] text-slate-100"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.06),transparent_50%)]" />

            <div className="relative flex flex-col">
              {/* Hero Section */}
              <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-8 inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
                    <span className="text-xs font-medium tracking-widest text-cyan-300 uppercase">Profil</span>
                  </div>
                  
                  <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                    <span className="bg-gradient-to-br from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Nom</span>
                  </h1>
                  
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                    Titre
                  </p>
                  
                  <div className="mt-12 flex flex-col items-center gap-3 md:flex-row md:gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-8 py-3 font-medium text-cyan-300 backdrop-blur-sm transition hover:bg-cyan-500/25"
                    >
                      Contact
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-full border border-slate-600/40 bg-slate-700/20 px-8 py-3 font-medium text-slate-300 backdrop-blur-sm transition hover:bg-slate-700/40"
                    >
                      Voir CV
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-8 text-cyan-400/40"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 gap-8 px-6 py-20 md:grid-cols-3 md:px-12">
                {[
                  { label: 'Expérience', value: 'Années' },
                  { label: 'Missions', value: 'Nombre' },
                  { label: 'Certifications', value: 'Nombre' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex flex-col items-center gap-2 border-b border-slate-800/50 pb-6"
                  >
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
                    <p className="text-4xl font-light text-white md:text-5xl">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* About Section */}
              <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-3xl font-semibold md:text-4xl">À propos</h2>
                  <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
                    Description détaillée du profil et du domaine d&apos;expertise. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                    Informations complémentaires et détails pertinents sur l&apos;expérience professionnelle et les objectifs.
                  </p>
                </motion.div>
              </div>

              {/* Skills Section */}
              <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-semibold md:text-4xl">Compétences</h2>
                  
                  <div className="mt-12 grid gap-12 md:grid-cols-2">
                    {[
                      { category: 'Catégorie 1', items: ['Compétence', 'Compétence', 'Compétence'] },
                      { category: 'Catégorie 2', items: ['Compétence', 'Compétence', 'Compétence'] },
                      { category: 'Catégorie 3', items: ['Compétence', 'Compétence', 'Compétence'] },
                      { category: 'Catégorie 4', items: ['Compétence', 'Compétence', 'Compétence'] },
                    ].map((skill, i) => (
                      <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                      >
                        <h3 className="mb-4 text-lg font-medium text-cyan-300">{skill.category}</h3>
                        <ul className="space-y-2">
                          {skill.items.map((item) => (
                            <li key={item} className="text-slate-400 hover:text-cyan-300 transition">{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Projects Section */}
              <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-semibold md:text-4xl">Projets</h2>
                  
                  <div className="mt-12 space-y-8">
                    {projects.map((project, i) => (
                      <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                        className="border-b border-slate-800/50 pb-8"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div className="flex-1">
                            <div className="mb-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-cyan-300">
                              <span className="rounded-full bg-cyan-500/10 px-3 py-1">{project.category}</span>
                              <span className="rounded-full bg-slate-800/80 px-3 py-1">{project.year}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-3 text-slate-400">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span key={tag} className="inline-flex rounded-full bg-slate-800/90 px-3 py-1 text-sm text-slate-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Link
                            href={`/projets/${project.slug}`}
                            className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition md:mt-0"
                          >
                            Détails <span>→</span>
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Section */}
              <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-8 text-center"
                >
                  <div>
                    <h2 className="text-3xl font-semibold md:text-4xl">Prenons contact</h2>
                    <p className="mt-4 max-w-2xl text-slate-400">Message et disponibilité. Prêt pour discuter d&apos;opportunités et de projets.</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a href="mailto:email@example.com" className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-8 py-3 font-medium text-cyan-300 backdrop-blur-sm transition hover:bg-cyan-500/25">
                      email@example.com
                    </a>
                    <div className="flex gap-3 justify-center">
                      {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="rounded-full border border-slate-600/40 bg-slate-700/20 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm transition hover:bg-slate-700/40 hover:text-slate-300"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-800/50 px-6 py-8 text-center text-slate-500 md:px-12">
                <p className="text-sm">© 2024. Tous droits réservés.</p>
              </div>
            </div>
          </motion.section>
        )}

        {state === 'validating' && (
          <motion.section
            key="validating"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071928]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,216,255,0.18),transparent_52%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,29,0.18),rgba(3,10,20,0.4))]" />

            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`abstergo-slate-${index}`}
                className="absolute left-1/2 top-0 h-full w-[10vw] rounded-r-full bg-white/5 blur-sm"
                style={{ x: `${-24 + index * 9}%` }}
                animate={{ opacity: [0, 0.18, 0.08, 0], x: [`${-24 + index * 9}%`, `${-28 + index * 9}%`, `${-20 + index * 9}%`, `${-24 + index * 9}%`] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.08 }}
              />
            ))}

            {[...Array(68)].map((_, i) => (
              <motion.div
                key={`packet-${i}`}
                className="absolute"
                style={{
                  top: `${2 + ((i * 5.6) % 96)}%`,
                  left: `${-18 - (i % 8) * 10}%`,
                }}
                initial={{ x: '-24vw', opacity: 0 }}
                animate={{
                  x: i % 2 === 0 ? '150vw' : '130vw',
                  y: i % 3 === 0 ? [0, -10, 14, -6, 0] : i % 3 === 1 ? [0, 8, -12, 6, 0] : [0, -6, 10, -4, 0],
                  opacity: [0, 0.95, 0.9, 0],
                  scale: i % 5 === 0 ? [0.8, 1.2, 0.85] : [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 0.75 + (i % 7) * 0.22,
                  delay: (i % 14) * 0.04,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className={`rounded-full ${i % 4 === 0 ? 'h-[3px] w-14 bg-cyan-200/90' : i % 4 === 1 ? 'h-[2px] w-10 bg-emerald-300/80' : i % 4 === 2 ? 'h-[1px] w-12 bg-white/75' : 'h-[2px] w-8 bg-cyan-400/90'}`} />
              </motion.div>
            ))}

            {[...Array(44)].map((_, i) => (
              <motion.div
                key={`burst-${i}`}
                className="absolute h-1 w-1 rounded-full bg-emerald-300"
                style={{
                  top: `${8 + ((i * 9) % 84)}%`,
                  left: `${6 + ((i * 7) % 88)}%`,
                }}
                animate={{
                  scale: [0.4, 2.2, 0.3],
                  opacity: [0, 1, 0],
                  x: i % 2 === 0 ? [-10, 14, -4] : [12, -8, 6],
                  y: i % 3 === 0 ? [0, -16, 10] : i % 3 === 1 ? [0, 14, -8] : [0, -10, 6],
                }}
                transition={{
                  duration: 0.4 + (i % 5) * 0.12,
                  delay: (i % 12) * 0.05,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}

            {[...Array(18)].map((_, i) => (
              <motion.div
                key={`glare-${i}`}
                className="absolute rounded-full border border-cyan-200/20"
                style={{
                  left: `${12 + ((i * 13) % 72)}%`,
                  top: `${12 + ((i * 17) % 72)}%`,
                  width: `${18 + (i % 5) * 14}px`,
                  height: `${18 + (i % 5) * 14}px`,
                }}
                animate={{
                  scale: [0.6, 1.4, 0.7],
                  opacity: [0, 0.55, 0],
                }}
                transition={{
                  duration: 1.15 + (i % 4) * 0.2,
                  delay: (i % 6) * 0.12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <motion.div
              className="pointer-events-none absolute left-0 right-0 h-24"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(56,189,248,0), rgba(56,189,248,0.32), rgba(56,189,248,0))',
              }}
              initial={{ y: '-20%' }}
              animate={{ y: '125%' }}
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], repeat: Infinity, repeatDelay: 0.1 }}
            />

            <motion.div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_46%)]"
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative z-20 rounded-2xl border border-cyan-200/40 bg-slate-900/70 px-10 py-7 text-center backdrop-blur-2xl [font-family:var(--font-mono)]"
              animate={validationGlitch ? { x: [0, -1, 1, 0], opacity: [1, 0.9, 1] } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.22, repeat: validationGlitch ? Infinity : 0 }}
              style={{ boxShadow: '0 0 96px rgba(96, 165, 250, 0.22), inset 0 0 28px rgba(56, 189, 248, 0.14)' }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"
                animate={{ opacity: [0.2, 0.55, 0.2] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.h2
                className="text-xl font-semibold tracking-[0.22em] text-cyan-50 md:text-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={validationGlitch ? { opacity: [1, 0.97, 1], scale: [1, 1.01, 1] } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                {validationText}
              </motion.h2>
              <motion.h2
                className="pointer-events-none absolute inset-0 text-xl font-semibold tracking-[0.22em] text-emerald-300/70 md:text-3xl"
                animate={{ x: [-2, -3, -1, -2], opacity: [0.24, 0.38, 0.24] }}
                transition={{ duration: 0.22, repeat: Infinity }}
              >
                {validationText}
              </motion.h2>
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between gap-6 px-4 md:px-10">
              <div className="hidden w-[26rem] flex-col gap-3 lg:flex">
                {validationCommands.slice(0, 8).map((command, index) => (
                  <motion.div
                    key={command}
                    className="rounded-md border border-cyan-300/20 bg-slate-950/35 px-3 py-2 text-left font-mono text-[11px] tracking-[0.12em] text-cyan-100/75 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{
                      opacity: [0.18, 0.65, 0.22],
                      x: [0, index % 2 === 0 ? 10 : -8, 0],
                      y: [0, index % 3 === 0 ? -4 : 4, 0],
                    }}
                    transition={{ duration: 1.4 + index * 0.08, repeat: Infinity, ease: 'easeInOut', delay: index * 0.07 }}
                  >
                    {command}
                  </motion.div>
                ))}
              </div>

              <div className="hidden w-[26rem] flex-col gap-3 lg:flex">
                {validationCommands.slice(8, 16).map((command, index) => (
                  <motion.div
                    key={command}
                    className="rounded-md border border-emerald-300/20 bg-slate-950/35 px-3 py-2 text-right font-mono text-[11px] tracking-[0.12em] text-emerald-100/75 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{
                      opacity: [0.2, 0.68, 0.24],
                      x: [0, index % 2 === 0 ? -10 : 8, 0],
                      y: [0, index % 3 === 0 ? 5 : -4, 0],
                    }}
                    transition={{ duration: 1.45 + index * 0.08, repeat: Infinity, ease: 'easeInOut', delay: index * 0.08 }}
                  >
                    {command}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 w-[min(92vw,72rem)] -translate-x-1/2 rounded-xl border border-cyan-300/20 bg-slate-950/40 px-4 py-3 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {validationCommands.slice(16).map((command, index) => (
                  <motion.div
                    key={command}
                    className="truncate rounded-md bg-white/5 px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-slate-100/80"
                    animate={{
                      opacity: [0.18, 0.8, 0.18],
                      x: [0, index % 2 === 0 ? 3 : -3, 0],
                    }}
                    transition={{ duration: 1.2 + index * 0.03, repeat: Infinity, ease: 'easeInOut', delay: index * 0.04 }}
                  >
                    {command}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
