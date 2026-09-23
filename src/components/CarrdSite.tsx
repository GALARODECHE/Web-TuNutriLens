import React, { useState } from 'react';
import { 
  Camera, 
  Search, 
  Refrigerator, 
  BarChart3, 
  Wheat, 
  Sparkles, 
  Check, 
  X, 
  Smartphone, 
  Mail, 
  Award, 
  Download, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Apple,
  BookOpen
} from 'lucide-react';
import { MarketAuditSection } from './MarketAuditSection';
import { AppScreensShowcase } from './AppScreensShowcase';
import { ScientificReferencesSection } from './ScientificReferencesSection';

interface CarrdSiteProps {
  onOpenDownload?: () => void;
}

export const CarrdSite: React.FC<CarrdSiteProps> = ({ onOpenDownload }) => {
  const [showComparison, setShowComparison] = useState(true);
  const [showReferences, setShowReferences] = useState(true);
  const [activeNotice, setActiveNotice] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleShowSoon = (sourceKey?: string) => {
    if (sourceKey) {
      setActiveNotice(sourceKey);
      setTimeout(() => setActiveNotice(null), 2500);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
    if (onOpenDownload) {
      onOpenDownload();
    }
  };

  const scrollToReferences = () => {
    setShowReferences(true);
    const element = document.getElementById('fuentes-cientificas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-center font-mono-carrd text-[#2B2A23] relative">
      
      {/* Background SVG Grid/Cross Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20width%3D%221024%22%20height%3D%221024%22%20preserveAspectRatio%3D%22none%22%3E%20%3Cstyle%3E%20path%20%7B%20stroke-linecap%3A%20square%3B%20stroke-width%3A%209.01px%3B%20stroke%3A%20rgba(27,26,22,0.129)%3B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%20%3C%2Fstyle%3E%20%3Cpath%20d%3D%22M%20256%20192%20L%20256%20320%20M%20192%20256%20L%20320%20256%22%20%2F%3E%20%3Cpath%20d%3D%22M%20768%20704%20L%20768%20832%20M%20704%20768%20L%20832%20768%22%20%2F%3E%3C%2Fsvg%3E")`,
          backgroundSize: '11px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Main Container Card: Exact Carrd geometry, colors, shadow & border */}
      <div 
        className="relative z-10 w-full max-w-[43rem] rounded-[1.75rem] border-[3px] border-[#2B2A23] shadow-[11px_11px_0px_#2B2A23] overflow-hidden text-center transition-all duration-300"
        style={{
          backgroundImage: 'linear-gradient(121deg, #096121 0%, #D8F0E7 30%, #BAE3D8 100%)'
        }}
      >
        
        {/* Top Header Bar */}
        <div className="bg-[#2B2A23] text-white px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-[#2B2A23]">
          <div className="flex items-center gap-3 text-left">
            <img 
              src="/logo.svg?v=5" 
              alt="TuNutriLens Icon" 
              className="w-8 h-8 rounded-xl object-contain shadow-xs border border-white/20" 
            />
            <span className="text-xl sm:text-2xl font-normal tracking-[-0.05rem] text-white font-bricolage">
              TuNutriLens
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="mailto:contacto@tunutrilens.es"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-[1.125rem] bg-[#EF9AA0] text-[#66363A] hover:bg-[#EEE5D9] transition-colors text-sm font-normal tracking-[-0.05rem]"
            >
              Contacto
            </a>
            <button
              type="button"
              onClick={() => handleShowSoon('header')}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-[1.125rem] bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white transition-all text-sm font-bold tracking-[-0.05rem] cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>{activeNotice === 'header' ? '¡Próximamente!' : 'Próximamente'}</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="px-5 sm:px-12 py-8 sm:py-12 space-y-7 text-left sm:text-center">

          {/* Official App Logo Icon */}
          <div className="flex flex-col items-center">
            <div className="w-[8.5rem] h-[8.5rem] rounded-[2.2rem] border-2 border-[#2B2A23] p-1.5 bg-white/50 shadow-[4px_4px_0px_#2B2A23] overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="/logo.svg"
                alt="TuNutriLens Logo Oficial"
                className="w-full h-full object-cover rounded-[1.8rem]"
              />
            </div>
          </div>

          {/* Main Title (Bricolage Grotesque) */}
          <h1 className="font-bricolage text-4xl sm:text-[3.35rem] font-bold text-[#2B2A23] leading-[1.08] tracking-[-0.15rem] text-center">
            Tu Nutricionista de bolsillo
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-[#2B2A23] text-[0.95rem] sm:text-[1.05rem] leading-[1.7] tracking-[-0.04rem] max-w-xl mx-auto text-center">
            TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
          </p>

          {/* Creator Badge: Gala Rodríguez Echebarrieta */}
          <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-white/60 border-2 border-[#2B2A23]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 border border-[#2B2A23]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2B2A23] leading-tight">
                  Creada por Gala Rodríguez Echebarrieta
                </p>
                <p className="text-[11px] text-[#2B2A23]/80 leading-tight">
                  Diplomada en Nutrición Humana y Dietética • Universidad de Navarra
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={scrollToReferences}
              className="text-[11px] font-bold text-[#096121] hover:underline bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-300 flex items-center gap-1 cursor-pointer shrink-0"
            >
              <BookOpen className="w-3 h-3" />
              <span>Bases Científicas</span>
            </button>
          </div>

          {/* High-Conversion Download Call-to-Action */}
          <div className="pt-1 pb-3 text-center">
            <div className="inline-block w-full max-w-md p-5 rounded-2xl bg-[#2B2A23] text-white shadow-md border-2 border-[#2B2A23]">
              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-bold mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Disponible Próximamente</span>
              </div>
              <p className="text-sm font-normal text-slate-200 mb-4 leading-snug">
                TuNutriLens estará disponible próximamente en las tiendas oficiales.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleShowSoon('ios')}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <Apple className="w-4 h-4 shrink-0" />
                  <span>{activeNotice === 'ios' ? '¡Próximamente!' : 'App Store • Próximamente'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleShowSoon('android')}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/20 hover:bg-white/30 active:scale-95 text-white font-bold text-sm transition-all hover:scale-[1.02] border border-white/30 cursor-pointer shadow-xs"
                >
                  <Smartphone className="w-4 h-4 shrink-0" />
                  <span>{activeNotice === 'android' ? '¡Próximamente!' : 'Google Play • Próximamente'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Feature List (Exact text from carrd) */}
          <div className="bg-white/70 backdrop-blur-xs p-6 sm:p-8 rounded-2xl border-2 border-[#2B2A23] text-left space-y-5 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-[#2B2A23] tracking-[-0.04rem] border-b border-[#2B2A23]/20 pb-3 flex items-center gap-2">
              <span>✨ LO QUE PUEDES HACER CON TUNUTRILENS:</span>
            </h2>

            {/* 1. Lente Plato */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#096121]">
                <Camera className="w-4 h-4 shrink-0 text-[#2B2A23]" />
                <span>📸 1. Escáner Inteligente de Platos (Lente Plato):</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2A23] pl-6 leading-relaxed">
                Apunta tu cámara a tu comida casera o de restaurante. La IA desglosa al instante ingredientes, calorías reales y equilibrio de macronutrientes.
              </p>
            </div>

            {/* 2. Lente Súper */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#096121]">
                <Search className="w-4 h-4 shrink-0 text-[#2B2A23]" />
                <span>🔍 2. Detector de Trampas en el Supermercado (Lente Súper):</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2A23] pl-6 leading-relaxed">
                Escanea envases y tablas nutricionales. Descubre qué estás comprando de verdad, desmitificando reclamos engañosos como "0% azúcares" o "rico en fibra".
              </p>
            </div>

            {/* 3. Lente Nevera */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#096121]">
                <Refrigerator className="w-4 h-4 shrink-0 text-[#2B2A23]" />
                <span>🧊 3. Aprovecha tu Nevera (Lente Nevera):</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2A23] pl-6 leading-relaxed">
                ¿No sabes qué cocinar? Fotografía tus ingredientes sueltos y recibe sugerencias de recetas saludables en segundos, reduciendo el desperdicio.
              </p>
            </div>

            {/* 4. Diario y Semáforo */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#096121]">
                <BarChart3 className="w-4 h-4 shrink-0 text-[#2B2A23]" />
                <span>📊 4. Diario y Semáforo Nutricional Diario:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2A23] pl-6 leading-relaxed">
                Registra tus comidas con un clic y visualiza tu equilibrio semanal (proteínas, grasas saludables, fibra) sin obsesionarte con números rígidos.
              </p>
            </div>

            {/* 5. Filtros Clínicos */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#096121]">
                <Wheat className="w-4 h-4 shrink-0 text-[#2B2A23]" />
                <span>🌾 5. Filtros Clínicos Personalizados:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2A23] pl-6 leading-relaxed">
                Adapta todas las recomendaciones a tu estilo de vida: sin gluten (celiaquía), sin lactosa, opciones vegetarianas o control glucémico.
              </p>
            </div>
          </div>

          {/* New Section: Capturas Reales de la Interfaz de la App */}
          <AppScreensShowcase onOpenDownload={() => handleShowSoon('screen-demo')} />

          {/* Wavy Divider (Exact Carrd Asset) */}
          <div className="py-2 flex justify-center">
            <div 
              className="w-48 h-6 opacity-80"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%3Cstyle%3Epath%20%7Bfill%3A%20none%3Bstroke-width%3A%202px%3Bstroke%3A%20%232B2A23%3Bvector-effect%3A%20non-scaling-stroke%3B%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M0%2C320c128%2C0%2C128-128%2C256-128s128%2C128%2C256%2C128%22%20%2F%3E%3C%2Fsvg%3E")`,
                backgroundSize: 'auto 125%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat-x'
              }}
            />
          </div>

          {/* Toggleable Comparison Section: Comparativa de Funcionalidades 2026 */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className="w-full py-3.5 px-4 rounded-xl bg-white/90 hover:bg-white border-2 border-[#2B2A23] text-xs sm:text-sm font-bold text-[#2B2A23] flex items-center justify-between transition-all shadow-[2px_2px_0px_#2B2A23] cursor-pointer hover:shadow-[3px_3px_0px_#2B2A23]"
            >
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#096121]">
                  {showComparison ? '▼' : '▶'}
                </span>
                <span>
                  {showComparison 
                    ? 'Ocultar comparativa con soluciones del mercado' 
                    : 'Ver comparativa: TuNutriLens™ frente a MyFitnessPal, Yuka, Cal AI y MyRealFood'}
                </span>
              </div>
              <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black">
                Comparativa
              </span>
            </button>

            {showComparison && (
              <div className="animate-in fade-in duration-200">
                <MarketAuditSection onOpenDownload={() => handleShowSoon('market-audit')} />
              </div>
            )}
          </div>

          {/* Scientific Sources & Clinical Guidelines Section (100% Auditado) */}
          <div id="fuentes-cientificas" className="space-y-4 scroll-mt-6">
            <button
              type="button"
              onClick={() => setShowReferences(!showReferences)}
              className="w-full py-3.5 px-4 rounded-xl bg-white/90 hover:bg-white border-2 border-[#2B2A23] text-xs sm:text-sm font-bold text-[#2B2A23] flex items-center justify-between transition-all shadow-[2px_2px_0px_#2B2A23] cursor-pointer hover:shadow-[3px_3px_0px_#2B2A23]"
            >
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#096121]">
                  {showReferences ? '▼' : '▶'}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#096121]" />
                  <span>
                    {showReferences 
                      ? 'Ocultar Fuentes Científicas y Referencias Oficiales' 
                      : 'Ver Fuentes Científicas y Referencias Oficiales (100% Auditado)'}
                  </span>
                </span>
              </div>
              <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold">
                100% Dominio Público
              </span>
            </button>

            {showReferences && (
              <div className="animate-in fade-in duration-200">
                <ScientificReferencesSection />
              </div>
            )}
          </div>

          {/* Bottom Download and Contact Callout */}
          <div className="pt-2 pb-2 text-center space-y-3.5">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => handleShowSoon('bottom-badge')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-bold hover:bg-emerald-200 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#096121]" />
                <span>{activeNotice === 'bottom-badge' ? '¡Próximamente!' : 'Disponible Próximamente en App Store y Google Play'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleShowSoon('bottom-main')}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-2xl bg-[#EF9AA0] hover:bg-[#eb888f] active:scale-95 text-[#66363A] font-bold text-base border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] transition-all hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                <span>{activeNotice === 'bottom-main' ? '¡Próximamente!' : 'Descargar TuNutriLens'}</span>
                <span className="text-[11px] uppercase bg-[#2B2A23] text-white px-2 py-0.5 rounded-md font-bold tracking-wide">
                  Próximamente
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#2B2A23]/80 font-mono-carrd">
              🚀 TuNutriLens estará disponible próximamente en las tiendas oficiales de aplicaciones.
            </p>

            <div className="pt-2 text-xs text-[#2B2A23]">
              <span>¿Tienes preguntas? Escríbenos directamente a: </span>
              <a 
                href="mailto:contacto@tunutrilens.es" 
                className="font-bold underline hover:text-[#096121] transition-colors"
              >
                contacto@tunutrilens.es
              </a>
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="bg-[#2B2A23] text-white/70 px-6 py-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 border-t-[3px] border-[#2B2A23]">
          <span>© {new Date().getFullYear()} TuNutriLens • Creada por Gala Rodríguez Echebarrieta</span>
          <a href="mailto:contacto@tunutrilens.es" className="text-emerald-400 hover:underline">
            contacto@tunutrilens.es
          </a>
        </div>

      </div>

      {/* Floating Feedback Toast for "Próximamente" */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-[#2B2A23] text-white border-2 border-emerald-400 shadow-2xl flex items-center gap-3 text-sm font-bold tracking-tight animate-bounce">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>¡Próximamente disponible en App Store y Google Play!</span>
        </div>
      )}

      {/* Subtle bottom note */}
      <div className="relative z-10 mt-6 text-center text-xs text-[#2B2A23]/60 font-sans">
        <span>Tu lente inteligente para comer con salud • Dominio oficial tunutrilens.es</span>
      </div>

    </div>
  );
};
