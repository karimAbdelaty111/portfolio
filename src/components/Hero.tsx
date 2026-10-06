'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Mail,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Flame,
  Award,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo, projectsData } from '@/data/portfolioData';
import CvModal from './CvModal';

export default function Hero() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'metro' | 'onfood'>('profile');
  const [slideIndex, setSlideIndex] = useState(0);

  // Real screens for project preview modes (strictly numerical, no galary)
  const metroScreens = [
    '/assets/splish metro 2.jpeg',
    '/assets/loading screen metro 1.jpeg',
    '/assets/home metro 3.jpeg',
    '/assets/home metro 4.jpeg',
  ];

  const onfoodScreens = [
    '/assets/ofood1.jpeg',
    '/assets/ofood2.jpeg',
    '/assets/ofood3.jpeg',
    '/assets/ofood4.jpeg',
  ];

  const currentScreens =
    activeTab === 'metro'
      ? metroScreens
      : activeTab === 'onfood'
      ? onfoodScreens
      : [];

  const handleNextSlide = () => {
    if (currentScreens.length > 0) {
      setSlideIndex((prev) => (prev + 1) % currentScreens.length);
    }
  };

  const handlePrevSlide = () => {
    if (currentScreens.length > 0) {
      setSlideIndex((prev) => (prev - 1 + currentScreens.length) % currentScreens.length);
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white dark:bg-[#070a11] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Ambient background glows matching Shimaa */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Top Status Pill Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-cyan-500/10 dark:bg-cyan-950/50 border border-cyan-500/20 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300 shadow-sm backdrop-blur-sm max-w-full">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-center">Software Engineer Student | Flutter Developer</span>
                <span className="text-slate-300 dark:text-slate-700 hidden xs:inline">•</span>
                <span className="text-slate-600 dark:text-slate-400 font-normal hidden xs:inline">
                  Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg xl:text-xl font-semibold text-slate-700 dark:text-slate-200">
                Architecting Scalable Mobile Applications with Clean Code & Algorithms.
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer Science student at <strong>Ain Shams University</strong> and aspiring Software Engineer specializing in <strong>Flutter development</strong>. Passionate about building high-performance cross-platform applications with BLoC, RESTful APIs, and clean architecture.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden touch-manipulation cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden touch-manipulation cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social channels row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Contact:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Email Karim"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Email</span>
              </a>
            </div>

            {/* 4 Metric / Key Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                  4th Year
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  Computer Science
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                  4+ Projects
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  Mobile Solutions
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                  DEPI R5
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  MCIT Scholarship
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                  Clean Arch
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  BLoC &amp; Modular
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Area with myphoto & device showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Interactive Switcher Tab Bar */}
            <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 bg-slate-100 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 mb-4 shadow-sm overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('profile');
                  setSlideIndex(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Karim Profile
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('metro');
                  setSlideIndex(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'metro'
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cairo Metro App
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('onfood');
                  setSlideIndex(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'onfood'
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                OnFood App
              </button>
            </div>

            {/* Glowing Device Chassis */}
            <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
              {/* Subtle ambient aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-[44px] blur-lg opacity-25 group-hover:opacity-45 transition duration-500 pointer-events-none" />

              {/* Main Chassis Box */}
              <div className="relative rounded-[40px] p-2.5 bg-slate-900 dark:bg-slate-950 border-[3px] border-slate-700 dark:border-slate-800 shadow-2xl overflow-hidden">
                {/* Dynamic Notch / Camera Island */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none border border-slate-800/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2 border border-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Inner Screen Aspect */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/17.5] bg-slate-950 flex flex-col justify-between pt-10 pb-4 px-2">
                  {/* Mode 1: Karim Profile Photo with myphoto.jpeg */}
                  {activeTab === 'profile' ? (
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 group/photo">
                      <Image
                        src={personalInfo.profileImage}
                        alt={`${personalInfo.name} Profile`}
                        fill
                        sizes="320px"
                        priority
                        className="object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                      />

                      {/* Bottom Gradient for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Top floating glass badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs pointer-events-none z-10">
                        <span className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-teal-500/30 text-[10px] font-semibold text-white shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Ain Shams University
                        </span>
                        <span className="bg-slate-900/90 backdrop-blur-md px-2 py-1 rounded-full border border-slate-700/60 text-[10px] font-mono text-cyan-300 shadow-sm">
                          CS &apos;26
                        </span>
                      </div>

                      {/* Bottom Profile Details Glass Card */}
                      <div className="absolute bottom-3 left-2.5 right-2.5 z-10 space-y-2 pointer-events-none">
                        <div className="bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-teal-500/30 shadow-lg">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-xs sm:text-sm">
                              {personalInfo.shortName}
                            </span>
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                              Flutter
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                            {personalInfo.title}
                          </p>
                          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-emerald-400" />
                              {personalInfo.location}
                            </span>
                            <span>•</span>
                            <span className="text-cyan-400 font-medium">DEPI Scholar R5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Mode 2 & 3: Project Slideshow Preview (Metro or OnFood) */
                    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden rounded-[22px]">
                      <Image
                        key={`${activeTab}-${slideIndex}`}
                        src={currentScreens[slideIndex]}
                        alt={`${activeTab} screen ${slideIndex + 1}`}
                        fill
                        sizes="320px"
                        className="object-contain object-center transition-all duration-500 transform scale-100"
                        priority
                      />

                      {/* Chevrons for navigation */}
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        aria-label="Previous slide"
                        className="absolute left-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md border border-slate-700 z-30 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                        className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md border border-slate-700 z-30 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Counter Badge */}
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-cyan-300 z-30">
                        <span>
                          {slideIndex + 1} / {currentScreens.length}
                        </span>
                      </div>

                      {/* Bottom Project Name Tag */}
                      <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-800 text-center z-30">
                        <p className="text-xs font-bold text-white">
                          {activeTab === 'metro' ? 'Cairo Metro App' : 'OnFood App'}
                        </p>
                        <p className="text-[10px] text-cyan-400 font-mono">
                          Screen #{slideIndex + 1} (Numerical Order)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Notice Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
}
