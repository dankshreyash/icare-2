import React, { useState } from 'react';
import { 
  MapPin
} from 'lucide-react';
import { 
  leadershipMembers, 
  embeddedAnalysts, 
  technologyTeam 
} from '../data/content';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Modal from '../components/Modal';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function LeadershipAndTeam() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <>
      <SEO
        title="Leadership & Institutional Team"
        description="Meet the leadership council, embedded university data analysts deployed across Maharashtra state universities, and the technology engineering team at ICARE."
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              People & Expertise
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Leadership Council & Dedicated Analytical Teams
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Guided by veteran higher education policy architects and supported by analysts deployed directly inside public university campuses and engineering laboratories.
            </p>
          </div>
        </div>
      </div>

      {/* 1. LEADERSHIP GRID */}
      <Section bg="default" id="leadership">
        <SectionHeading
          kicker="Executive & Advisory Council"
          title="Leadership Council"
          subtitle="Governing methodology integrity, state council engagements, and global ranking alignments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {leadershipMembers.map((leader) => (
            <TeamCard
              key={leader.id}
              name={leader.name}
              role={leader.role}
              initials={leader.initials}
              category={leader.category}
              credentials={leader.credentials}
              focus={leader.focus}
              shortBio={leader.shortBio}
              onReadBio={() => setSelectedLeader(leader)}
            />
          ))}
        </div>
      </Section>

      {/* 2. EMBEDDED DATA ANALYSTS (Grouped by the 7 Maharashtra Universities) */}
      <Section bg="offwhite" id="embedded-analysts">
        <SectionHeading
          kicker="Campus Intelligence Operations"
          title="Embedded Data Analysts"
          subtitle="On-ground analysts stationed inside Maharashtra's flagship state universities under the MahaSamarth initiative, driving day-to-day data verification, Scopus synchronization, and NIRF collation."
        />

        <div className="space-y-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {embeddedAnalysts.map((group, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between hover:border-amber-400/50 transition-all duration-200"
              >
                <div>
                  {/* University Header with Location Badge */}
                  <div className="flex items-start justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-400 dark:bg-amber-500 dark:text-slate-950">
                          {group.universityShort}
                        </span>
                        <span className="font-serif font-bold text-slate-900 dark:text-white text-base">
                          {group.universityShort}
                        </span>
                      </div>
                      <h4 className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                        {group.universityFull}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>{group.location}</span>
                  </div>

                  {/* Deployed Analysts List */}
                  <div className="space-y-3">
                    {group.analysts.map((analyst, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3 rounded-lg bg-stone-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800/60"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                            {analyst.name}
                          </span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                            Embedded
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium mt-0.5">
                          {analyst.role}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          {analyst.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-right">
                  MahaSamarth On-Site Unit
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. TECHNOLOGY & DATA SYSTEMS TEAM */}
      <Section bg="default" id="technology-team">
        <SectionHeading
          kicker="Digital Infrastructure"
          title="Technology & Data Engineering Team"
          subtitle="Architects behind our algorithmic simulation platforms, Scopus scraping pipelines, and institutional audit dashboards."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologyTeam.map((member, idx) => (
            <TeamCard
              key={idx}
              variant="tech"
              name={member.name}
              role={member.role}
              initials={member.initials}
              focus={member.focus}
            />
          ))}
        </div>
      </Section>

      {/* Bio Modal */}
      {selectedLeader && (
        <Modal
          isOpen={!!selectedLeader}
          onClose={() => setSelectedLeader(null)}
          title={selectedLeader.name}
          subtitle={`${selectedLeader.role} • ${selectedLeader.credentials || ''}`}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                {selectedLeader.category}
              </span>
              {selectedLeader.focus && (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Domain: {selectedLeader.focus}
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {selectedLeader.fullBio}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedLeader(null)}
              >
                Close Profile
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
