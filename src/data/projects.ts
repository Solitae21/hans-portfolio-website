import type { Project, ProjectFilter } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'canvus',
    title: 'Canvus',
    description:
      'Real-time collaborative whiteboarding and flowchart app. Multiple users co-edit a shared canvas with sub-50ms sync, live cursors, presenter mode, threaded comments, and PNG/SVG/PDF export. Powered by Yjs CRDTs and Socket.IO over an Express + Prisma backend.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Konva', 'Yjs', 'Socket.IO', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Redis'],
    imageUrl: '/projects/canvus.png',
    liveUrl: 'https://canvus-henna.vercel.app/',
    githubUrl: 'https://github.com/Solitae21/canvus',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'asialink-auction',
    title: 'Asialink Car Auction',
    description:
      'Public online auction platform for Asialink Finance where users browse and bid on repossessed vehicles. Built as a React SPA with Redux Toolkit and RTK Query for data fetching, caching, and auth, with a Material UI interface. Developed as part of my work at Asialink Finance.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI'],
    imageUrl: '/projects/asialink-auction.png',
    liveUrl: 'https://auction.asialinkfinance.com.ph/',
    featured: true,
    category: 'frontend',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'This very portfolio — a modern, animated single-page app built with React TypeScript, Tailwind CSS, and Framer Motion.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Solitae21/hans-portfolio-website',
    featured: false,
    category: 'frontend',
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  'all', 'frontend', 'fullstack',
] as const;
