// Site configuration - Easy to customize
export const siteConfig = {
  name: 'Alex Manfait',
  title: 'Security Researcher & Developer',
  email: 'contact@alexmanfait.com',
  location: 'France',
};

// The paradise quote
export const paradiseContent = {
  quote: "In the garden of digital Eden, knowledge is both the fruit and the serpent.",
  author: "Alex Manfait",
  buttonText: "Take a bite",
  subtitle: "...and fall from grace",
};

// Dark world content
export const darkWorldContent = {
  terminalGreeting: [
    '> Initializing secure connection...',
    '> Bypassing firewalls...',
    '> Access granted.',
    '> Welcome to the other side.',
  ],
  tagline: 'Where others see walls, I see doors.',
};

// About section
export const aboutContent = {
  headline: 'I break things to understand how they work.',
  description: `Security researcher by profession, hacker by curiosity. I navigate the shadows 
of digital infrastructure to expose vulnerabilities before malicious actors do. 
My work exists in the space between chaos and protection.`,
  stats: [
    { value: '50+', label: 'Vulnerabilities Reported' },
    { value: '12', label: 'CVEs Discovered' },
    { value: '99.9%', label: 'Success Rate' },
  ],
};

// Skills organized by category
export const skillsContent = {
  categories: [
    {
      name: 'Offensive Security',
      icon: '⚔️',
      skills: ['Penetration Testing', 'Red Team Operations', 'Social Engineering', 'Exploit Development', 'Reverse Engineering'],
    },
    {
      name: 'Defensive Security',
      icon: '🛡️',
      skills: ['Incident Response', 'Threat Hunting', 'SIEM/SOC', 'Malware Analysis', 'Forensics'],
    },
    {
      name: 'Programming',
      icon: '💻',
      skills: ['Python', 'Rust', 'Assembly', 'C/C++', 'Go', 'JavaScript', 'Bash'],
    },
    {
      name: 'Infrastructure',
      icon: '🌐',
      skills: ['Network Security', 'Cloud Security', 'Container Security', 'Zero Trust', 'PKI'],
    },
  ],
};

// Projects
export const projectsContent = {
  featured: [
    {
      title: 'Ghost Protocol',
      description: 'Advanced network reconnaissance framework with stealth capabilities and automated vulnerability mapping.',
      tags: ['Python', 'Network', 'Stealth'],
      status: 'Active',
    },
    {
      title: 'CryptoBreaker',
      description: 'Cryptographic analysis toolkit for identifying weak implementations in enterprise applications.',
      tags: ['Rust', 'Cryptography', 'Analysis'],
      status: 'Active',
    },
    {
      title: 'PhantomShell',
      description: 'Undetectable reverse shell with encrypted communications and anti-forensics features.',
      tags: ['C', 'Assembly', 'Evasion'],
      status: 'Research',
    },
    {
      title: 'VulnHunter',
      description: 'Automated vulnerability scanner with machine learning-based false positive reduction.',
      tags: ['Python', 'ML', 'Automation'],
      status: 'Active',
    },
  ],
};

// Experience timeline
export const experienceContent = {
  timeline: [
    {
      year: '2024',
      role: 'Senior Security Researcher',
      company: 'Classified',
      description: 'Leading red team operations and vulnerability research for critical infrastructure.',
    },
    {
      year: '2022',
      role: 'Penetration Tester',
      company: 'CyberDefense Corp',
      description: 'Conducted security assessments for Fortune 500 companies.',
    },
    {
      year: '2020',
      role: 'Security Analyst',
      company: 'ThreatWatch',
      description: 'Threat hunting and incident response for enterprise clients.',
    },
    {
      year: '2018',
      role: 'Bug Bounty Hunter',
      company: 'Independent',
      description: 'Started career finding vulnerabilities in major tech platforms.',
    },
  ],
  certifications: ['OSCP', 'OSCE', 'CRTO', 'GPEN', 'CEH'],
};

// Contact
export const contactContent = {
  headline: 'Got a security problem?',
  subheadline: "Let's talk.",
  pgpNote: 'PGP key available upon request for sensitive communications.',
  socials: [
    { name: 'GitHub', url: 'https://github.com', handle: '@alexmanfait' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: '/in/alexmanfait' },
    { name: 'Twitter', url: 'https://twitter.com', handle: '@alexmanfait' },
  ],
  status: 'Available for consulting',
};
