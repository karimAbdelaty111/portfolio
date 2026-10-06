'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  Eye,
  CheckCircle,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  projectNumber?: number;
}

/**
 * Strict numerical sorter for filenames (e.g., 1.jpeg -> 1, 2.jpeg -> 2, etc.)
 */
function extractImageNumber(imagePath: string): number {
  if (!imagePath) return Number.MAX_SAFE_INTEGER;
  const filename = imagePath.split(/[/\\]/).pop() || imagePath;
  const baseName = filename.replace(/\.[^/.]+$/, '');
  const matches = baseName.match(/\d+/g);
  if (!matches || matches.length === 0) return Number.MAX_SAFE_INTEGER;
  const lastNum = matches[matches.length - 1];
  const parsed = parseInt(lastNum, 10);
  return isNaN(parsed) ? Number.MAX_SAFE_INTEGER : parsed;
}

export default function ProjectCard({
  project,
  onOpenModal,
  projectNumber,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  // Strictly filter out any file containing 'galary' and sort by numerical order
  const validScreens = React.useMemo(() => {
    const raw = (project.realGalleryImages || []).filter(
      (img) => !img.toLowerCase().includes('galary')
    );
    return raw.sort((a, b) => {
      const numA = extractImageNumber(a);
      const numB = extractImageNumber(b);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
  }, [project.realGalleryImages]);

  // Primary image preview: either the first sorted numerical screen or the project image
  const previewImage = validScreens.length > 0 ? validScreens[0] : project.image;

  return (
    <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10">
      <div>
        {/* =====================================================================
            TOP IMAGE BANNER (Aspect ratio, gradient overlay, badges)
           ===================================================================== */}
        <div
          className="relative w-full h-56 sm:h-64 bg-slate-950 overflow-hidden cursor-pointer"
          onClick={() => onOpenModal(project)}
        >
          {previewImage && !imageError ? (
            <>
              <Image
                src={previewImage}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
              />
              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
              <Smartphone className="w-12 h-12 text-slate-700" />
            </div>
          )}

          {/* Top Left: Project Number & Category Pill */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            {projectNumber !== undefined && (
              <span className="w-6 h-6 rounded-full bg-cyan-500/90 text-slate-950 font-mono font-bold text-xs flex items-center justify-center shadow-md">
                {projectNumber}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-800/60 backdrop-blur-md shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Top Right: Numbered Screens Badge */}
          {validScreens.length > 0 && (
            <div className="absolute top-4 right-4 z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 backdrop-blur-md flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{validScreens.length} Screens (1 &rarr; {validScreens.length})</span>
              </span>
            </div>
          )}

          {/* Hover Overlay with "Explore Case Study" badge */}
          <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/90 text-white text-xs font-semibold border border-cyan-500/40 backdrop-blur-md shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Explore Case Study & Screens</span>
            </span>
          </div>
        </div>

        {/* =====================================================================
            CARD BODY (Title, Tagline, Description, Tech Stack)
           ===================================================================== */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3
                onClick={() => onOpenModal(project)}
                className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {project.name}
              </h3>
              {project.placeholderBadge && (
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-400 border border-cyan-800/70">
                  {project.placeholderBadge}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-medium text-cyan-400/90 line-clamp-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Key Feature highlights */}
          <div className="space-y-1.5 pt-1">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-xs font-mono bg-slate-950/60 text-slate-500 border border-slate-800/60">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          ACTION FOOTER (View Case Study + GitHub + Demo)
         ===================================================================== */}
      <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
        >
          <BookOpen className="w-4 h-4" />
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub Repository`}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            title="View Source on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} Live Demo`}
              className="p-2 rounded-xl text-cyan-400 hover:text-white bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-800/80 transition-colors"
              title="Launch Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
