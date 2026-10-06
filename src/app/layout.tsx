import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { personalInfo } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Karim Mohamed Abdelaty | Software Engineer Student & Flutter Developer',
  description:
    'Portfolio of Karim Mohamed Abdelaty, a Computer Science student and Flutter Developer specializing in cross-platform mobile applications, APIs, Firebase, and modern software development.',
  keywords: [
    'Karim Mohamed Abdelaty',
    'Flutter Developer',
    'Software Engineer Student',
    'Mobile Application Developer',
    'Dart',
    'Ain Shams University',
    'DEPI Flutter',
    'Cross-Platform Mobile',
    'Cairo Egypt Developer',
    'BLoC',
    'Provider',
    'Clean Architecture',
  ],
  authors: [{ name: 'Karim Mohamed Abdelaty', url: personalInfo.github }],
  creator: 'Karim Mohamed Abdelaty',
  publisher: 'Karim Mohamed Abdelaty',
  metadataBase: new URL('https://karim-abdelaty-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Karim Mohamed Abdelaty | Software Engineer Student & Flutter Developer',
    description:
      'Computer Science student at Ain Shams University & Flutter Developer building cross-platform mobile apps with clean architecture, REST APIs, and modern state management.',
    url: 'https://karim-abdelaty-portfolio.vercel.app',
    siteName: 'Karim Mohamed Abdelaty Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karim Mohamed Abdelaty | Software Engineer Student & Flutter Developer',
    description:
      'Computer Science student at Ain Shams University & Flutter Developer building cross-platform mobile apps.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <head>
        {/* Anti-FOUC inline script to immediately set theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('karim-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full font-sans antialiased flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
