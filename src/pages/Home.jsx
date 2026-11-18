import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Landmark, 
  ShieldCheck, 
  Database, 
  Globe, 
  GraduationCap, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { 
  siteMetadata, 
  heroStats, 
  whatWeAreKnownFor, 
  ourApproach, 
  partnerLogos,
  maharashtraUniversities
} from '../data/content';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Button from '../components/Button';
import SEO from '../components/SEO';

const iconMap = {
  Landmark,
  ShieldCheck,
  Database,
  Globe,
  GraduationCap,
  Award
};

export default function Home() {
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteMetadata.fullName,
      image: `${siteMetadata.portalUrl}/icare-logo.png`,
      '@id': `${siteMetadata.portalUrl}/#localbusiness`,
      url: siteMetadata.portalUrl,
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0827,
        longitude: 80.2707
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:00'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteMetadata.name,
      url: siteMetadata.portalUrl,
      description: siteMetadata.heroSubline
    }
  ];

  return (
    <>
      <SEO
        title="Institutional Quality Assessment & Academic Ranking Frameworks"
        description={siteMetadata.heroSubline}
        schema={homeSchema}
      />

      {/* 1. HERO SECTION */}
      <div className="relative overflow-hidden bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            {/* Academic Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100/70 border border-amber-300/80 dark:text-amber-300 dark:bg-amber-950/50 dark:border-amber-700/60 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Independent Academic Evaluation Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Measuring, benchmarking and improving the quality of{' '}
              <span className="relative inline-block text-slate-900 dark:text-white">
                higher education
                <span className="absolute bottom-1.5 left-0 right-0 h-2 bg-amber-400/40 dark:bg-amber-500/30 -z-10 rounded-sm" />
              </span>{' '}
              in India
            </h1>

            {/* Sub-line */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              {siteMetadata.heroSubline}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/what-we-do"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-md"
              >
                Our Work
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Technical Support for NIRF Formulations
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                State Framework Architect (GSIRF, KSURF)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Verifiable Scopus & DVV Verification
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ICARE AT A GLANCE (Animated Counters) */}
      <Section bg="default" id="glance">
        <SectionHeading
          kicker="ICARE at a Glance"
          title="Institutional Footprint & Empirical Reach"
          subtitle="Two decades of establishing rigorous quality benchmarks, deploying embedded analysts, and architecting state ranking frameworks across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {heroStats.map((stat) => (
            <Counter
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Section>

      {/* 3. WHAT WE ARE KNOWN FOR */}
      <Section bg="offwhite" id="known-for">
        <SectionHeading
          kicker="Core Mandate"
          title="What We Are Known For"
          subtitle="Operating at the intersection of state higher education policy, empirical research scientometrics, and university governance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whatWeAreKnownFor.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <Card
                key={item.id}
                className="flex flex-col justify-between group hover:border-amber-400/60 dark:hover:border-amber-400/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-amber-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-amber-400 group-hover:border-slate-800 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center text-xs font-semibold text-slate-900 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                  >
                    <span>Explore Methodology</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 4. OUR APPROACH TEASER */}
      <Section bg="navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-400 bg-slate-850 border border-slate-700 mb-6">
            Institutional Philosophy
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
            "{ourApproach.quote}"
          </blockquote>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {ourApproach.subtext}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {ourApproach.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300"
              >
                <div className="font-serif text-amber-400 font-bold text-sm mb-2">
                  0{idx + 1}. {pillar.title}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              to="/about"
              variant="saffron"
              size="md"
              icon={ArrowRight}
            >
              Read The Full ICARE Story & Methodology
            </Button>
          </div>
        </div>
      </Section>

      {/* 5. PARTNERS LOGO STRIP (Text-based Placeholders) */}
      <Section bg="offwhite" id="partners">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Network & Collaborations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Trusted by Governments, Apex Councils & Universities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Institutional collaborations across state ranking frameworks, national technical advisory, and university intelligence.
          </p>
        </div>

        {/* Text-based institutional placeholder strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-400 font-mono mb-2">
                <span>{partner.category}</span>
                <span className="text-[10px] text-slate-400">INSTITUTION</span>
              </div>
              <p className="font-serif font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-snug">
                {partner.name}
              </p>

              {partner.name.includes('Maharashtra') && (
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {maharashtraUniversities.map((u) => (
                      <div
                        key={u.short}
                        title={`${u.name} (${u.short})`}
                        className="w-7 h-7 rounded-md p-0.5 bg-white border border-slate-200 dark:border-slate-700 shrink-0 flex items-center justify-center overflow-hidden"
                      >
                        <picture>
                          <source type="image/webp" srcSet={u.logoWebp} />
                          <img
                            src={u.logo}
                            alt={u.short}
                            width="24"
                            height="24"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain"
                          />
                        </picture>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 italic">
                {partner.placeholderText}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/track-record"
            className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <span>View Full Track Record & State Mandates</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </Section>

      {/* 6. BOTTOM CTA BANNER */}
      <Section bg="default">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Institutional Engagement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to elevate your institution's empirical performance?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you represent a state higher education department planning a rating framework or a university targeting NIRF Top-50, ICARE delivers the data integrity and strategic roadmaps needed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="saffron"
                size="lg"
                icon={ArrowRight}
              >
                Schedule an Institutional Briefing
              </Button>
              <Button
                to="/tools-and-initiatives"
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                Explore Interactive Simulator
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
