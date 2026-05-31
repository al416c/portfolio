'use client';

import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import type { ISourceOptions } from '@tsparticles/engine';

interface SurveillanceScreenProps {
  isTransitioning: boolean;
  onIntercept: () => void;
}

export default function SurveillanceScreen({
  isTransitioning,
  onIntercept,
}: SurveillanceScreenProps) {
  const networkTokens = useMemo(
    () => [
      '192.168.0.1', '10.0.0.53', '172.16.2.44', '0x4F', '0xA1', '0x9E',
      'SYN', 'ACK', 'FIN', 'PORT:443', 'PORT:22', 'TCP/IP',
      '[ENCRYPTED]', 'ADMIN_ACCESS_ATTEMPT', 'HEX:4A2F', 'UDP', 'DENY', 'ALLOW',
    ],
    []
  );

  const nodeOptions = useMemo<ISourceOptions>(
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
          grab: { distance: 180, links: { opacity: 0.9 } },
          repulse: { distance: 90, duration: 0.35 },
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
          animation: { enable: true, speed: 1.4, sync: false, minimumValue: 0.08 },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1.2, max: 3.5 },
          animation: { enable: true, speed: 2.2, sync: false, minimumValue: 0.8 },
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

  const textOptions = useMemo<ISourceOptions>(
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
          grab: { distance: 190, links: { opacity: 1 } },
          repulse: { distance: 110, duration: 0.35 },
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
          animation: { enable: true, speed: 1.8, sync: false, minimumValue: 0.12 },
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
          animation: { enable: true, speed: 2, sync: false, minimumValue: 6 },
        },
      },
      detectRetina: true,
    }),
    [isTransitioning, networkTokens]
  );

  return (
    <motion.section
      key="surveillance"
      className="relative flex min-h-screen items-center justify-center overflow-hidden [font-family:var(--font-mono)]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: isTransitioning ? 1.18 : 1,
        filter: isTransitioning
          ? 'contrast(1.35) saturate(1.35)'
          : 'contrast(1) saturate(1)',
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: isTransitioning ? 0.5 : 0.4,
        ease: [0.2, 0.9, 0.25, 1],
      }}
    >
      <ParticleBackground id="network-monitor" options={nodeOptions} />
      <ParticleBackground id="network-text-stream" options={textOptions} />

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
                background:
                  'radial-gradient(circle at center, rgba(125,211,252,0.85) 0%, rgba(34,211,238,0.35) 22%, rgba(7,18,31,0) 55%)',
              }}
              initial={{ scale: 0.2, opacity: 0.15 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)',
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
          animate={
            isTransitioning
              ? { scale: 1.12, opacity: 0.15 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.34 }}
          style={{
            boxShadow:
              '0 0 80px rgba(34, 211, 238, 0.2), inset 0 0 24px rgba(16, 185, 129, 0.1)',
          }}
        >
          <motion.span
            className="pointer-events-none absolute h-44 w-44 rounded-full border border-cyan-300/30"
            animate={{ scale: [0.85, 1.35], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.span
            className="pointer-events-none absolute h-56 w-56 rounded-full border border-emerald-300/20"
            animate={{ scale: [0.8, 1.45], opacity: [0.35, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.45,
            }}
          />
          <motion.span
            className="pointer-events-none absolute h-[17rem] w-[17rem] rounded-full border border-cyan-200/15"
            animate={{ scale: [0.75, 1.5], opacity: [0.28, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.9,
            }}
          />
          <motion.span
            className="pointer-events-none absolute h-[20rem] w-[20rem] rounded-full border border-emerald-200/10"
            animate={{ scale: [0.72, 1.62], opacity: [0.18, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 1.25,
            }}
          />

          <motion.button
            onClick={onIntercept}
            className="group relative overflow-hidden rounded-xl border border-cyan-300/55 bg-cyan-500/10 px-10 py-4 text-base font-bold uppercase tracking-[0.22em] text-cyan-100 [font-family:var(--font-mono)]"
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 45px rgba(34, 211, 238, 0.45)',
            }}
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
  );
}
