import React, { useState } from 'react';
import {
  CANAIS_DATA,
  CANAIS_TEXT,
  ChannelData,
} from '../data/reportData';
import { ArrowUpDown, HelpCircle, ArrowUpRight } from 'lucide-react';

interface ChannelComparisonProps {
  onSelectChannel?: (channelId: string) => void;
}

type SortField =
  | 'canal'
  | 'investido'
  | 'impressoes'
  | 'cliques'
  | 'ctr'
  | 'cpc'
  | 'contatos'
  | 'custoContato'
  | 'taxaCliqueContato';

export const ChannelComparison: React.FC<ChannelComparisonProps> = ({
  onSelectChannel,
}) => {
  const [sortField, setSortField] = useState<SortField>('contatos');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'todos' | 'meta' | 'google'>('todos');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedChannels = [...CANAIS_DATA].sort((a, b) => {
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
    <section id="canais" className="scroll-mt-20 mb-14">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Como cada canal contribuiu
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {CANAIS_TEXT.introducao}
        </p>
      </div>

      {/* Dual Comparative Cards Grid (Verba x Contatos & Custo por Contato) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {/* Card 1: Parte da verba x parte dos contatos */}
        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">
                Parte da verba x parte dos contatos
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-300" />
                  <span>Investimento</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-rose-600" />
                  <span>Contatos</span>
                </div>
              </div>
            </div>

            {/* Visual Bars for Meta Ads */}
            <div className="space-y-4 mb-4">
              <div className="p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-2">
                  <span>Meta Ads</span>
                  <span className="text-slate-500 font-normal">
                    42,10% da verba → 80,71% dos contatos
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-0.5">
                      <span>Investimento: R$ 1.242,71</span>
                      <span className="font-semibold tabular-nums">42,10%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full transition-all duration-500"
                        style={{ width: '42.10%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-0.5">
                      <span>Contatos: 389 conversas</span>
                      <span className="font-bold text-rose-600 tabular-nums">
                        80,71%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-rose-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-600 rounded-full transition-all duration-500"
                        style={{ width: '80.71%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Bars for Google Ads */}
              <div className="p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-2">
                  <span>Google Ads</span>
                  <span className="text-slate-500 font-normal">
                    57,90% da verba → 19,29% dos contatos
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-0.5">
                      <span>Investimento: R$ 1.708,83</span>
                      <span className="font-semibold tabular-nums">57,90%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full transition-all duration-500"
                        style={{ width: '57.90%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-0.5">
                      <span>Contatos: 93 conversões</span>
                      <span className="font-bold text-slate-700 tabular-nums">
                        19,29%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-600 rounded-full transition-all duration-500"
                        style={{ width: '19.29%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-lg text-xs text-rose-900 leading-relaxed font-medium">
            {CANAIS_TEXT.destaqueVerbaContatos}
          </div>
        </div>

        {/* Card 2: Custo por contato em cada canal */}
        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4">
              Custo por contato em cada canal
            </h3>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-xs text-slate-500 block mb-1">
                  Meta Ads
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-rose-600 tabular-nums block">
                  R$ 3,19
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Custo por conversa
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-xs text-slate-500 block mb-1">
                  Google Ads
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-800 tabular-nums block">
                  R$ 18,37
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Custo por conversão
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-xs text-slate-500 block mb-1">
                  Média geral
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums block">
                  R$ 6,12
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Investimento / contatos
                </span>
              </div>
            </div>

            {/* Comparison Visual Gauge */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Relação de custo unitário</span>
                <span className="font-medium text-slate-700">
                  Google é 5,7x o custo do Meta
                </span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
                <div
                  className="bg-rose-500 h-full"
                  style={{ width: `${(3.19 / 21.56) * 100}%` }}
                  title="Meta: R$ 3,19"
                />
                <div
                  className="bg-amber-500 h-full"
                  style={{ width: `${(18.37 / 21.56) * 100}%` }}
                  title="Google: R$ 18,37"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Meta (R$ 3,19)</span>
                <span>Google (R$ 18,37)</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
            {CANAIS_TEXT.destaqueCustoGoogle}
          </p>
        </div>
      </div>

      {/* Números de cada canal (Interactive Table) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/50">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Números de cada canal
            </h3>
            <p className="text-xs text-slate-500">
              Clique nos cabeçalhos para ordenar as colunas
            </p>
          </div>

          {onSelectChannel && (
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => onSelectChannel('meta-ads')}
                className="px-2.5 py-1 text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors inline-flex items-center gap-1"
              >
                <span>Ver Meta</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => onSelectChannel('google-ads')}
                className="px-2.5 py-1 text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors inline-flex items-center gap-1"
              >
                <span>Ver Google</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th
                  onClick={() => handleSort('canal')}
                  className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Canal</span>
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
                  onClick={() => handleSort('contatos')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors font-bold text-rose-600"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Contatos</span>
                    <ArrowUpDown className="w-3 h-3 text-rose-500" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('custoContato')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Custo/contato</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('taxaCliqueContato')}
                  className="py-3 px-4 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Clique → contato</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sortedChannels.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: c.cor }}
                      />
                      <span>{c.canal}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums">
                    {c.investidoStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums text-slate-600">
                    {c.impressoesStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums">
                    {c.cliquesStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums font-medium">
                    {c.ctrStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums">
                    {c.cpcStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums font-bold text-rose-600 text-sm">
                    {c.contatosStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums font-semibold">
                    {c.custoContatoStr}
                  </td>
                  <td className="py-3.5 px-4 text-right tabular-nums">
                    {c.taxaCliqueContatoStr}
                  </td>
                </tr>
              ))}

              {/* Total Row */}
              <tr className="bg-slate-50/90 font-semibold text-slate-900 border-t-2 border-slate-200">
                <td className="py-3.5 px-4 font-bold">Total / Médias</td>
                <td className="py-3.5 px-4 text-right tabular-nums">
                  R$ 2.951,54
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums text-slate-600">
                  124.232
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums">1.778</td>
                <td className="py-3.5 px-4 text-right tabular-nums">
                  1,43%
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums">
                  R$ 1,66
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums font-bold text-rose-600 text-sm">
                  482
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums font-bold text-slate-900">
                  R$ 6,12
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums">
                  27,11%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
