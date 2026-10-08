'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  ArrowRight,
  Eye,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  onOpenGallery?: (project: Project) => void;
  projectNumber?: number;
}

export default function ProjectCard({
  project,
  onOpenModal,
  onOpenGallery,
  projectNumber,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  // The card shows the primary cover image
  const primaryCoverImage = project.image || (project.galleryImages && project.galleryImages[0]);

  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 card-hover-effect transition-all duration-300 overflow-hidden"
      aria-label={`Project: ${project.name}`}
    >
      <div>
        {/* =====================================================================
            CARD COVER IMAGE
           ===================================================================== */}
        <div
          className="relative w-full h-52 sm:h-60 bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer"
          onClick={() => onOpenModal(project)}
          title={`Click to explore ${project.name}`}
        >
          {primaryCoverImage && !imageError ? (
            <>
              <Image
                src={primaryCoverImage}
                alt={`${project.name} cover`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={() => setImageError(true)}
                priority={projectNumber === 1}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900/95 via-transparent to-transparent opacity-90" />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 text-slate-400 dark:text-slate-500 gap-2">
              <Layers className="w-10 h-10 text-cyan-500/40" />
              <span className="text-xs font-mono">{project.name}</span>
            </div>
          )}

          {/* Top-Left: Project Index & Category */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            {projectNumber !== undefined && (
              <span className="w-6 h-6 rounded-lg bg-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center shadow-md">
                0{projectNumber}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-slate-950/85 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 backdrop-blur-md shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Top-Right: Visual Count Badge */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div
              className={`absolute top-3.5 right-3.5 z-10 ${onOpenGallery ? 'cursor-pointer' : ''}`}
              onClick={(e) => {
                if (onOpenGallery) {
                  e.stopPropagation();
                  onOpenGallery(project);
                }
              }}
              title={onOpenGallery ? `Open ${project.name} Gallery` : undefined}
            >
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/90 dark:bg-slate-950/85 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 backdrop-blur-md flex items-center gap-1.5 shadow-xs hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{project.galleryImages.length} Visuals</span>
              </span>
            </div>
          )}

          {/* Hover Overlay Prompt */}
          <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/95 dark:bg-slate-950/95 text-white text-xs font-semibold border border-cyan-500/50 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Explore Project & Details</span>
            </span>
          </div>
        </div>

        {/* =====================================================================
            CARD CONTENT
           ===================================================================== */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3
                onClick={() => onOpenModal(project)}
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {project.name}
              </h3>
              {project.placeholderBadge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                  {project.placeholderBadge}
                </span>
              )}
            </div>
            {project.tagline && (
              <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400/90 mt-0.5 line-clamp-1">
                {project.tagline}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================================
          ACTION FOOTER
         ===================================================================== */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors cursor-pointer group/btn"
          aria-label={`Explore details for ${project.name}`}
        >
          <span>Explore Project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {onOpenGallery && project.galleryImages && project.galleryImages.length > 0 && (
            <button
              type="button"
              onClick={() => onOpenGallery(project)}
              className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/70 hover:bg-cyan-100 dark:hover:bg-cyan-900/80 border border-cyan-200 dark:border-cyan-800/80 transition-colors cursor-pointer shadow-xs"
              title={`View ${project.name} Gallery`}
            >
              Gallery
            </button>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub Repository`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors shadow-xs"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} Live Demo`}
              className="p-2 rounded-xl text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-white bg-cyan-50 dark:bg-cyan-950/70 hover:bg-cyan-100 dark:hover:bg-cyan-900/80 border border-cyan-200 dark:border-cyan-800/70 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
