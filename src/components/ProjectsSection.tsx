'use client';

import React, { useState, useMemo } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { FolderGit2, Smartphone, Sparkles, Layers, ArrowRight } from 'lucide-react';

/**
 * Strict Exclusion Rule: Ignore any project or asset containing 'galary'
 */
function containsGalary(str: string): boolean {
  if (!str) return false;
  return str.toLowerCase().includes('galary');
}

export default function ProjectsSection() {
  // Filter projects by strict exclusion rule (no galary)
  // Preserving strict numerical project order: 1 -> ClothesX, 2 -> OnFood, 3 -> Cairo Metro App, 4 -> San3a
  const validProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const name = project.name || '';
      const slug = project.slug || '';
      const id = project.id || '';
      const category = project.category || '';
      return (
        !containsGalary(name) &&
        !containsGalary(slug) &&
        !containsGalary(id) &&
        !containsGalary(category)
      );
    });
  }, []);

  // Filter category state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    validProjects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, [validProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return validProjects;
    return validProjects.filter((p) => p.category === selectedCategory);
  }, [validProjects, selectedCategory]);

  // Modal case study state
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-950 transition-colors"
      aria-label="Projects Showcase"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="PORTFOLIO"
          title="Featured Mobile Applications"
          subtitle="Cross-platform Flutter applications built with clean architecture, algorithmic routing, and reactive state management."
        />

        {/* =========================================================================
            CATEGORY FILTER PILLS (Matching Shimaa's pill layout)
           ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto pb-3 pt-1 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80'
                }`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                )}
                <span>{cat === 'All' ? 'All Projects' : cat}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            2-COLUMN GRID OF PROJECT CARDS (Matching Shimaa's Card Grid)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            // Find global index in validProjects so project numbers remain strictly preserved:
            // 1 -> ClothesX, 2 -> OnFood, 3 -> Cairo Metro App, 4 -> San3a
            const globalIndex = validProjects.findIndex((p) => p.id === project.id);
            const projectNumber = globalIndex !== -1 ? globalIndex + 1 : index + 1;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                projectNumber={projectNumber}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM ARCHITECTURAL NOTICE (Matching Shimaa's style)
           ========================================================================= */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>Scalable Codebases & Architectural Patterns</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                All projects follow strict separation of concerns, BLoC/Provider reactive state
                management, graph traversal algorithms, and resilient REST error boundaries.
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

      {/* Case Study & Numbered Screenshots Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
