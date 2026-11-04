import React, { useState } from 'react';
import {
  AUDIENCE_AGE_DATA,
  DEMOGRAPHICS_SUMMARY,
  AudienceAgeData,
} from '../data/reportData';
import { Users, ArrowUpDown, Info } from 'lucide-react';

export const DemographicsSection: React.FC = () => {
  const [sortField, setSortField] = useState<keyof AudienceAgeData>('conversas');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [hoveredAge, setHoveredAge] = useState<AudienceAgeData | null>(null);

  const handleSort = (field: keyof AudienceAgeData) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedAgeData = [...AUDIENCE_AGE_DATA].sort((a, b) => {
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

  const maxConversas = 130; // 55-64

  return (
    <section id="demografia" className="scroll-mt-20 mb-14">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Quem chamou no WhatsApp
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Distribuição demográfica das pessoas que iniciaram conversas a partir dos anúncios do Meta Ads.
        </p>
      </div>

      {/* Grid: Age Chart + Gender Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left: Conversas por faixa de idade (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-slate-900">
                Conversas por faixa de idade
              </h3>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Volume & Custo Médio
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Em vermelho, as duas faixas com mais conversas e menor custo.
            </p>

            {/* Age Bars */}
            <div className="space-y-3.5 mb-5">
              {AUDIENCE_AGE_DATA.filter((a) => a.idade !== 'Não informada').map(
                (item, idx) => {
                  const widthPercent = (item.conversas / maxConversas) * 100;
                  const isTop = item.isTopSegment;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredAge(item)}
                      onMouseLeave={() => setHoveredAge(null)}
                      className="group cursor-pointer space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">
                          {item.idade} anos
                        </span>
                        <div className="flex items-center gap-2 tabular-nums">
                          <span
                            className={`font-bold ${
                              isTop ? 'text-rose-600' : 'text-slate-700'
                            }`}
                          >
                            {item.conversas} conversas
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 text-[11px]">
                            {item.custoConversaStr} cada
                          </span>
                        </div>
                      </div>

                      <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isTop ? 'bg-rose-600' : 'bg-slate-300'
                          }`}
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="p-3.5 bg-rose-50 border border-rose-100 rounded-lg text-xs font-semibold text-rose-900 leading-relaxed">
            {DEMOGRAPHICS_SUMMARY.destaqueIdade}
          </div>
        </div>

        {/* Right: Homens e Mulheres (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">
                Homens e mulheres
              </h3>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Gênero
              </span>
            </div>

            {/* Two Gender Stat Blocks */}
            <div className="space-y-4 mb-6">
              {/* Homens */}
              <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-slate-500">
                    Conversas de homens
                  </span>
                  <span className="text-xs font-bold text-slate-900 tabular-nums">
                    {DEMOGRAPHICS_SUMMARY.homensMulheres.homens.parteConversas}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums mb-2">
                  {DEMOGRAPHICS_SUMMARY.homensMulheres.homens.conversas}
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Custo por conversa:</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {DEMOGRAPHICS_SUMMARY.homensMulheres.homens.custoConversa}
                  </span>
                </div>
              </div>

              {/* Mulheres */}
              <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-slate-500">
                    Conversas de mulheres
                  </span>
                  <span className="text-xs font-medium text-slate-500 tabular-nums">
                    Investido: {DEMOGRAPHICS_SUMMARY.homensMulheres.mulheres.investido}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-slate-700 tabular-nums mb-2">
                  {DEMOGRAPHICS_SUMMARY.homensMulheres.mulheres.conversas}
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Custo por conversa:</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {DEMOGRAPHICS_SUMMARY.homensMulheres.mulheres.custoConversa}
                  </span>
                </div>
              </div>
            </div>

            {/* Gender visual distribution bar */}
            <div className="space-y-1.5 mb-5">
              <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
                <div
                  className="bg-slate-800 h-full transition-all"
                  style={{ width: '94.34%' }}
                  title="Homens: 94,34%"
                />
                <div
                  className="bg-rose-400 h-full transition-all"
                  style={{ width: '5.66%' }}
                  title="Mulheres: 5,66%"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Homens: 94,34%</span>
                <span>Mulheres: 5,66%</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
            {DEMOGRAPHICS_SUMMARY.homensMulheres.comentario}
          </p>
        </div>
      </div>

      {/* Complete Table: Resultado por faixa de idade */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-900">
            Resultado por faixa de idade
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            As duas campanhas somadas. &quot;Não informada&quot; são pessoas sem idade no perfil.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th
                  onClick={() => handleSort('idade')}
                  className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Idade</span>
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
              {sortedAgeData.map((row, idx) => {
                const isHighlight = row.isTopSegment;

                return (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      isHighlight
                        ? 'bg-rose-50/40 hover:bg-rose-50/70 font-medium'
                        : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        {isHighlight && (
                          <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                        )}
                        <span>{row.idade}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {row.investidoStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums text-slate-500">
                      {row.impressoesStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {row.cliquesStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {row.ctrStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {row.cpcStr}
                    </td>
                    <td className="py-3 px-3 text-right tabular-nums">
                      {row.cpmStr}
                    </td>
                    <td
                      className={`py-3 px-4 text-right tabular-nums font-bold ${
                        isHighlight ? 'text-rose-600' : 'text-slate-800'
                      }`}
                    >
                      {row.conversasStr}
                    </td>
                    <td
                      className={`py-3 px-4 text-right tabular-nums font-bold ${
                        isHighlight ? 'text-emerald-700' : 'text-slate-800'
                      }`}
                    >
                      {row.custoConversaStr}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {row.taxaCliqueConversaStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
