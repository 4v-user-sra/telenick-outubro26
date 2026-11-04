import React, { useState } from 'react';
import {
  GOOGLE_ADS_OVERVIEW,
  GOOGLE_CAMPAIGNS,
  GOOGLE_SPOTLIGHTS,
  GoogleCampaign,
} from '../data/reportData';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowUpDown,
  TrendingUp,
  Percent,
} from 'lucide-react';

export const GoogleAdsSection: React.FC = () => {
  const [sortField, setSortField] = useState<keyof GoogleCampaign>('conversoes');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = (field: keyof GoogleCampaign) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedCampaigns = [...GOOGLE_CAMPAIGNS].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (typeof aVal === 'string') {
      return sortAsc
        ? (aVal as string).localeCompare(bVal as string)
        : (bVal as string).localeCompare(aVal as string);
    }
    return sortAsc
      ? (aVal as number) - (bVal as number)
      : (bVal as number) - (aVal as number);
  });

  return (
    <section id="google-ads" className="scroll-mt-20 mb-14">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            {GOOGLE_ADS_OVERVIEW.subtitulo}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Google Ads
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {GOOGLE_ADS_OVERVIEW.descricao}
        </p>
      </div>

      {/* 6 KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {GOOGLE_ADS_OVERVIEW.kpis.map((kpi, idx) => {
          const isHighlight = kpi.highlight;
          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border ${
                isHighlight
                  ? 'bg-white border-rose-200 shadow-xs ring-1 ring-rose-500/10'
                  : 'bg-white border-slate-200/80 shadow-2xs'
              }`}
            >
              <span className="text-[11px] font-medium text-slate-500 block mb-1 truncate">
                {kpi.label}
              </span>
              <span
                className={`text-xl sm:text-2xl font-extrabold tracking-tight tabular-nums ${
                  isHighlight ? 'text-rose-600' : 'text-slate-900'
                }`}
              >
                {kpi.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Resultado por campanha (Table) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden mb-8">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-900">
            Resultado por campanha
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {GOOGLE_ADS_OVERVIEW.tabelaDescricao}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th
                  onClick={() => handleSort('campanha')}
                  className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Campanha</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('orcamentoDia')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Orçamento/dia</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('investido')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Investido</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('impressoes')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Impressões</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('cliques')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Cliques</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('ctr')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>CTR</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('cpc')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>CPC</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('conversoes')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors font-bold text-rose-600"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Conversões</span>
                    <ArrowUpDown className="w-3 h-3 text-rose-500" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('custoConversao')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Custo/conversão</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('taxaCliqueConversao')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Clique → conv.</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sortedCampaigns.map((row, idx) => {
                const isMain = row.campanha.includes('principal');
                const isWarning = row.campanha === 'NK6000';

                return (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      isMain
                        ? 'bg-emerald-50/30 hover:bg-emerald-50/50'
                        : isWarning
                        ? 'bg-amber-50/30 hover:bg-amber-50/50'
                        : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div className="flex flex-col">
                        <span>{row.campanha}</span>
                        {row.statusNota && (
                          <span
                            className={`text-[10px] font-medium mt-0.5 ${
                              isMain
                                ? 'text-emerald-700'
                                : 'text-amber-700'
                            }`}
                          >
                            {row.statusNota}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums">
                      {row.orcamentoDiaStr}
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums">
                      {row.investidoStr}
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums text-slate-500">
                      {row.impressoesStr}
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums">
                      {row.cliquesStr}
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums font-medium">
                      {row.ctrStr}
                    </td>
                    <td className="py-3.5 px-3 text-right tabular-nums">
                      {row.cpcStr}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right tabular-nums font-bold ${
                        isMain ? 'text-rose-600 text-sm' : 'text-slate-800'
                      }`}
                    >
                      {row.conversoesStr}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right tabular-nums font-bold ${
                        isMain
                          ? 'text-emerald-700'
                          : isWarning
                          ? 'text-amber-700'
                          : 'text-rose-800'
                      }`}
                    >
                      {row.custoConversaoStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-semibold">
                      {row.taxaCliqueConversaoStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Spotlight Cards: NK001 Leads vs NK6000 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Spotlight 1: NK001 Leads (A que mais converte) */}
        <div className="p-6 bg-white rounded-xl border border-emerald-200/80 shadow-2xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">
              {GOOGLE_SPOTLIGHTS.nk001Leads.titulo}
            </h3>
          </div>

          <div className="text-3xl font-extrabold text-emerald-600 tabular-nums mb-4">
            {GOOGLE_SPOTLIGHTS.nk001Leads.conversoes}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] text-slate-500 block">
                Custo por conversão
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk001Leads.custoConversao}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Clique → conversão
              </span>
              <span className="text-sm font-bold text-emerald-700 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk001Leads.taxaCliqueConversao}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte das conversões
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk001Leads.parteConversoes}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {GOOGLE_SPOTLIGHTS.nk001Leads.descricao}
          </p>
        </div>

        {/* Spotlight 2: NK6000 (Muito clique, pouca conversão) */}
        <div className="p-6 bg-white rounded-xl border border-amber-200/80 shadow-2xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-bold text-slate-900">
              {GOOGLE_SPOTLIGHTS.nk6000.titulo}
            </h3>
          </div>

          <div className="text-3xl font-extrabold text-amber-600 tabular-nums mb-4">
            {GOOGLE_SPOTLIGHTS.nk6000.custoConversao}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] text-slate-500 block">
                Investido no mês
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk6000.investido}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte da verba Google
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk6000.parteVerbaGoogle}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Clique → conversão
              </span>
              <span className="text-sm font-bold text-amber-700 tabular-nums">
                {GOOGLE_SPOTLIGHTS.nk6000.taxaCliqueConversao}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {GOOGLE_SPOTLIGHTS.nk6000.descricao}
          </p>
        </div>
      </div>
    </section>
  );
};
