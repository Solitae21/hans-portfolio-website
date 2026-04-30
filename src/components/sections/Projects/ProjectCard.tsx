import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { GlassCard, AnimatedBadge } from '@/components/ui';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColor: Record<string, string> = {
    frontend:  'text-accent-indigo border-accent-indigo/40',
    fullstack: 'text-accent-purple border-accent-purple/40',
    backend:   'text-accent-cyan border-accent-cyan/40',
  };

  return (
    <motion.div layout className="h-full">
      <GlassCard className="p-6 flex flex-col h-full group" hover glow={project.featured ? 'indigo' : 'none'}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {project.featured && (
              <Star size={14} className="text-amber-400 fill-amber-400 shrink-0" />
            )}
            <span
              className={`text-xs font-mono uppercase tracking-wider border rounded-full px-2 py-0.5 ${categoryColor[project.category] ?? 'text-gray-400 border-gray-600'}`}
            >
              {project.category}
            </span>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title + description */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-indigo transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 5).map((tech) => (
            <AnimatedBadge key={tech} label={tech} size="sm" />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-gray-500 flex items-end pb-0.5">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
