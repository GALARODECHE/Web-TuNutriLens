import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  Scale, 
  Leaf, 
  AlertTriangle, 
  FileText, 
  Euro, 
  Eye, 
  Refrigerator, 
  HeartPulse, 
  Lock,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { 
  MARKET_DIMENSIONS, 
  COMPETITORS, 
  KEY_THESIS, 
  TOTAL_AVERAGES,
  DimensionAudit 
} from '../data/marketAuditData';

interface MarketAuditSectionProps {
  onOpenDownload?: () => void;
  defaultExpanded?: boolean;
}

export const MarketAuditSection: React.FC<MarketAuditSectionProps> = ({ onOpenDownload, defaultExpanded = false }) => {
  const [activeView, setActiveView] = useState<'table' | 'detailed'>('table');
  const [selectedDimensionId, setSelectedDimensionId] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterRival, setFilterRival] = useState<'all' | 'myfitnesspal' | 'yuka' | 'calai' | 'myrealfood'>('all');

  const selectedDimension = MARKET_DIMENSIONS.find(d => d.id === selectedDimensionId) || MARKET_DIMENSIONS[0];

  const getScoreBadge = (score: number, isTuNutriLens = false) => {
    if (isTuNutriLens) {
      return (
        <span className="inline-flex items-center gap-1 font-black text-emerald-900 bg-emerald-200/90 border border-emerald-400 px-2 py-0.5 rounded-full text-xs shadow-xs">
          {score}/10 ✅
        </span>
      );
    }
    if (score >= 8) {
      return (
        <span className="inline-block font-semibold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full text-xs">
          {score}/10
        </span>
      );
    }
    if (score >= 5) {
      return (
        <span className="inline-block font-semibold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full text-xs">
          {score}/10
        </span>
      );
    }
    if (score > 0) {
      return (
        <span className="inline-block font-medium text-rose-800 bg-rose-100 border border-rose-200 px-2 py-0.5 rounded-full text-xs">
          {score}/10
        </span>
      );
    }
    return (
      <span className="inline-block font-medium text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full text-xs">
        0/10
      </span>
    );
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Header Bar of the Audit */}
      <div className="bg-[#2B2A23] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF9AA0] text-[#2B2A23] text-xs font-black tracking-wide uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Auditoría Competitiva Oficial 2026</span>
          </div>
          <span className="text-xs text-white/70 font-mono-carrd">
            Datos Verificados • BEDCA / EFSA / RGPD
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold font-bricolage tracking-tight text-white pt-1">
          TuNutriLens™ frente al Mercado de Nutrición Digital
        </h3>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Análisis comparativo exhaustivo frente a <strong className="text-white">MyFitnessPal</strong>, <strong className="text-white">Yuka</strong>, <strong className="text-white">Cal AI</strong> y <strong className="text-white">MyRealFood</strong> en 9 dimensiones críticas.
        </p>
      </div>

      {/* Key Thesis Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#096121] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#096121]" />
          <span>Tesis Diferencial Clave</span>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-[#2B2A23] leading-relaxed">
          «TuNutriLens es la única solución del mercado que combina <strong className="text-[#096121] underline decoration-[#096121]/30">Visión Artificial Triple (Plato + Súper + Nevera)</strong>, rigor clínico basado en el <strong className="text-[#096121] underline decoration-[#096121]/30">Índice de Salud Mediterránea (ISM)</strong> y lucha activa contra el desperdicio con <strong className="text-[#096121] underline decoration-[#096121]/30">ahorro económico demostrable en euros</strong>.»
        </p>
      </div>

      {/* View Switcher: Table vs Detailed Advantages */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#2B2A23]/20 pb-3">
        <div className="inline-flex p-1 bg-white/80 rounded-xl border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23]">
          <button
            type="button"
            onClick={() => setActiveView('table')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'table'
                ? 'bg-[#2B2A23] text-white shadow-xs'
                : 'text-[#2B2A23] hover:bg-black/5'
            }`}
          >
            📊 1. Tabla Global (0 a 10)
          </button>
          <button
            type="button"
            onClick={() => setActiveView('detailed')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'detailed'
                ? 'bg-[#2B2A23] text-white shadow-xs'
                : 'text-[#2B2A23] hover:bg-black/5'
            }`}
          >
            🔍 2. Análisis de las 9 Ventajas
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#2B2A23] border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23] text-xs font-bold transition-all hover:scale-105 cursor-pointer"
            title="Abrir auditoría completa en pantalla ampliada"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#096121]" />
            <span>Vista Ampliada</span>
          </button>
          
          <span className="text-xs font-medium text-[#2B2A23]/70 hidden md:inline">
            Promedio auditado
          </span>
        </div>
      </div>

      {/* VIEW 1: GLOBAL SCORE TABLE */}
      {activeView === 'table' && (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#2B2A23] text-white border-b-2 border-[#2B2A23]">
                  <th className="py-3 px-3 sm:px-4 font-bold tracking-tight">Dimensión Analizada</th>
                  <th className="py-3 px-2 sm:px-3 font-bold bg-[#096121] text-white text-center min-w-[95px]">
                    TuNutriLens
                  </th>
                  <th className="py-3 px-2 sm:px-3 font-semibold text-center text-white/90">MyFitnessPal</th>
                  <th className="py-3 px-2 sm:px-3 font-semibold text-center text-white/90">Yuka</th>
                  <th className="py-3 px-2 sm:px-3 font-semibold text-center text-white/90">Cal AI / Foodvisor</th>
                  <th className="py-3 px-2 sm:px-3 font-semibold text-center text-white/90">MyRealFood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2B2A23]/10">
                {MARKET_DIMENSIONS.map((item, idx) => (
                  <tr 
                    key={item.id}
                    className={`hover:bg-amber-50/40 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'
                    }`}
                  >
                    <td className="py-2.5 px-3 sm:px-4 font-medium text-[#2B2A23]">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDimensionId(item.id);
                          setActiveView('detailed');
                        }}
                        className="text-left hover:text-[#096121] hover:underline font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        title="Ver detalle analítico de esta dimensión"
                      >
                        <span>{item.id}. {item.title}</span>
                      </button>
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-center bg-emerald-50/80 font-bold">
                      {getScoreBadge(item.scores.tunutrilens, true)}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-center">
                      {getScoreBadge(item.scores.myfitnesspal)}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-center">
                      {getScoreBadge(item.scores.yuka)}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-center">
                      {getScoreBadge(item.scores.calai)}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-center">
                      {getScoreBadge(item.scores.myrealfood)}
                    </td>
                  </tr>
                ))}

                {/* Total Average Row */}
                <tr className="bg-[#2B2A23] text-white font-bold border-t-2 border-[#2B2A23]">
                  <td className="py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-black tracking-wider uppercase">
                    PROMEDIO TOTAL
                  </td>
                  <td className="py-3.5 px-2 sm:px-3 text-center bg-[#096121] text-emerald-100 font-black text-xs sm:text-sm">
                    10 / 10 ✅
                  </td>
                  <td className="py-3.5 px-2 sm:px-3 text-center text-rose-200 font-bold text-xs sm:text-sm">
                    2.2 / 10
                  </td>
                  <td className="py-3.5 px-2 sm:px-3 text-center text-amber-200 font-bold text-xs sm:text-sm">
                    4.3 / 10
                  </td>
                  <td className="py-3.5 px-2 sm:px-3 text-center text-orange-200 font-bold text-xs sm:text-sm">
                    3.1 / 10
                  </td>
                  <td className="py-3.5 px-2 sm:px-3 text-center text-yellow-200 font-bold text-xs sm:text-sm">
                    4.7 / 10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Explanatory Cards for Competitors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-white border border-[#2B2A23]/30 text-xs space-y-1">
              <span className="font-bold text-[#2B2A23] block">MyFitnessPal (2.2/10):</span>
              <p className="text-stone-600 text-[11px] leading-snug">
                Buscador manual tedioso, bases de datos caóticas con datos erróneos de usuarios y publicidad intrusiva.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#2B2A23]/30 text-xs space-y-1">
              <span className="font-bold text-[#2B2A23] block">Yuka (4.3/10):</span>
              <p className="text-stone-600 text-[11px] leading-snug">
                Excelente en aditivos, pero limitada estrictamente a códigos de barras: no reconoce comidas reales ni nevera.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#2B2A23]/30 text-xs space-y-1">
              <span className="font-bold text-[#2B2A23] block">Cal AI (3.1/10):</span>
              <p className="text-stone-600 text-[11px] leading-snug">
                Solo foto de plato con modelos genéricos estadounidenses; precios de hasta 30€/mes sin base científica local.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#2B2A23]/30 text-xs space-y-1">
              <span className="font-bold text-[#2B2A23] block">MyRealFood (4.7/10):</span>
              <p className="text-stone-600 text-[11px] leading-snug">
                Clasificación Nova estática y recetas manuales, sin escaneo de nevera en tiempo real ni cálculo de ahorro.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: DETAILED 9 ADVANTAGES */}
      {activeView === 'detailed' && (
        <div className="space-y-4">
          
          {/* Dimension Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            {MARKET_DIMENSIONS.map((dim) => {
              const isSelected = dim.id === selectedDimensionId;
              return (
                <button
                  key={dim.id}
                  type="button"
                  onClick={() => setSelectedDimensionId(dim.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#096121] text-white border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23]'
                      : 'bg-white/80 hover:bg-white text-[#2B2A23] border-[#2B2A23]/30'
                  }`}
                >
                  <span>{dim.id}. {dim.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Dimension Detail Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] space-y-5 animate-in fade-in duration-200">
            
            {/* Header of the dimension */}
            <div className="space-y-2 border-b-2 border-[#2B2A23]/10 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EF9AA0] text-[#2B2A23] text-xs font-bold">
                  {selectedDimension.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-stone-500">Puntuación:</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs">
                    TuNutriLens: {selectedDimension.scores.tunutrilens}/10
                  </span>
                </div>
              </div>
              
              <h4 className="text-base sm:text-lg font-bold font-bricolage text-[#2B2A23]">
                {selectedDimension.id}. {selectedDimension.title}
              </h4>
            </div>

            {/* Problem in the Market */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-300 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Problema en el mercado actual:</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 pl-5 leading-relaxed font-normal">
                {selectedDimension.marketProblem}
              </p>
            </div>

            {/* TuNutriLens Differential Advantage */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/90 border-2 border-emerald-400 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-[#096121] uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#096121] shrink-0" />
                <span>Ventaja diferencial TuNutriLens:</span>
              </div>
              <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-emerald-950">
                {selectedDimension.tunutrilensAdvantage.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#096121] shrink-0 mt-0.5 font-black" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Comparison Matrix against 4 Rivals */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B2A23]">
                  Comparativa Directa frente a Alternativas:
                </span>
                <span className="text-[11px] text-stone-500">
                  Auditado vs. versiones 2026
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* MyFitnessPal */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">MyFitnessPal</span>
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                      {selectedDimension.scores.myfitnesspal}/10
                    </span>
                  </div>
                  <p className="font-bold text-rose-800 text-[11px]">
                    {selectedDimension.rivalAnalysis.myfitnesspal.verdict}
                  </p>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {selectedDimension.rivalAnalysis.myfitnesspal.detail}
                  </p>
                </div>

                {/* Yuka */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">Yuka</span>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {selectedDimension.scores.yuka}/10
                    </span>
                  </div>
                  <p className="font-bold text-amber-800 text-[11px]">
                    {selectedDimension.rivalAnalysis.yuka.verdict}
                  </p>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {selectedDimension.rivalAnalysis.yuka.detail}
                  </p>
                </div>

                {/* Cal AI */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">Cal AI / Foodvisor</span>
                    <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                      {selectedDimension.scores.calai}/10
                    </span>
                  </div>
                  <p className="font-bold text-orange-800 text-[11px]">
                    {selectedDimension.rivalAnalysis.calai.verdict}
                  </p>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {selectedDimension.rivalAnalysis.calai.detail}
                  </p>
                </div>

                {/* MyRealFood */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">MyRealFood</span>
                    <span className="text-[11px] font-bold text-yellow-800 bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-200">
                      {selectedDimension.scores.myrealfood}/10
                    </span>
                  </div>
                  <p className="font-bold text-yellow-900 text-[11px]">
                    {selectedDimension.rivalAnalysis.myrealfood.verdict}
                  </p>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {selectedDimension.rivalAnalysis.myrealfood.detail}
                  </p>
                </div>

              </div>
            </div>

            {/* Pagination between dimensions */}
            <div className="flex items-center justify-between pt-2 border-t border-stone-100">
              <button
                type="button"
                disabled={selectedDimension.id === 1}
                onClick={() => setSelectedDimensionId(prev => Math.max(1, prev - 1))}
                className="px-3 py-1.5 rounded-lg border border-[#2B2A23]/30 text-xs font-bold text-[#2B2A23] hover:bg-stone-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                ← Anterior ({Math.max(1, selectedDimension.id - 1)}/9)
              </button>
              
              <span className="text-xs font-mono-carrd text-stone-500">
                Dimensión {selectedDimension.id} de 9
              </span>

              <button
                type="button"
                disabled={selectedDimension.id === 9}
                onClick={() => setSelectedDimensionId(prev => Math.min(9, prev + 1))}
                className="px-3 py-1.5 rounded-lg border border-[#2B2A23]/30 text-xs font-bold text-[#2B2A23] hover:bg-stone-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                Siguiente ({Math.min(9, selectedDimension.id + 1)}/9) →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Compliance and Audit Certification Footer */}
      <div className="p-3.5 rounded-xl bg-stone-100/90 border border-[#2B2A23]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#2B2A23]/80">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#096121] shrink-0" />
          <span>{KEY_THESIS.source}</span>
        </div>
        {onOpenDownload && (
          <button
            type="button"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-1 font-bold text-[#096121] hover:underline cursor-pointer"
          >
            <span>Probar TuNutriLens Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Full Expanded Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B2A23]/75 backdrop-blur-xs font-mono-carrd text-[#2B2A23] animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-[1.75rem] p-5 sm:p-8 shadow-[8px_8px_0px_#2B2A23] border-[3px] border-[#2B2A23] max-h-[92vh] overflow-y-auto space-y-6">
            
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#2B2A23] hover:bg-[#EF9AA0]/40 transition-colors border-2 border-[#2B2A23] bg-white cursor-pointer"
              aria-label="Cerrar auditoría ampliada"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF9AA0] text-[#2B2A23] text-xs font-black uppercase border border-[#2B2A23]">
                <Scale className="w-3.5 h-3.5" />
                <span>Auditoría Competitiva Oficial 2026 • Vista Detallada</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-bricolage text-[#2B2A23]">
                TuNutriLens™ frente al Mercado de Nutrición Digital
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Tesis Diferencial Clave: TuNutriLens es la única solución del mercado que combina Visión Artificial Triple (Plato + Súper + Nevera), rigor clínico basado en el Índice de Salud Mediterránea (ISM) y lucha activa contra el desperdicio con ahorro económico demostrable en euros.
              </p>
            </div>

            {/* Modal Inner Switcher */}
            <div className="flex items-center gap-2 border-b-2 border-[#2B2A23]/20 pb-3">
              <button
                type="button"
                onClick={() => setActiveView('table')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border-2 border-[#2B2A23] ${
                  activeView === 'table'
                    ? 'bg-[#2B2A23] text-white shadow-[2px_2px_0px_#2B2A23]'
                    : 'bg-white text-[#2B2A23] hover:bg-stone-100'
                }`}
              >
                📊 1. Tabla Global de Puntuación (0 a 10)
              </button>
              <button
                type="button"
                onClick={() => setActiveView('detailed')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border-2 border-[#2B2A23] ${
                  activeView === 'detailed'
                    ? 'bg-[#2B2A23] text-white shadow-[2px_2px_0px_#2B2A23]'
                    : 'bg-white text-[#2B2A23] hover:bg-stone-100'
                }`}
              >
                🔍 2. Análisis Exhaustivo de las 9 Ventajas
              </button>
            </div>

            {/* Content inside modal */}
            {activeView === 'table' ? (
              <div className="space-y-4">
                <div className="overflow-x-auto rounded-2xl border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#2B2A23] text-white border-b-2 border-[#2B2A23]">
                        <th className="py-3.5 px-4 font-bold tracking-tight">Dimensión Analizada</th>
                        <th className="py-3.5 px-3 font-bold bg-[#096121] text-white text-center">TuNutriLens</th>
                        <th className="py-3.5 px-3 font-semibold text-center text-white/90">MyFitnessPal</th>
                        <th className="py-3.5 px-3 font-semibold text-center text-white/90">Yuka</th>
                        <th className="py-3.5 px-3 font-semibold text-center text-white/90">Cal AI / Foodvisor</th>
                        <th className="py-3.5 px-3 font-semibold text-center text-white/90">MyRealFood</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2B2A23]/10">
                      {MARKET_DIMENSIONS.map((item, idx) => (
                        <tr 
                          key={item.id}
                          className={`hover:bg-amber-50/50 transition-colors ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'
                          }`}
                        >
                          <td className="py-3 px-4 font-bold text-[#2B2A23]">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDimensionId(item.id);
                                setActiveView('detailed');
                              }}
                              className="text-left hover:text-[#096121] hover:underline flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>{item.id}. {item.title}</span>
                            </button>
                          </td>
                          <td className="py-3 px-3 text-center bg-emerald-50 font-bold">
                            {getScoreBadge(item.scores.tunutrilens, true)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {getScoreBadge(item.scores.myfitnesspal)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {getScoreBadge(item.scores.yuka)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {getScoreBadge(item.scores.calai)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {getScoreBadge(item.scores.myrealfood)}
                          </td>
                        </tr>
                      ))}

                      {/* Promedio Total */}
                      <tr className="bg-[#2B2A23] text-white font-bold border-t-2 border-[#2B2A23]">
                        <td className="py-4 px-4 font-black tracking-wider uppercase text-sm sm:text-base">
                          PROMEDIO TOTAL
                        </td>
                        <td className="py-4 px-3 text-center bg-[#096121] text-emerald-100 font-black text-sm sm:text-base">
                          10 / 10 ✅
                        </td>
                        <td className="py-4 px-3 text-center text-rose-200 font-bold text-sm sm:text-base">
                          2.2 / 10
                        </td>
                        <td className="py-4 px-3 text-center text-amber-200 font-bold text-sm sm:text-base">
                          4.3 / 10
                        </td>
                        <td className="py-4 px-3 text-center text-orange-200 font-bold text-sm sm:text-base">
                          3.1 / 10
                        </td>
                        <td className="py-4 px-3 text-center text-yellow-200 font-bold text-sm sm:text-base">
                          4.7 / 10
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23] text-xs space-y-1">
                    <span className="font-bold text-[#2B2A23] block text-sm">MyFitnessPal (2.2/10)</span>
                    <p className="text-stone-600 leading-snug">
                      Buscador manual tedioso, bases de datos caóticas con datos erróneos de usuarios y publicidad intrusiva.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23] text-xs space-y-1">
                    <span className="font-bold text-[#2B2A23] block text-sm">Yuka (4.3/10)</span>
                    <p className="text-stone-600 leading-snug">
                      Excelente en aditivos, pero limitada estrictamente a códigos de barras: no reconoce comidas reales ni nevera.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23] text-xs space-y-1">
                    <span className="font-bold text-[#2B2A23] block text-sm">Cal AI (3.1/10)</span>
                    <p className="text-stone-600 leading-snug">
                      Solo foto de plato con modelos genéricos estadounidenses; precios de hasta 30€/mes sin base científica local.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23] text-xs space-y-1">
                    <span className="font-bold text-[#2B2A23] block text-sm">MyRealFood (4.7/10)</span>
                    <p className="text-stone-600 leading-snug">
                      Clasificación Nova estática y recetas manuales, sin escaneo de nevera en tiempo real ni cálculo de ahorro.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Selector pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {MARKET_DIMENSIONS.map((dim) => {
                    const isSelected = dim.id === selectedDimensionId;
                    return (
                      <button
                        key={dim.id}
                        type="button"
                        onClick={() => setSelectedDimensionId(dim.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-[#096121] text-white border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23]'
                            : 'bg-white hover:bg-stone-100 text-[#2B2A23] border-[#2B2A23]/30'
                        }`}
                      >
                        <span>{dim.id}. {dim.shortTitle}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected card detail */}
                <div className="p-5 sm:p-7 rounded-2xl bg-white border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] space-y-5">
                  <div className="space-y-2 border-b-2 border-[#2B2A23]/10 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EF9AA0] text-[#2B2A23] text-xs font-bold border border-[#2B2A23]">
                        {selectedDimension.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-400 font-black text-xs">
                        TuNutriLens: 10/10 ✅
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold font-bricolage text-[#2B2A23]">
                      {selectedDimension.id}. {selectedDimension.title}
                    </h4>
                  </div>

                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Problema en el mercado:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 pl-6 leading-relaxed">
                      {selectedDimension.marketProblem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-emerald-50/90 border-2 border-emerald-400 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black text-[#096121] uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-[#096121] shrink-0" />
                      <span>Ventaja diferencial TuNutriLens:</span>
                    </div>
                    <ul className="space-y-2 pl-2 text-xs sm:text-sm text-emerald-950">
                      {selectedDimension.tunutrilensAdvantage.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#096121] shrink-0 mt-0.5 font-black" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rival grid */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2B2A23] block">
                      Comparativa directa frente a los líderes del mercado:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-300 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">MyFitnessPal</span>
                          <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                            {selectedDimension.scores.myfitnesspal}/10
                          </span>
                        </div>
                        <p className="font-bold text-rose-800">{selectedDimension.rivalAnalysis.myfitnesspal.verdict}</p>
                        <p className="text-stone-600 leading-relaxed">{selectedDimension.rivalAnalysis.myfitnesspal.detail}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-300 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">Yuka</span>
                          <span className="font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                            {selectedDimension.scores.yuka}/10
                          </span>
                        </div>
                        <p className="font-bold text-amber-800">{selectedDimension.rivalAnalysis.yuka.verdict}</p>
                        <p className="text-stone-600 leading-relaxed">{selectedDimension.rivalAnalysis.yuka.detail}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-300 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">Cal AI / Foodvisor</span>
                          <span className="font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-md">
                            {selectedDimension.scores.calai}/10
                          </span>
                        </div>
                        <p className="font-bold text-orange-800">{selectedDimension.rivalAnalysis.calai.verdict}</p>
                        <p className="text-stone-600 leading-relaxed">{selectedDimension.rivalAnalysis.calai.detail}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-300 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">MyRealFood</span>
                          <span className="font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-md">
                            {selectedDimension.scores.myrealfood}/10
                          </span>
                        </div>
                        <p className="font-bold text-yellow-900">{selectedDimension.rivalAnalysis.myrealfood.verdict}</p>
                        <p className="text-stone-600 leading-relaxed">{selectedDimension.rivalAnalysis.myrealfood.detail}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Modal Bottom Close */}
            <div className="flex items-center justify-between pt-3 border-t-2 border-[#2B2A23]/10">
              <span className="text-xs text-stone-500 font-mono-carrd">
                {KEY_THESIS.source}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#2B2A23] text-white font-bold text-xs hover:bg-black transition-colors cursor-pointer"
              >
                Cerrar Vista Ampliada
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
