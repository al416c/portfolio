'use client';

import { motion } from 'framer-motion';

interface ValidationScreenProps {
  validationText: string;
  validationGlitch: boolean;
  validationCommands: string[];
}

export default function ValidationScreen({
  validationText,
  validationGlitch,
  validationCommands,
}: ValidationScreenProps) {
  return (
    <motion.section
      key="validating"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071928]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,216,255,0.18),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,29,0.18),rgba(3,10,20,0.4))]" />

      {/* Abstergo slats */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`abstergo-slate-${index}`}
          className="absolute left-1/2 top-0 h-full w-[10vw] rounded-r-full bg-white/5 blur-sm"
          style={{ x: `${-24 + index * 9}%` }}
          animate={{
            opacity: [0, 0.18, 0.08, 0],
            x: [
              `${-24 + index * 9}%`,
              `${-28 + index * 9}%`,
              `${-20 + index * 9}%`,
              `${-24 + index * 9}%`,
            ],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.08,
          }}
        />
      ))}

      {/* Data stream packets */}
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
            y:
              i % 3 === 0
                ? [0, -10, 14, -6, 0]
                : i % 3 === 1
                  ? [0, 8, -12, 6, 0]
                  : [0, -6, 10, -4, 0],
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
          <div
            className={`rounded-full ${
              i % 4 === 0
                ? 'h-[3px] w-14 bg-cyan-200/90'
                : i % 4 === 1
                  ? 'h-[2px] w-10 bg-emerald-300/80'
                  : i % 4 === 2
                    ? 'h-[1px] w-12 bg-white/75'
                    : 'h-[2px] w-8 bg-cyan-400/90'
            }`}
          />
        </motion.div>
      ))}

      {/* Burst particles */}
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
            y:
              i % 3 === 0
                ? [0, -16, 10]
                : i % 3 === 1
                  ? [0, 14, -8]
                  : [0, -10, 6],
          }}
          transition={{
            duration: 0.4 + (i % 5) * 0.12,
            delay: (i % 12) * 0.05,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Glare rings */}
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

      {/* Scan line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-24"
        style={{
          background:
            'linear-gradient(to bottom, rgba(56,189,248,0), rgba(56,189,248,0.32), rgba(56,189,248,0))',
        }}
        initial={{ y: '-20%' }}
        animate={{ y: '125%' }}
        transition={{
          duration: 1.1,
          ease: [0.25, 1, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.1,
        }}
      />

      {/* Center glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_46%)]"
        animate={{ opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center validation box */}
      <motion.div
        className="relative z-20 rounded-2xl border border-cyan-200/40 bg-slate-900/70 px-10 py-7 text-center backdrop-blur-2xl [font-family:var(--font-mono)]"
        animate={
          validationGlitch
            ? { x: [0, -1, 1, 0], opacity: [1, 0.9, 1] }
            : { x: 0, opacity: 1 }
        }
        transition={{
          duration: 0.22,
          repeat: validationGlitch ? Infinity : 0,
        }}
        style={{
          boxShadow:
            '0 0 96px rgba(96, 165, 250, 0.22), inset 0 0 28px rgba(56, 189, 248, 0.14)',
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.h2
          className="text-xl font-semibold tracking-[0.22em] text-cyan-50 md:text-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            validationGlitch
              ? { opacity: [1, 0.97, 1], scale: [1, 1.01, 1] }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.35 }}
        >
          {validationText}
        </motion.h2>
        <motion.h2
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-semibold tracking-[0.22em] text-emerald-300/70 md:text-3xl"
          animate={{ x: [-2, -3, -1, -2], opacity: [0.24, 0.38, 0.24] }}
          transition={{ duration: 0.22, repeat: Infinity }}
        >
          {validationText}
        </motion.h2>
      </motion.div>

      {/* Side command panels */}
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
              transition={{
                duration: 1.4 + index * 0.08,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.07,
              }}
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
              transition={{
                duration: 1.45 + index * 0.08,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.08,
              }}
            >
              {command}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom command grid — visible on mobile */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 w-[min(92vw,72rem)] -translate-x-1/2 rounded-xl border border-cyan-300/20 bg-slate-950/40 px-4 py-3 backdrop-blur-sm md:bottom-10">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {validationCommands.slice(16).map((command, index) => (
            <motion.div
              key={command}
              className="truncate rounded-md bg-white/5 px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-slate-100/80"
              animate={{
                opacity: [0.18, 0.8, 0.18],
                x: [0, index % 2 === 0 ? 3 : -3, 0],
              }}
              transition={{
                duration: 1.2 + index * 0.03,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.04,
              }}
            >
              {command}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
