import { motion, type Variants } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { Button, GradientText } from '@/components/ui';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/BrandIcons';
import useTypingEffect from '@/hooks/useTypingEffect';
import { personal } from '@/data/personal';
import type { SocialPlatform } from '@/types';

const socialIcons: Record<SocialPlatform, React.ReactNode> = {
  github:   <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  twitter:  <TwitterIcon size={20} />,
  email:    <Mail size={20} />,
};

const EASE_CUBIC: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_CUBIC } },
};

export default function HeroContent() {
  const typedText = useTypingEffect(personal.taglines);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4"
    >
      {/* Availability badge */}
      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow inline-block" />
          {personal.availableForWork ? 'Available for new opportunities' : 'Currently employed'}
        </span>
      </motion.div>

      {/* Pre-heading */}
      <motion.p variants={item} className="font-mono text-accent-cyan text-base tracking-widest uppercase mb-2">
        Hi, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={item}
        className="font-bold leading-tight mb-4"
        style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.02em' }}
      >
        <GradientText animate>{personal.name}</GradientText>
      </motion.h1>

      {/* Typing tagline */}
      <motion.div variants={item} className="h-10 flex items-center justify-center mb-6">
        <p className="text-xl md:text-2xl text-gray-300 font-medium">
          {typedText}
          <span className="inline-block w-0.5 h-6 bg-accent-indigo ml-1 animate-cursor-blink" />
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={item}
        className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 text-balance"
      >
        {personal.bio}
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <Button
          as="a"
          href="#projects"
          size="lg"
          rightIcon={<ArrowRight size={18} />}
        >
          View My Work
        </Button>
        <Button
          as="a"
          href={personal.resumeUrl}
          size="lg"
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<Download size={18} />}
        >
          Download CV
        </Button>
      </motion.div>

      {/* Social links */}
      <motion.div variants={item} className="flex items-center gap-3">
        {personal.social.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:shadow-glow-sm hover:-translate-y-0.5"
          >
            {socialIcons[link.platform]}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
