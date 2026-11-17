import React, { useState } from 'react';
import { 
  MapPin, 
  Handshake, 
  Calendar, 
  ShieldCheck, 
  Landmark, 
  GraduationCap 
} from 'lucide-react';
import { trackRecordData, siteMetadata } from '../data/content';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function TrackRecord() {
  const [activeTab, setActiveTab] = useState('national');

  const trackRecordSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteMetadata.portalUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Track Record',
          item: `${siteMetadata.portalUrl}/track-record`
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Track Record & Institutional Precedents"
        description="Review ICARE's national mandates with the Ministry of Education (NIRF), state programmes in Gujarat (GSIRF), Maharashtra (MahaSamarth), Karnataka (KSURF), and premier partners."
        schema={trackRecordSchema}
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              Proven Precedents & Nationwide Scale
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              A Track Record of Systemic Higher Education Transformation
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our national advisory milestones, state-level institutional rating frameworks, and partnerships across India's premier academic institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation & Content */}
      <Section bg="default">
        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('national')}
            className={`px-5 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
              activeTab === 'national'
                ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-md font-semibold'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>National Mandates</span>
          </button>

          <button
            onClick={() => setActiveTab('state')}
            className={`px-5 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
              activeTab === 'state'
                ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-md font-semibold'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-800'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>State Programmes</span>
          </button>

          <button
            onClick={() => setActiveTab('partners')}
            className={`px-5 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
              activeTab === 'partners'
                ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-md font-semibold'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-800'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span>Partners & Network</span>
          </button>
        </div>

        {/* Tab 1: National Mandates */}
        {activeTab === 'national' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
            {trackRecordData.nationalMandates.map((item, idx) => (
              <Card key={idx} className="p-8 border-l-4 border-l-amber-500">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        )}

        {/* Tab 2: State Programmes */}
        {activeTab === 'state' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-in fade-in duration-200">
            {trackRecordData.stateProgrammes.map((prog, idx) => (
              <Card key={idx} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                      <MapPin className="w-3.5 h-3.5" />
                      {prog.state}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      State Mandate
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {prog.programme}
                  </h3>

                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Partner: <span className="font-semibold text-slate-900 dark:text-white">{prog.partner}</span>
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-amber-600 dark:text-amber-400">
                  Scale: {prog.scale}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Tab 3: Partners & Network */}
        {activeTab === 'partners' && (
          <div className="space-y-10 max-w-5xl mx-auto animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trackRecordData.partners.map((group, idx) => (
                <Card key={idx} className="p-6 sm:p-8">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span>{group.category}</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    {group.entities.map((entity, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2">
                        <span className="text-amber-700 dark:text-amber-400 font-bold" aria-hidden="true">•</span>
                        <span>{entity}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
              <span>* Institutional emblems and logos are trademarked by their respective statutory university authorities and state departments.</span>
            </div>
          </div>
        )}
      </Section>

      {/* State Higher Education Departments CTA */}
      <Section bg="navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Consult on State-Wide Rating Architectures
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-8">
            ICARE assists state higher education councils and ministries in drafting legislative frameworks, metrics gazettes, and digital submission platforms.
          </p>
          <Button
            to="/contact"
            variant="saffron"
            size="lg"
          >
            Initiate a State Advisory Engagement
          </Button>
        </div>
      </Section>
    </>
  );
}
