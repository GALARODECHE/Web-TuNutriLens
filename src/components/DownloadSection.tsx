import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Gift, Mail, Star, Smartphone } from 'lucide-react';

interface DownloadSectionProps {
  onOpenWaitlist: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="descargar" className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* App Icon Centered */}
        <div className="w-20 h-20 rounded-3xl overflow-hidden mx-auto mb-6 shadow-2xl shadow-emerald-500/20 border-2 border-emerald-400/40">
          <img src="/logo.svg" alt="TuNutriLens App" className="w-full h-full object-cover" />
        </div>

        {/* Promo Gift Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
          <Smartphone className="w-4 h-4 text-emerald-400" />
          <span>Disponible para iOS y Android</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display max-w-3xl mx-auto leading-tight mb-6">
          Descarga <span className="text-emerald-400">TuNutriLens</span> y transforma tu relación con la comida hoy mismo
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Olvídate de las básculas y de teclear gramos a mano. Empieza a registrar tus platos en un segundo con visión de ultraprecisión y planes respaldados por <strong className="text-white">Gala Rodríguez Echebarrieta (Univ. de Navarra)</strong>.
        </p>

        {/* Action Buttons: Store Badges & Direct Modal CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Smartphone className="w-5 h-5" />
            <span>Descargar TuNutriLens</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Available for platforms */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Disponible para iOS (iPhone) y Android</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="text-slate-200 ml-1">4.9 / 5</span>
          </div>
        </div>

        {/* Contact info pill */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sin permanencias ni letra pequeña</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contacto directo: <a href="mailto:contacto@tunutrilens.es" className="text-emerald-300 hover:underline font-semibold">contacto@tunutrilens.es</a></span>
          </div>
        </div>

      </div>
    </section>
  );
};
