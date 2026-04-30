import type { PersonalInfo } from '@/types';

export const personal: PersonalInfo = {
  name: 'Ampon Khonkaen',
  firstName: 'Ampon',
  title: 'Frontend Developer',
  taglines: [
    'Frontend Developer',
    'React & TypeScript Enthusiast',
    'UI/UX Focused Engineer',
    'Aspiring Full Stack Developer',
    'Building Great Web Experiences',
  ],
  bio: `Passionate frontend developer with a strong focus on building clean,
  performant, and accessible web applications. I love crafting pixel-perfect UIs
  and am actively expanding my skills into full-stack development with .NET Core
  and Express.js.`,
  location: 'Remote — Open to Worldwide',
  email: 'ampon@example.com',
  availableForWork: true,
  resumeUrl: '/resume.pdf',
  stats: [
    { label: 'Years Experience', value: '2',  suffix: '+' },
    { label: 'Projects Shipped', value: '15', suffix: '+' },
    { label: 'Technologies',     value: '12', suffix: '+' },
    { label: 'Cups of Coffee',   value: '∞' },
  ] as const,
  social: [
    { platform: 'github',   url: 'https://github.com/ampon',         label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/ampon',    label: 'LinkedIn' },
    { platform: 'twitter',  url: 'https://twitter.com/ampon',        label: 'Twitter' },
    { platform: 'email',    url: 'mailto:ampon@example.com',         label: 'Email' },
  ] as const,
} as const;
