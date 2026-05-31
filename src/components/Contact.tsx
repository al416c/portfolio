'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contact — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:email@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div id="contact" className="border-t border-slate-800/50 px-6 py-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan-300">
              Contact
            </span>
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Prenons contact
          </h2>
          <p className="mt-4 text-slate-400">
            Prêt pour discuter d&apos;opportunités et de projets.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Nom"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="cyber-input"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="cyber-input"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <textarea
              placeholder="Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="cyber-input resize-none"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.25)',
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl border border-cyan-400/40 bg-cyan-500/15 py-3.5 font-medium text-cyan-300 transition hover:bg-cyan-500/25"
            >
              {submitted ? '✓ Envoyé' : 'Envoyer'}
            </motion.button>
          </motion.div>
        </form>

        <div className="mt-10 flex justify-center gap-3">
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Twitter', href: '#' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-slate-600/40 bg-slate-700/20 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-slate-700/40 hover:text-slate-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
