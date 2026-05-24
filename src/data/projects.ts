import type { Project, ProjectFilter } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'canvus',
    title: 'Canvus',
    description:
      'Real-time collaborative whiteboarding and flowchart app. Multiple users co-edit a shared canvas with sub-50ms sync, live cursors, presenter mode, threaded comments, and PNG/SVG/PDF export. Powered by Yjs CRDTs and Socket.IO over an Express + Prisma backend.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Konva', 'Yjs', 'Socket.IO', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Redis'],
    imageUrl: 'https://image.thum.io/get/width/1200/crop/675/viewportWidth/1440/https://canvus-henna.vercel.app/',
    liveUrl: 'https://canvus-henna.vercel.app/',
    githubUrl: 'https://github.com/Solitae21/canvus',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description:
      'Full-featured admin dashboard with real-time analytics, inventory management, and order tracking. Built with React, Redux Toolkit, and a .NET Core API.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', '.NET Core', 'SQL Server'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/ampon/ecommerce-dashboard',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description:
      'Collaborative task manager with drag-and-drop boards, real-time updates via WebSockets, and team workspaces.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ampon/task-manager',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'design-system',
    title: 'React Component Library',
    description:
      'Accessible, themeable component library built with React, TypeScript, and Storybook. Includes 40+ components following WAI-ARIA guidelines.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vitest'],
    liveUrl: 'https://components.example.com',
    githubUrl: 'https://github.com/ampon/component-library',
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
    githubUrl: 'https://github.com/ampon/portfolio',
    featured: false,
    category: 'frontend',
  },
  {
    id: 'rest-api',
    title: 'RESTful API Service',
    description:
      'Scalable REST API with JWT authentication, role-based access control, and comprehensive Swagger documentation.',
    technologies: ['.NET Core', 'C#', 'SQL Server', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/ampon/rest-api',
    featured: false,
    category: 'backend',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with 7-day forecasts, interactive maps, and location-based weather alerts.',
    technologies: ['React', 'TypeScript', 'MUI', 'OpenWeather API'],
    liveUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/ampon/weather-app',
    featured: false,
    category: 'frontend',
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  'all', 'frontend', 'fullstack', 'backend',
] as const;
