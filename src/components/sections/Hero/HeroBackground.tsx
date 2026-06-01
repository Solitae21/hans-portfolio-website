import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

export default function HeroBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      {/* Radial gradient overlay — fades grid at edges */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(52,211,153,0.12) 0%, transparent 60%)',
      }} />

      {/* Animated orbs */}
      {!reduced && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl animate-float"
            style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.16) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
            style={{ background: 'radial-gradient(circle, rgba(132,204,22,0.12) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl animate-float-slow"
            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)' }}
          />
        </>
      )}
    </div>
  );
}
