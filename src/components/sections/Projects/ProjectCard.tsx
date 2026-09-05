import { useState } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { AnimatedBadge } from '@/components/ui';
import type { Project } from '@/types';
export default function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const preview =
    project.liveUrl && project.liveUrl !== '#'
      ? project.liveUrl
      : project.githubUrl;
  const visual = project.featured && (
    <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-[#E7EBE4] p-5 sm:p-7">
      {project.imageUrl && !failed ? (
        <img
          src={project.imageUrl}
          alt={`${project.title} application preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full rounded-md border border-line object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-muted">
          <Code2 size={32} />
          <span>{project.title}</span>
        </div>
      )}
    </div>
  );
  return (
    <article className="surface-card group h-full overflow-hidden">
      {visual &&
        (preview ? (
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
          >
            {visual}
          </a>
        ) : (
          visual
        ))}
      <div className="p-6 sm:p-7">
        <p className="eyebrow mb-3">
          {project.featured ? 'Featured project' : 'Behind this site'} ·{' '}
          {project.category === 'fullstack' ? 'Full stack' : 'Frontend'}
        </p>
        <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <AnimatedBadge key={tech} label={tech} size="sm" />
          ))}
        </div>
        <div className="mt-6 flex gap-6">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`View ${project.title} live demo`}
            >
              Live demo
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`View ${project.title} source code`}
            >
              Source code
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
