'use client';

import React from 'react';
import {
  Smartphone,
  Layout,
  Globe,
  Flame,
  Cpu,
  ShieldCheck,
  Check,
  ArrowRight,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { servicesData } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Layout,
  Globe,
  Flame,
  Cpu,
  ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="SERVICES"
          title="Engineering & Development Services"
          subtitle="Direct technical capabilities and development assistance I provide for mobile projects, engineering teams, and startups."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Smartphone;

            return (
              <div
                key={service.id}
                className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Deliverables & Scope:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">Junior & Internship Ready</span>
                  <a
                    href="#contact"
                    className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
