import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/BrandIcons';
import { personal } from '@/data/personal';
import type { SocialPlatform } from '@/types';

const iconMap: Record<SocialPlatform, React.ReactNode> = {
  github:   <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  twitter:  <TwitterIcon size={20} />,
  email:    <Mail size={20} />,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 justify-center lg:justify-start">
      {personal.social.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
        >
          {iconMap[link.platform]}
        </a>
      ))}
    </div>
  );
}
