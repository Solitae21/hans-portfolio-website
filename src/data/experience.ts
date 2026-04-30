import type { Experience } from '@/types';

export const experiences: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Asialink Finance Corporation',
    role: 'Frontend Developer',
    period: 'Sep 2024 – Present',
    description:
      'Developed multiple internal web applications for a nationwide finance company, improving operational efficiency across departments.',
    achievements: [
      'Developed the frontend of a Warehouse Monitoring System using React TS, MUI, and Redux within 1.5 months, improving UI responsiveness and reducing employee navigation time by 30–40%',
      'Built the frontend for a Fair Market Value Generator using React TS, MUI, and Redux in under 1 month, streamlining data workflows and cutting manual processing time for Sales teams by 40%',
      'Redesigned and optimized the nationwide Master List Search Web Application using React TS, MUI, and Redux, enhancing data retrieval workflows and supporting the company\'s 21% YoY growth through improved user productivity',
      'Developed a frontend for a scalable Auction Web Application using React TS, MUI, and Redux, delivering an intuitive bidding interface that attracted 1,000+ active clients and increased platform engagement significantly',
    ],
    technologies: ['React', 'TypeScript', 'MUI', 'Redux Toolkit'],
    type: 'work',
    current: true,
  },
  {
    id: 'edu-1',
    company: 'Bulacan State University',
    role: 'B.S. Computer Engineering',
    period: 'Aug 2020 – Jul 2024',
    description:
      'Computer Engineering graduate with focus on software engineering, algorithms, and web technologies.',
    achievements: [
      'Top 10 Finalist, QOMPETE 2024 – National Student Startup Challenge (Apr 2024)',
      'Pitched "JumpStart," a freelancing platform for student freelancers',
    ],
    technologies: ['C#', 'Java', 'Python', 'SQL', 'Data Structures'],
    type: 'education',
    current: false,
  },
] as const;
