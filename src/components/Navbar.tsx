'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '@/data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-200 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand with Profile Avatar matching Shimaa */}
          <Link
            href="#"
            aria-label="Back to top"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1 cursor-pointer"
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-teal-500/40 relative shadow-sm bg-slate-800">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white dark:border-[#070a11]" />
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/50">
                  Flutter
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Software Engineer Student
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <ThemeToggle />

            <Link
              href="#projects"
              className="hidden xs:inline-flex sm:inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-lg shadow-xs hover:shadow-cyan-500/20 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Work</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 touch-manipulation focus:outline-hidden"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-2xl space-y-4 max-h-[calc(100vh-65px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg shadow-sm"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all"
              >
                Contact Karim
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
