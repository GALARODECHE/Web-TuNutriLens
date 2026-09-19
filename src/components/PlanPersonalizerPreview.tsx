import React, { useState } from 'react';
import { NUTRITION_PLAN_PROFILES } from '../data/contentData';
import { NutritionPlanProfile } from '../types';
import { HeartPulse, Flame, Dumbbell, Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

interface PlanPersonalizerProps {
  onOpenWaitlist: () => void;
}

export const PlanPersonalizerPreview: React.FC<PlanPersonalizerProps> = ({ onOpenWaitlist }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(NUTRITION_PLAN_PROFILES[0].id);

  const currentProfile = NUTRITION_PLAN_PROFILES.find((p) => p.id === selectedProfileId) || NUTRITION_PLAN_PROFILES[0];

  return (
    <section id="planes" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4 text-teal-600" />
            <span>Personalización Biológica Real</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            Planes nutricionales que se <span className="text-teal-600">adaptan a ti</span>, no al revés
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Las apps de la competencia te encasillan en un número calórico estático sin importar si duermes mal, si sales a cenar con amigos o si padeces intolerancias digestivas. 
            Comprueba cómo TuNutriLens formula una estrategia individualizada para cada caso.
          </p>
        </div>

        {/* Profile Switcher Tabs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {NUTRITION_PLAN_PROFILES.map((profile) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-teal-500 shadow-md shadow-teal-500/10 ring-2 ring-teal-500/20'
                    : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-teal-100 text-teal-700 font-bold' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {profile.id === 'fat-loss' && <Flame className="w-4 h-4" />}
                    {profile.id === 'hypertrophy' && <Dumbbell className="w-4 h-4" />}
                    {profile.id === 'digestive-health' && <Sparkles className="w-4 h-4" />}
                    {profile.id === 'glucose-longevity' && <HeartPulse className="w-4 h-4" />}
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-teal-600 uppercase bg-teal-50 px-2 py-0.5 rounded-full">
                      Seleccionado
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{profile.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-snug">{profile.targetUser}</p>
              </button>
            );
          })}
        </div>

        {/* Active Profile Comparison Showcase */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* TuNutrilens Solution (Emerald / Teal Card) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-500 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase">
                    <img src="/logo.svg" alt="TuNutriLens" className="w-3.5 h-3.5 rounded-xs object-cover" />
                    Enfoque TuNutriLens
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-display">
                    {currentProfile.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 block">Objetivo Metabólico:</span>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg inline-block mt-0.5">
                    {currentProfile.goal}
                  </span>
                </div>
              </div>

              {/* Strategy Details */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Estrategia Científica y Hormonal
                  </h5>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {currentProfile.tuNutrilensApproach.strategy}
                  </p>
                </div>

                {/* Micronutrients focus pills */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Micronutrientes Críticos Monitorizados
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.tuNutrilensApproach.micronutrientFocus.map((micro, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {micro}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metabolic Adjustment */}
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-1">
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-xs">
                    <RefreshCw className="w-4 h-4 text-teal-600" />
                    <span>Recalibración Metabólica Dinámica (Anti-Estancamiento)</span>
                  </div>
                  <p className="text-xs text-teal-950/80 leading-relaxed">
                    {currentProfile.tuNutrilensApproach.metabolicAdjustment}
                  </p>
                </div>

                {/* Social Life Flexibility */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-1">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Flexibilidad de Vida Social (Sin Culpa ni Ansiedad)</span>
                  </div>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    {currentProfile.tuNutrilensApproach.dailyFlexibility}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">100% ajustado con inteligencia artificial y biomarcadores</span>
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer"
              >
                <span>Activar este plan en TuNutriLens</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Competitor Traditional Approach (Rose / Gray Card) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full uppercase">
                  <XCircle className="w-3.5 h-3.5" />
                  Apps Tradicionales (MyFitnessPal / Típico)
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">
                  El enfoque rígido y obsoleto
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h6 className="font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Método de Cálculo
                  </h6>
                  <p className="p-3 bg-slate-50 rounded-xl text-slate-700 border border-slate-200 leading-relaxed">
                    {currentProfile.competitorApproach.strategy}
                  </p>
                </div>

                <div>
                  <h6 className="font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Fallo Principal y Peligro Fisiológico
                  </h6>
                  <p className="p-3 bg-rose-50/70 rounded-xl text-rose-900 border border-rose-200 leading-relaxed font-medium">
                    {currentProfile.competitorApproach.flaw}
                  </p>
                </div>

                <div>
                  <h6 className="font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Restricción Calórica
                  </h6>
                  <p className="p-3 bg-slate-50 rounded-xl text-slate-700 border border-slate-200 leading-relaxed">
                    {currentProfile.competitorApproach.calorieRestriction}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900 leading-relaxed font-medium">
              ⚠️ Las restricciones calóricas lineales provocan que el 94% de las dietas fracasen antes de los 6 meses. TuNutriLens rompe este ciclo con reajustes semanales.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
