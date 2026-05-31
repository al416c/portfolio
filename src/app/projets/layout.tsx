'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarWidth(0); // On mobile, sidebar overlays
      } else {
        // We don't easily know if the user collapsed it without context, 
        // but we'll assume default open (280) for layout spacing purposes.
        // A more advanced approach would use a Context, but this is fine.
        setSidebarWidth(280); 
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#06090e] font-sans text-slate-100">
      <Sidebar />
      
      {/* Main Content Area */}
      <motion.main
        className="flex-1 transition-all duration-300 ease-in-out"
        style={{ paddingLeft: sidebarWidth > 0 ? '280px' : '0px' }} // Adjusted dynamically on desktop vs mobile
      >
        {/* Background effects specific to projects area */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.03),transparent_50%)]" />
        
        {/* Centered Card Container */}
        <div className="relative min-h-screen w-full p-4 sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-800/40 bg-[#0a0f1a]/80 p-6 shadow-2xl backdrop-blur-2xl sm:p-10 lg:p-14"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.main>
    </div>
  );
}
