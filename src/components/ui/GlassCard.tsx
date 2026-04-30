import { cn } from '@/utils/cn';
import type { GlowColor } from '@/types';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: GlowColor;
  as?: React.ElementType;
  onClick?: () => void;
}

const glowMap: Record<GlowColor, string> = {
  indigo: 'hover:shadow-glow-indigo',
  purple: 'hover:shadow-glow-purple',
  cyan:   'hover:shadow-glow-cyan',
  none:   '',
};

export default function GlassCard({
  children,
  className,
  hover = false,
  glow = 'none',
  as: Tag = 'div',
  onClick,
}: GlassCardProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'glass rounded-2xl shadow-glass',
        hover && 'glass-hover shadow-glass-hover cursor-pointer',
        glow !== 'none' && glowMap[glow],
        className
      )}
    >
      {children}
    </Tag>
  );
}
