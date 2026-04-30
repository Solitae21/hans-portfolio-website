import { cn } from '@/utils/cn';
import type { SkillLevel } from '@/types';

interface AnimatedBadgeProps {
  label: string;
  level?: SkillLevel;
  className?: string;
  size?: 'sm' | 'md';
}

const levelClasses: Record<SkillLevel, string> = {
  expert:       'border-accent-indigo/50 text-accent-indigo bg-accent-indigo/10',
  advanced:     'border-accent-purple/50 text-accent-purple bg-accent-purple/10',
  intermediate: 'border-accent-cyan/50 text-accent-cyan bg-accent-cyan/10',
  beginner:     'border-white/20 text-gray-400 bg-white/5',
};

export default function AnimatedBadge({ label, level, className, size = 'md' }: AnimatedBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border rounded-full font-medium transition-all duration-200 hover:scale-105',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        level ? levelClasses[level] : 'border-white/20 text-gray-300 bg-white/5',
        className
      )}
    >
      {label}
    </span>
  );
}
