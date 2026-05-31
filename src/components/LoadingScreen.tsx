'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#081624]">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Pulsing rings */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute h-16 w-16 rounded-full border border-cyan-400/30"
            animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute h-16 w-16 rounded-full border border-cyan-300/20"
            animate={{ scale: [1, 1.9], opacity: [0.3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.4,
            }}
          />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-cyan-300/50 [font-family:var(--font-mono)]">
          Initialisation du système...
        </p>
      </motion.div>
    </div>
  );
}
