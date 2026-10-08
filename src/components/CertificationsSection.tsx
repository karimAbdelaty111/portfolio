'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Calendar, ShieldCheck, Eye, X, ExternalLink, Download } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { certificationsData } from '@/data/portfolioData';
import { CertificationItem } from '@/types/portfolio';

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="QUALIFICATIONS"
            title="Certifications & Learning Initiatives"
            subtitle="Recognition of ongoing scholarship programs, technical certifications, and formal engineering training tracks."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificationsData.map((cert, idx) => {
            const hasImage = Boolean(cert.image);

            return (
              <ScrollReveal key={cert.id} delay={idx * 100}>
                <div
                  onClick={() => {
                    if (hasImage) setActiveCert(cert);
                  }}
                  className={`bg-white/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:shadow-cyan-500/10 card-hover-effect transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group ${
                    hasImage ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon or Thumbnail */}
                    {hasImage && cert.image ? (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-cyan-400/50 shadow-md shadow-cyan-500/20 shrink-0 group-hover:scale-105 transition-transform bg-slate-900">
                        <Image
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <Eye className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <Award className="w-7 h-7" />
                      </div>
                    )}

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/80">
                          {cert.status}
                        </span>
                        {cert.round && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                            {cert.round}
                          </span>
                        )}
                        {hasImage && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-200 dark:border-cyan-800/60">
                            <Eye className="w-3 h-3" />
                            <span>Click to view credential</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                        {cert.organization} &bull; {cert.program}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>{cert.dateOrPeriod}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800/70">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Initiative</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && activeCert.image && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCert.title} Certificate View`}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {activeCert.title} Certificate
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {activeCert.organization} &bull; {activeCert.dateOrPeriod}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Open full size in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image Frame */}
            <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/60 overflow-y-auto flex items-center justify-center">
              <div className="relative w-full max-w-3xl aspect-[1.414/1] rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white">
                <Image
                  src={activeCert.image}
                  alt={`${activeCert.title} Certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Verified Credential of Achievement</span>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
