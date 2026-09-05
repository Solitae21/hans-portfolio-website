import type { Project, ProjectFilter } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'canvus',
    title: 'Canvus',
    description:
      'A real-time collaborative whiteboard with live cursors, flowcharts, threaded comments, and export tools. Built with Next.js, Yjs, and an Express backend for shared, responsive canvas editing.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Konva',
      'Yjs',
      'Socket.IO',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Redis',
    ],
    imageUrl: '/projects/canvus.png',
    liveUrl: 'https://canvus-henna.vercel.app/',
    githubUrl: 'https://github.com/Solitae21/canvus',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'docflow',
    title: 'DocFlow',
    description:
      'A collaborative document editor with rich-text formatting, autosave, file imports, and view or edit permissions. Built with React, TipTap, Express, and Supabase.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TipTap',
      'React Router',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Vitest',
    ],
    imageUrl: '/projects/docflow.png',
    liveUrl: 'https://docflow-lightweight-editor-api.vercel.app/',
    githubUrl: 'https://github.com/Solitae21/docflow-lightweight-editor',
    featured: true,
    category: 'fullstack',
  },
  // {
  //   id: 'isuzu-philippines',
  //   title: 'Isuzu Philippines Website',
  //   description:
  //     'Co-developed the official Isuzu Philippines corporate website as a freelance project, implementing responsive page layouts and interactive UI components with vanilla JavaScript, HTML, and CSS.',
  //   technologies: ['JavaScript', 'HTML', 'CSS'],
  //   featured: false,
  //   category: 'frontend',
  // },
  // {
  //   id: 'amazones-gym',
  //   title: 'Amazones Gym Website',
  //   description:
  //     'Co-developed a multi-section marketing site for a Japanese women’s-only gym brand. Built a Google Reviews carousel, FAQ accordion, store-listing cards with embedded Maps, and animated modals using vanilla JavaScript, HTML, and CSS.',
  //   technologies: ['JavaScript', 'HTML', 'CSS'],
  //   featured: false,
  //   category: 'frontend',
  // },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A responsive portfolio built with React, TypeScript, and Tailwind CSS, with accessible navigation and subtle motion.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Solitae21/hans-portfolio-website',
    featured: false,
    category: 'frontend',
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  'all',
  'frontend',
  'fullstack',
] as const;
