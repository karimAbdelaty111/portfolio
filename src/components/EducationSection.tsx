'use client';

import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { educationData } from '@/data/portfolioData';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Education & CS Foundations"
          subtitle="Formal university education providing a rigorous theoretical foundation in algorithms, systems, and software engineering."
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl relative overflow-hidden transition-all duration-300">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 text-cyan-400 border border-cyan-800/80">
                      {educationData.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Dept. of {educationData.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {educationData.university} &bull; {educationData.faculty}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-200">{educationData.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* Coursework & CS Foundations */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
                  Core Computer Science Curriculum:
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {educationData.relevantTopics.map((topic) => (
                  <div
                    key={topic}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 bg-slate-950/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Expected Graduation: <strong className="text-white">2026</strong>. Preparing for software engineering internships and junior Flutter roles.
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 whitespace-nowrap">
                Accredited BSc Program
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
