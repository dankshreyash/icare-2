import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteMetadata } from '../data/content';

export default function SEO({ 
  title, 
  description = siteMetadata.shortDescription,
  canonicalUrl,
  ogType = 'website',
  ogImage = `${siteMetadata.portalUrl}/icare-logo.png`,
  schema
}) {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '' : location.pathname;
  const canonical = canonicalUrl || `${siteMetadata.portalUrl}${currentPath}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteMetadata.portalUrl}${ogImage}`;

  const fullTitle = title 
    ? `${title} | ${siteMetadata.name}`
    : `${siteMetadata.name} | ${siteMetadata.fullName}`;

  // Base Organization & Educational Intelligence Schema
  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteMetadata.portalUrl}/#organization`,
    name: siteMetadata.fullName,
    alternateName: siteMetadata.name,
    url: siteMetadata.portalUrl,
    logo: absoluteOgImage,
    description: siteMetadata.heroSubline,
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/company/icare-india'
    ]
  };

  const schemasToRender = schema 
    ? (Array.isArray(schema) ? [defaultOrganizationSchema, ...schema] : [defaultOrganizationSchema, schema])
    : [defaultOrganizationSchema];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.fullName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* JSON-LD Structured Data Schema Markup */}
      {schemasToRender.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
