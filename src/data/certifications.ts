import type { Certification } from '@/types';

export const certifications: readonly Certification[] = [
  { name: 'Microsoft Full-Stack Developer',            issuer: 'Microsoft', date: 'Dec 2025', featured: true },
  { name: 'Full-Stack Developer Capstone Project',     issuer: 'Microsoft', date: 'Dec 2025', featured: true },
  { name: 'Data Structures and Algorithms',            issuer: 'Microsoft', date: 'Nov 2025' },
  { name: 'Deployment and DevOps',                     issuer: 'Microsoft', date: 'Nov 2025' },
  { name: 'Performance Optimization and Scalability',  issuer: 'Microsoft', date: 'Nov 2025' },
  { name: 'Security and Authentication',               issuer: 'Microsoft', date: 'Nov 2025' },
  { name: 'Full-Stack Integration',                    issuer: 'Microsoft', date: 'Jul 2025' },
  { name: 'Database Integration and Management',       issuer: 'Microsoft', date: 'Jun 2025' },
  { name: 'Back-End Development with .NET',            issuer: 'Microsoft', date: 'Mar 2025', featured: true },
  { name: 'Foundations of Coding Full-Stack',          issuer: 'Microsoft', date: 'Feb 2025' },
  { name: 'MongoDB for Developers',                    issuer: 'NobleProg', date: 'Dec 2024' },
  { name: 'The Complete 2024 Web Development Bootcamp', issuer: 'Udemy',    date: 'Jul 2024', featured: true },
  { name: 'Basic Level of Software Engineering',       issuer: 'DICT',      date: 'Apr 2024' },
] as const;
