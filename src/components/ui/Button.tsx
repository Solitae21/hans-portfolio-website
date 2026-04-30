import { cn } from '@/utils/cn';
import type { ButtonVariant } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  as?: 'button';
  href?: never;
}

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  as: 'a';
}

type Props = ButtonProps | AnchorButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-indigo to-accent-purple text-white font-medium shadow-glow-sm hover:shadow-glow-indigo hover:opacity-90',
  secondary:
    'border border-accent-indigo text-accent-indigo hover:bg-accent-indigo/10 font-medium',
  ghost:
    'text-gray-400 hover:text-white hover:bg-white/5 font-medium',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    loading = false,
    className,
    children,
    as,
    ...rest
  } = props;

  const baseClasses = cn(
    'inline-flex items-center gap-2 transition-all duration-200 cursor-pointer select-none',
    'outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </>
  );

  if (as === 'a') {
    return (
      <a className={baseClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={loading || (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
