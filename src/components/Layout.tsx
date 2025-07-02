import React from 'react';
import Head from 'next/head';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SEOProps } from '@/types';

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOProps;
}

export const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const defaultSEO = {
    title: 'Foundry Estates - Luxury Real Estate Consultancy',
    description: 'Premier luxury real estate consultancy for discerning investors and home buyers. Exclusive properties and personalized service.',
  };

  const seoData = { ...defaultSEO, ...seo };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.openGraph?.title || seoData.title} />
        <meta property="og:description" content={seoData.openGraph?.description || seoData.description} />
        <meta property="og:type" content={seoData.openGraph?.type || 'website'} />
        <meta property="og:image" content={seoData.openGraph?.image || '/images/og-image.jpg'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        {/* Canonical */}
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

