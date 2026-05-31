'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="border-t border-slate-800/50 px-6 py-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-300">
            À propos
          </span>
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">Profil</h2>
        <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
          Passionné par la cybersécurité et le développement, je me spécialise
          dans l&apos;analyse de menaces, les tests de pénétration et la
          conception de systèmes sécurisés. Mon approche combine expertise
          technique et vision stratégique pour protéger les infrastructures
          numériques.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          Fort d&apos;une expérience en sécurité offensive et défensive, je
          développe des outils et des solutions qui renforcent la posture de
          sécurité des organisations. Toujours en veille sur les nouvelles
          menaces et technologies émergentes.
        </p>
      </motion.div>
    </div>
  );
}
