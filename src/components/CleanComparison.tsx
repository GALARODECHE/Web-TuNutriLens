import React from 'react';
import { Check, X, Sparkles, Scan, Compass, ShieldCheck } from 'lucide-react';

interface CleanComparisonProps {
  onOpenWaitlist: () => void;
}

export const CleanComparison: React.FC<CleanComparisonProps> = ({ onOpenWaitlist }) => {
  const comparisonItems = [
    {
      feature: 'Método de Registro de Comidas',
      tunutrilens: 'Foto en 1 segundo: IA Visión 3D reconoce ingredientes, salsas y gramos automáticamente',
      competitors: '10-15 minutos tecleando a mano en buscadores con 80 nombres falsos o contradictorios',
      highlight: 'scanner',
    },
    {
      feature: 'Precisión con Comida Casera y Restaurantes',
      tunutrilens: '97.2% de precisión: Estima volumen 3D y detecta aceites invisibles de cocinado',
      competitors: 'Error habitual de +35% al desconocer cómo se cocinó el plato o usar cálculos a ciegas',
      highlight: 'scanner',
    },
    {
      feature: 'Planes Nutricionales',
      tunutrilens: '100% personalizados y dinámicos creados por Gala Rodríguez (Univ. de Navarra)',
      competitors: 'Plantillas genéricas basadas en fórmulas estáticas de hace 40 años sin personalización',
      highlight: 'plans',
    },
    {
      feature: 'Adaptación ante Imprevistos (Cenas fuera)',
      tunutrilens: 'Reajuste armónico sin culpa: la app recalibra los días siguientes para mantener tu salud',
      competitors: 'Números en rojo, sensación de fracaso y penalizaciones calóricas que dañan el metabolismo',
      highlight: 'plans',
    },
    {
      feature: 'Salud Digestiva y Hormonal',
      tunutrilens: 'Considera SIBO, FODMAPs, intolerancias, ciclo hormonal y microbiota intestinal',
      competitors: 'Solo cuentan calorías brutas vacías («si cabe en tus macros, cómelo»)',
      highlight: 'plans',
    },
  ];

  return (
    <section id="comparativa" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comparativa Directa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            ¿Por qué <span className="text-emerald-600">TuNutriLens</span> deja obsoletas a las demás apps?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            La diferencia entre un contador de calorías que genera ansiedad y un nutricionista inteligente en tu bolsillo.
          </p>
        </div>

        {/* Comparison Cards / Clean Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-5 sm:p-6 items-center">
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Aspecto Clave
            </div>
            <div className="md:col-span-4 flex items-center gap-2.5 mt-2 md:mt-0">
              <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-emerald-400">
                <img src="/logo.svg" alt="TuNutriLens" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white">TuNutriLens</span>
                <span className="ml-2 text-[10px] font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                  Superior
                </span>
              </div>
            </div>
            <div className="md:col-span-4 text-slate-400 font-semibold text-xs sm:text-sm mt-1 md:mt-0">
              Apps Tradicionales (MyFitnessPal, Yuka...)
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-slate-50/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2">
                    {item.highlight === 'scanner' ? (
                      <Scan className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Compass className="w-4 h-4 text-teal-600 shrink-0" />
                    )}
                    <span className="font-bold text-slate-900 text-sm">{item.feature}</span>
                  </div>
                </div>

                {/* TuNutriLens */}
                <div className="md:col-span-4 bg-emerald-50/50 md:bg-transparent -mx-3 md:mx-0 p-3 md:p-0 rounded-xl">
                  <div className="flex items-start gap-2 text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item.tunutrilens}</span>
                  </div>
                </div>

                {/* Competitors */}
                <div className="md:col-span-4">
                  <div className="flex items-start gap-2 text-slate-500 text-xs sm:text-sm leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{item.competitors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout inside comparison */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Planes avalados por Gala Rodríguez Echebarrieta (Dietista-Nutricionista, Univ. de Navarra).</span>
            </div>
            <button
              onClick={onOpenWaitlist}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Descargar App Gratis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
