import React from 'react';
import { Scan, Eye, Zap, RefreshCw, HeartPulse, ShieldCheck, Sparkles, UtensilsCrossed, Clock, CheckCircle2 } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Scan,
      title: 'Escaneo 3D Nutrilens Vision™',
      subtitle: 'Visión artificial multimodal',
      description: 'Reconoce instantáneamente comidas caseras, guisos complejos y platos de restaurantes sin necesidad de códigos de barras.',
      badge: 'Precisión < 3.2% error',
      accent: 'emerald',
    },
    {
      icon: UtensilsCrossed,
      title: 'Mapeo Volumétrico sin Báscula',
      subtitle: 'Cálculo de gramos real',
      description: 'La tecnología óptica estima la densidad y el volumen tridimensional de cada ingrediente, calculando los gramos con exactitud clínica.',
      badge: 'Cero básculas de cocina',
      accent: 'teal',
    },
    {
      icon: Eye,
      title: 'Detección de Grasas Ocultas',
      subtitle: 'El gran talón de Aquiles de otras apps',
      description: 'Identifica trazas de aceite de oliva, salsas emulsionadas y métodos de preparación mediante brillo espectral.',
      badge: 'Evita +400 kcal sorpresa',
      accent: 'amber',
    },
    {
      icon: RefreshCw,
      title: 'Reajuste Metabólico Semanal',
      subtitle: 'Planes que evolucionan contigo',
      description: 'Si tu peso o nivel de estrés cambia, el algoritmo recalibra calorías y micronutrientes sin obligarte a pasar hambre.',
      badge: 'Anti-Efecto Rebote',
      accent: 'teal',
    },
    {
      icon: Sparkles,
      title: 'Modo "Cena Fuera" sin Ansiedad',
      subtitle: 'Vida social 100% compatible',
      description: 'Disfruta de reuniones y restaurantes. Escaneas el plato y TuNutriLens compensa armónicamente los días posteriores sin culpas.',
      badge: 'Cero números en rojo',
      accent: 'emerald',
    },
    {
      icon: ShieldCheck,
      title: 'Base de Datos 100% Verificada',
      subtitle: 'Respaldada por nutricionistas',
      description: 'Olvídate de las bases de datos comunitarias llenas de alimentos con valores falsos o duplicados. Cada dato está certificado.',
      badge: 'Validación científica',
      accent: 'slate',
    },
  ];

  return (
    <section id="funciones" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Funcionalidades Revolucionarias</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            Todo lo que una app de nutrición <span className="text-emerald-600">siempre debió ser</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Diseñada desde cero para eliminar la fricción del registro diario y ofrecerte respuestas biológicas precisas, no estimaciones a ojo.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {feature.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-slate-900 font-display group-hover:text-emerald-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Exclusivo de TuNutriLens</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
