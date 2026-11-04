import React, { useState } from 'react';
import { X, BookOpen, Search } from 'lucide-react';
import { GLOSSARY_ITEMS } from '../data/reportData';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = GLOSSARY_ITEMS.filter(
    (item) =>
      item.termo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definicao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Como ler este relatório
              </h3>
              <p className="text-xs text-slate-500">
                Definições e conceitos técnicos utilizados nas métricas
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

        {/* Search */}
        <div className="px-6 py-3 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar termo ou significado..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
          {filtered.map((item, idx) => (
            <div key={idx} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900">
                  {item.termo}
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {item.canal}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definicao}
              </p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">
              Nenhum termo encontrado para &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
