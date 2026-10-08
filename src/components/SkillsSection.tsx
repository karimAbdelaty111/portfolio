'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Layers,
  Network,
  Database,
  Binary,
  Wrench,
  Cpu,
  Search,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { skillsData } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Layers,
  Network,
  Database,
  Binary,
  Wrench,
  Cpu,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryNames = ['All', ...skillsData.map((cat) => cat.title)];

  const filteredCategories = skillsData
    .map((category) => {
      const matchesCategory = activeCategory === 'All' || category.title === activeCategory;
      if (!matchesCategory) return null;

      const filteredSkills = category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery.trim() && filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="TECHNICAL SKILLS"
            title="Skills & Technical Capabilities"
            subtitle="A comprehensive inventory of technologies, frameworks, architecture patterns, and engineering tools I work with."
          />
        </ScrollReveal>

        {/* Search & Category Filter Bar — No horizontal scroll, wrapping naturally */}
        <ScrollReveal delay={100}>
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs: Flex-wrap ensures no horizontal scrollbar or hidden overflow */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categoryNames.map((name) => {
                const isActive = activeCategory === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setActiveCategory(name)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                        : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g. BLoC, Dio, BFS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors shadow-xs"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 
          Responsive CSS Grid:
          - Desktop (lg:grid-cols-4): 4 items per row, 2-row layout for 7 categories
          - Tablet (md:grid-cols-3): 3 items per row
          - Mobile (grid-cols-2): 2 items per row
          - No horizontal scrollbar, balanced spacing, modern developer portfolio look
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch">
          {filteredCategories.map((category, idx) => {
            if (!category) return null;
            const Icon = iconMap[category.iconName] || Cpu;

            return (
              <ScrollReveal key={category.title} delay={idx * 60} className="h-full">
                <div
                  className="h-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 backdrop-blur-sm shadow-md hover:shadow-xl hover:shadow-cyan-500/10 card-hover-effect transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon + Category Name */}
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug truncate">
                          {category.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-1 hidden sm:block">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="pt-2.5 sm:pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5 sm:gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono font-medium bg-slate-100 dark:bg-slate-950/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                          <span className="truncate">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Meta */}
                  <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span className="hidden xs:inline">SKILLS</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400 ml-auto">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              No skills match &quot;{searchQuery}&quot;. Try resetting the search or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
