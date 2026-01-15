'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { paradiseContent } from '@/config/content';

interface ParadiseWorldProps {
  onTransition: () => void;
}

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  type: 'leaf' | 'petal' | 'seed';
}

interface Bird {
  id: number;
  y: number;
  delay: number;
  duration: number;
}

function generateParticles(): Particle[] {
  const types: ('leaf' | 'petal' | 'seed')[] = ['leaf', 'petal', 'seed'];
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 8,
    size: 8 + Math.random() * 12,
    type: types[Math.floor(Math.random() * types.length)],
  }));
}

function generateBirds(): Bird[] {
  return Array.from({ length: 4 }, (_, i) => ({
    id: i,
    y: 8 + Math.random() * 25,
    delay: i * 3,
    duration: 18 + Math.random() * 8,
  }));
}

export default function ParadiseWorld({ onTransition }: ParadiseWorldProps) {
  const [particles] = useState<Particle[]>(() => generateParticles());
  const [birds] = useState<Bird[]>(() => generateBirds());
  const [isHovering, setIsHovering] = useState(false);

  const renderParticle = (particle: Particle) => {
    switch (particle.type) {
      case 'leaf':
        return (
          <svg width={particle.size} height={particle.size * 1.4} viewBox="0 0 20 28">
            <path
              d="M10 0 C10 0 20 8 20 18 C20 24 15 28 10 28 C5 28 0 24 0 18 C0 8 10 0 10 0 Z"
              fill="#6ab04c"
            />
            <path d="M10 4 L10 24" stroke="#4a8035" strokeWidth="0.8" />
          </svg>
        );
      case 'petal':
        return (
          <svg width={particle.size} height={particle.size} viewBox="0 0 20 20">
            <ellipse cx="10" cy="10" rx="8" ry="5" fill="#ffb6c1" opacity="0.8" />
          </svg>
        );
      case 'seed':
        return (
          <svg width={particle.size * 0.6} height={particle.size} viewBox="0 0 12 20">
            <ellipse cx="6" cy="14" rx="3" ry="5" fill="#d4a574" />
            <path d="M6 9 Q8 5 6 0 Q4 5 6 9" fill="#f5deb3" opacity="0.6" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-sky-50 to-amber-50" />

      {/* Soft sun glow */}
      <div className="absolute top-12 right-16 md:top-20 md:right-32">
        <motion.div
          className="w-24 h-24 md:w-40 md:h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,236,179,1) 0%, rgba(255,223,128,0.6) 40%, transparent 70%)',
            boxShadow: '0 0 100px 50px rgba(255,220,128,0.3)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Distant mountains */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        style={{ height: '60vh' }}
      >
        {/* Far mountains - misty */}
        <path
          d="M0 500 L0 350 Q180 250 360 300 Q540 200 720 280 Q900 180 1080 260 Q1260 200 1440 250 L1440 500 Z"
          fill="#b8d4e3"
          opacity="0.4"
        />
        {/* Mid mountains */}
        <path
          d="M0 500 L0 380 Q200 280 400 340 Q600 240 800 320 Q1000 220 1200 300 Q1350 250 1440 280 L1440 500 Z"
          fill="#8fbc8f"
          opacity="0.5"
        />
        {/* Near hills */}
        <path
          d="M0 500 L0 420 Q150 350 300 390 Q500 320 700 380 Q900 300 1100 360 Q1300 310 1440 340 L1440 500 Z"
          fill="#5d8a5d"
          opacity="0.7"
        />
        {/* Closest grass hill */}
        <path
          d="M0 500 L0 450 Q200 400 400 430 Q700 380 1000 420 Q1250 390 1440 410 L1440 500 Z"
          fill="#4a7c4a"
        />
      </svg>

      {/* Trees silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end pointer-events-none" style={{ height: '45vh' }}>
        {[...Array(9)].map((_, i) => {
          const height = 120 + (Math.sin(i * 1.2) * 40) + (i % 3) * 30;
          const opacity = 0.6 + (i % 2) * 0.2;
          return (
            <motion.svg
              key={i}
              width={60 + i * 5}
              height={height}
              viewBox="0 0 60 150"
              className="flex-shrink-0"
              style={{ 
                opacity,
                marginBottom: `${Math.sin(i * 0.7) * 20}px`,
              }}
              animate={{
                rotate: [0, 0.5, -0.5, 0],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Trunk */}
              <rect x="25" y="90" width="10" height="60" fill="#5d4037" rx="2" />
              {/* Foliage layers */}
              <ellipse cx="30" cy="75" rx="28" ry="22" fill="#2e7d32" />
              <ellipse cx="30" cy="55" rx="24" ry="20" fill="#388e3c" />
              <ellipse cx="30" cy="38" rx="18" ry="16" fill="#43a047" />
              <ellipse cx="30" cy="24" rx="12" ry="12" fill="#4caf50" />
            </motion.svg>
          );
        })}
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{ left: `${particle.x}%` }}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(particle.id * 0.5) * 80, Math.cos(particle.id * 0.3) * -60, Math.sin(particle.id * 0.7) * 50],
            rotate: [0, 360, 720],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {/* Birds */}
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute pointer-events-none"
          style={{ top: `${bird.y}%` }}
          initial={{ x: '-5vw' }}
          animate={{ x: '105vw' }}
          transition={{
            duration: bird.duration,
            repeat: Infinity,
            delay: bird.delay,
            ease: 'linear',
          }}
        >
          <motion.svg
            width="24"
            height="12"
            viewBox="0 0 24 12"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          >
            <path
              d="M0 6 Q6 0 12 6 Q18 0 24 6"
              fill="none"
              stroke="#444"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* Small flowers in grass */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-around pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            style={{ marginBottom: `${(i * 7) % 20}px` }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="16" height="20" viewBox="0 0 16 20">
              {/* Stem */}
              <path d="M8 20 L8 10" stroke="#3d6b3d" strokeWidth="1.5" />
              {/* Flower petals */}
              {i % 3 === 0 ? (
                // Daisy
                <>
                  {[...Array(6)].map((_, j) => (
                    <ellipse
                      key={j}
                      cx="8"
                      cy="5"
                      rx="2"
                      ry="5"
                      fill="white"
                      transform={`rotate(${j * 60} 8 7)`}
                    />
                  ))}
                  <circle cx="8" cy="7" r="2.5" fill="#ffd700" />
                </>
              ) : i % 3 === 1 ? (
                // Pink flower
                <>
                  {[...Array(5)].map((_, j) => (
                    <ellipse
                      key={j}
                      cx="8"
                      cy="4"
                      rx="2.5"
                      ry="4"
                      fill="#ffb6c1"
                      transform={`rotate(${j * 72} 8 7)`}
                    />
                  ))}
                  <circle cx="8" cy="7" r="2" fill="#ff69b4" />
                </>
              ) : (
                // Blue flower
                <>
                  {[...Array(5)].map((_, j) => (
                    <ellipse
                      key={j}
                      cx="8"
                      cy="4"
                      rx="2"
                      ry="4"
                      fill="#87ceeb"
                      transform={`rotate(${j * 72} 8 7)`}
                    />
                  ))}
                  <circle cx="8" cy="7" r="2" fill="#4169e1" />
                </>
              )}
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Butterfly */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: ['10vw', '40vw', '70vw', '30vw', '10vw'],
          y: ['30vh', '45vh', '25vh', '50vh', '30vh'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          animate={{ scaleX: [1, 0.3, 1] }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          {/* Left wing */}
          <ellipse cx="8" cy="10" rx="7" ry="9" fill="#ff9800" opacity="0.8" />
          <ellipse cx="6" cy="8" rx="3" ry="4" fill="#ffeb3b" opacity="0.6" />
          {/* Right wing */}
          <ellipse cx="22" cy="10" rx="7" ry="9" fill="#ff9800" opacity="0.8" />
          <ellipse cx="24" cy="8" rx="3" ry="4" fill="#ffeb3b" opacity="0.6" />
          {/* Body */}
          <ellipse cx="15" cy="12" rx="2" ry="8" fill="#333" />
        </motion.svg>
      </motion.div>

      {/* Central content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Quote */}
          <motion.blockquote
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-6 leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            &ldquo;{paradiseContent.quote}&rdquo;
          </motion.blockquote>

          <motion.p
            className="text-base md:text-lg text-gray-500 mb-14 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            — {paradiseContent.author}
          </motion.p>

          {/* The forbidden button */}
          <motion.button
            onClick={onTransition}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative px-10 py-4 bg-white/90 backdrop-blur-sm rounded-full 
                       border border-gray-200 text-gray-600 font-medium text-base md:text-lg
                       shadow-lg transition-all duration-700 cursor-pointer
                       hover:shadow-2xl hover:border-red-200 hover:text-red-700
                       hover:bg-red-50/80"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              {paradiseContent.buttonText}
              
              {/* Apple icon that turns bitten on hover */}
              <motion.svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                className="transition-colors duration-500"
                fill={isHovering ? '#dc2626' : '#9ca3af'}
              >
                {!isHovering ? (
                  // Full apple
                  <>
                    <path d="M9 0 C9 0 11 2 11 3.5 C11 4.5 10 5 9 5 C8 5 7 4.5 7 3.5 C7 2 9 0 9 0Z" />
                    <path d="M9 5 C13 5 17 8 17 13 C17 18 13 22 9 22 C5 22 1 18 1 13 C1 8 5 5 9 5Z" />
                  </>
                ) : (
                  // Bitten apple
                  <>
                    <path d="M9 0 C9 0 11 2 11 3.5 C11 4.5 10 5 9 5 C8 5 7 4.5 7 3.5 C7 2 9 0 9 0Z" />
                    <path d="M9 5 C13 5 17 8 17 13 C17 18 13 22 9 22 C5 22 1 18 1 13 C1 8 5 5 9 5 
                            M14 9 Q11 10 12 13 Q11 11 14 9Z" />
                    <circle cx="13" cy="11" r="3" fill="white" />
                  </>
                )}
              </motion.svg>
            </span>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-red-500/10 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 0.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.p
            className="mt-10 text-sm text-gray-400 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            {paradiseContent.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.05) 100%)',
        }}
      />
    </motion.div>
  );
}
