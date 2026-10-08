'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { personalInfo } from '@/data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject line';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="GET IN TOUCH"
            title="Let's Connect & Collaborate"
            subtitle="Whether you have an internship opportunity, a Flutter project, or want to discuss software engineering, my inbox is always open."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={100}>
              <div className="bg-white/90 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl dark:shadow-slate-950/50 space-y-6 transition-all duration-300 card-hover-effect">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    Direct Channels
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Reach out directly via email, phone, or professional networks.
                  </p>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    title="Copy email"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/80 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Phone / Mobile
                      </p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 truncate block transition-colors"
                      >
                        {personalInfo.phone} ({personalInfo.phoneInternational})
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy phone"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.location} &bull; Ain Shams University
                    </p>
                  </div>
                </div>

                {/* Professional Networks */}
                <div className="pt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Online Profiles & Source Code:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/80 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-cyan-500/40 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 ml-auto text-slate-400 dark:text-slate-500" />
                    </a>

                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/80 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-cyan-500/40 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 ml-auto text-slate-400 dark:text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="bg-white/90 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm shadow-xl dark:shadow-slate-950/50 transition-all duration-300 card-hover-effect">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Fill in the form below. When submitted, it prepares your message ready to send directly.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/80 text-center space-y-3">
                    <CheckCircle className="w-10 h-10 text-emerald-500 dark:text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Your email client has been opened with your inquiry. You can also reach Karim directly at <strong className="text-cyan-600 dark:text-cyan-400">{personalInfo.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="inline-flex text-xs font-semibold text-cyan-600 dark:text-cyan-400 underline hover:no-underline pt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden transition-all ${
                            errors.name
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Email Address <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Subject <span className="text-cyan-600 dark:text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Flutter Mobile Opportunity / Inquiry"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden transition-all ${
                          errors.subject
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your inquiry, project scope, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden transition-all resize-y ${
                          errors.message
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
