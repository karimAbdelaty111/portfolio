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
  Check,
  Search,
  Sparkles,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
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
    <section id="skills" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="TECHNICAL SKILLS"
          title="Skills & Technical Capabilities"
          subtitle="A comprehensive inventory of technologies, frameworks, architecture patterns, and engineering tools I work with."
        />

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categoryNames.map((name) => {
              const isActive = activeCategory === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveCategory(name)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. BLoC, Dio, BFS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-800 bg-slate-900/90 text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const Icon = iconMap[category.iconName] || Cpu;

            return (
              <div
                key={category.title}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-950/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>CATEGORY SPECIFICATION</span>
                  <span className="font-semibold text-cyan-400">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/80 rounded-3xl border border-slate-800 p-8">
            <p className="text-slate-400 text-sm">
              No skills match &quot;{searchQuery}&quot;. Try resetting the search or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
