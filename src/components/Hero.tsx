import React from 'react';
import { Scan, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Smartphone, Award } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & App Download Invitation */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Trust badge with creator credential */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold shadow-2xs">
              <div className="w-5 h-5 rounded-md overflow-hidden shrink-0">
                <img src="/logo.svg" alt="TuNutriLens" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold">Creada por Gala Rodríguez Echebarrieta</span>
              <span className="text-emerald-300">•</span>
              <span className="text-slate-700 hidden sm:inline">Univ. de Navarra</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              La nutrición inteligente que{' '}
              <span className="text-emerald-600">ve tu comida</span> y entiende tu cuerpo.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Olvida contar calorías a mano y pesar platos en básculas. <strong className="text-slate-900 font-semibold">TuNutriLens</strong> analiza lo que comes con visión 3D en 1 segundo y diseña <strong className="text-slate-900 font-semibold">planes nutricionales 100% personalizados</strong> con rigor clínico, sin efecto rebote ni culpa.
            </p>

            {/* Download CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                <span>Descargar la App Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-comparison-cta"
                href="#comparativa"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-base font-bold border border-slate-300/80 shadow-xs hover:border-slate-400 transition-all duration-200"
              >
                <span>Ver Comparativa</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Descarga y prueba gratuita
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Supervisión por dietistas colegiados
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Disponible para iOS y Android
              </span>
            </div>

          </div>

          {/* Right Column: Sleek Phone Mockup showing Plate Scan */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Floating Pill: Creator Validation */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Univ. de Navarra</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">Aval Clínico Dietético</p>
                </div>
              </div>

              {/* Floating Pill: Scan Speed */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-slate-900 text-white px-3.5 py-2.5 rounded-2xl shadow-lg border border-slate-800 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Scan className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Escaneo en 1 seg</p>
                  <p className="text-[10px] text-slate-400">97.2% precisión 3D</p>
                </div>
              </div>

              {/* Phone Device Frame */}
              <div className="relative rounded-[40px] p-2.5 bg-slate-900 shadow-2xl ring-1 ring-slate-800">
                {/* Dynamic island notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20" />

                {/* Inner Screen */}
                <div className="relative rounded-[32px] overflow-hidden bg-slate-950 text-white aspect-[9/18.5] flex flex-col justify-between">
                  {/* Photo dish */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                      alt="Escaneo de comida real en TuNutriLens"
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  </div>

                  {/* App Header */}
                  <div className="relative z-10 p-4 pt-7 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <img src="/logo.svg" alt="TuNutriLens" className="w-4 h-4 rounded-sm object-cover" />
                      <span className="font-bold text-[11px] text-slate-200">TuNutriLens</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-md text-[10px] border border-emerald-500/30">
                      3D Auto-Scan
                    </span>
                  </div>

                  {/* AR Targets */}
                  <div className="relative z-10 px-4 space-y-2">
                    <div className="bg-black/75 backdrop-blur-md border border-emerald-400/80 rounded-xl px-2.5 py-1 text-[11px] w-fit">
                      <p className="font-bold text-white">Salmón Salvaje (145g)</p>
                      <p className="text-[10px] text-emerald-300">36g Proteína • 275 kcal</p>
                    </div>
                    <div className="bg-black/75 backdrop-blur-md border border-teal-400/80 rounded-xl px-2.5 py-1 text-[11px] w-fit ml-auto">
                      <p className="font-bold text-white">Aguacate Hass (65g)</p>
                      <p className="text-[10px] text-teal-300">Grasas saludables</p>
                    </div>
                  </div>

                  {/* Bottom Macro Card inside app */}
                  <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl border-t border-white/10 p-4 rounded-t-3xl space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-bold text-xs text-white">Poke Bowl Mediterráneo</h5>
                        <p className="text-[10px] text-slate-400">Calculado sin báscula</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-emerald-400 font-display">564</span>
                        <span className="text-[10px] text-slate-400 ml-1">kcal</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                      <div className="bg-white/5 p-1.5 rounded-lg">
                        <p className="text-slate-400">Proteínas</p>
                        <p className="font-bold text-orange-400">36g</p>
                      </div>
                      <div className="bg-white/5 p-1.5 rounded-lg">
                        <p className="text-slate-400">Carbos</p>
                        <p className="font-bold text-amber-400">48g</p>
                      </div>
                      <div className="bg-white/5 p-1.5 rounded-lg">
                        <p className="text-slate-400">Grasas</p>
                        <p className="font-bold text-emerald-400">24g</p>
                      </div>
                    </div>

                    <div className="text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-lg font-medium text-center">
                      ✓ Plan adaptativo: Encaja en tu objetivo diario
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Clean 3-Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/70">
            <p className="text-3xl font-black text-emerald-600 font-display">1 Segundo</p>
            <p className="text-xs font-bold text-slate-800 mt-0.5">Tiempo de registro por comida</p>
            <p className="text-[11px] text-slate-500">Frente a 10 min buscando en buscadores</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200/70">
            <p className="text-3xl font-black text-emerald-600 font-display">97.2%</p>
            <p className="text-xs font-bold text-slate-800 mt-0.5">Precisión de volumen y macros</p>
            <p className="text-[11px] text-slate-500">Detección de ingredientes y aceites ocultos</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200/70">
            <p className="text-3xl font-black text-emerald-600 font-display">Univ. de Navarra</p>
            <p className="text-xs font-bold text-slate-800 mt-0.5">Dirección Científica y Clínica</p>
            <p className="text-[11px] text-slate-500">Por Gala Rodríguez Echebarrieta</p>
          </div>
        </div>

      </div>
    </section>
  );
};
