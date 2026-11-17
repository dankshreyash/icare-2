import React from 'react';
import { 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { toolsAndInitiatives, siteMetadata } from '../data/content';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import SimulatorDemo from '../components/SimulatorDemo';

export default function ToolsAndInitiatives() {
  const otherTools = toolsAndInitiatives.filter((t) => t.id !== 'ai-simulator');

  const toolsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'ICARE AI-Based Institutional Ranking Simulator',
      description: 'A what-if scenario testing simulation engine built on public NIRF data to forecast institutional score sensitivity and rank movement.',
      brand: {
        '@type': 'Brand',
        name: siteMetadata.name
      },
      category: 'Educational Software / Institutional Analytics'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the ICARE AI-Based Ranking Simulator calculate rank movements?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The simulator models sensitivity curves on public NIRF data parameters, evaluating how changes in research publication volume, field-weighted citations, and patent grants impact RPC (Research and Professional Practice) score percentiles.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the purpose of the TRUTH Index?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The TRUTH Index tracks research paper retractions and identifies questionable or predatory publication pipelines, safeguarding universities against reputational damage and promoting verifiable academic integrity.'
          }
        },
        {
          '@type': 'Question',
          name: 'What does the Global Rankings Outreach Group do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Being set up at IIT Madras in talks with the Ministry of Education, the Global Rankings Outreach Group brings Indian institutions together to collectively elevate global academic and employer reputation on QS and THE world ranking tables.'
          }
        }
      ]
    },
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
          name: 'Tools & Initiatives',
          item: `${siteMetadata.portalUrl}/tools-and-initiatives`
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Tools & Initiatives | AI Simulator, TRUTH Index, Stanford Top-2%"
        description="Explore ICARE's proprietary analytical instruments: Interactive AI-based ranking simulator, institutional benchmarking tools, the TRUTH Index, Stanford top-2% scientists tracking, and the Global Rankings Outreach Group."
        schema={toolsSchema}
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              Proprietary Instruments & Data Systems
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Tools & Intelligence Initiatives
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Algorithmic simulators, research integrity indices, and global scientometric tracking engines developed to empower university leadership with actionable evidence.
            </p>
          </div>
        </div>
      </div>

      {/* 1. FEATURED INTERACTIVE AI SIMULATOR */}
      <Section bg="default" id="ai-simulator">
        <SectionHeading
          kicker="Featured Instrument"
          title="Interactive Institutional Ranking Simulator"
          subtitle="A mathematical scenario testing environment allowing academic leadership to project sensitivity shifts prior to committing capital."
        />

        <div className="max-w-5xl mx-auto">
          {/* Interactive demo component */}
          <SimulatorDemo />
        </div>
      </Section>

      {/* 2. OTHER 4 INITIATIVES (Benchmarking, TRUTH Index, Stanford Top 2%, GROG) */}
      <Section bg="offwhite" id="initiatives">
        <SectionHeading
          kicker="Intelligence Architecture"
          title="Analytical Initiatives & Evaluation Engines"
          subtitle="Four specialized research and verification frameworks operating across Indian higher education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {otherTools.map((tool) => (
            <Card
              key={tool.id}
              className="p-8 flex flex-col justify-between hover:border-amber-400/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {tool.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-2">
                    Key Analytical Capabilities:
                  </span>
                  {tool.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Button
                  to="/contact"
                  variant="outline"
                  size="sm"
                  icon={ArrowRight}
                >
                  Request Institutional Audit
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
