export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  summary: string;
  details: string;
};

export const projects: Project[] = [
  {
    slug: 'projet-1',
    title: 'Titre du projet 1',
    category: 'Sécurité',
    description: 'Description courte du projet 1 mise en forme comme un résumé clair et professionnel.',
    year: '2024',
    tags: ['Analyse', 'Détection', 'Audit'],
    summary: 'Résumé du projet 1 avec les objectifs et le résultat principal.',
    details:
      'Détails du projet 1 : contexte, rôle, technologies et résultats. Texte placeholder pour montrer le format.',
  },
  {
    slug: 'projet-2',
    title: 'Titre du projet 2',
    category: 'Infrastructure',
    description: 'Description courte du projet 2 avec une formulation commerciale et technique.',
    year: '2023',
    tags: ['Cloud', 'Monitoring', 'Sécurité'],
    summary: 'Résumé du projet 2 avec objectifs de conformité et amélioration.',
    details:
      'Détails du projet 2 : architecture, enjeux, démarche et livrables. Exemple de texte neutre et propre.',
  },
  {
    slug: 'projet-3',
    title: 'Titre du projet 3',
    category: 'Produit',
    description: 'Description courte du projet 3 orientée produit et expérience utilisateur.',
    year: '2024',
    tags: ['Pentest', 'DevSecOps', 'Automatisation'],
    summary: 'Résumé du projet 3 axé sur l’impact et la valeur apportée.',
    details:
      'Détails du projet 3 : processus, collaboration et résultats. Placeholder neutre pour la page de démonstration.',
  },
  {
    slug: 'projet-4',
    title: 'Titre du projet 4',
    category: 'Opérationnel',
    description: 'Description courte du projet 4 avec un ton professionnel et sobre.',
    year: '2023',
    tags: ['Orchestration', 'Alerting', 'Analyse'],
    summary: 'Résumé du projet 4 décrivant les gains et la valeur métier.',
    details:
      'Détails du projet 4 : livrables, méthodologie et présentation des résultats. Texte générique propre.',
  },
];
