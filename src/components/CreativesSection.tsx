import React, { useState } from 'react';
import {
  ALL_ADS,
  CREATIVES_BAR_CHART,
  CREATIVE_SPOTLIGHTS,
  AdCreative,
} from '../data/reportData';
import {
  Sparkles,
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle,
  PauseCircle,
  Eye,
  Info,
} from 'lucide-react';

export const CreativesSection: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'Todos' | 'Ativo' | 'Pausado'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof AdCreative>('conversas');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [selectedAd, setSelectedAd] = useState<AdCreative | null>(null);

  const handleSort = (field: keyof AdCreative) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const filteredAds = ALL_ADS.filter((ad) => {
    const matchesStatus =
      statusFilter === 'Todos' ? true : ad.status === statusFilter;
    const matchesSearch = ad.anuncio
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  }).sort((a, b) => {
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

  const maxBarValue = 167; // Prova social

  return (
    <section id="criativos" className="scroll-mt-20 mb-14">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Criativos do Meta
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Análise detalhada de performance por formato, mensagem e retorno em conversas iniciadas no WhatsApp.
        </p>
      </div>

      {/* Grid: Bar Chart + The 2 Spotlight Champions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left: Bar Chart "Conversas por anúncio" (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-slate-900">
                Conversas por anúncio
              </h3>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Volume & Custo Unitário
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Anúncios que geraram ao menos uma conversa em outubro, com o custo de cada uma. Em vermelho, os três que puxam o resultado.
            </p>

            {/* Horizontal Bar Chart */}
            <div className="space-y-4 mb-4">
              {CREATIVES_BAR_CHART.map((item, idx) => {
                const widthPercent = (item.conversas / maxBarValue) * 100;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800 truncate max-w-[200px] sm:max-w-[280px]">
                        {item.nome}
                      </span>
                      <div className="flex items-center gap-2 tabular-nums">
                        <span
                          className={`font-bold ${
                            item.isTop ? 'text-rose-600' : 'text-slate-700'
                          }`}
                        >
                          {item.conversas}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 text-[11px]">
                          {item.custoStr}
                        </span>
                      </div>
                    </div>

                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.isTop ? 'bg-rose-600' : 'bg-slate-300'
                        }`}
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
              <span>Top 3 responsáveis por 90,5% das conversas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>Demais criativos com conversão</span>
            </div>
          </div>
        </div>

        {/* Right: The 2 Spotlight Champion Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Spotlight 1: Foto NK 6000 (AD 02) */}
          <div className="p-5 bg-white rounded-xl border border-rose-200/90 shadow-2xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">
                  {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.nome}
                </span>
                <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                  Mais Eficiente
                </span>
              </div>

              <div className="text-2xl font-extrabold text-rose-600 tabular-nums mb-3">
                {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.conversas}
              </div>

              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-slate-50 rounded-lg mb-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Custo</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.custoConversa}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">CTR</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.ctr}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">CPC</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.cpc}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {CREATIVE_SPOTLIGHTS.fotoNk6000Ad02.comentario}
            </p>
          </div>

          {/* Spotlight 2: Prova social */}
          <div className="p-5 bg-white rounded-xl border border-rose-200/90 shadow-2xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">
                  {CREATIVE_SPOTLIGHTS.provaSocial.nome}
                </span>
                <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                  Maior Volume
                </span>
              </div>

              <div className="text-2xl font-extrabold text-rose-600 tabular-nums mb-3">
                {CREATIVE_SPOTLIGHTS.provaSocial.conversas}
              </div>

              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-slate-50 rounded-lg mb-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Custo</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.provaSocial.custoConversa}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Clique → conv.</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.provaSocial.taxaCliqueConversa}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Investido</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {CREATIVE_SPOTLIGHTS.provaSocial.investido}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {CREATIVE_SPOTLIGHTS.provaSocial.comentario}
            </p>
          </div>
        </div>
      </div>

      {/* Complete Table: Todos os anúncios */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/60">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Todos os anúncios ({filteredAds.length} de {ALL_ADS.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Do que mais gerou conversas para o que menos gerou. Os pausados foram desligados ao longo do mês e aparecem pelo que gastaram enquanto estavam no ar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar anúncio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-2.5 py-1 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th
                  onClick={() => handleSort('anuncio')}
                  className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Anúncio</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('status')}
                  className="py-3 px-3 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Status</span>
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
                  onClick={() => handleSort('cpm')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
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
                    <span>Clique → conv.</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredAds.map((ad) => {
                const isPaused = ad.status === 'Pausado';
                const isSelected = selectedAd?.id === ad.id;

                return (
                  <tr
                    key={ad.id}
                    onClick={() => setSelectedAd(isSelected ? null : ad)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-rose-50/70'
                        : isPaused
                        ? 'bg-slate-50/40 opacity-80 hover:bg-slate-50'
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        {ad.isTopPerformer && (
                          <span
                            title="Top performer de volume ou custo"
                            className="w-2 h-2 rounded-full bg-rose-600 shrink-0"
                          />
                        )}
                        <span className="truncate max-w-[200px]">
                          {ad.anuncio}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isPaused
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {isPaused ? (
                          <PauseCircle className="w-2.5 h-2.5" />
                        ) : (
                          <CheckCircle className="w-2.5 h-2.5" />
                        )}
                        <span>{ad.status}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {ad.investidoStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums text-slate-500">
                      {ad.impressoesStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {ad.cliquesStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {ad.ctrStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {ad.cpcStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {ad.cpmStr}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-bold text-rose-600">
                      {ad.conversasStr}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-semibold">
                      {ad.custoConversaStr}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {ad.taxaCliqueConversaStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Ad Detail Drawer/Callout */}
        {selectedAd && (
          <div className="p-4 bg-rose-50/80 border-t border-rose-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-rose-600 shrink-0" />
              <div>
                <strong className="text-slate-900">{selectedAd.anuncio}</strong>
                <span className="text-slate-500 ml-2">
                  Status: {selectedAd.status} · {selectedAd.conversas} conversas a {selectedAd.custoConversaStr} · CTR {selectedAd.ctrStr}
                </span>
                {selectedAd.highlightNote && (
                  <p className="text-rose-900 font-medium mt-0.5">
                    {selectedAd.highlightNote}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setSelectedAd(null)}
              className="text-xs text-rose-700 hover:text-rose-900 underline shrink-0 font-medium"
            >
              Fechar detalhe
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
