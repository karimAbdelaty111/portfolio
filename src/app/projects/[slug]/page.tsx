import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { projectsData } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

function extractImageNumber(imagePath: string): number {
  if (!imagePath) return Number.MAX_SAFE_INTEGER;
  const filename = imagePath.split(/[/\\]/).pop() || imagePath;
  const baseName = filename.replace(/\.[^/.]+$/, '');
  const matches = baseName.match(/\d+/g);
  if (!matches || matches.length === 0) return Number.MAX_SAFE_INTEGER;
  const lastNum = matches[matches.length - 1];
  const parsed = parseInt(lastNum, 10);
  return isNaN(parsed) ? Number.MAX_SAFE_INTEGER : parsed;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Karim Mohamed Abdelaty',
    };
  }

  return {
    title: `${project.name} — Case Study | Karim Mohamed Abdelaty`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Mobile Project Case Study`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Gallery images with main gallery as #1
  const galleryScreens = project.galleryImages || project.realGalleryImages || [project.image];

  const otherProjects = projectsData.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-cyan-400 selection:text-slate-950">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">{project.name}</span>
          </nav>

          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Title Section */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 mb-3">
              <span>{project.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {project.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-cyan-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs transition-opacity hover:opacity-90"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Visual Showcase / Screenshot Gallery (Main Visual & Screenshots) */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            {galleryScreens.length > 0 && (
              <div className="p-6 bg-slate-900/90 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Project Visuals & Interface Gallery</span>
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/80">
                    {galleryScreens.length} Visuals
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {galleryScreens.map((img, i) => {
                    const isHero = i === 0;
                    return (
                      <div
                        key={i}
                        className={`relative h-48 rounded-xl overflow-hidden border bg-slate-950 group ${
                          isHero
                            ? 'border-cyan-500/50 ring-1 ring-cyan-500/30'
                            : 'border-slate-800'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.name} visual ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-contain p-1 hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[10px] font-mono font-bold text-cyan-300 text-center py-1">
                          {isHero ? 'Primary Visual' : `Screen ${i + 1}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Case Study Deep Dive Content */}
          <div className="space-y-12">
            {/* 1. Project Overview */}
            <section className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                1. Project Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>
            </section>

            {/* 2 & 3. Problem and Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-950/20 border border-amber-900/40">
                <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-lg">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <h2>2. The Problem</h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/40">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-lg">
                  <Lightbulb className="w-5 h-5 shrink-0" />
                  <h2>3. The Engineering Solution</h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* 4. Main Features */}
            <section className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                4. Key Application Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 & 6. Architecture & Technologies */}
            <section className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
              {project.architecture && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>5. Architecture & System Design</span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {project.architecture}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  6. Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 7 & 8. Challenges & Development Process */}
            {(project.challenges || project.developmentProcess) && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
                    <h2 className="text-lg font-bold text-white mb-4">
                      7. Technical Challenges
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.developmentProcess && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
                    <h2 className="text-lg font-bold text-white mb-4">
                      8. Development Process
                    </h2>
                    <ul className="space-y-3">
                      {project.developmentProcess.map((step, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* 9. Results & Current Status */}
            <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-2">
                9. Results & Current Status
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.resultsAndStatus}
              </p>
            </section>
          </div>

          {/* Other Projects Recommendation */}
          <div className="mt-20 pt-10 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">
              Explore More Case Studies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  href={`/projects/${other.slug}`}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-colors group"
                >
                  <p className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {other.category}
                  </p>
                  <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {other.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
