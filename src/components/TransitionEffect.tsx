'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface TransitionEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

interface GlitchLine {
  id: number;
  y: number;
  width: number;
  delay: number;
  left: number;
  repeatDelay: number;
}

function generateGlitchLines(): GlitchLine[] {
  return Array.from({ length: 30 }, (_, i) => {
    const width = 20 + Math.random() * 80;
    return {
      id: i,
      y: Math.random() * 100,
      width,
      delay: Math.random() * 0.5,
      left: Math.random() * (100 - width),
      repeatDelay: Math.random() * 0.2,
    };
  });
}

export default function TransitionEffect({ isActive, onComplete }: TransitionEffectProps) {
  const [phase, setPhase] = useState(0);
  
  const glitchLines = useMemo(() => generateGlitchLines(), []);

  useEffect(() => {
    if (isActive) {
      // Phase progression
      const timers = [
        setTimeout(() => setPhase(1), 100),    // Start corruption
        setTimeout(() => setPhase(2), 800),    // Full glitch
        setTimeout(() => setPhase(3), 1800),   // Fade to black
        setTimeout(() => setPhase(4), 2800),   // Terminal boot
        setTimeout(() => {
          setPhase(5);
          onComplete();
        }, 4000),
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Phase 1-2: Corruption/Glitch effect */}
        {phase >= 1 && phase < 4 && (
          <>
            {/* Screen shake */}
            <motion.div
              className="absolute inset-0 bg-white"
              animate={{
                x: phase >= 2 ? [0, -10, 10, -5, 5, 0] : 0,
                y: phase >= 2 ? [0, 5, -5, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.3, repeat: phase >= 2 ? 5 : 0 }}
            />

            {/* RGB split effect */}
            <motion.div
              className="absolute inset-0"
              style={{ mixBlendMode: 'multiply' }}
              animate={{
                opacity: [0, 0.8, 0.4, 0.9, 0.3],
              }}
              transition={{ duration: 0.1, repeat: 20 }}
            >
              <div className="absolute inset-0 bg-cyan-500/30" style={{ transform: 'translateX(-5px)' }} />
              <div className="absolute inset-0 bg-red-500/30" style={{ transform: 'translateX(5px)' }} />
            </motion.div>

            {/* Glitch lines */}
            {glitchLines.map((line) => (
              <motion.div
                key={line.id}
                className="absolute h-1 bg-black"
                style={{
                  top: `${line.y}%`,
                  width: `${line.width}%`,
                  left: `${line.left}%`,
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: line.delay,
                  repeat: 10,
                  repeatDelay: line.repeatDelay,
                }}
              />
            ))}

            {/* Static noise */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
              animate={{ opacity: [0, 0.3, 0.1, 0.4, 0.2] }}
              transition={{ duration: 0.1, repeat: 30 }}
            />

            {/* Corrupt text flashing */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 0, 1, 0] }}
              transition={{ duration: 0.1, repeat: 15 }}
            >
              <span className="text-6xl md:text-8xl font-mono text-red-600 font-bold tracking-widest">
                ERROR
              </span>
            </motion.div>
          </>
        )}

        {/* Phase 3: Fade to complete darkness */}
        {phase >= 3 && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}

        {/* Phase 4: Terminal boot sequence */}
        {phase >= 4 && (
          <motion.div
            className="absolute inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="font-mono text-green-500 text-sm md:text-base max-w-2xl px-6">
              <TerminalBootSequence />
            </div>

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-px bg-green-500"
                  style={{ marginTop: i % 2 === 0 ? '2px' : '0' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

const BOOT_LINES = [
  '> PARADISE.exe has stopped responding',
  '> Initiating system override...',
  '> Loading shadow protocols...',
  '> [████████████████████] 100%',
  '> Firewall bypassed',
  '> Encryption keys acquired',
  '> Welcome to the dark side.',
  '',
  '> Initializing portfolio.exe...',
];

function TerminalBootSequence() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
        >
          {line}
          {i === lines.length - 1 && (
            <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
