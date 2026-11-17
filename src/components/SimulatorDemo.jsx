import React, { useState, useId } from 'react';
import { Sparkles, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

export default function SimulatorDemo({ embedded = false }) {
  const [extraPapers, setExtraPapers] = useState(35);
  const [citationsFactor, setCitationsFactor] = useState(1.5);
  const [patentGrants, setPatentGrants] = useState(3);
  const papersInputId = useId();
  const citationsInputId = useId();
  const patentsInputId = useId();

  // Baseline assumption for sample illustration:
  const baseScore = 52.4;
  const baseRank = 85;

  const deltaResearch = (extraPapers * 0.075);
  const deltaCitations = ((citationsFactor - 1.0) * 2.4);
  const deltaPatents = (patentGrants * 0.55);

  const totalScoreDelta = Math.min(18.5, parseFloat((deltaResearch + deltaCitations + deltaPatents).toFixed(2)));
  const simulatedScore = parseFloat((baseScore + totalScoreDelta).toFixed(2));

  const rankClimbed = Math.min(baseRank - 12, Math.round(totalScoreDelta * 2.1));
  const estimatedRank = Math.max(12, baseRank - rankClimbed);

  const handleReset = () => {
    setExtraPapers(0);
    setCitationsFactor(1.0);
    setPatentGrants(0);
  };

  return (
    <div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md overflow-hidden ${embedded ? '' : 'p-6 sm:p-8'}`}>
      <div className="p-6 sm:p-8 bg-slate-900 text-white dark:bg-slate-950 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <span>Interactive Demonstration</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                AI-Based Institutional Ranking Simulator
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Demo</span>
          </button>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
          Adjust the policy intervention sliders below to observe an illustrative, simulated projection of score and rank sensitivity.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Extra Research Papers */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label htmlFor={papersInputId} className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span>Extra Indexed Research Papers (Scopus / WoS)</span>
              </label>
              <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                +{extraPapers} papers
              </span>
            </div>
            <input
              id={papersInputId}
              type="range"
              min="0"
              max="100"
              step="5"
              value={extraPapers}
              aria-label="Extra indexed research papers slider"
              onChange={(e) => setExtraPapers(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 baseline</span>
              <span>+50 papers</span>
              <span>+100 papers</span>
            </div>
          </div>

          {/* Slider 2: Citation Multiplier Factor */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label htmlFor={citationsInputId} className="font-medium text-slate-800 dark:text-slate-200">
                Citation Impact / Field-Weighted Citations
              </label>
              <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {citationsFactor.toFixed(1)}x
              </span>
            </div>
            <input
              id={citationsInputId}
              type="range"
              min="1.0"
              max="3.0"
              step="0.1"
              value={citationsFactor}
              aria-label="Citation impact factor slider"
              onChange={(e) => setCitationsFactor(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-800 dark:accent-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1.0x (Standard)</span>
              <span>2.0x (High Impact)</span>
              <span>3.0x (Top Quartile)</span>
            </div>
          </div>

          {/* Slider 3: Granted Patents */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label htmlFor={patentsInputId} className="font-medium text-slate-800 dark:text-slate-200">
                Granted IPR / Commercialized Patents
              </label>
              <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                +{patentGrants} patents
              </span>
            </div>
            <input
              id={patentsInputId}
              type="range"
              min="0"
              max="15"
              step="1"
              value={patentGrants}
              aria-label="Granted patents slider"
              onChange={(e) => setPatentGrants(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-800 dark:accent-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0</span>
              <span>+7</span>
              <span>+15</span>
            </div>
          </div>
        </div>

        {/* Output Projection Display (5 cols) */}
        <div className="lg:col-span-5 bg-stone-50 dark:bg-slate-800/60 rounded-xl p-6 border border-slate-200 dark:border-slate-700/80">
          <div className="text-center pb-4 border-b border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Sample Estimate Projection
            </span>
            <div className="mt-2 flex items-baseline justify-center gap-2">
              <span className="text-xs text-slate-500 line-through">Rank {baseRank}</span>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
                Rank {estimatedRank}
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                ▲ {rankClimbed > 0 ? rankClimbed : 0} positions
              </span>
            </div>
          </div>

          <div className="py-4 space-y-2 text-xs">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Simulated Score:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {simulatedScore} / 100 <span className="text-emerald-600">(+{totalScoreDelta})</span>
              </span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>RPC (Research & Professional Practice):</span>
              <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                +{(deltaResearch + deltaCitations).toFixed(2)} pts
              </span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>IPR & Innovation Increment:</span>
              <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                +{deltaPatents.toFixed(2)} pts
              </span>
            </div>
          </div>

          {/* Prominent Required Disclaimer */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-2 bg-amber-500/10 dark:bg-amber-500/15 p-2.5 rounded-lg border border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <p className="leading-snug">
                <strong>Illustrative Simulation Only:</strong> This sample estimate is a demonstrative projection model. Actual NIRF and QS rankings rely on multi-parameter cohort distributions, normalized citation scaling, and peer reviews.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="w-full text-xs"
            >
              Request Custom Institutional Audit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
