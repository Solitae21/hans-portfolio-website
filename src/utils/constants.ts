import type { NavItem } from '@/types';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home',       href: '#hero',       sectionId: 'hero' },
  { label: 'About',      href: '#about',      sectionId: 'about' },
  { label: 'Skills',     href: '#skills',     sectionId: 'skills' },
  { label: 'Projects',   href: '#projects',   sectionId: 'projects' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Certs',      href: '#certifications', sectionId: 'certifications' },
  { label: 'Contact',    href: '#contact',    sectionId: 'contact' },
] as const;

export const EMAILJS_SERVICE_ID  = import.meta.env['VITE_EMAILJS_SERVICE_ID']  ?? '';
export const EMAILJS_TEMPLATE_ID = import.meta.env['VITE_EMAILJS_TEMPLATE_ID'] ?? '';
export const EMAILJS_PUBLIC_KEY  = import.meta.env['VITE_EMAILJS_PUBLIC_KEY']  ?? '';
