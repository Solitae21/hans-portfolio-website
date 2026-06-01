import type { PersonalInfo } from '@/types';

export const personal: PersonalInfo = {
  name: 'Hans Angelo Amponin',
  firstName: 'Hans',
  title: 'Frontend Developer',
  taglines: [
    'Frontend Developer',
    'React & TypeScript Enthusiast',
    'UI/UX Focused Engineer',
    'Aspiring Full Stack Developer',
    'Building Great Web Experiences',
  ],
  bio: `Frontend Developer with 2 years of professional experience building production-grade React/TypeScript applications in a fast-paced fintech environment. Computer Engineering graduate now expanding into full-stack development, with growing skills across backend technologies, APIs, and databases. Strong in problem-solving, debugging, and writing scalable, maintainable code in collaborative teams.`,
  location: 'Meycauayan, Bulacan, Philippines',
  email: 'hansamponin@gmail.com',
  availableForWork: true,
  resumeUrl: '/Hans_Angelo_Amponin_Resume_2026.pdf',
  stats: [
    { label: 'Years Experience', value: '2' },
    { label: 'Projects Shipped',    value: '5' },
    { label: 'Technologies',     value: '12', suffix: '+' },
    { label: 'Cups of Coffee',   value: '∞' },
  ] as const,
  social: [
    { platform: 'github',   url: 'https://github.com/Solitae21',                              label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/hans-angelo-amponin-057b78277',     label: 'LinkedIn' },
    { platform: 'email',    url: 'mailto:hansamponin@gmail.com',                              label: 'Email' },
  ] as const,
} as const;
