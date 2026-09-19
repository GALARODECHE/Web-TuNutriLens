import React from 'react';
import { Camera, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

export const HowItWorksClean: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Haz una foto a tu plato',
      subtitle: 'En 1 segundo, sin báscula',
      description:
        'La visión 3D de TuNutriLens reconoce cada ingrediente, calcula las porciones exactas y detecta aceites de cocinado que otras apps ignoran.',
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Tu plan se adapta a ti',
      subtitle: 'Nutrición clínica real',
      description:
        'Diseñado bajo la supervisión de Gala Rodríguez (Univ. de Navarra). Tu plan responde a tu metabolismo, digestión y estilo de vida, no a modas.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Vive y come sin culpa',
      subtitle: 'Cero ansiedad por números',
      description:
        '¿Tienes cena con amigos el fin de semana? TuNutriLens reequilibra armónicamente tus siguientes comidas para que disfrutes de tu vida social.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simplicidad Absoluta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Nutrición de alta precisión en <span className="text-emerald-600">3 pasos simples</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Eliminamos todo el sufrimiento del conteo manual de calorías para que te enfoques en disfrutar de tu comida y tu salud.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 hover:bg-emerald-50/40 rounded-3xl p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-2xl font-black font-display text-slate-300 group-hover:text-emerald-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
