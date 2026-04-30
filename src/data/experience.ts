import type { Experience } from '@/types';

export const experiences: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Startup Co.',
    role: 'Frontend Developer',
    period: 'Jan 2024 – Present',
    description:
      'Lead frontend development for a SaaS product serving 10,000+ users. Own the React architecture and mentor junior developers.',
    achievements: [
      'Reduced initial bundle size by 42% through code splitting and lazy loading',
      'Built a reusable component library adopted across 3 product lines',
      'Improved Lighthouse performance score from 62 to 94',
      'Implemented real-time collaboration features using WebSockets',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
    type: 'work',
    current: true,
  },
  {
    id: 'exp-2',
    company: 'Digital Agency XYZ',
    role: 'Junior Frontend Developer',
    period: 'Jun 2022 – Dec 2023',
    description:
      'Developed responsive web applications for clients across e-commerce, healthcare, and finance sectors.',
    achievements: [
      'Delivered 12+ client projects on time and within budget',
      'Integrated REST APIs and third-party services (Stripe, SendGrid)',
      'Collaborated with designers to implement pixel-perfect UI from Figma',
      'Introduced TypeScript to the team, reducing runtime bugs by 30%',
    ],
    technologies: ['React', 'JavaScript', 'Bootstrap', 'MUI', 'Express.js'],
    type: 'work',
    current: false,
  },
  {
    id: 'exp-freelance',
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Jan 2022 – May 2022',
    description:
      'Designed and developed websites for small businesses and personal brands.',
    achievements: [
      'Built 5 client websites with custom CMS integrations',
      'Handled full project lifecycle from requirements to deployment',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    type: 'freelance',
    current: false,
  },
  {
    id: 'edu-1',
    company: 'University of Technology',
    role: 'B.Sc. Computer Science',
    period: '2018 – 2022',
    description:
      'Focused on software engineering, algorithms, and web technologies. Graduated with honours.',
    achievements: [
      'Final year project: Full-stack e-learning platform (React + .NET Core)',
      'Dean\'s list recognition for academic excellence',
    ],
    technologies: ['Java', 'Python', 'C#', 'SQL', 'Data Structures'],
    type: 'education',
    current: false,
  },
] as const;
