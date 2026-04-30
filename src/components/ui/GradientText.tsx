import { cn } from '@/utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  as?: React.ElementType;
}

export default function GradientText({
  children,
  className,
  animate = false,
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        'gradient-text',
        animate && 'gradient-text-animate',
        className
      )}
    >
      {children}
    </Tag>
  );
}
