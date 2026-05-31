'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-end px-6 py-5 md:px-12"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-2 py-1.5 text-sm text-slate-200 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.22)]">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-cyan-200'
                  : 'text-slate-300 hover:text-slate-100'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-500/15"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
