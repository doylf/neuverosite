import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neuvero',
  description: 'Neuroscience-informed leadership development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        {/* MailerLite Universal Script */}
        <Script
          id="mailerlite"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1628260');
            `,
          }}
        />
      </head>

      <body className={`${inter.className} flex flex-col flex-1 min-h-full`}>
        {/* Persistent Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-6 border-b border-slate-200 bg-[#f7f7f7] text-slate-900">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <img src="/neulogo.png" alt="Neuvero Logo" className="h-6 w-6" />
              <span className="text-xl font-bold text-[#15344a]">NEUVERO</span>
            </Link>
          </div>
          <nav className="space-x-4 sm:space-x-6 text-slate-600">
            <a href="/coaching" className="hover:text-slate-900">Coaching</a>
            <a href="/education" className="hover:text-slate-900">Education</a>
            <a href="/neuro360" className="hover:text-slate-900">Neuro360</a>
          </nav>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}