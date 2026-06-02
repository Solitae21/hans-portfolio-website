import type { SkillGroup } from '@/types';

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building exceptional user interfaces',
    skills: [
      { name: 'React JS / TS', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Redux Toolkit', level: 'advanced' },
      { name: 'RTK Query', level: 'advanced' },
      { name: 'Material UI', level: 'advanced' },
      { name: 'Bootstrap', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Framer Motion', level: 'intermediate' },
      { name: 'HTML / CSS', level: 'expert' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side development & databases',
    skills: [
      { name: '.NET Core', level: 'intermediate' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'C#', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    description: 'Development workflow & collaboration',
    skills: [
      { name: 'Git / GitHub', level: 'advanced' },
      { name: 'Azure Repos', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Vite', level: 'advanced' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Postman', level: 'advanced' },
      { name: 'npm / yarn', level: 'advanced' },
    ],
  },
] as const;
