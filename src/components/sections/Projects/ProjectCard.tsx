import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { GlassCard, AnimatedBadge } from '@/components/ui';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const categoryColor: Record<string, string> = {
    frontend:  'text-accent-indigo border-accent-indigo/40',
    fullstack: 'text-accent-purple border-accent-purple/40',
    backend:   'text-accent-cyan border-accent-cyan/40',
  };

  const previewUrl = project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl;
  const showPreview = Boolean(project.imageUrl) && !imageFailed;

  return (
    <motion.div layout className="h-full">
      <GlassCard className="overflow-hidden flex flex-col h-full group" hover glow={project.featured ? 'indigo' : 'none'}>
        {/* Preview image */}
        {showPreview && (
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} preview`}
            className="relative block aspect-video overflow-hidden border-b border-white/10 bg-gradient-to-br from-accent-indigo/20 to-accent-purple/20"
          >
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
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
            {project.technologies.map((tech) => (
              <AnimatedBadge key={tech} label={tech} size="sm" />
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
