'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { ISourceOptions } from '@tsparticles/engine';

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
      background: { color: '#070c16' },
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
        color: { value: ['#7dd3fc', '#22d3ee', '#2dd4bf'] },
        links: {
          color: '#38bdf8',
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
        color: { value: ['#a5f3fc', '#67e8f9', '#6ee7b7'] },
        links: {
          color: '#67e8f9',
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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#070c16] text-slate-100 [font-family:var(--font-inter)]">
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

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(8,47,73,0.35),transparent_45%)]" />

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
            className="relative min-h-screen bg-[#0f141d] text-slate-100"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.12),transparent_34%)]" />
            <motion.div className="pointer-events-none absolute inset-0 z-30" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(226,232,240,0.16) 0%, rgba(148,163,184,0.06) 35%, transparent 62%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.45, 0] }}
                transition={{ duration: 0.36, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute left-0 right-0 h-28"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(56,189,248,0), rgba(56,189,248,0.35), rgba(56,189,248,0))',
                }}
                initial={{ y: '-25%' }}
                animate={{ y: '120%' }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              />
            </motion.div>

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-12 md:px-8">
              <section id="a-propos" className="mb-16 grid w-full grid-cols-1 gap-6 md:grid-cols-10">
                <div className="md:col-span-7 flex flex-col justify-center rounded-2xl border border-sky-950/80 bg-slate-900/45 p-8 shadow-[0_0_35px_rgba(14,165,233,0.14)]">
                  <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Ingenieur Securite oriente Red Team et Blue Team</h1>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                    J&apos;accompagne les equipes produit et infrastructure dans l&apos;anticipation des menaces, la validation des defenses et la mise en place de plans de reponse efficaces.
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-col gap-4">
                  <div className="rounded-2xl border border-sky-950/80 bg-slate-900/45 p-6 shadow-[0_0_30px_rgba(14,165,233,0.14)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 [font-family:var(--font-mono)]">Experience</p>
                    <p className="mt-3 text-3xl font-semibold text-white">8+ ans</p>
                  </div>
                  <div className="rounded-2xl border border-sky-950/80 bg-slate-900/45 p-6 shadow-[0_0_30px_rgba(14,165,233,0.14)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 [font-family:var(--font-mono)]">Missions</p>
                    <p className="mt-3 text-3xl font-semibold text-white">45+</p>
                  </div>
                </div>
              </section>

              <section id="competences" className="mb-16 flex w-full flex-col items-center">
                <h2 className="mb-6 text-xl text-cyan-300 [font-family:var(--font-mono)] md:text-2xl">Competences</h2>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
                  {[
                    { title: 'Forensique', items: 'Analyse memoire, timeline incident, acquisition de preuves' },
                    { title: 'Pentest', items: 'Audit applicatif, intrusions controlees, validation des correctifs' },
                    { title: 'Reseau', items: 'Detection d\'anomalies, segmentation, hardening et monitoring' },
                    { title: 'DevSecOps', items: 'CI/CD securise, scanning continu, gestion des secrets' },
                  ].map((skill) => (
                    <article
                      key={skill.title}
                      className="rounded-2xl border border-sky-950/80 bg-slate-900/45 p-6 shadow-[0_0_30px_rgba(14,165,233,0.14)]"
                    >
                      <h3 className="mb-3 text-base text-emerald-300 [font-family:var(--font-mono)]">{skill.title}</h3>
                      <p className="text-sm leading-7 text-slate-200">{skill.items}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="projets" className="mb-16 flex w-full flex-col items-center">
                <h2 className="mb-6 text-xl text-cyan-300 [font-family:var(--font-mono)] md:text-2xl">Projets</h2>
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    {
                      title: 'ThreatScope',
                      desc: 'Plateforme interne de correlation d\'evenements securite pour prioriser les alertes SOC.',
                      stack: 'NEXT.JS, PYTHON, ELASTIC, SIGMA',
                    },
                    {
                      title: 'NetSentinel',
                      desc: 'Systeme de supervision reseau avec detection comportementale et alerting contextualise.',
                      stack: 'GO, SURICATA, GRAFANA, KAFKA',
                    },
                    {
                      title: 'PhantomLab',
                      desc: 'Lab red team automatise pour simuler des chaines d\'attaque en environnement controle.',
                      stack: 'TERRAFORM, ANSIBLE, RUST',
                    },
                    {
                      title: 'IncidentFlow',
                      desc: 'Workflow de reponse a incident avec playbooks et suivi des actions post-mortem.',
                      stack: 'TYPESCRIPT, NODE.JS, POSTGRES',
                    },
                  ].map((project) => (
                    <article
                      key={project.title}
                      className="flex min-h-[260px] flex-col rounded-2xl border border-sky-950/80 bg-slate-900/45 p-7 shadow-[0_0_32px_rgba(14,165,233,0.14)]"
                    >
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-200">{project.desc}</p>
                      <p className="mt-5 text-sm uppercase tracking-[0.16em] text-emerald-300 [font-family:var(--font-mono)]">{project.stack}</p>
                      <a href="#" className="mt-auto pt-8 text-base text-cyan-300 transition-colors hover:text-cyan-200">Voir le rapport simule -&gt;</a>
                    </article>
                  ))}
                </div>
              </section>

              <section id="contact" className="w-full rounded-2xl border border-sky-950/80 bg-slate-900/45 p-8 shadow-[0_0_30px_rgba(14,165,233,0.14)]">
                <h2 className="text-xl text-cyan-300 [font-family:var(--font-mono)] md:text-2xl">Contact</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">Disponible pour missions en audit securite, durcissement d&apos;infrastructure et accompagnement strategique cyber.</p>
                <a href="mailto:contact@alexmanfait.com" className="mt-6 inline-flex rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-sm text-cyan-200 transition hover:bg-cyan-500/20">
                  contact@alexmanfait.com
                </a>
              </section>
            </div>
          </motion.section>
        )}

        {state === 'validating' && (
          <motion.section
            key="validating"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060b13]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_52%)]" />

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
              className="relative z-20 rounded-2xl border border-cyan-300/35 bg-slate-950/70 px-10 py-7 text-center backdrop-blur-xl [font-family:var(--font-mono)]"
              animate={validationGlitch ? { x: [0, -1, 1, 0], opacity: [1, 0.92, 1] } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.22, repeat: validationGlitch ? Infinity : 0 }}
              style={{ boxShadow: '0 0 70px rgba(56, 189, 248, 0.3), inset 0 0 22px rgba(16, 185, 129, 0.08)' }}
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
