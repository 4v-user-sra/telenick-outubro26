import React, { useState } from 'react';
import { X, Sliders, ArrowRight, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

interface BudgetSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BudgetSimulatorModal: React.FC<BudgetSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Scenario 1: Reallocate 30d Meta spend to 90d Meta
  const [meta30dShiftPercent, setMeta30dShiftPercent] = useState<number>(100);

  // Scenario 2: Reallocate Google NK001 #2 to NK001 Principal
  const [googleCannibalizationShift, setGoogleCannibalizationShift] = useState<number>(100);

  // Scenario 3: Optimize Google NK6000 budget to NK001 Principal
  const [googleNk6000ShiftPercent, setGoogleNk6000ShiftPercent] = useState<number>(30);

  if (!isOpen) return null;

  // Constants from October report:
  const meta30dTotal = 333.24; // R$ 333,24 spent in 30d
  const meta30dOriginalConv = 20; // 20 conversations at R$ 16,66
  const meta90dCostPerConv = 2.46; // R$ 2,46 in 90d

  const googleNk001AltSpend = 199.93; // R$ 199,93 in #2
  const googleNk001AltOriginalConv = 2; // 2 conversions at R$ 99,97
  const googleNk001MainCostPerConv = 8.05; // R$ 8,05 in NK001 Principal

  const googleNk6000Spend = 912.87; // R$ 912,87 spent in NK6000
  const googleNk6000CostPerConv = 53.70; // R$ 53,70

  // Calculations:
  // Meta calculation:
  const shiftedMetaMoney = (meta30dTotal * meta30dShiftPercent) / 100;
  const remaining30dMoney = meta30dTotal - shiftedMetaMoney;
  const simulated30dConv = Math.round(remaining30dMoney / 16.66);
  const extra90dConv = Math.round(shiftedMetaMoney / meta90dCostPerConv);
  const totalSimulatedMetaConvFromShift = simulated30dConv + extra90dConv;
  const metaConvDiff = totalSimulatedMetaConvFromShift - meta30dOriginalConv;

  // Google calculation:
  const shiftedGoogleCannibalMoney = (googleNk001AltSpend * googleCannibalizationShift) / 100;
  const remainingCannibalMoney = googleNk001AltSpend - shiftedGoogleCannibalMoney;
  const simulatedCannibalConv = Math.round(remainingCannibalMoney / 99.97);
  const extraMainFromCannibal = Math.round(shiftedGoogleCannibalMoney / googleNk001MainCostPerConv);

  const shiftedGoogleNk6000Money = (googleNk6000Spend * googleNk6000ShiftPercent) / 100;
  const remainingNk6000Money = googleNk6000Spend - shiftedGoogleNk6000Money;
  const simulatedNk6000Conv = Math.round(remainingNk6000Money / googleNk6000CostPerConv);
  const extraMainFromNk6000 = Math.round(shiftedGoogleNk6000Money / googleNk001MainCostPerConv);

  const totalExtraGoogleConv =
    (simulatedCannibalConv + extraMainFromCannibal - googleNk001AltOriginalConv) +
    (simulatedNk6000Conv + extraMainFromNk6000 - Math.round(googleNk6000Spend / googleNk6000CostPerConv));

  const totalExtraOverall = metaConvDiff + totalExtraGoogleConv;
  const originalContacts = 482;
  const projectedContacts = originalContacts + totalExtraOverall;
  const originalAvgCost = 6.12;
  const projectedAvgCost = (2951.54 / projectedContacts).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Simulador Dinâmico de Oportunidades & Realocação
              </h3>
              <p className="text-xs text-slate-500">
                Calcule o ganho potencial aplicando os apontamentos de &quot;Pontos de Atenção&quot;
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Summary Impact Box */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                Projeção com o mesmo orçamento total (R$ 2.951,54)
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  {projectedContacts} contatos
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  +{totalExtraOverall} contatos (+{((totalExtraOverall / originalContacts) * 100).toFixed(1)}%)
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Custo médio por contato cairia de <strong className="text-slate-800">R$ {originalAvgCost.toFixed(2)}</strong> para <strong className="text-emerald-700">R$ {projectedAvgCost}</strong>.
              </p>
            </div>

            <div className="text-right shrink-0 bg-white p-3 rounded-lg border border-emerald-100 shadow-xs">
              <span className="text-[11px] text-slate-500 block">Eficiência de Conversão</span>
              <span className="text-lg font-bold text-emerald-600 tabular-nums">
                {((projectedContacts / 1778) * 100).toFixed(1)}% dos cliques
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">era 27,11% no mês</span>
            </div>
          </div>

          {/* Lever 1: Meta 30d into 90d */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  1. Realocar verba do público de 30 dias (Meta) para 90 dias
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  O público de 30 dias gastou R$ 333,24 para gerar 20 conversas (R$ 16,66 cada). No público de 90 dias, a conversa custa R$ 2,46.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded tabular-nums whitespace-nowrap">
                +{metaConvDiff} conversas
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Percentual realocado para 90 dias:</span>
                <strong className="text-slate-900 tabular-nums">{meta30dShiftPercent}% (R$ {shiftedMetaMoney.toFixed(2)})</strong>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={meta30dShiftPercent}
                onChange={(e) => setMeta30dShiftPercent(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0% (manter como em outubro)</span>
                <span>100% (recomendação do relatório)</span>
              </div>
            </div>
          </div>

          {/* Lever 2: Pause NK001 Leads #2 and shift to main */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  2. Pausar NK001 Leads #2 e transferir verba para NK001 Principal
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  A campanha #2 gastou R$ 199,93 gerando 2 conversões (R$ 99,97 cada) disputando buscas com a principal, que converte a R$ 8,05 e estava limitada pelo orçamento.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded tabular-nums whitespace-nowrap">
                +{extraMainFromCannibal - (googleNk001AltOriginalConv - simulatedCannibalConv)} conversões
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Percentual transferido para NK001 Principal:</span>
                <strong className="text-slate-900 tabular-nums">{googleCannibalizationShift}% (R$ {shiftedGoogleCannibalMoney.toFixed(2)})</strong>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={googleCannibalizationShift}
                onChange={(e) => setGoogleCannibalizationShift(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Lever 3: Negative keywords filter on NK6000 and shift part of budget */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  3. Filtrar termos da NK6000 e realocar verba excedente para NK001
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  NK6000 consumiu R$ 912,87 com 412 cliques mas gerou apenas 17 conversões (R$ 53,70 cada). Negativar termos irrelevantes libera verba para a NK001.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded tabular-nums whitespace-nowrap">
                +{extraMainFromNk6000 - Math.round(shiftedGoogleNk6000Money / googleNk6000CostPerConv)} conversões
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Verba de termos filtrados transferida para NK001:</span>
                <strong className="text-slate-900 tabular-nums">{googleNk6000ShiftPercent}% (R$ {shiftedGoogleNk6000Money.toFixed(2)})</strong>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={googleNk6000ShiftPercent}
                onChange={(e) => setGoogleNk6000ShiftPercent(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              setMeta30dShiftPercent(100);
              setGoogleCannibalizationShift(100);
              setGoogleNk6000ShiftPercent(30);
            }}
            className="text-xs text-slate-500 hover:text-slate-900 font-medium"
          >
            Restaurar recomendação ideal
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
          >
            Aplicar ao Entendimento
          </button>
        </div>
      </div>
    </div>
  );
};
