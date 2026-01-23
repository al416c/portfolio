'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TransitionEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

const BOOT_LINES = [
  '> FATAL: paradis.exe a été consommé',
  '> Connaissance interdite acquise...',
  '> Chargement protocoles obscurs...',
  '> [██████████] 100%',
  '> Eden.firewall: CONTOURNÉ',
  '> Innocence.dll: CORROMPU',
  '',
  '> "Vous serez comme des dieux..."',
  '',
  '> Initialisation dark_portfolio.exe...',
];

export default function TransitionEffect({ isActive, onComplete }: TransitionEffectProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isActive) {
      // Phase progression
      const timers = [
        setTimeout(() => setPhase(1), 100),    // Start cascade
        setTimeout(() => setPhase(2), 1800),   // Show error
        setTimeout(() => setPhase(3), 3200),   // Fade to black
        setTimeout(() => setPhase(4), 3800),   // Terminal boot
        setTimeout(() => {
          setPhase(5);
          onComplete();
        }, 5500),
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
        {/* Phase 1: Smooth cascade - dark curtain falls progressively */}
        {phase >= 1 && phase < 3 && (
          <>
            {/* The paradise background that gets revealed/covered */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-sky-50 to-amber-50" />
            
            {/* Smooth dark cascade - main curtain falling */}
            <motion.div
              className="absolute inset-x-0 top-0 bg-[#0a0a0a]"
              initial={{ height: '0%' }}
              animate={{ height: '100%' }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Slightly faster, smoother
              }}
            >
              {/* Gradient edge for smooth transition */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)',
                }}
              />
            </motion.div>

            {/* Red warning wave - slightly ahead */}
            <motion.div
              className="absolute inset-x-0 top-0"
              initial={{ height: '0%' }}
              animate={{ height: '100%' }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div 
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 51, 51, 0.3) 50%, transparent 100%)',
                }}
              />
            </motion.div>

            {/* Secondary wave - orange accent */}
            <motion.div
              className="absolute inset-x-0 top-0"
              initial={{ height: '0%' }}
              animate={{ height: '100%' }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div 
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(228, 164, 73, 0.15) 50%, transparent 100%)',
                }}
              />
            </motion.div>

            {/* Particle trail following the cascade - more particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${3 + (i * 3.2)}%`,
                  width: i % 4 === 0 ? '3px' : '2px',
                  height: i % 4 === 0 ? '3px' : '2px',
                  backgroundColor: i % 5 === 0 ? '#ff3333' : i % 3 === 0 ? '#ff3333' : 'rgba(255,255,255,0.7)',
                }}
                initial={{ top: '-5%', opacity: 0 }}
                animate={{ 
                  top: '105%',
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.1 + (i * 0.04),
                  ease: 'easeIn',
                }}
              />
            ))}

            {/* Horizontal scan line effect - faster */}
            <motion.div
              className="absolute left-0 right-0 h-0.5"
              style={{ backgroundColor: '#ff3333' }}
              initial={{ top: '0%', opacity: 0 }}
              animate={{ 
                top: '100%',
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 0.8,
                ease: 'linear',
              }}
            />
            
            {/* Second scan line - orange */}
            <motion.div
              className="absolute left-0 right-0 h-px"
              style={{ backgroundColor: '#ff3333' }}
              initial={{ top: '0%', opacity: 0 }}
              animate={{ 
                top: '100%',
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: 1.0,
                delay: 0.15,
                ease: 'linear',
              }}
            />

            {/* Glitch lines during cascade - more dynamic */}
            {phase >= 1 && [...Array(8)].map((_, i) => (
              <motion.div
                key={`glitch-${i}`}
                className="absolute left-0 right-0"
                style={{ 
                  top: `${12 + i * 11}%`,
                  height: i % 2 === 0 ? '2px' : '1px',
                  backgroundColor: i % 3 === 0 ? '#ff3333' : '#ff3333',
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1.2, 0.8, 0],
                  opacity: [0, 0.7, 0.5, 0],
                  x: ['-15%', '5%', '-5%', '15%'],
                }}
                transition={{
                  duration: 0.25,
                  delay: 0.3 + i * 0.08,
                  ease: 'linear',
                }}
              />
            ))}
          </>
        )}

        {/* Phase 2: ERROR message with stylized font */}
        {phase >= 2 && phase < 4 && (
          <motion.div
            className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glitch/flicker effect - more dynamic */}
            <motion.div
              className="relative"
              animate={{
                x: [0, -5, 8, -3, 0, 6, -4, 2, 0],
                y: [0, 2, -2, 1, -1, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: 8,
                repeatType: 'mirror',
              }}
            >
              {/* Main error text - ÉCHEC in RED */}
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                style={{ 
                  color: '#ff3333',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  textShadow: `
                    0 0 20px rgba(255, 51, 51, 0.8),
                    0 0 40px rgba(255, 51, 51, 0.6),
                    0 0 60px rgba(255, 51, 51, 0.4),
                    4px 4px 0px #1a1a1a
                  `,
                  letterSpacing: '-0.05em',
                }}
                initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
              >
                SYSTÈME
              </motion.h1>
              
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter -mt-4 md:-mt-8"
                style={{ 
                  color: '#fff',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  textShadow: `
                    0 0 20px rgba(255, 255, 255, 0.5),
                    4px 4px 0px #ff3333
                  `,
                  letterSpacing: '-0.05em',
                }}
                initial={{ scale: 0.5, opacity: 0, rotateX: -45 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                CORROMPU
              </motion.h1>

              {/* RGB split effect layers - more dynamic */}
              <motion.h1
                className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter opacity-60"
                style={{ 
                  color: '#00ffff',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  letterSpacing: '-0.05em',
                  mixBlendMode: 'screen',
                }}
                animate={{
                  x: [-4, -6, -2, -5, -4],
                  y: [-2, -3, -1, -2, -2],
                  opacity: [0.6, 0.3, 0.6, 0.4, 0.6],
                }}
                transition={{ duration: 0.1, repeat: Infinity }}
              >
                SYSTÈME
              </motion.h1>
              
              {/* Second RGB layer - magenta */}
              <motion.h1
                className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter opacity-50"
                style={{ 
                  color: '#ff00ff',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  letterSpacing: '-0.05em',
                  mixBlendMode: 'screen',
                }}
                animate={{
                  x: [4, 6, 2, 5, 4],
                  y: [2, 3, 1, 2, 2],
                  opacity: [0.5, 0.3, 0.5, 0.4, 0.5],
                }}
                transition={{ duration: 0.12, repeat: Infinity }}
              >
                SYSTÈME
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-8 text-lg md:text-xl font-mono text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Le paradis est tombé. Bienvenue dans la réalité.
            </motion.p>

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div 
                className="w-full h-full"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                }}
              />
            </div>

            {/* Noise overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
          </motion.div>
        )}

        {/* Phase 3: Fade to complete darkness */}
        {phase >= 3 && phase < 4 && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        )}

        {/* Phase 4: Terminal boot sequence */}
        {phase >= 4 && (
          <motion.div
            className="absolute inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="font-mono text-sm md:text-base max-w-2xl px-6" style={{ color: '#ff3333' }}>
              <TerminalBootSequence />
            </div>

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-px"
                  style={{ backgroundColor: '#ff3333', marginTop: i % 2 === 0 ? '2px' : '0' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

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
                <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ backgroundColor: '#ff3333' }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
