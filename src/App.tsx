/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ChannelComparison } from './components/ChannelComparison';
import { MetaAdsSection } from './components/MetaAdsSection';
import { CreativesSection } from './components/CreativesSection';
import { DemographicsSection } from './components/DemographicsSection';
import { GoogleAdsSection } from './components/GoogleAdsSection';
import { DiagnosisConclusions } from './components/DiagnosisConclusions';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Executive Summary & KPIs & Glossary */}
        <ExecutiveSummary onOpenGlossary={() => {}} />

        {/* Channels Comparative */}
        <ChannelComparison />

        {/* Meta Ads Deep Dive */}
        <MetaAdsSection />

        {/* Creatives Performance & All Ads Table */}
        <CreativesSection />

        {/* Demographics & Age Analysis */}
        <DemographicsSection />

        {/* Google Ads Search Performance */}
        <GoogleAdsSection />

        {/* Strategic Diagnosis & What Worked / Watchouts */}
        <DiagnosisConclusions />
      </main>

      {/* Floating Action Button (Back to Top) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Voltar ao início"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all z-30"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
