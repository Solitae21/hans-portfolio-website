import { cn } from '@/utils/cn';
import type { SkillLevel } from '@/types';
interface AnimatedBadgeProps {
  label: string;
  level?: SkillLevel;
  className?: string;
  size?: 'sm' | 'md';
}
export default function AnimatedBadge({
  label,
  level,
  className,
  size = 'md',
}: AnimatedBadgeProps) {
  return (
    <span
      title={level ? `${label}: ${level}` : undefined}
      className={cn(
        'inline-flex items-center rounded border border-line bg-canvas font-normal text-muted',
        size === 'sm' ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs',
        className,
      )}
    >
      {label}
    </span>
  );
}
