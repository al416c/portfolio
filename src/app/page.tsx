'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParticlesReady } from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import SurveillanceScreen from '../components/SurveillanceScreen';
import ValidationScreen from '../components/ValidationScreen';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsPreview from '../components/ProjectsPreview';
import Contact from '../components/Contact';

type ViewState = 'surveillance' | 'validating' | 'portfolio';

export default function Home() {
  const ready = useParticlesReady();
  const [state, setState] = useState<ViewState>('surveillance');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [validationText, setValidationText] = useState(
    'VALIDATION DES ACCRÉDITATIONS'
  );
  const [validationGlitch, setValidationGlitch] = useState(true);

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

  if (!ready) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#081624] text-slate-100 [font-family:var(--font-inter)]">
      <Navbar />
      <AnimatePresence mode="wait">
        {state === 'surveillance' && (
          <SurveillanceScreen
            isTransitioning={isTransitioning}
            onIntercept={handleIntercept}
          />
        )}

        {state === 'validating' && (
          <ValidationScreen
            validationText={validationText}
            validationGlitch={validationGlitch}
            validationCommands={validationCommands}
          />
        )}

        {state === 'portfolio' && (
          <motion.section
            key="portfolio"
            className="relative min-h-screen bg-[#0a0f1a] text-slate-100"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.06),transparent_50%)]" />
            <div className="relative flex flex-col">
              <Hero />
              <About />
              <Skills />
              <ProjectsPreview />
              <Contact />
              <Footer />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
