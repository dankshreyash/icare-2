import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '../data/content';

export default function SEO({ 
  title, 
  description = siteMetadata.shortDescription,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/icare-logo.png'
}) {
  const fullTitle = title 
    ? `${title} | ${siteMetadata.name} - ${siteMetadata.fullName}`
    : `${siteMetadata.name} | ${siteMetadata.fullName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.fullName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
