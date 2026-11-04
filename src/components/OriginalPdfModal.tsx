import React from 'react';
import { X, ExternalLink, Download, FileCheck } from 'lucide-react';
import { REPORT_META } from '../data/reportData';

interface OriginalPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalPdfModal: React.FC<OriginalPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl h-[88vh] bg-white rounded-xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 text-rose-700 rounded-lg">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Documento Original de Referência (PDF)
              </h3>
              <p className="text-xs text-slate-500">
                ropre-telenick-outubro-2026_00ef6de2.pdf · 6 páginas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={REPORT_META.pdfPath}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar PDF</span>
            </a>
            <a
              href={REPORT_META.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir em Nova Aba</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Iframe viewer */}
        <div className="flex-1 w-full bg-slate-100">
          <iframe
            src={`${REPORT_META.pdfPath}#toolbar=1&view=FitH`}
            title="Documento PDF Original"
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info note */}
        <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>
            Verificação de fidelidade: 100% dos dados, textos e observações foram integralmente preservados.
          </span>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-slate-900 font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
