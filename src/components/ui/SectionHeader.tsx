import { cn } from '@/utils/cn';
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
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn('mb-10', align === 'center' && 'text-center', className)}
    >
      <p className="eyebrow mb-4">{tag}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-xl text-base leading-7 text-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
