'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FolderGit2,
  LayoutGrid,
  Info,
  Maximize2,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (proj: Project) => void;
  allProjects?: Project[];
}

type TabType = 'overview' | 'gallery' | 'details';

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects = [],
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Reset tab & image when project changes
  useEffect(() => {
    setActiveTab('overview');
    setSelectedImageIndex(0);
    setLightboxOpen(false);
  }, [project?.id]);

  // Dedicated Project Gallery images (strictly Gallery assets)
  const gallery = useMemo(() => {
    if (!project) return [];
    if (project.galleryImages && project.galleryImages.length > 0) {
      return project.galleryImages;
    }
    return project.image ? [project.image] : [];
  }, [project]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        if (activeTab === 'gallery' || lightboxOpen) {
          setSelectedImageIndex((prev) => (prev + 1) % gallery.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeTab === 'gallery' || lightboxOpen) {
          setSelectedImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
        }
      }
    },
    [lightboxOpen, onClose, activeTab, gallery.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [project]);

  if (!project) return null;

  const currentImage = gallery[selectedImageIndex] || project.image;

  // Next / Previous Project navigation
  const currentProjectIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
  const nextProject =
    currentProjectIndex >= 0 && currentProjectIndex < allProjects.length - 1
      ? allProjects[currentProjectIndex + 1]
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
    >
      <div
        className="relative w-full max-w-4xl lg:max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-950/30 overflow-hidden my-auto max-h-[92vh] flex flex-col transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =====================================================================
            TOP BAR NAVIGATION
            - ← Back to Projects
            - 01 Overview | 02 Gallery | 03 Details
            - Close (X)
           ===================================================================== */}
        <header className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 backdrop-blur-md shrink-0">
          {/* Back button */}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            aria-label="Back to Projects"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-500" />
            <span>Back to Projects</span>
          </button>

          {/* 3 Navigable Tabs */}
          <nav
            aria-label="Project details sections"
            className="flex items-center gap-1 sm:gap-2 bg-slate-100 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="font-mono text-[10px] sm:text-xs opacity-75">01</span>
              <span>Overview</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'gallery'
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="font-mono text-[10px] sm:text-xs opacity-75">02</span>
              <span>Gallery</span>
              {gallery.length > 0 && (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {gallery.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'details'
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="font-mono text-[10px] sm:text-xs opacity-75">03</span>
              <span>Details</span>
            </button>
          </nav>

          {/* Quick Actions (GitHub + Close X) */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition-colors shadow-xs"
                title="View on GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* =====================================================================
            SCROLLABLE MODAL CONTENT BODY
           ===================================================================== */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 flex-1 space-y-6">
          {/* ===================================================================
              PART 01 — OVERVIEW
             =================================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Header Box */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 font-mono">
                    {project.category}
                  </span>
                  {project.placeholderBadge && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {project.placeholderBadge}
                    </span>
                  )}
                </div>

                <h2 id="project-details-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.name}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Goal & Role Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.projectGoal && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Project Goal</span>
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.projectGoal}
                    </p>
                  </div>
                )}

                {project.role && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>My Role</span>
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.role}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies Used */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-200 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Project Screenshots Showcase (Protected numbered mobile screens) */}
              {project.realGalleryImages && project.realGalleryImages.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span>Mobile Project Showcase ({project.realGalleryImages.length} Screens)</span>
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      Mobile & System Screens
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {project.realGalleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                      >
                        <Image
                          src={img}
                          alt={`${project.name} mobile screenshot ${idx + 1}`}
                          fill
                          className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-slate-950/85 text-[10px] font-mono text-slate-300 border border-slate-800">
                          {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Navigation to Part 2 / Part 3 & GitHub CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('gallery')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer"
                  >
                    <span>View Gallery ({gallery.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('details')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer"
                  >
                    <span>Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              PART 02 — GALLERY
             =================================================================== */}
          {activeTab === 'gallery' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Gallery Header info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>
                    Visual Gallery &bull; Image {selectedImageIndex + 1} of {gallery.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click image to view larger</span>
                </button>
              </div>

              {/* Main Large Hero Image Display */}
              <div
                className="relative w-full h-72 sm:h-96 md:h-[430px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center cursor-zoom-in group shadow-xl"
                onClick={() => setLightboxOpen(true)}
                title="Click to expand fullscreen"
              >
                {currentImage ? (
                  <Image
                    src={currentImage}
                    alt={`${project.name} gallery image ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority
                  />
                ) : (
                  <div className="text-slate-500 text-xs font-mono">No image available</div>
                )}

                {/* Subtitle / Counter pill in top corner */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/85 text-cyan-400 border border-cyan-800/80 backdrop-blur-md shadow-md">
                    {selectedImageIndex + 1} / {gallery.length}
                  </span>
                </div>

                {/* Left/Right Prev/Next arrows on main view */}
                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(
                          (prev) => (prev - 1 + gallery.length) % gallery.length
                        );
                      }}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 shadow-lg transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) => (prev + 1) % gallery.length);
                      }}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 shadow-lg transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {gallery.length > 1 && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
                    {gallery.map((img, idx) => {
                      const isActive = idx === selectedImageIndex;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImageIndex(idx)}
                          aria-label={`View image ${idx + 1}`}
                          className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border transition-all cursor-pointer bg-slate-950 ${
                            isActive
                              ? 'border-cyan-400 ring-2 ring-cyan-400/80 scale-105 shadow-md shadow-cyan-500/20'
                              : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.name} thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold bg-slate-950/80 text-white px-1 rounded">
                            {idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================
              PART 03 — DETAILS
             =================================================================== */}
          {activeTab === 'details' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Technical Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {project.projectType && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Project Type
                    </span>
                    <p className="text-sm font-semibold text-white">{project.projectType}</p>
                  </div>
                )}

                {project.platform && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Platform
                    </span>
                    <p className="text-sm font-semibold text-white">{project.platform}</p>
                  </div>
                )}

                {project.stateManagement && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      State Management
                    </span>
                    <p className="text-sm font-semibold text-cyan-400">
                      {project.stateManagement}
                    </p>
                  </div>
                )}

                {project.architecture && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 sm:col-span-2 md:col-span-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Architecture
                    </span>
                    <p className="text-sm font-semibold text-white">{project.architecture}</p>
                  </div>
                )}

                {project.apis && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      APIs & Engine
                    </span>
                    <p className="text-sm font-semibold text-white">{project.apis}</p>
                  </div>
                )}
              </div>

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Technical Challenges Overcome</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((ch, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* GitHub Link footer */}
              {project.githubUrl && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-300" />
                    <div>
                      <span className="text-xs font-mono text-slate-400">Source Repository</span>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-sm">
                        {project.githubUrl}
                      </p>
                    </div>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md cursor-pointer"
                  >
                    <span>Inspect Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* =====================================================================
            BOTTOM FOOTER
            - Step between tabs (Previous / Next Tab)
            - Step between projects if onSelectProject is provided
           ===================================================================== */}
        <footer className="p-3.5 sm:p-5 border-t border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Tab Step Navigation */}
          <div className="flex items-center gap-2">
            {activeTab !== 'overview' && (
              <button
                type="button"
                onClick={() =>
                  setActiveTab(activeTab === 'details' ? 'gallery' : 'overview')
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>
                  Previous: {activeTab === 'details' ? '02 Gallery' : '01 Overview'}
                </span>
              </button>
            )}

            {activeTab !== 'details' && (
              <button
                type="button"
                onClick={() =>
                  setActiveTab(activeTab === 'overview' ? 'gallery' : 'details')
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>
                  Next: {activeTab === 'overview' ? '02 Gallery' : '03 Details'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Project Switcher */}
          {onSelectProject && allProjects.length > 1 && (
            <div className="flex items-center gap-2">
              {prevProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(prevProject)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title={`Switch to ${prevProject.name}`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>{prevProject.name}</span>
                </button>
              )}
              {nextProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(nextProject)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title={`Switch to ${nextProject.name}`}
                >
                  <span>{nextProject.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </footer>
      </div>

      {/* =======================================================================
          FULLSCREEN LIGHTBOX MODAL (When clicking an image to enlarge)
         ======================================================================= */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/80">
                {project.name} &bull; {selectedImageIndex + 1} / {gallery.length}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Use Arrow keys or buttons to navigate &bull; Esc to close
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2.5 rounded-full bg-slate-900/90 text-white hover:text-cyan-400 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image View */}
          <div
            className="relative flex-1 w-full flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage && (
              <div className="relative w-full h-full max-h-[82vh]">
                <Image
                  src={currentImage}
                  alt={`${project.name} full view ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            )}

            {/* Left / Right Nav Arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) => (prev - 1 + gallery.length) % gallery.length
                    )
                  }
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white hover:text-cyan-400 border border-slate-700 shadow-2xl transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex((prev) => (prev + 1) % gallery.length)
                  }
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white hover:text-cyan-400 border border-slate-700 shadow-2xl transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Bottom Indicator */}
          <div className="flex justify-center items-center py-2 z-10">
            <span className="text-xs font-mono text-slate-400">
              Image {selectedImageIndex + 1} of {gallery.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
