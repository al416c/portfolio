'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { ISourceOptions } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  id: string;
  options: ISourceOptions;
  className?: string;
}

export function useParticlesReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  return ready;
}

export default function ParticleBackground({
  id,
  options,
  className = '',
}: ParticleBackgroundProps) {
  return (
    <Particles
      id={id}
      className={`absolute inset-0 ${className}`}
      options={options}
    />
  );
}
