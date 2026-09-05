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
export default function GlassCard({
  children,
  className,
  hover = false,
  as: Tag = 'div',
  onClick,
}: GlassCardProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'surface-card',
        hover && 'transition-shadow hover:shadow-sm',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
