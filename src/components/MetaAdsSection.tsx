import React, { useState } from 'react';
import {
  META_ADS_OVERVIEW,
  META_CAMPAIGNS_PUBLICOS,
  META_PUBLICOS_CARDS,
  MetaCampaignAudience,
} from '../data/reportData';
import {
  MessageCircle,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Filter,
  CheckCircle2,
  ArrowUpDown,
} from 'lucide-react';

export const MetaAdsSection: React.FC = () => {
  const [selectedFunnelStep, setSelectedFunnelStep] = useState<number>(2); // WhatsApp conversations by default
  const [sortField, setSortField] = useState<keyof MetaCampaignAudience>('conversas');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = (field: keyof MetaCampaignAudience) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedPublicos = [...META_CAMPAIGNS_PUBLICOS].sort((a, b) => {
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
    <section id="meta-ads" className="scroll-mt-20 mb-14">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase">
            {META_ADS_OVERVIEW.subtitulo}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Meta Ads
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {META_ADS_OVERVIEW.descricao}
        </p>
      </div>

      {/* 7 KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
        {META_ADS_OVERVIEW.kpis.map((kpi, idx) => {
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

      {/* Grid: Funil + Comparativo Raio-X */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {/* Funil: Do anúncio à conversa no WhatsApp */}
        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {META_ADS_OVERVIEW.funil.titulo}
              </h3>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Escala logarítmica
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              {META_ADS_OVERVIEW.funil.descricao}
            </p>

            {/* Interactive Funnel Bars */}
            <div className="space-y-4 mb-6">
              {META_ADS_OVERVIEW.funil.etapas.map((etapa, idx) => {
                // Using logarithmic scale so all 3 stages are visibly balanced
                // Impressões: 117643 (log10 ~ 5.07 -> 100%)
                // Cliques: 1202 (log10 ~ 3.08 -> 60%)
                // Conversas: 389 (log10 ~ 2.59 -> 51%)
                const widths = ['100%', '61%', '51%'];
                const isSelected = selectedFunnelStep === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedFunnelStep(idx)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-rose-50/60 border-rose-300 ring-1 ring-rose-400/20'
                        : 'bg-slate-50/60 border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {etapa.nome}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 tabular-nums">
                          {etapa.totalStr}
                        </span>
                        {etapa.taxaStr && (
                          <span className="text-xs font-bold text-rose-600 bg-rose-100 px-1.5 py-0.2 rounded tabular-nums">
                            {etapa.taxaStr}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          idx === 2 ? 'bg-rose-600' : 'bg-slate-600'
                        }`}
                        style={{ width: widths[idx] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-xs font-semibold text-rose-900 leading-relaxed">
            {META_ADS_OVERVIEW.funil.destaque}
          </div>
        </div>

        {/* Comparativo Raio-X com a Média da Conta */}
        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {META_ADS_OVERVIEW.comparativoConta.titulo}
              </h3>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Ref: 01/07 a 22/10
              </span>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                    <th className="py-2.5 px-3">Indicador</th>
                    <th className="py-2.5 px-3 text-right">Outubro</th>
                    <th className="py-2.5 px-3 text-right">Média</th>
                    <th className="py-2.5 px-3 text-right">Variação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {META_ADS_OVERVIEW.comparativoConta.linhas.map((row, idx) => {
                    const isPositive = row.tipoVariacao === 'positivo';
                    return (
                      <tr key={idx} className="hover:bg-slate-50/60">
                        <td className="py-3 px-3 font-medium text-slate-900">
                          {row.indicador}
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums font-bold">
                          {row.outubro}
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums text-slate-500">
                          {row.media}
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums">
                          <span
                            className={`inline-block font-bold px-2 py-0.5 rounded ${
                              isPositive
                                ? 'text-emerald-700 bg-emerald-50'
                                : 'text-rose-700 bg-rose-50'
                            }`}
                          >
                            {row.variacao}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
            {META_ADS_OVERVIEW.comparativoConta.descricao}
          </p>
        </div>
      </div>

      {/* Deep Dive: Resultado por campanha e público */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden mb-8">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-900">
            Resultado por campanha e público
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            A campanha JL roda dois públicos (visitantes do site nos últimos 30 e 90 dias). A campanha RR roda só os visitantes de 90 dias.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th
                  onClick={() => handleSort('campanhaPublico')}
                  className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Campanha · público</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('investido')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Investido</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('impressoes')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Impressões</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('cliques')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Cliques</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('ctr')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>CTR</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('cpc')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>CPC</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('cpm')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>CPM</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('conversas')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors font-bold text-rose-600"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Conversas</span>
                    <ArrowUpDown className="w-3 h-3 text-rose-500" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('custoConversa')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Custo/conversa</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('taxaCliqueConversa')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Clique → conversa</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sortedPublicos.map((row, idx) => {
                const is30d = row.campanhaPublico.includes('30 dias');
                return (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      is30d
                        ? 'bg-amber-50/30 hover:bg-amber-50/50'
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        {is30d ? (
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        )}
                        <span>{row.campanhaPublico}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums">
                      {row.investidoStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums text-slate-600">
                      {row.impressoesStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums">
                      {row.cliquesStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums">
                      {row.ctrStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums">
                      {row.cpcStr}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right tabular-nums font-medium ${
                        is30d ? 'text-amber-800 font-bold' : 'text-slate-700'
                      }`}
                    >
                      {row.cpmStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-bold text-rose-600">
                      {row.conversasStr}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right tabular-nums font-bold ${
                        is30d ? 'text-amber-700' : 'text-emerald-700'
                      }`}
                    >
                      {row.custoConversaStr}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums">
                      {row.taxaCliqueConversaStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Spotlight Cards (90 Dias vs 30 Dias) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 90 Dias: Motor da Conta */}
        <div className="p-6 bg-white rounded-xl border border-emerald-200/80 shadow-2xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">
              {META_PUBLICOS_CARDS.motor90dias.titulo}
            </h3>
          </div>

          <div className="text-3xl font-extrabold text-emerald-600 tabular-nums mb-4">
            {META_PUBLICOS_CARDS.motor90dias.conversas}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] text-slate-500 block">
                Custo por conversa
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.motor90dias.custoConversa}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte das conversas
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.motor90dias.parteConversas}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte da verba
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.motor90dias.parteVerba}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {META_PUBLICOS_CARDS.motor90dias.descricao}
          </p>
        </div>

        {/* Card 30 Dias: Caro para o que entrega */}
        <div className="p-6 bg-white rounded-xl border border-amber-200/80 shadow-2xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-bold text-slate-900">
              {META_PUBLICOS_CARDS.alerta30dias.titulo}
            </h3>
          </div>

          <div className="text-3xl font-extrabold text-amber-600 tabular-nums mb-4">
            {META_PUBLICOS_CARDS.alerta30dias.custoConversa}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] text-slate-500 block">
                Conversas geradas
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.alerta30dias.conversas}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte das conversas
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.alerta30dias.parteConversas}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">
                Parte da verba
              </span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {META_PUBLICOS_CARDS.alerta30dias.parteVerba}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {META_PUBLICOS_CARDS.alerta30dias.descricao}
          </p>
        </div>
      </div>
    </section>
  );
};
