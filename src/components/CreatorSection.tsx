import React from 'react';
import { Award, GraduationCap, CheckCircle2, HeartPulse, Sparkles, Mail } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  return (
    <section id="creadora" className="py-20 sm:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Portrait Badge */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Background ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl -rotate-2 -z-10" />
              
              {/* Card Container */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                
                {/* Header with University of Navarra stamp */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-emerald-400">
                        Rigor Académico & Clínico
                      </p>
                      <p className="text-xs font-semibold text-slate-300">
                        Universidad de Navarra
                      </p>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-amber-400" />
                </div>

                {/* Profile Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white font-display tracking-tight">
                      Gala Rodríguez Echebarrieta
                    </h3>
                    <p className="text-sm font-semibold text-emerald-300 mt-1">
                      Diplomada en Nutrición Humana y Dietética
                    </p>
                    <p className="text-xs text-slate-400">
                      Universidad de Navarra • Creadora y Directora de TuNutriLens
                    </p>
                  </div>

                  {/* Bullet points of clinical philosophy */}
                  <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Especialista en nutrición personalizada, salud metabólica y digestiva.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Diseño de algoritmos nutricionales basados en evidencia clínica real, no en modas.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Enfoque anti-ansiedad: educación nutricional y libertad sin básculas obsesivas.</span>
                    </div>
                  </div>

                  {/* Contact pill */}
                  <div className="pt-4 mt-2">
                    <a
                      href="mailto:contacto@tunutrilens.es"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700/80"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span>contacto@tunutrilens.es</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story and Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
              <span>Por qué nació TuNutriLens</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display leading-tight">
              «Creé TuNutriLens porque la nutrición no va de contar números con culpa, sino de entender tu cuerpo.»
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Durante años en consulta clínica, vi a cientos de personas frustrarse con aplicaciones como MyFitnessPal. Pasar 15 minutos en cada comida buscando ingredientes en bases de datos caóticas, pesando alimentos en una báscula como una obligación y recibiendo números de calorías fijos que terminan ralentizando el metabolismo y provocando efecto rebote.
              </p>
              <p>
                La tecnología actual permite algo infinitamente mejor: <strong className="text-slate-900 font-semibold">hacer una foto a tu plato en un segundo</strong>, dejar que la visión computacional calcule los volúmenes reales (incluso los aceites de cocción) y recibir un <strong className="text-slate-900 font-semibold">plan adaptado a tu biología</strong> por profesionales de la nutrición.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Sin Básculas ni Estrés</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Estimación visual precisa desarrollada para que disfrutes de tu comida en casa o en restaurantes sin obsesiones.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>Criterio Clínico Colegiado</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Planes diseñados con la base académica de la Universidad de Navarra y continua supervisión dietética.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
