import React from 'react';
import { 
  Target, 
  Compass, 
  Award, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { aboutContent, ourApproach } from '../data/content';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About ICARE | Evolution from KSURF to NIRF"
        description="Learn the history of ICARE: pioneering India's first state rating framework (KSURF), recommending NIRF, working with PMO, IITs, NAAC, and global ranking agencies."
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              Our Genesis & Mandate
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {aboutContent.headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {aboutContent.lead}
            </p>
          </div>
        </div>
      </div>

      {/* Story (KSURF to NIRF) Timeline / Narrative */}
      <Section bg="default">
        <SectionHeading
          kicker="The Evolution"
          title="From State Project to National Ranking Architecture"
          subtitle="How India's rating and ranking ecosystem evolved through ICARE's pioneering frameworks."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {aboutContent.storyParagraphs.map((para, index) => (
              <p key={index} className="p-4 rounded-xl bg-stone-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                {para}
              </p>
            ))}
          </div>

          {/* Defining Milestones Callout Box */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>National & State Mandates</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-amber-500 pl-3">
                <span className="font-mono text-amber-400 font-bold">KSURF to NIRF</span>
                <h4 className="font-serif font-bold text-white text-base">National Ranking Architecture</h4>
                <p className="text-slate-300 mt-0.5">ICARE recommended and built NIRF, which grew out of Karnataka's KSURF framework.</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <span className="font-mono text-amber-400 font-bold">Accreditation</span>
                <h4 className="font-serif font-bold text-white text-base">National Accreditation Authority</h4>
                <p className="text-slate-300 mt-0.5">Data validation and verification partner of NAAC, appointed to accredit institutions nationwide.</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <span className="font-mono text-amber-400 font-bold">Institutions of Eminence</span>
                <h4 className="font-serif font-bold text-white text-base">Eminence Framework</h4>
                <p className="text-slate-300 mt-0.5">Recommended and helped create the initiative, preparing presentations through which institutions earned the title.</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <span className="font-mono text-amber-400 font-bold">Mission Karmayogi</span>
                <h4 className="font-serif font-bold text-white text-base">Prime Minister's Office</h4>
                <p className="text-slate-300 mt-0.5">Empanelled by PMO for Capacity Building Commission to assess and accredit civil-service training institutions across India.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Reputation-Survey Point */}
      <Section bg="offwhite" id="reputation-survey">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-10 bg-white dark:bg-slate-900 border-2 border-amber-500/30 dark:border-amber-500/20 shadow-md">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 mb-4">
              <ShieldAlert className="w-6 h-6 shrink-0" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {aboutContent.reputationSurveyPoint.title}
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200">
                <p className="font-medium">
                  <strong>The 30% Weight Factor:</strong> {aboutContent.reputationSurveyPoint.summary}
                </p>
              </div>

              <p>
                {aboutContent.reputationSurveyPoint.counterApproach}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Public Data Telemetry</span>
                  National ranking data is public; our value lies in analysis, peer distance, and focus area roadmaps.
                </div>
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">National Accreditation Partner</span>
                  Validating, verifying, and accrediting institutional submissions for the national accreditation authority.
                </div>
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Global Reputation Unity</span>
                  Encouraging Indian institutions to support one another's reputation globally while competing at home.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section bg="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-t-4 border-t-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              "{aboutContent.vision}"
            </p>
          </Card>

          <Card className="p-8 border-t-4 border-t-slate-800 dark:border-t-slate-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              "{aboutContent.mission}"
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Approach (Pillars) */}
      <Section bg="offwhite">
        <SectionHeading
          kicker="Methodological Rigour"
          title="Our Tripartite Approach to Institutional Reform"
          subtitle="We partner directly with institutional leadership to institutionalize continuous governance mechanisms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ourApproach.pillars.map((pillar, idx) => (
            <Card key={idx} className="p-8">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                Pillar 0{idx + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/what-we-do"
            variant="primary"
            size="lg"
            icon={ArrowRight}
          >
            Review Our 7 Core Practice Areas
          </Button>
        </div>
      </Section>
    </>
  );
}
