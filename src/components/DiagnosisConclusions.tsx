import React from 'react';
import {
  O_QUE_DEU_CERTO,
  PONTOS_DE_ATENCAO,
  FOOTNOTES,
} from '../data/reportData';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const DiagnosisConclusions: React.FC = () => {
  return (
    <section id="diagnostico" className="scroll-mt-20 mb-14">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
          Diagnóstico Estratégico & Conclusões
        </h2>
        <p className="text-sm text-slate-600">
          Síntese executiva dos principais acertos e pontos críticos mapeados em outubro de 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* O que deu certo (Left Column) */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  O que deu certo
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Outubro
              </span>
            </div>

            {/* List */}
            <div className="space-y-3.5">
              {O_QUE_DEU_CERTO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {item.titulo}
                    </h4>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.2 rounded tabular-nums shrink-0">
                      {item.metrica}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detalhe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pontos de atenção (Right Column) */}
        <div className="p-6 bg-white rounded-xl border border-rose-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Pontos de atenção
                </h3>
              </div>
            </div>

            {/* List */}
            <div className="space-y-3.5">
              {PONTOS_DE_ATENCAO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-rose-50/30 border border-rose-100 hover:border-rose-200 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {item.titulo}
                    </h4>
                    <span className="text-[10px] font-semibold text-rose-700 bg-rose-100 px-2 py-0.2 rounded tabular-nums shrink-0">
                      {item.impacto}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detalhe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sources & Methodology Footnote */}
      <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-2xs">
        <strong className="text-slate-700 font-semibold block mb-1">
          Fontes e metodologia:
        </strong>
        <p>{FOOTNOTES}</p>
      </div>
    </section>
  );
};
