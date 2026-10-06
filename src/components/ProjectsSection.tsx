'use client';

import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { featuredProjects } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { FolderGit2, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900/80"
      aria-label="Featured Projects"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="FEATURED WORK"
          title="Featured Projects"
          subtitle="Real-world mobile and algorithmic systems developed with Dart and Flutter, emphasizing clean architecture, state management, and algorithmic problem-solving."
        />

        {/* =========================================================================
            2-COLUMN GRID OF FEATURED PROJECT CARDS (Cairo Metro & Ofood)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectNumber={index + 1}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* =========================================================================
            BOTTOM ARCHITECTURAL BANNER / REPOSITORY LINK
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>More Open Source Repositories on GitHub</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Explore algorithmic solutions, Flutter prototypes, and data structure implementations.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/karimAbdelaty111"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Explore Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Dedicated Project Details Modal (01 Overview, 02 Gallery, 03 Details) */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(proj) => setActiveModalProject(proj)}
        allProjects={featuredProjects}
      />
    </section>
  );
}
