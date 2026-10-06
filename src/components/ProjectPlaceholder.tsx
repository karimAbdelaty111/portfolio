'use client';

import React from 'react';
import { Smartphone, Sparkles, Utensils, Wrench, Train, Layers } from 'lucide-react';

interface ProjectPlaceholderProps {
  slug: string;
  name: string;
  category: string;
  technologies: string[];
}

export default function ProjectPlaceholder({
  slug,
  name,
  category,
  technologies,
}: ProjectPlaceholderProps) {
  return (
    <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col justify-between p-6 overflow-hidden select-none border-b border-slate-700/60 group">
      {/* Decorative Grid and Accent Gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Top Header inside Preview */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            {slug === 'clothesx' && <Sparkles className="w-4 h-4" />}
            {slug === 'onfood' && <Utensils className="w-4 h-4" />}
            {slug === 'san3a' && <Wrench className="w-4 h-4" />}
            {slug === 'cairo-metro-app' && <Train className="w-4 h-4" />}
            {slug !== 'clothesx' &&
              slug !== 'onfood' &&
              slug !== 'san3a' &&
              slug !== 'cairo-metro-app' && <Smartphone className="w-4 h-4" />}
          </div>
          <span className="text-[11px] font-semibold text-slate-300 tracking-wide uppercase">
            Flutter Mobile App
          </span>
        </div>
        <div className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-800/90 border border-slate-700/80 text-slate-400">
          /assets/projects/{slug}.png
        </div>
      </div>

      {/* Middle Mock Interface Wireframe */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2 shadow-inner group-hover:scale-110 transition-transform">
          <Smartphone className="w-6 h-6 text-blue-400" />
        </div>
        <h4 className="text-base font-bold text-white tracking-tight">{name}</h4>
        <p className="text-[11px] text-slate-400 max-w-xs line-clamp-1">{category}</p>
      </div>

      {/* Bottom Tech Pills inside Placeholder */}
      <div className="relative z-10 flex items-center justify-between gap-2 pt-2 border-t border-slate-700/40">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="text-[10px] text-slate-400">+{technologies.length - 3}</span>
          )}
        </div>
        <span className="text-[10px] text-blue-400 font-semibold flex items-center gap-1 shrink-0">
          <Layers className="w-3 h-3" />
          Architecture Ready
        </span>
      </div>
    </div>
  );
}
