import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroScrollIndicator from './HeroScrollIndicator';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      <HeroBackground />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
