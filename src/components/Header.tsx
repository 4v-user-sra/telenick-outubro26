import React from 'react';
import { FileText, BookOpen, Sliders, Printer } from 'lucide-react';
import { REPORT_META } from '../data/reportData';

interface HeaderProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenPdf: () => void;
  onOpenGlossary: () => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenPdf,
  onOpenGlossary,
  onOpenSimulator,
}) => {
  const navItems = [
    { id: 'visao-geral', label: 'Visão Geral' },
    { id: 'canais', label: 'Canais' },
    { id: 'meta-ads', label: 'Meta Ads' },
    { id: 'criativos', label: 'Criativos' },
    { id: 'demografia', label: 'Demografia' },
    { id: 'google-ads', label: 'Google Ads' },
    { id: 'diagnostico', label: 'Diagnóstico' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#visao-geral"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('visao-geral');
              }}
              className="group flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                T
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                  Telenick
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:block">
                  Relatório · Outubro 2026
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSection(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Interactive Utility Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenSimulator}
              title="Simular realocação de verba com base nos dados do mês"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap"
            >
              <Sliders className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Simulador</span>
            </button>

            <button
              onClick={onOpenGlossary}
              title="Ver termos e definições do relatório"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Glossário</span>
            </button>

            <button
              onClick={onOpenPdf}
              title="Ver documento PDF original"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 rounded-md transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-rose-600" />
              <span>PDF Original</span>
            </button>

            <button
              onClick={() => window.print()}
              title="Imprimir relatório"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
