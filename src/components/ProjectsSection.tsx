'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectGalleryModal from './ProjectGalleryModal';
import ScrollReveal from './ScrollReveal';
import { featuredProjects, projectGalleries } from '@/data/portfolioData';
import { Project, ProjectGalleryGroup } from '@/types/portfolio';
import { FolderGit2, ArrowRight, Images, Eye, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeGalleryGroup, setActiveGalleryGroup] = useState<ProjectGalleryGroup | null>(null);

  const handleOpenGalleryForProject = (project: Project) => {
    const matchedGallery = projectGalleries.find(
      (g) => g.projectId === project.id || g.projectSlug === project.slug
    );
    if (matchedGallery) {
      setActiveGalleryGroup(matchedGallery);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300"
      aria-label="Featured Projects"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <SectionHeader
            badge="FEATURED WORK"
            title="Featured Projects"
            subtitle="Real-world mobile and algorithmic systems developed with Dart and Flutter, emphasizing clean architecture, state management, and algorithmic problem-solving."
          />
        </ScrollReveal>

        {/* =========================================================================
            FEATURED PROJECT CARDS (Cairo Metro, Ofood, and San3a)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} className="h-full">
              <ProjectCard
                project={project}
                projectNumber={index + 1}
                onOpenModal={(proj) => setActiveModalProject(proj)}
                onOpenGallery={handleOpenGalleryForProject}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* =========================================================================
            PROJECT GALLERY (One card per project, strictly isolated Gallery assets)
           ========================================================================= */}
        <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800/80">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 mb-3">
                <Images className="w-3.5 h-3.5" />
                <span>PROJECT GALLERIES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Project Gallery
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                High-resolution visual galleries organized strictly by project. Select any project gallery below to inspect its dedicated visual assets.
              </p>
            </div>
          </ScrollReveal>

          {/* One Gallery Card Per Project: Metro Gallery, OnFood Gallery, San3a Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectGalleries.map((gal, idx) => (
              <ScrollReveal key={gal.id} delay={idx * 120} className="h-full">
                <div
                  onClick={() => setActiveGalleryGroup(gal)}
                  className="group bg-white/90 dark:bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 card-hover-effect overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Cover Image Container */}
                    <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-950 overflow-hidden">
                      <Image
                        src={gal.coverImage}
                        alt={`${gal.galleryName} Preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-slate-900/95 via-transparent to-transparent opacity-90" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 dark:bg-slate-950/90 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 backdrop-blur-md shadow-xs">
                          {gal.projectName}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/90 dark:bg-slate-950/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 backdrop-blur-md flex items-center gap-1.5 shadow-xs">
                          <Images className="w-3 h-3 text-cyan-500" />
                          <span>{gal.images.length} Images</span>
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold border border-cyan-500/50 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Open {gal.galleryName}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {gal.galleryName}
                        </h4>
                        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                          {gal.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {gal.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-5 py-3 bg-slate-50/80 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    <span>View {gal.galleryName} ({gal.images.length})</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ARCHITECTURAL BANNER / REPOSITORY LINK
           ========================================================================= */}
        <ScrollReveal delay={200}>
          <div className="mt-14 sm:mt-16 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>More Open Source Repositories on GitHub</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
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
        </ScrollReveal>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(proj) => setActiveModalProject(proj)}
        allProjects={featuredProjects}
      />

      {/* Dedicated Project-Isolated Lightbox Modal */}
      <ProjectGalleryModal
        gallery={activeGalleryGroup}
        onClose={() => setActiveGalleryGroup(null)}
      />
    </section>
  );
}
