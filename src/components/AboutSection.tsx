'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Compass,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  FolderGit2,
  Database,
  Smartphone,
  Share2,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { personalInfo } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const profileSpecs = [
    {
      label: 'Full Name',
      value: personalInfo.name,
      icon: Code2,
    },
    {
      label: 'Professional Role',
      value: personalInfo.title,
      icon: Cpu,
    },
    {
      label: 'University & Faculty',
      value: `${personalInfo.university} — ${personalInfo.faculty}`,
      icon: GraduationCap,
    },
    {
      label: 'Academic Standing',
      value: `${personalInfo.academicStatus} (${personalInfo.department})`,
      icon: Layers,
    },
    {
      label: 'Key Experience',
      value: 'DEPI Round 5 Scholar & Flutter Projects',
      icon: FolderGit2,
    },
    {
      label: 'Current Location',
      value: personalInfo.location,
      icon: MapPin,
    },
    {
      label: 'Direct Email',
      value: personalInfo.email,
      icon: Mail,
      isLink: true,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  const engineeringPillars = [
    {
      title: 'Clean Architecture Decoupling',
      desc: 'Separation of concerns across presentation, domain, and data layers with BLoC/Cubit and SOLID principles.',
      icon: ShieldCheck,
      color: 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30',
      tags: ['BLoC', 'Cubit', 'SOLID', 'Repository Pattern'],
    },
    {
      title: 'Algorithmic Core & BFS Routing',
      desc: 'Graph modeling and Breadth-First Search (BFS) route optimization in Cairo Metro App for transfer detection.',
      icon: Compass,
      color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/30',
      tags: ['Graph Theory', 'BFS Traversal', 'Shortest Route', 'Time Estimates'],
    },
    {
      title: 'Offline-First & REST APIs',
      desc: 'Resilient networking with Dio interceptors, error boundaries, and local caching with SQLite & SharedPreferences.',
      icon: Database,
      color: 'text-teal-400 bg-teal-950/50 border-teal-500/30',
      tags: ['Dio Interceptors', 'RESTful APIs', 'SQLite', 'Local Persistence'],
    },
    {
      title: 'Fluid UI & Responsive Layouts',
      desc: 'Platform-adaptive interfaces following Material 3 & iOS guidelines with responsive widgets and smooth frame rates.',
      icon: Smartphone,
      color: 'text-sky-400 bg-sky-950/50 border-sky-500/30',
      tags: ['Material 3', 'Maps & Geolocation', 'State Streams', 'Animations'],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-slate-950">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ABOUT ME"
          title="Background & Engineering Philosophy"
          subtitle="A dedicated computer science student crafting cross-platform mobile experiences with a strong engineering core."
        />

        {/* =========================================================================
            TWO-COLUMN MAIN ABOUT LAYOUT (MATCHING SHIMAA'S HIGH-END STRUCTURE)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ---------------------------------------------------------------------
              LEFT COLUMN (7 cols): NARRATIVE & ENGINEERING PHILOSOPHY
             --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex-1 shadow-xl">
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    Who I Am
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Karim Mohamed Abdelaty
                  </h3>
                </div>
              </div>

              {/* Professional Narrative */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science student at{' '}
                  <strong className="text-white font-semibold">Ain Shams University</strong>{' '}
                  and an aspiring Software Engineer specializing in{' '}
                  <strong className="text-cyan-400 font-semibold">Flutter development</strong>.
                  I focus on building cross-platform mobile applications that solve tangible,
                  real-world problems and provide clean, intuitive user experiences.
                </p>

                <p>
                  My development journey is anchored in{' '}
                  <strong className="text-slate-100">
                    Dart, Flutter, RESTful APIs, reactive state management (BLoC, Cubit, Provider),
                    and clean software architecture
                  </strong>
                  . I have applied these principles across production-quality applications including
                  the <span className="text-cyan-300">Cairo Metro Navigation App</span>, the{' '}
                  <span className="text-cyan-300">OnFood ordering platform</span>, and the{' '}
                  <span className="text-cyan-300">San3a technician marketplace</span>.
                </p>

                {/* Engineering Philosophy Quote Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/25 border-l-4 border-cyan-400 border-y border-r border-cyan-900/40 my-4 text-slate-200">
                  <p className="text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;I believe reliable mobile applications emerge at the intersection of
                    rigorous computer science fundamentals, modular decoupled architecture, and
                    empathetic human-centric design. Every line of Dart code should be maintainable,
                    testable, and purpose-driven.&rdquo;
                  </p>
                  <div className="mt-2 text-right">
                    <span className="text-xs font-semibold text-cyan-400">— Engineering Philosophy</span>
                  </div>
                </div>

                <p>
                  As a <strong className="text-emerald-400">DEPI Round 5 Scholar</strong>, I combine
                  academic rigor with hands-on development discipline, continuous learning, and
                  modern version-control collaboration.
                </p>
              </div>

              {/* Verified Highlights Strip */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cross-Platform Flutter & Dart</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Ain Shams Faculty of CS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DEPI Round 5 Scholar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Graph Algorithms & Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN (5 cols): PERSONAL & ACADEMIC PROFILE CARD
             --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 rounded-3xl p-6 sm:p-7 backdrop-blur-md relative overflow-hidden shadow-xl flex-1 flex flex-col justify-between">
              {/* Profile Card Header with Karim's Photo */}
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3.5">
                    {/* Karim Profile Photo Avatar */}
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-md shadow-cyan-500/20 shrink-0">
                      <Image
                        src="/assets/myphoto.jpeg"
                        alt="Karim Mohamed Abdelaty Profile"
                        fill
                        className="object-cover object-top"
                        sizes="56px"
                        priority
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {personalInfo.name}
                      </h4>
                      <p className="text-xs text-cyan-400 font-mono mt-0.5">
                        Software Engineer &bull; Flutter
                      </p>
                    </div>
                  </div>

                  {/* Pulsing Status Badge */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>

                {/* Profile Spec Rows */}
                <div className="space-y-3">
                  {profileSpecs.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                            {item.label}
                          </p>
                          {item.isLink ? (
                            <div className="flex items-center justify-between gap-2 mt-0.5">
                              <a
                                href={item.href}
                                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline truncate block"
                              >
                                {item.value}
                              </a>
                              <button
                                type="button"
                                onClick={handleCopyEmail}
                                aria-label="Copy email address"
                                className="p-1 text-slate-400 hover:text-white transition-colors"
                                title="Copy Email"
                              >
                                {copiedEmail ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          ) : (
                            <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Social & Action Bar */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="Karim's GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="Karim's LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="Call Karim"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/80 hover:bg-cyan-900/60 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BELOW: 4 ENGINEERING FEATURE & ARCHITECTURE CARDS
           ========================================================================= */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xs transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${pillar.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
