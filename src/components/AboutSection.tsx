'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Code2,
  User,
  Briefcase,
  MapPin,
  Landmark,
  GraduationCap,
  Layers,
  Copy,
  Check,
  Mail,
  Phone,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { personalInfo } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const profileOverview = [
    {
      label: 'Full Name',
      value: 'Karim Mohamed Abdelaty',
      icon: User,
    },
    {
      label: 'Role',
      value: 'Flutter Developer | Computer Science Student',
      icon: Briefcase,
    },
    {
      label: 'Location',
      value: 'Cairo, Egypt',
      icon: MapPin,
    },
    {
      label: 'University',
      value: 'Ain Shams University – Faculty of Science',
      icon: Landmark,
    },
    {
      label: 'Education',
      value: 'B.Sc. Computer Science | Grade: 3.2 (Very Good)',
      icon: GraduationCap,
    },
    {
      label: 'Main Focus',
      value: 'Flutter | Dart | REST APIs | BLoC / Cubit',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="ABOUT ME"
            title="Background & Overview"
            subtitle="A focused look at my academic foundation, engineering mindset, and mobile development focus."
          />
        </ScrollReveal>

        {/* 2-Column Main Layout: 55% Left (2 Cards), 45% Right (Large Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-8 items-stretch">
          {/* =========================================================================
              LEFT COLUMN (Approx 55% on desktop: 6 of 11 cols): 2 VERTICAL CARDS
             ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* CARD 1: ABOUT / PROFESSIONAL PHILOSOPHY */}
            <ScrollReveal delay={100} className="h-full">
              <div className="h-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 rounded-[28px] p-6 sm:p-7 backdrop-blur-md shadow-xl dark:shadow-slate-950/50 card-hover-effect relative overflow-hidden flex flex-col justify-between">
                {/* Corner Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block font-semibold">
                        Who I Am
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Professional Philosophy
                      </h3>
                    </div>
                  </div>

                  {/* Natural, concise introduction */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                    Computer Science student at{' '}
                    <strong className="text-slate-900 dark:text-white font-semibold">Ain Shams University</strong>{' '}
                    and Flutter Developer focused on building clean, responsive, and user-friendly mobile applications.
                    I enjoy turning real-world problems into practical digital solutions using modern Flutter development practices, clean architecture, REST APIs, and reactive state management.
                  </p>
                </div>

                {/* Compact highlighted quote/philosophy */}
                <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/25 border-l-4 border-cyan-500 dark:border-cyan-400 border-y border-r border-cyan-200/60 dark:border-cyan-900/40 text-slate-700 dark:text-slate-200">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700 dark:text-slate-300">
                    &ldquo;I believe reliable mobile apps emerge from clean architecture, thoughtful state management, and intuitive user experiences.&rdquo;
                  </p>
                  <div className="mt-1.5 text-right">
                    <span className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">— Engineering Philosophy</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 2: QUICK PROFILE OVERVIEW */}
            <ScrollReveal delay={200} className="h-full">
              <div className="h-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 rounded-[28px] p-6 sm:p-7 backdrop-blur-md shadow-xl dark:shadow-slate-950/50 card-hover-effect relative overflow-hidden flex flex-col justify-between">
                {/* Corner Ambient Glow */}
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-xs">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block font-semibold">
                        At A Glance
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                        Quick Profile Overview
                      </h3>
                    </div>
                  </div>

                  {/* Clean horizontal rows with small icons and subtle separators */}
                  <div className="divide-y divide-slate-200 dark:divide-slate-800/80">
                    {profileOverview.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs sm:text-sm first:pt-0 last:pb-0"
                        >
                          <div className="flex items-center gap-2.5 min-w-[120px] sm:min-w-[130px] shrink-0 text-slate-500 dark:text-slate-400">
                            <Icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {item.label}
                            </span>
                          </div>
                          <div className="sm:text-right text-slate-800 dark:text-slate-200 font-medium break-words">
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Compact Quick Actions Row to preserve copy email & social links */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                      title="Karim's GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                      title="Karim's LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                      title="Call Karim"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 hover:bg-cyan-200 dark:hover:bg-cyan-900/60 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (Approx 45% on desktop: 5 of 11 cols): LARGE PROFILE PHOTO AREA
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal delay={250}>
              <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-full aspect-[3/4] lg:aspect-auto max-w-md lg:max-w-none mx-auto rounded-[28px] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl dark:shadow-cyan-950/30 group bg-slate-100 dark:bg-slate-900">
                {/* Ambient Glow Aura */}
                <div className="absolute -inset-1 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent rounded-[28px] pointer-events-none z-10" />

                {/* Real Profile Photo (myphoto) */}
                <Image
                  src="/assets/myphoto.jpeg"
                  alt="Karim Mohamed Abdelaty"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Small Elegant Overlay at bottom */}
                <div className="absolute bottom-4 inset-x-4 z-20">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                        Karim Mohamed Abdelaty
                      </h4>
                      <p className="text-xs text-cyan-400 font-medium">
                        Flutter Developer
                      </p>
                    </div>

                    {/* Pulsing Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
