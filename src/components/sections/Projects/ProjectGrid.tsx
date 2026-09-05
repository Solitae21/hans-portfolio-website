import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, PROJECT_FILTERS } from '@/data/projects';
import type { ProjectFilter } from '@/types';
const labels: Record<ProjectFilter, string> = {
  all: 'All projects',
  frontend: 'Frontend',
  fullstack: 'Full stack',
  backend: 'Backend',
};
export default function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <div>
      <div aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${filter === item ? 'border-ink bg-ink text-white' : 'border-line bg-transparent text-muted hover:border-ink'}`}
          >
            {labels[item]}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={project.featured ? '' : 'md:col-span-2'}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <p role="status" className="sr-only">
        {filtered.length} projects shown
      </p>
      {filtered.length === 0 && (
        <p className="py-8 text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
