'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Mail,
  ChevronLeft,
  ChevronRight,
  Wifi,
  BatteryMedium,
  Signal,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '@/data/portfolioData';
import CvModal from './CvModal';

export default function Hero() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<'ofood' | 'metro'>('ofood');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Strictly numerical real app screenshots (no galary images)
  const ofoodScreens = [
    '/assets/ofood1.jpeg',
    '/assets/ofood2.jpeg',
    '/assets/ofood3.jpeg',
    '/assets/ofood4.jpeg',
    '/assets/ofood5.jpeg',
    '/assets/ofood6.jpeg',
    '/assets/ofood7.jpeg',
    '/assets/ofood8.jpeg',
    '/assets/ofood9.jpeg',
    '/assets/ofood10.jpeg',
    '/assets/ofood11.jpeg',
    '/assets/ofood12.jpeg',
    '/assets/ofood13.jpeg',
    '/assets/ofood14.jpeg',
  ];

  const metroScreens = [
    '/assets/metro1.jpeg',
    '/assets/metro2.jpeg',
    '/assets/metro3.jpeg',
    '/assets/metro4.jpeg',
    '/assets/metro5.jpeg',
    '/assets/metro6.jpeg',
    '/assets/metro7.jpeg',
    '/assets/metro8.jpeg',
  ];

  const currentScreens = activeApp === 'ofood' ? ofoodScreens : metroScreens;

  // Auto-advance slideshow: cycles OFood 1-14 -> Metro 1-8 -> OFood 1-14
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => {
        const currentList = activeApp === 'ofood' ? ofoodScreens : metroScreens;
        if (prevIndex < currentList.length - 1) {
          return prevIndex + 1;
        } else {
          // Completed current app: smoothly alternate to other app at screen 1
          setActiveApp((curr) => (curr === 'ofood' ? 'metro' : 'ofood'));
          return 0;
        }
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [activeApp, isPaused, ofoodScreens, metroScreens]);

  const handleNextSlide = useCallback(() => {
    setSlideIndex((prevIndex) => {
      const currentList = activeApp === 'ofood' ? ofoodScreens : metroScreens;
      if (prevIndex < currentList.length - 1) {
        return prevIndex + 1;
      } else {
        setActiveApp((curr) => (curr === 'ofood' ? 'metro' : 'ofood'));
        return 0;
      }
    });
  }, [activeApp, ofoodScreens, metroScreens]);

  const handlePrevSlide = useCallback(() => {
    setSlideIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        const prevApp = activeApp === 'ofood' ? 'metro' : 'ofood';
        const prevList = prevApp === 'ofood' ? ofoodScreens : metroScreens;
        setActiveApp(prevApp);
        return prevList.length - 1;
      }
    });
  }, [activeApp, ofoodScreens, metroScreens]);

  const handleSelectApp = (app: 'ofood' | 'metro') => {
    setActiveApp(app);
    setSlideIndex(0);
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Top Status Pill Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 shadow-sm backdrop-blur-sm max-w-full">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-center">Software Engineer Student | Flutter Developer</span>
                <span className="text-slate-700 hidden xs:inline">•</span>
                <span className="text-slate-400 font-normal hidden xs:inline">
                  Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg xl:text-xl font-semibold text-slate-200">
                Architecting Scalable Mobile Applications with Clean Code & Algorithms.
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden touch-manipulation cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social channels row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Email Karim"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

            {/* 4 Metric / Key Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">
                  4th Year
                </div>
                <div className="text-[11px] font-medium text-slate-400 leading-tight mt-0.5">
                  Computer Science
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">
                  4+ Projects
                </div>
                <div className="text-[11px] font-medium text-slate-400 leading-tight mt-0.5">
                  Mobile Solutions
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">
                  DEPI R5
                </div>
                <div className="text-[11px] font-medium text-slate-400 leading-tight mt-0.5">
                  MCIT Scholarship
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">
                  Clean Arch
                </div>
                <div className="text-[11px] font-medium text-slate-400 leading-tight mt-0.5">
                  BLoC &amp; Modular
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile App Showcase Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Interactive Switcher Tab Bar: Only the 2 Real Applications */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 mb-4 shadow-sm">
              <button
                type="button"
                onClick={() => handleSelectApp('ofood')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeApp === 'ofood'
                    ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>OFood App</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeApp === 'ofood'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  14 Screens
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectApp('metro')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeApp === 'metro'
                    ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Cairo Metro App</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeApp === 'metro'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  8 Screens
                </span>
              </button>
            </div>

            {/* Glowing Device Chassis */}
            <div
              className="relative group w-full max-w-[320px] sm:max-w-[340px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Subtle ambient aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-[44px] blur-lg opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />

              {/* Main Phone Chassis */}
              <div className="relative rounded-[40px] p-2.5 bg-slate-900 dark:bg-slate-950 border-[3px] border-slate-700 dark:border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none border border-slate-800/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2 border border-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Inner Screen Aspect */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/19] bg-slate-950 flex flex-col justify-between pt-10 pb-3 px-2">
                  {/* Smartphone Top Status Bar (below notch) */}
                  <div className="absolute top-2.5 inset-x-5 flex items-center justify-between text-[11px] font-semibold text-white/70 pointer-events-none z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <BatteryMedium className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Screenshots Showcase Container */}
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden rounded-[22px]">
                    {/* OFood Screenshots (1 to 14 in strict numerical order) */}
                    {ofoodScreens.map((src, idx) => (
                      <div
                        key={`ofood-${idx}`}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                          activeApp === 'ofood' && idx === slideIndex
                            ? 'opacity-100 scale-100 z-10'
                            : 'opacity-0 scale-[0.98] z-0 pointer-events-none'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`OFood screen ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 300px, 340px"
                          className="object-contain object-center"
                          priority={idx <= 1}
                        />
                      </div>
                    ))}

                    {/* Cairo Metro Screenshots (metro1 to metro8 in strict numerical order) */}
                    {metroScreens.map((src, idx) => (
                      <div
                        key={`metro-${idx}`}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                          activeApp === 'metro' && idx === slideIndex
                            ? 'opacity-100 scale-100 z-10'
                            : 'opacity-0 scale-[0.98] z-0 pointer-events-none'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Cairo Metro screen ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 300px, 340px"
                          className="object-contain object-center"
                          priority={idx <= 1}
                        />
                      </div>
                    ))}

                    {/* Navigation Chevrons (visible on hover) */}
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      aria-label="Previous slide"
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 z-30 cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNextSlide}
                      aria-label="Next slide"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 z-30 cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Top Screen Badges */}
                    <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-semibold text-slate-200 pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{activeApp === 'ofood' ? 'OFood' : 'Cairo Metro'}</span>
                    </div>

                    <div className="absolute top-2 right-2 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-cyan-300 pointer-events-none">
                      <span>
                        {slideIndex + 1} / {currentScreens.length}
                      </span>
                    </div>

                    {/* Bottom Project Name & Step Bar */}
                    <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-800 text-center z-20 pointer-events-none">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-white">
                          {activeApp === 'ofood' ? 'OFood App' : 'Cairo Metro App'}
                        </span>
                        <span className="text-[10px] text-cyan-400 font-mono">
                          Screen #{slideIndex + 1}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${((slideIndex + 1) / currentScreens.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                </div>
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
