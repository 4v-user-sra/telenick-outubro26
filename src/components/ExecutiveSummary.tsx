import React, { useState } from 'react';
import {
  Users,
  DollarSign,
  Calendar,
  MousePointerClick,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { REPORT_META, TOP_KPIS, GLOSSARY_ITEMS } from '../data/reportData';

interface ExecutiveSummaryProps {
  onOpenGlossary: () => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ onOpenGlossary }) => {
  const [showGlossaryInline, setShowGlossaryInline] = useState(false);
  const [activeGlossaryTab, setActiveGlossaryTab] = useState<'Todos' | 'Meta' | 'Google' | 'Geral'>('Todos');

  const filteredGlossary =
    activeGlossaryTab === 'Todos'
      ? GLOSSARY_ITEMS
      : GLOSSARY_ITEMS.filter((item) => item.canal === activeGlossaryTab);

  return (
    <section id="visao-geral" className="scroll-mt-20">
      {/* Editorial Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {REPORT_META.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
          {REPORT_META.executiveSummary}
        </p>
      </div>

      {/* Top 5 KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
        {TOP_KPIS.map((kpi, idx) => {
          const isPrimary = idx === 0 || idx === 1;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all duration-150 ${
                isPrimary
                  ? 'bg-white border-rose-200/90 shadow-xs ring-1 ring-rose-500/10'
                  : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500 line-clamp-1">
                  {kpi.title}
                </span>
                {idx === 0 && <Users className="w-4 h-4 text-rose-600 shrink-0" />}
                {idx === 1 && <DollarSign className="w-4 h-4 text-rose-600 shrink-0" />}
                {idx === 2 && <DollarSign className="w-4 h-4 text-slate-400 shrink-0" />}
                {idx === 3 && <Calendar className="w-4 h-4 text-slate-400 shrink-0" />}
                {idx === 4 && <MousePointerClick className="w-4 h-4 text-slate-400 shrink-0" />}
              </div>

              <div
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums mb-1.5 ${
                  isPrimary ? 'text-rose-600' : 'text-slate-900'
                }`}
              >
                {kpi.value}
              </div>

              <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                {kpi.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
