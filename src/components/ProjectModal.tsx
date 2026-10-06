'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  ExternalLink,
  Smartphone,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Eye,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Extracts numerical index from filename (e.g. 'home metro 3.jpeg' -> 3, 'ofood12.jpeg' -> 12)
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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Strictly filter out any file containing 'galary' and sort by numerical order
  const sortedScreens = useMemo(() => {
    if (!project) return [];
    const raw = (project.realGalleryImages || []).filter(
      (img) => !img.toLowerCase().includes('galary')
    );
    return raw.sort((a, b) => {
      const numA = extractImageNumber(a);
      const numB = extractImageNumber(b);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
  }, [project]);

  if (!project) return null;

  const currentScreen = sortedScreens[selectedScreenIndex] || project.image || null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                Case Study &bull; {project.category}
              </span>
              <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/40 transition-colors"
              title="Open full page view"
            >
              <span>Full Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* ===================================================================
              NUMBERED SCREENSHOTS GALLERY (Strict numerical order 1 -> 2 -> 3)
             =================================================================== */}
          {sortedScreens.length > 0 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>
                    Verified Mobile Screenshots in Numerical Order (1 &rarr; {sortedScreens.length})
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/80">
                  Screen {selectedScreenIndex + 1} of {sortedScreens.length}
                </span>
              </div>

              {/* Main Active Screen Display */}
              {currentScreen && (
                <div
                  className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-zoom-in group"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={currentScreen}
                    alt={`${project.name} active screen ${selectedScreenIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                  {/* Prev/Next arrows on main screen */}
                  {sortedScreens.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedScreenIndex((prev) =>
                            (prev - 1 + sortedScreens.length) % sortedScreens.length
                          );
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white border border-slate-700 hover:border-cyan-400 transition-colors cursor-pointer"
                        aria-label="Previous screen"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedScreenIndex((prev) =>
                            (prev + 1) % sortedScreens.length
                          );
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white border border-slate-700 hover:border-cyan-400 transition-colors cursor-pointer"
                        aria-label="Next screen"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/90 text-white text-[11px] font-mono border border-slate-700 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              )}

              {/* Numbered Thumbnails Strip (1 -> 2 -> 3 ...) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
                {sortedScreens.map((screen, idx) => {
                  const num = extractImageNumber(screen);
                  const label = num !== Number.MAX_SAFE_INTEGER ? `#${num}` : `${idx + 1}`;
                  const isSelected = idx === selectedScreenIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedScreenIndex(idx)}
                      className={`relative w-14 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-400 ring-2 ring-cyan-500/30 scale-105 shadow-lg'
                          : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-cyan-600/60'
                      }`}
                    >
                      <Image
                        src={screen}
                        alt={`Screen ${label}`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 text-[10px] font-mono font-bold text-cyan-300 text-center py-0.5 leading-none">
                        {label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Project Tagline & Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
              Project Overview
            </h4>
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-900/40">
              <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Core Application Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="space-y-4">
            {project.architecture && (
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>System Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Technologies & Tools Employed:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges & Development Process */}
          {(project.challenges || project.developmentProcess) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challenges && (
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Technical Challenges:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.developmentProcess && (
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Development Process:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.developmentProcess.map((step, i) => (
                      <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">&bull;</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Results & Status */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <span className="font-bold text-white mr-1">Current Status:</span>
            {project.resultsAndStatus}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-md transition-opacity hover:opacity-90"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            <span>Permanent Case Study Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentScreen && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-[85vh]">
            <Image
              src={currentScreen}
              alt="Enlarged screenshot"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
