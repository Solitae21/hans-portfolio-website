import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import type { RevealDirection } from '@/types';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionOffset: Record<RevealDirection, { x?: number; y?: number }> = {
  up:    { y: 30 },
  down:  { y: -30 },
  left:  { x: 30 },
  right: { x: -30 },
  none:  {},
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className,
  once = true,
}: ScrollRevealProps) {
  const prefersReduced = usePrefersReducedMotion();

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, ...directionOffset[direction] };

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
