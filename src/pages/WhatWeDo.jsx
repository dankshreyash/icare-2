import React from 'react';
import { 
  Sliders, 
  CheckCircle2, 
  Compass, 
  BarChart3, 
  Globe2, 
  FileText, 
  BookOpen,
  ArrowRight,
  Check
} from 'lucide-react';
import { services } from '../data/content';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';

const iconMap = {
  Sliders,
  CheckCircle2,
  Compass,
  BarChart3,
  Globe2,
  FileText,
  BookOpen
};

export default function WhatWeDo() {
  return (
    <>
      <SEO
        title="What We Do | 7 Institutional Advisory & Ranking Practice Areas"
        description="Explore ICARE's 7 core services: ranking frameworks conception, accreditation & DVV data validation, civil-service capacity building, institutional analytics, rankings support, policy, and publications."
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              Comprehensive Institutional Capabilities
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Seven Specialized Services for Academic & Institutional Excellence
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              From designing state-wide ranking gazettes to embedding dedicated analysts inside university campuses, our solutions combine rigorous data verification with strategic reform.
            </p>
          </div>
        </div>
      </div>

      {/* 7 Services Grid */}
      <Section bg="default">
        <div className="space-y-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sliders;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-xs hover:shadow-xl hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Icon, Title, Description (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 dark:bg-slate-800 text-amber-400 border border-slate-800 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-xs">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                          Service {service.number} of 07
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-0.5">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Right Column: Key Deliverables (5 cols) */}
                  <div className="lg:col-span-5 bg-stone-50 dark:bg-slate-850 p-6 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                      <span>Core Deliverables & Outputs</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Mandate customized for State Governments, IQACs, & Autonomous Universities
                  </span>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="sm"
                    icon={ArrowRight}
                  >
                    Inquire for this Service
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Engagement Flow / How We Work */}
      <Section bg="offwhite">
        <SectionHeading
          kicker="Engagement Lifecycle"
          title="The Build–Operate–Transfer–Transform (BOTT) Model"
          subtitle="How ICARE embeds within institutions to transfer long-term analytical capacity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="font-mono text-2xl font-bold text-amber-500 mb-2">01</div>
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">Diagnostic Audit</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Multi-year baseline audit across Scopus, Web of Science, NIRF submissions, student metrics, and financial records.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-mono text-2xl font-bold text-amber-500 mb-2">02</div>
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">Embedded Deployment</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dedicated on-campus analysts work inside IQAC and deaneries to cleanse data and rectify citation profiling errors.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-mono text-2xl font-bold text-amber-500 mb-2">03</div>
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">Targeted Intervention</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Faculty publication masterclasses, patent filing acceleration, and international peer reputation campaigns.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-mono text-2xl font-bold text-amber-500 mb-2">04</div>
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">Capacity Handover</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Self-sustaining internal dashboards, trained institutional coordinators, and enduring governance protocols.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={ArrowRight}
          >
            Schedule a Scope Discussion
          </Button>
        </div>
      </Section>
    </>
  );
}
