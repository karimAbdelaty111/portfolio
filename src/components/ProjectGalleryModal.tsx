'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FolderGit2,
  Sparkles,
} from 'lucide-react';
import { ProjectGalleryGroup } from '@/types/portfolio';

interface ProjectGalleryModalProps {
  gallery: ProjectGalleryGroup | null;
  onClose: () => void;
}

export default function ProjectGalleryModal({
  gallery,
  onClose,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when gallery changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [gallery?.id]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!gallery) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % gallery.images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
      }
    },
    [gallery, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll
  useEffect(() => {
    if (gallery) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [gallery]);

  if (!gallery || gallery.images.length === 0) return null;

  const currentImage = gallery.images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col justify-between p-3 sm:p-5 md:p-6 bg-slate-950/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery.galleryName} Lightbox`}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between gap-3 text-white z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-bold text-cyan-300">
              {gallery.galleryName}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
            {currentIndex + 1} / {gallery.images.length}
          </span>
          <span className="text-xs text-slate-400 hidden md:inline">
            {gallery.tagline}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline mr-2">
            Use &larr; &rarr; or Esc to close
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="p-2 sm:p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Large Image Container */}
      <div
        className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center my-3 sm:my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[72vh] sm:max-h-[76vh] flex items-center justify-center">
          <Image
            src={currentImage}
            alt={`${gallery.galleryName} visual ${currentIndex + 1}`}
            fill
            className="object-contain transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Left Navigation Arrow */}
        {gallery.images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
            }}
            aria-label="Previous image"
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white hover:text-cyan-400 border border-slate-700/80 hover:border-cyan-500/60 shadow-2xl transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Right Navigation Arrow */}
        {gallery.images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % gallery.images.length);
            }}
            aria-label="Next image"
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white hover:text-cyan-400 border border-slate-700/80 hover:border-cyan-500/60 shadow-2xl transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="w-full max-w-4xl mx-auto z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {gallery.images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View image ${idx + 1}`}
                className={`relative w-12 h-16 sm:w-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border transition-all cursor-pointer bg-slate-900 ${
                  isActive
                    ? 'border-cyan-400 ring-2 ring-cyan-400/80 scale-105 shadow-md shadow-cyan-500/30'
                    : 'border-slate-800 opacity-50 hover:opacity-90 hover:border-slate-700'
                }`}
              >
                <Image
                  src={img}
                  alt={`${gallery.projectName} thumb ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
                <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono font-bold bg-slate-950/90 text-white px-1 rounded">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
