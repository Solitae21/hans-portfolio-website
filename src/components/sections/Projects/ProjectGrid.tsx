import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import ProjectCard from './ProjectCard';
import { projects, PROJECT_FILTERS } from '@/data/projects';
import type { ProjectFilter } from '@/types';

const filterLabels: Record<ProjectFilter, string> = {
  all:       'All',
  frontend:  'Frontend',
  fullstack: 'Full Stack',
  backend:   'Backend',
};

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PROJECT_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              'px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer',
              activeFilter === filter
                ? 'bg-gradient-to-r from-accent-indigo to-accent-purple text-bg-primary font-semibold shadow-glow-sm'
                : 'glass text-gray-400 hover:text-white hover:border-white/20'
            )}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-16">No projects in this category yet.</p>
      )}
    </div>
  );
}
