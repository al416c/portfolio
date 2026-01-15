'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports to avoid SSR issues
const ParadiseWorld = dynamic(() => import('@/components/ParadiseWorld'), { ssr: false });
const TransitionEffect = dynamic(() => import('@/components/TransitionEffect'), { ssr: false });
const DarkWorld = dynamic(() => import('@/components/DarkWorld'), { ssr: false });

type WorldState = 'paradise' | 'transitioning' | 'dark';

export default function Home() {
  const [worldState, setWorldState] = useState<WorldState>('paradise');

  const handleTransition = useCallback(() => {
    setWorldState('transitioning');
  }, []);

  const handleTransitionComplete = useCallback(() => {
    setWorldState('dark');
  }, []);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {worldState === 'paradise' && (
          <ParadiseWorld key="paradise" onTransition={handleTransition} />
        )}
      </AnimatePresence>

      <TransitionEffect 
        isActive={worldState === 'transitioning'} 
        onComplete={handleTransitionComplete} 
      />

      <AnimatePresence>
        {worldState === 'dark' && (
          <DarkWorld key="dark" />
        )}
      </AnimatePresence>
    </main>
  );
}
