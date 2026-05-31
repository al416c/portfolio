export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  summary: string;
  details: string;
  highlights: string[];
  color: string;
  icon: string;
};

export const projects: Project[] = [
  {
    slug: 'sentinelog',
    title: 'Sentinelog',
    category: 'SaaS / SIEM',
    description:
      "Plateforme SaaS SIEM pour l'agrégation de logs, la détection de menaces en temps réel et la visualisation d'alertes de sécurité.",
    year: '2024',
    tags: ['SIEM', 'Log Analysis', 'Threat Detection', 'Cloud', 'Dashboard'],
    summary:
      'Sentinelog est une solution SaaS de Security Information and Event Management conçue pour centraliser et analyser les événements de sécurité en temps réel.',
    details:
      "Architecture de collecte de logs distribuée avec moteur de corrélation d'événements, alerting intelligent et tableaux de bord interactifs. Intégration de sources multiples (firewalls, IDS/IPS, endpoints) avec normalisation automatique et détection d'anomalies basée sur des règles configurables.",
    highlights: [
      'Collecte de logs multi-sources',
      'Détection de menaces temps réel',
      'Dashboards interactifs',
      'Alerting intelligent',
    ],
    color: '#22d3ee',
    icon: '🛡️',
  },
  {
    slug: 'blackout',
    title: 'Blackout',
    category: 'Sécurité Offensive',
    description:
      "Outil de simulation d'attaques et d'audit de sécurité pour tester la résilience des infrastructures réseau.",
    year: '2024',
    tags: ['Red Team', 'Pentest', 'Exploitation', 'Python', 'Réseau'],
    summary:
      'Blackout est un framework de sécurité offensive conçu pour automatiser les tests de pénétration et évaluer la posture de sécurité des systèmes.',
    details:
      "Suite d'outils modulaires pour la reconnaissance, l'exploitation et le post-exploitation. Inclut des modules de scan réseau, d'exploitation de vulnérabilités connues, et de génération de rapports d'audit détaillés avec recommandations de remédiation.",
    highlights: [
      'Scan réseau automatisé',
      'Exploitation modulaire',
      "Rapports d'audit détaillés",
      'Post-exploitation',
    ],
    color: '#f43f5e',
    icon: '⚡',
  },
  {
    slug: 'dataset-streamlit',
    title: 'Dataset Streamlit',
    category: 'Data / Visualisation',
    description:
      'Dashboard interactif de visualisation et d\'analyse de datasets avec Streamlit et Python.',
    year: '2023',
    tags: ['Python', 'Streamlit', 'Data Analysis', 'Pandas', 'Visualisation'],
    summary:
      "Application de data visualisation construite avec Streamlit permettant l'exploration interactive de datasets complexes.",
    details:
      "Interface intuitive pour le chargement, le filtrage et la visualisation de données. Intègre des graphiques dynamiques, des statistiques descriptives automatiques et des fonctionnalités d'export. Pipeline de traitement de données avec Pandas pour la transformation et le nettoyage.",
    highlights: [
      'Visualisation interactive',
      'Analyse statistique',
      'Filtrage dynamique',
      'Export de données',
    ],
    color: '#a78bfa',
    icon: '📊',
  },
  {
    slug: 'chrono-paradox',
    title: 'Chrono-Paradox',
    category: 'Développement / Jeu',
    description:
      "Jeu interactif basé sur la manipulation temporelle et la résolution d'énigmes paradoxales.",
    year: '2023',
    tags: ['Game Dev', 'JavaScript', 'Interactive', 'Creative', 'UI/UX'],
    summary:
      'Chrono-Paradox est un jeu de puzzle interactif où le joueur manipule le temps pour résoudre des paradoxes et progresser à travers des niveaux.',
    details:
      "Mécaniques de gameplay innovantes basées sur la manipulation temporelle : rembobinage, boucles temporelles et paradoxes. Design de niveaux progressif avec une difficulté croissante et des éléments narratifs intégrés. Interface immersive avec effets visuels et sonores synchronisés.",
    highlights: [
      'Mécaniques temporelles',
      'Design de niveaux',
      'Narration interactive',
      'Effets visuels immersifs',
    ],
    color: '#fbbf24',
    icon: '⏳',
  },
  {
    slug: 'site-php-nova',
    title: 'Site PHP Nova',
    category: 'Web / Full-Stack',
    description:
      'Application web full-stack développée en PHP avec architecture MVC et base de données relationnelle.',
    year: '2023',
    tags: ['PHP', 'MySQL', 'MVC', 'HTML/CSS', 'Full-Stack'],
    summary:
      "Nova est une application web complète construite avec PHP suivant une architecture MVC propre et moderne.",
    details:
      "Application web avec système d'authentification, gestion de contenu dynamique et interface d'administration. Architecture MVC avec routing personnalisé, ORM léger pour l'interaction base de données et système de templates pour le rendu des vues. Déployée avec optimisations de performance et sécurité renforcée.",
    highlights: [
      'Architecture MVC',
      'Authentification sécurisée',
      'Gestion de contenu',
      "Panel d'administration",
    ],
    color: '#34d399',
    icon: '🌐',
  },
];
