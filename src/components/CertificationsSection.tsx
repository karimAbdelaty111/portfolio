'use client';

import React from 'react';
import { Award, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { certificationsData } from '@/data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-slate-950">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="QUALIFICATIONS"
          title="Certifications & Learning Initiatives"
          subtitle="Recognition of ongoing scholarship programs, technical certifications, and formal engineering training tracks."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                      {cert.status}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {cert.round}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
                    {cert.organization} &bull; {cert.program}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.dateOrPeriod}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/70">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Initiative</span>
                </div>
              </div>
            </div>
          ))}

          {/* Scalability Notice */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center">
            <p className="text-xs font-mono text-slate-400">
              Future certificate documents placed inside <code className="text-cyan-400">/assets/certificates/</code> will automatically populate this section upon completion of program milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
