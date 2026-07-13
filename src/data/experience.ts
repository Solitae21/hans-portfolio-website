import type { Experience } from '@/types';

export const experiences: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Asialink Finance Corporation',
    role: 'Web Developer',
    period: 'Sep 2024 – Present',
    description:
      'Developed multiple internal web applications for a nationwide finance company, improving operational efficiency across departments.',
    achievements: [
      'Built a Warehouse Monitoring System (React TS, MUI, Redux) end-to-end in 6 weeks, improving UI responsiveness and cutting employee navigation time by 30–40%',
      'Delivered a Fair Market Value Generator in under 2 months, eliminating manual spreadsheet workflows and reducing Sales team processing time by ~30%',
      'Redesigned and optimized a nationwide Master List Search application (2M+ records), directly supporting a 21% YoY company growth target through improved data-retrieval UX',
      'Developed an Auction Web Application frontend with a real-time bidding interface that onboarded 1,000+ active clients and measurably increased platform engagement',
      'Took on informal frontend technical leadership responsibilities by reviewing pull requests, shaping component architecture, and mentoring teammates during onboarding',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI'],
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
