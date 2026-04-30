import { cn } from '@/utils/cn';
import GradientText from './GradientText';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      <span className="font-mono text-accent-cyan text-sm tracking-[0.2em] uppercase mb-3 block">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <GradientText animate>{title}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
