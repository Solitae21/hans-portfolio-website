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
    id: 'docflow',
    title: 'DocFlow',
    description:
      'A lightweight, Google Docs-style collaborative document editor. Create, edit, and share rich-text documents with autosave, bold/italic/underline, headings, and lists. Supports importing .txt, .md, and .docx files, plus document sharing with view or edit permissions. Built as an npm-workspaces monorepo with a React + TipTap frontend and an Express + Supabase backend.',
    technologies: ['React', 'TypeScript', 'Vite', 'TipTap', 'React Router', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Vitest'],
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
