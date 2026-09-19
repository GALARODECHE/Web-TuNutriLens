import React, { useState, useMemo } from 'react';
import { COMPARISON_DATA } from '../data/contentData';
import { Check, X, Sparkles, HelpCircle, Scan, HeartPulse, ShieldAlert, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenWaitlist: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'scanning' | 'personalization' | 'experience'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return COMPARISON_DATA.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.feature.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tunutrilens.value.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="comparativa" className="py-20 lg:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Comparativa Frente a la Competencia</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ¿Por qué <span className="text-emerald-600">TuNutriLens</span> es superior a las apps actuales?
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Las aplicaciones de nutrición no han cambiado en los últimos 15 años: te obligan a buscar ingredientes a mano o solo leen códigos de ultraprocesados envasados. 
            Analizamos punto por punto por qué nuestra tecnología visual y personalización marcan una nueva era.
          </p>
        </div>

        {/* Highlight Focus Cards (Scanning Precision & Nutrition Plans) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Scanning Precision */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 border-2 border-emerald-200/90 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl -z-0" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wide">
                <Scan className="w-4 h-4" />
                <span>Pilar 1: Precisión de Escaneo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Fin a los errores del 40% en calorías
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Las apps tradicionales fallan estrepitosamente con la comida casera y de restaurantes porque no pueden medir el volumen ni detectar aceites de cocción. 
                TuNutriLens utiliza <strong className="text-slate-900">visión computacional 3D y estimación de densidad óptica</strong>, reduciendo el error a menos del 3.2% en solo 1.8 segundos.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-emerald-800">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sin báscula
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Detección de aceites
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Comida real completa
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Plan Personalization */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 via-white to-slate-50 border-2 border-teal-200/90 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl -z-0" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-700 text-white text-xs font-bold uppercase tracking-wide">
                <HeartPulse className="w-4 h-4" />
                <span>Pilar 2: Personalización de Planes</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Nutrición viva adaptada a tu metabolismo real
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Las dietas de fotocopia de la competencia te encasillan en un número fijo que ralentiza tu metabolismo y genera efecto rebote. 
                TuNutriLens personaliza tu plan con <strong className="text-slate-900">biomarcadores, salud digestiva (SIBO/FODMAPs)</strong> y recalibra dinámicamente si tienes una cena social o cambias tu ritmo de vida.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-teal-900">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> +40 patologías clínicas
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Modo vida social
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Cero efecto rebote
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and search toolbar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todas las Características ({COMPARISON_DATA.length})
            </button>

            <button
              onClick={() => setActiveTab('scanning')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'scanning'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <Scan className="w-3.5 h-3.5" />
              <span>Precisión de Escaneo</span>
            </button>

            <button
              onClick={() => setActiveTab('personalization')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'personalization'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Personalización de Planes</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Experiencia & Ciencia
            </button>
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en la tabla..."
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50"
            />
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 shadow-lg shadow-slate-100">
          <table className="w-full min-w-[760px] text-left border-collapse bg-white">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-5 px-6 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                  Criterio de Evaluación
                </th>

                {/* TuNutriLens Premier Column Header */}
                <th className="py-5 px-6 bg-emerald-600 text-white w-1/3 relative shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white/10 p-0.5 border border-white/20">
                        <img src="/logo.svg" alt="TuNutriLens" className="w-full h-full object-cover rounded-[6px]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-base sm:text-lg font-black font-display tracking-tight">TuNutriLens</span>
                          <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">
                            Líder
                          </span>
                        </div>
                        <p className="text-[11px] text-emerald-100 font-medium">Nuestra App Inteligente</p>
                      </div>
                    </div>
                    <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
                  </div>
                </th>

                {/* Competitor 1: MyFitnessPal */}
                <th className="py-5 px-6 bg-slate-100 text-slate-700 w-1/5">
                  <span className="text-sm font-bold block">MyFitnessPal</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Apps de conteo manual</span>
                </th>

                {/* Competitor 2: Yuka / Barcodes */}
                <th className="py-5 px-6 bg-slate-100 text-slate-700 w-1/5">
                  <span className="text-sm font-bold block">Yuka / Escáneres</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Solo código de barras</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredData.map((item, index) => {
                const isScanning = item.category === 'scanning';
                const isPersonalization = item.category === 'personalization';

                return (
                  <tr
                    key={item.id}
                    className={`transition-colors hover:bg-slate-50/60 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                    }`}
                  >
                    {/* Feature description column */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex items-start gap-2">
                        {isScanning && (
                          <span className="mt-0.5 p-1 rounded bg-emerald-100 text-emerald-700 shrink-0">
                            <Scan className="w-3.5 h-3.5" />
                          </span>
                        )}
                        {isPersonalization && (
                          <span className="mt-0.5 p-1 rounded bg-teal-100 text-teal-700 shrink-0">
                            <HeartPulse className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{item.feature}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </td>

                    {/* TuNutrilens Premier Data Column */}
                    <td className="py-5 px-6 align-top bg-emerald-50/60 border-x border-emerald-100/80">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <p className="font-bold text-emerald-950 text-sm">{item.tunutrilens.value}</p>
                          <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed font-medium">
                            {item.tunutrilens.detail}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* MyFitnessPal Data Column */}
                    <td className="py-5 px-6 align-top text-slate-600">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs sm:text-sm">{item.competitorTraditional.value}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.competitorTraditional.detail}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Yuka / Barcodes Data Column */}
                    <td className="py-5 px-6 align-top text-slate-600">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs sm:text-sm">{item.competitorBarcode.value}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.competitorBarcode.detail}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner Call to action */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <span>Resultado de la Comparativa</span>
            </div>
            <h3 className="text-2xl font-black font-display text-white">
              ¿Listo para dejar atrás los métodos obsoletos de nutrición?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Únete a miles de personas que ahorran horas cada semana y consiguen resultados medibles gracias a TuNutriLens.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Reservar Mi Acceso Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
