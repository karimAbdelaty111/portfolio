'use client';

import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { experienceData } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="EXPERIENCE"
            title="Practical Engineering Experience"
            subtitle="A transparent demonstration of practical mobile development, engineering milestones, and intensive scholarship training."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((item, idx) => {
              const isTraining = item.type === 'training';
              const Icon = isTraining ? Award : Briefcase;

              return (
                <ScrollReveal key={item.id} delay={idx * 150}>
                  <div className="relative sm:pl-20">
                    {/* Timeline Node Badge */}
                    <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 items-center justify-center shadow-md shadow-cyan-500/20 z-10">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Experience Card */}
                    <div className="bg-white/90 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl dark:shadow-slate-950/50 card-hover-effect transition-all duration-300">
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {item.title}
                            </h3>
                            {item.status && (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/80 flex items-center gap-1.5 shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                {item.status}
                              </span>
                            )}
                          </div>
                          {item.companyOrProgram && item.companyOrProgram !== item.title && (
                            <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                              {item.companyOrProgram}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                          <div className="flex items-center gap-1.5 font-mono">
                            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Contributions & Highlights */}
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {item.highlightsLabel || 'Key Responsibilities & Highlights:'}
                        </p>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Tag Pills */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">
                            Tech Stack:
                          </span>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
