// Site configuration - Easy to customize
export const siteConfig = {
  name: 'Alex Manfait',
  title: 'Chercheur en Sécurité & Développeur',
  email: 'contact@alexmanfait.com',
  location: 'France',
};

// The paradise quote
export const paradiseContent = {
  quote: "Dans le jardin de l'Éden numérique, la connaissance est à la fois le fruit et le serpent.",
  author: "Alex Manfait",
  buttonText: "Croquer la pomme",
  subtitle: "...et perdre l'innocence",
};

// Dark world content
export const darkWorldContent = {
  terminalGreeting: [
    '> Initialisation connexion sécurisée...',
    '> Contournement des pare-feux...',
    '> Accès autorisé.',
    '> Bienvenue de l\'autre côté.',
  ],
  tagline: 'Là où les autres voient des murs, je vois des portes.',
};

// About section
export const aboutContent = {
  headline: 'Je casse les choses pour comprendre comment elles fonctionnent.',
  description: `Chercheur en sécurité de profession, hacker par curiosité. Je navigue dans l'ombre
des infrastructures numériques pour exposer les vulnérabilités avant les acteurs malveillants.
Mon travail existe dans l'espace entre le chaos et la protection.`,
  stats: [
    { value: '50+', label: 'Vulnérabilités Signalées' },
    { value: '12', label: 'CVEs Découvertes' },
    { value: '99.9%', label: 'Taux de Réussite' },
  ],
};

// Skills organized by category
export const skillsContent = {
  categories: [
    {
      name: 'Sécurité Offensive',
      icon: '⚔️',
      skills: ['Tests d\'Intrusion', 'Opérations Red Team', 'Ingénierie Sociale', 'Développement d\'Exploits', 'Rétro-ingénierie'],
    },
    {
      name: 'Sécurité Défensive',
      icon: '🛡️',
      skills: ['Réponse aux Incidents', 'Threat Hunting', 'SIEM/SOC', 'Analyse de Malwares', 'Forensics'],
    },
    {
      name: 'Programmation',
      icon: '💻',
      skills: ['Python', 'Rust', 'Assembly', 'C/C++', 'Go', 'JavaScript', 'Bash'],
    },
    {
      name: 'Infrastructure',
      icon: '🌐',
      skills: ['Sécurité Réseau', 'Sécurité Cloud', 'Sécurité Conteneurs', 'Zero Trust', 'PKI'],
    },
  ],
};

// Projects
export const projectsContent = {
  featured: [
    {
      title: 'Ghost Protocol',
      description: 'Framework avancé de reconnaissance réseau avec capacités furtives et cartographie automatisée des vulnérabilités.',
      tags: ['Python', 'Réseau', 'Furtivité'],
      status: 'Actif',
    },
    {
      title: 'CryptoBreaker',
      description: 'Boîte à outils d\'analyse cryptographique pour identifier les implémentations faibles dans les applications d\'entreprise.',
      tags: ['Rust', 'Cryptographie', 'Analyse'],
      status: 'Actif',
    },
    {
      title: 'PhantomShell',
      description: 'Shell inversé indétectable avec communications chiffrées et fonctionnalités anti-forensics.',
      tags: ['C', 'Assembly', 'Évasion'],
      status: 'Recherche',
    },
    {
      title: 'VulnHunter',
      description: 'Scanner de vulnérabilités automatisé avec réduction des faux positifs basée sur le machine learning.',
      tags: ['Python', 'ML', 'Automatisation'],
      status: 'Actif',
    },
  ],
};

// Experience timeline
export const experienceContent = {
  timeline: [
    {
      year: '2024',
      role: 'Chercheur Sécurité Senior',
      company: 'Confidentiel',
      description: 'Direction des opérations red team et recherche de vulnérabilités pour infrastructures critiques.',
    },
    {
      year: '2022',
      role: 'Pentester',
      company: 'CyberDefense Corp',
      description: 'Audits de sécurité pour des entreprises du Fortune 500.',
    },
    {
      year: '2020',
      role: 'Analyste Sécurité',
      company: 'ThreatWatch',
      description: 'Threat hunting et réponse aux incidents pour clients entreprise.',
    },
    {
      year: '2018',
      role: 'Bug Bounty Hunter',
      company: 'Indépendant',
      description: 'Début de carrière en découvrant des vulnérabilités sur les grandes plateformes tech.',
    },
  ],
  certifications: ['OSCP', 'OSCE', 'CRTO', 'GPEN', 'CEH'],
};

// Contact
export const contactContent = {
  headline: 'Un problème de sécurité ?',
  subheadline: 'Parlons-en.',
  pgpNote: 'Clé PGP disponible sur demande pour les communications sensibles.',
  socials: [
    { name: 'GitHub', url: 'https://github.com', handle: '@alexmanfait' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: '/in/alexmanfait' },
    { name: 'Twitter', url: 'https://twitter.com', handle: '@alexmanfait' },
  ],
  status: 'Disponible pour consulting',
};
