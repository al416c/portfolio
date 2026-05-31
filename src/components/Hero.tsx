'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedCounter({
  target,
  suffix = '',
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [hasAnimated, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8 inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-300">
            Profil
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          <span className="bg-gradient-to-br from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Alex Manfait
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Cybersecurity &amp; Development
        </p>

        <div className="mt-12 flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-8 py-3 font-medium text-cyan-300 backdrop-blur-sm transition hover:bg-cyan-500/25"
          >
            Contact
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-slate-600/40 bg-slate-700/20 px-8 py-3 font-medium text-slate-300 backdrop-blur-sm transition hover:bg-slate-700/40"
          >
            Voir CV
          </motion.a>
        </div>
      </motion.div>

      {/* Animated stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8"
      >
        {[
          { label: 'Projets', value: 5, suffix: '+' },
          { label: 'Technologies', value: 15, suffix: '+' },
          { label: 'Certifications', value: 3, suffix: '' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 border-b border-slate-800/50 pb-6"
          >
            <p className="text-4xl font-light text-white md:text-5xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 text-cyan-400/40"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
