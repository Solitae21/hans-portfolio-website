import type { PersonalInfo } from '@/types';

export const personal: PersonalInfo = {
  name: 'Hans Angelo Amponin',
  firstName: 'Hans',
  title: 'Software Engineer',
  taglines: [
    'Software Engineer',
    'React • TypeScript • Next.js',
    'Building Production-Ready Web Applications',
    'Growing into Full Stack & Cloud Engineering',
  ],
  bio: `I’m a Computer Engineering graduate with two years of professional experience developing applications in a fast-paced fintech environment. My focus is React and TypeScript, and I’m expanding into full-stack development across backend technologies, APIs, and databases.`,
  location: 'Meycauayan, Bulacan, Philippines',
  email: 'hansamponin@gmail.com',
  phone: '+63 976 625 1776',
  availableForWork: true,
  resumeUrl: '/Hans_Angelo_Amponin_Resume_2026.pdf',
  stats: [
    { label: 'Years Experience', value: '2' },
    { label: 'Projects Shipped', value: '5' },
    { label: 'Technologies', value: '12', suffix: '+' },
  ] as const,
  social: [
    {
      platform: 'github',
      url: 'https://github.com/Solitae21',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/hans-angelo-amponin-057b78277',
      label: 'LinkedIn',
    },
    { platform: 'email', url: 'mailto:hansamponin@gmail.com', label: 'Email' },
  ] as const,
} as const;
