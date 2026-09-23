import React, { useState } from 'react';
import { 
  Camera, 
  Refrigerator, 
  Barcode, 
  CalendarDays, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  Layers, 
  ChevronRight, 
  HeartPulse, 
  Clock, 
  Check, 
  Smartphone,
  TrendingDown,
  UserCheck,
  Award,
  Maximize2,
  Minimize2,
  Info
} from 'lucide-react';

interface AppScreensShowcaseProps {
  onOpenDownload?: () => void;
}

type ScreenId = 
  | 'escaner-comida'
  | 'supermercado'
  | 'diario'
  | 'plan-semanal'
  | 'etapas-vida'
  | 'nevera'
  | 'progreso-peso'
  | 'nutricoach';

interface ScreenMeta {
  id: ScreenId;
  tabLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  activeNavTab: 'escaner' | 'nutricion' | 'descubrir' | 'perfil';
  keyHighlights: string[];
}

export const AppScreensShowcase: React.FC<AppScreensShowcaseProps> = ({ onOpenDownload }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('escaner-comida');
  const [isZoomed, setIsZoomed] = useState(false);

  const screens: ScreenMeta[] = [
    {
      id: 'escaner-comida',
      tabLabel: '1. Escáner Plato',
      badge: 'Visor IA • Detección 2s',
      title: 'Escáner de Plato en Vivo',
      subtitle: 'Bowl Mediterráneo de Salmón (524 kcal • 38g Proteína)',
      description: 'Reconoce comida real y platos caseros con 1 foto. Calcula volumen tridimensional, gramos exactos (340g), Calidad Nutricional A, NOVA 1 y ofrece consejos nutricionales en 2 segundos.',
      activeNavTab: 'escaner',
      keyHighlights: [
        'Detección instantánea: Salmón noruego, quinoa real, aguacate hass y semillas',
        'Pesaje óptico estimado en 340 gramos sin necesidad de báscula',
        'Desglose macro: 38g proteína, 45g hidratos, 19g grasas saludables, 8.4g fibra',
        'Consejo de microbiota y densidad de nutrientes esenciales'
      ]
    },
    {
      id: 'supermercado',
      tabLabel: '2. Supermercado',
      badge: 'Código de Barras & Etiquetas',
      title: 'Análisis de Supermercado & Semáforo',
      subtitle: 'Yogur Griego 0% Natural (Hacendado • Nova 1 • 59 kcal)',
      description: 'Escanea el código de barras o lista de ingredientes de cualquier producto. Evalúa aditivos sospechosos según la EFSA/AESAN y clasifica el grado de ultraprocesamiento NOVA.',
      activeNavTab: 'escaner',
      keyHighlights: [
        'Semáforo nutricional OMS/AESAN (azúcares 3.2g, grasas sat 0.1g, proteína 10.3g)',
        'Verificación de 0 aditivos sospechosos ni edulcorantes artificiales',
        'Índice de Calidad Nutricional A y Grupo NOVA 1 (Alimento Real)',
        'Botón directo para añadir a tu lista de la compra saludable'
      ]
    },
    {
      id: 'diario',
      tabLabel: '3. Diario Nutricional',
      badge: 'Resumen Diario & Macros',
      title: 'Diario Nutricional y Racha Saludable',
      subtitle: '1.460 de 2.100 kcal consumidas • 84% de hidratación',
      description: 'Visualiza tu progreso del día con un anillo calórico de alta legibilidad, seguimiento de agua (1.85 L) y registro fotográfico automático de desayuno, comida y merienda.',
      activeNavTab: 'nutricion',
      keyHighlights: [
        'Gráfico circular con 640 kcal restantes para el objetivo',
        'Barras de macros: Proteína (86%), Carbohidratos (76%), Grasas buenas (80%)',
        'Historial de comidas con calificación de calidad nutricional y calorías',
        'Contador de racha de compromiso para consolidar el hábito en 14 días'
      ]
    },
    {
      id: 'plan-semanal',
      tabLabel: '4. Plan Semanal',
      badge: '100% Personalizable con IA',
      title: 'Plan Nutricional Semanal',
      subtitle: 'Menú del Lunes 100% Comida Real Mediterránea (2.050 kcal)',
      description: 'Metas nutricionales calibradas a tu perfil biofísico. Planifica tus 7 días con recetas de comida real (porridge, lentejas estofadas, merluza) o autogenéralo con IA en 1 clic.',
      activeNavTab: 'nutricion',
      keyHighlights: [
        'Metas activas: 1.196 / 1.800 kcal, 92g proteína, 93g carbos, 48g grasas',
        'Selector interactivo de lunes a domingo con menús desglosados',
        'Recetas completas de desayuno, almuerzo, merienda y cena',
        'Botón de autogeneración inteligente con algoritmos clínicos'
      ]
    },
    {
      id: 'etapas-vida',
      tabLabel: '5. Etapas de la Vida',
      badge: 'Requerimientos Vitales Oficiales',
      title: 'Nutrición por Etapas Biológicas',
      subtitle: 'Ajuste clínico para embarazo, menopausia, deporte o seniors',
      description: 'Adaptación de requerimientos de micro y macronutrientes avalada por organismos públicos oficiales (EFSA, OMS, FAO) según tu etapa vital biológica.',
      activeNavTab: 'descubrir',
      keyHighlights: [
        'Embarazo y Lactancia: Ácido fólico (600µg), hierro hemo (27mg) y omega-3 DHA',
        'Perimenopausia y Menopausia: Calcio (1.200mg), D3 y fitoestrógenos',
        'Deportistas y Rendimiento Físico: 1.6 - 2.2 g/kg y balance de hidratación',
        'Adultos Mayores e Infancia: Prevención de sarcopenia y requerimientos esenciales'
      ]
    },
    {
      id: 'nevera',
      tabLabel: '6. Nevera- Residuo 0',
      badge: 'Ahorra hasta 80 €/mes',
      title: 'Nevera Residuo Cero con Visión IA',
      subtitle: 'Shakshuka de Calabacín y Huevo (385 kcal • 24g Proteína)',
      description: 'Haz una foto a tus ingredientes sueltos en el frigorífico. La IA detecta 5 ingredientes y crea una receta mediterránea de aprovechamiento con modo manos libres para cocinar.',
      activeNavTab: 'escaner',
      keyHighlights: [
        'Detección visual: 3 huevos camperos, 2 calabacines, tomates, cebolla y AOVE',
        'Ahorro directo: Evita tirar 450g de alimentos frescos a la basura hoy',
        'Ficha completa de receta con pasos de cocina en 15 minutos',
        'Modo Manos Libres para seguir la receta sin manchar la pantalla'
      ]
    },
    {
      id: 'progreso-peso',
      tabLabel: '7. Progreso Peso',
      badge: 'Evolución Corporal Saludable',
      title: 'Curva de Pérdida de Grasa Sostenible',
      subtitle: '75.0 kg actuales • -4.2 kg perdidos • Meta 68.0 kg',
      description: 'Seguimiento de peso sin obsesiones ni efecto rebote. Gráfica de evolución semanal que prioriza preservar el 100% de tu masa muscular mediante ingesta proteica calculada.',
      activeNavTab: 'nutricion',
      keyHighlights: [
        'Tarjetas de estado: Peso actual (75 kg), meta (68 kg) y faltante a ritmo de 0.5 kg/sem',
        'Curva continua desde 79.2 kg hasta 75.0 kg en 8 semanas',
        'Garantía de protección muscular mediante control de densidad proteica',
        'Botón de registro ágil de nuevas mediciones biométricas'
      ]
    },
    {
      id: 'nutricoach',
      tabLabel: '8. Perfil y Metabolismo',
      badge: 'Perfil Nutricional',
      title: 'Perfil Metabólico & Objetivos',
      subtitle: 'BMR 1.502 kcal • Gasto Total TDEE 2.328 kcal / día',
      description: 'Cálculo de metabolismo basal mediante la ecuación médica de Harris-Benedict. Pautas y seguimiento metabólico según tu estilo de vida y objetivos clínicos.',
      activeNavTab: 'perfil',
      keyHighlights: [
        'Metabolismo basal preciso (1.502 kcal) y gasto calórico activo (2.328 kcal)',
        'Perfil biofísico: 30 años, 170 cm, mujer, déficit moderado de 528 kcal',
        'Asesoría clínica basada en evidencia pública (OMS, EFSA, BEDCA)',
        'Ecuación oficial de Harris-Benedict con ajuste de actividad física PAL'
      ]
    }
  ];

  const currentMeta = screens.find(s => s.id === activeScreen) || screens[0];

  return (
    <div className="space-y-6 text-left">
      
      {/* Header Banner */}
      <div className="bg-[#2B2A23] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#2B2A23] shadow-[4px_4px_0px_#2B2A23] space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF9AA0] text-[#66363A] text-xs font-black tracking-wide uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Galería Oficial de la Interfaz</span>
          </div>
          <span className="text-xs text-emerald-300 font-mono-carrd font-bold">
            8 Pantallas Clave • iOS & Android
          </span>
        </div>

        <h3 className="text-lg sm:text-2xl font-bold font-bricolage tracking-tight text-white pt-1">
          Capturas reales de la interfaz de TuNutriLens
        </h3>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Haz clic en cualquiera de las 8 funciones a continuación para inspeccionar la pantalla interactiva exacta tal como funciona en la app móvil.
        </p>
      </div>

      {/* 8-Tab Screen Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {screens.map((screen) => {
          const isActive = screen.id === activeScreen;
          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => setActiveScreen(screen.id)}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[82px] ${
                isActive
                  ? 'bg-white border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] scale-[1.02] ring-2 ring-[#096121]/30'
                  : 'bg-white/80 hover:bg-white border-[#2B2A23]/30 hover:border-[#2B2A23]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5 w-full">
                <span className="text-[10px] font-black uppercase text-[#096121] tracking-wider leading-tight">
                  {screen.badge.split('•')[0]}
                </span>
                {isActive && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#096121] shrink-0" />
                )}
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-[#2B2A23] leading-snug">
                {screen.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white/95 border-2 border-[#2B2A23] shadow-[5px_5px_0px_#2B2A23] space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT: Authentic Phone Frame Displaying the EXACT Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className={`w-full ${isZoomed ? 'max-w-[360px]' : 'max-w-[310px]'} transition-all duration-300 rounded-[2.5rem] border-[4px] border-[#2B2A23] shadow-[6px_6px_0px_#2B2A23] bg-[#004D25] overflow-hidden relative select-none flex flex-col`}>
              
              {/* Top Phone Status Notch */}
              <div className="bg-[#004D25] h-6 flex items-center justify-between px-6 text-white text-[10px] font-mono-carrd border-b border-white/10">
                <span>09:41</span>
                <div className="w-16 h-3 bg-black/40 rounded-full mx-auto" />
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-3.5 h-2 border border-white rounded-[1px] p-[1px]">
                    <div className="w-full h-full bg-white" />
                  </div>
                </div>
              </div>

              {/* App Green Header Bar */}
              <div className="px-3.5 py-2.5 bg-[#004D25] text-white flex items-center justify-between border-b border-emerald-900/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-900 border border-emerald-400/40 flex items-center justify-center overflow-hidden">
                    <img src="/logo.svg" alt="App Logo" className="w-4 h-4 object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-tight block leading-none">TuNutriLens</span>
                    <span className="text-[8px] text-emerald-200 block leading-tight">Nutrición Visual Inteligente</span>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={onOpenDownload}
                  className="px-2.5 py-1 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white text-[10px] font-bold border border-emerald-400/30 cursor-pointer shadow-xs"
                >
                  {activeScreen === 'escaner-comida' && 'Escáner IA'}
                  {activeScreen === 'supermercado' && 'Supermercado'}
                  {activeScreen === 'diario' && 'Mi Nutrición'}
                  {activeScreen === 'plan-semanal' && 'Mi Nutrición'}
                  {activeScreen === 'etapas-vida' && 'Descubrir'}
                  {activeScreen === 'nevera' && 'Escáner IA'}
                  {activeScreen === 'progreso-peso' && 'Mi Nutrición'}
                  {activeScreen === 'nutricoach' && 'Mi Perfil'}
                </button>
              </div>

              {/* Subheader Banner */}
              <div className="px-3 py-1.5 bg-[#006633] text-white text-[10px] font-bold text-center border-b border-emerald-800">
                {activeScreen === 'escaner-comida' && 'Visor de Cámara IA • Detección en 2 Segundos'}
                {activeScreen === 'supermercado' && 'Análisis Instantáneo • Código de Barras & Etiquetas'}
                {activeScreen === 'diario' && 'Diario Nutricional • Resumen de Hoy'}
                {activeScreen === 'plan-semanal' && 'Plan Nutricional Semanal • 100% Personalizable'}
                {activeScreen === 'etapas-vida' && 'Nutrición por Etapas de la Vida • Guías Clínicas'}
                {activeScreen === 'nevera' && 'Nevera Residuo Cero con Visión IA'}
                {activeScreen === 'progreso-peso' && 'Evolución Corporal • Progreso de Peso'}
                {activeScreen === 'nutricoach' && 'Perfil Nutricional • Metabolismo BMR & TDEE'}
              </div>

              {/* SCREEN BODY: SCROLLABLE APP VIEW */}
              <div className="bg-[#F8F9FA] text-[#2B2A23] p-3 space-y-3 min-h-[440px] max-h-[480px] overflow-y-auto text-xs">
                
                {/* 1. SCREEN: ESCANER COMIDA */}
                {activeScreen === 'escaner-comida' && (
                  <div className="space-y-2.5">
                    {/* Mode pills */}
                    <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-bold">
                      <div className="py-1.5 rounded-full bg-[#006633] text-white shadow-xs">🍽️ Plato Comida</div>
                      <div className="py-1.5 rounded-full bg-white border border-stone-300 text-stone-700">🛒 Supermercado</div>
                      <div className="py-1.5 rounded-full bg-white border border-stone-300 text-stone-700">❄️ Tu Nevera</div>
                    </div>

                    <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-[9px] text-center font-bold">
                      ✨ Fotos este mes: 4 de 5 restantes (Plan Gratuito disponible)
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-stone-500">Momento:</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">Desayuno</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#006633] text-white">✓ Almuerzo</span>
                        <span className="px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">Cena</span>
                        <span className="px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">Snack</span>
                      </div>
                    </div>

                    {/* Camera Viewfinder */}
                    <div className="relative rounded-2xl bg-[#0b131f] border-2 border-emerald-950 p-4 text-center overflow-hidden">
                      <div className="absolute top-2 inset-x-4 flex justify-center">
                        <span className="bg-[#006633] text-white text-[9px] px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                          ● Detectado: Bowl Salmón & Quinoa
                        </span>
                      </div>

                      {/* Plate Graphic */}
                      <div className="w-24 h-24 mx-auto my-3 rounded-full bg-stone-100 flex items-center justify-center p-2 border-2 border-dashed border-emerald-400">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <span className="text-3xl">🥗</span>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-2 bg-emerald-950/80 text-emerald-300 text-[8px] px-2 py-0.5 rounded font-mono">
                        ⚖️ Peso IA: 340 gramos
                      </div>
                    </div>

                    {/* Result Card */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-black text-xs text-[#2B2A23]">Bowl Mediterráneo de Salmón</h5>
                          <p className="text-[9px] text-stone-500">Salmón noruego, quinoa real, aguacate hass y semillas</p>
                        </div>
                        <div className="text-center p-1.5 rounded-lg border border-emerald-500 bg-emerald-50 text-emerald-900">
                          <span className="text-sm font-black block leading-none">524</span>
                          <span className="text-[7px] uppercase font-bold tracking-wider">KILOCALORÍAS</span>
                        </div>
                      </div>

                      <div className="flex gap-1 text-[8px] font-bold">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900">Calidad Nutricional A</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800">NOVA 1 (Real)</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800">Mediterráneo</span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
                        <div className="p-1 rounded bg-blue-50 border border-blue-200">
                          <span className="text-[7px] text-stone-500 block">PROTEÍNA</span>
                          <span className="font-black text-blue-900">38g</span>
                        </div>
                        <div className="p-1 rounded bg-orange-50 border border-orange-200">
                          <span className="text-[7px] text-stone-500 block">CARBOHIDR.</span>
                          <span className="font-black text-orange-900">45g</span>
                        </div>
                        <div className="p-1 rounded bg-emerald-50 border border-emerald-200">
                          <span className="text-[7px] text-stone-500 block">GRASAS SAL.</span>
                          <span className="font-black text-emerald-900">19g</span>
                        </div>
                        <div className="p-1 rounded bg-purple-50 border border-purple-200">
                          <span className="text-[7px] text-stone-500 block">FIBRA PURA</span>
                          <span className="font-black text-purple-900">8.4g</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-emerald-50 text-[9px] text-emerald-900 border border-emerald-200 leading-snug">
                        <strong>Consejo Nutricional:</strong> Excelente densidad de Omega-3 marino y fibra prebiótica para tu microbiota.
                      </div>

                      <button 
                        type="button" 
                        onClick={onOpenDownload}
                        className="w-full py-2 rounded-lg bg-[#006633] hover:bg-[#00552b] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                      >
                        ✓ Guardar en Diario Nutricional
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. SCREEN: SUPERMERCADO */}
                {activeScreen === 'supermercado' && (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-bold">
                      <div className="py-1.5 rounded-full bg-white border border-stone-300 text-stone-700">🍽️ Plato Comida</div>
                      <div className="py-1.5 rounded-full bg-[#006633] text-white shadow-xs">🛒 Supermercado</div>
                      <div className="py-1.5 rounded-full bg-white border border-stone-300 text-stone-700">❄️ Tu Nevera</div>
                    </div>

                    {/* Barcode scanner view */}
                    <div className="relative rounded-2xl bg-[#0b131f] border-2 border-emerald-950 p-4 text-center overflow-hidden">
                      <div className="my-3 flex flex-col items-center justify-center">
                        {/* Realistic Barcode SVG */}
                        <div className="h-14 w-44 flex items-center justify-between px-2 bg-white rounded-md relative">
                          <div className="absolute inset-x-0 h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                          <div className="w-1 h-10 bg-black" />
                          <div className="w-2 h-10 bg-black" />
                          <div className="w-0.5 h-10 bg-black" />
                          <div className="w-3 h-10 bg-black" />
                          <div className="w-1.5 h-10 bg-black" />
                          <div className="w-0.5 h-10 bg-black" />
                          <div className="w-2 h-10 bg-black" />
                          <div className="w-1 h-10 bg-black" />
                          <div className="w-2.5 h-10 bg-black" />
                          <div className="w-0.5 h-10 bg-black" />
                          <div className="w-1.5 h-10 bg-black" />
                        </div>
                        <span className="text-[8px] text-cyan-300 font-mono mt-1.5">
                          EAN-13: 8480000123456 • Hacendado
                        </span>
                      </div>
                    </div>

                    {/* Product Card */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                      <span className="text-[9px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                        ✓ Alimento Recomendado
                      </span>
                      <div>
                        <h5 className="font-black text-xs text-[#2B2A23]">Yogur Griego 0% Natural</h5>
                        <p className="text-[9px] text-stone-500">Hacendado • Sin azúcares añadidos ni edulcorantes</p>
                      </div>

                      <div className="flex items-center justify-between gap-1">
                        {/* Perfil de Calidad Nutricional Abierto (A-E) */}
                        <div className="flex rounded-md overflow-hidden border border-stone-300 text-[8px] font-black text-white">
                          <span className="bg-[#008040] px-1.5 py-0.5">A</span>
                          <span className="bg-[#85bb2f] px-1.5 py-0.5 opacity-40">B</span>
                          <span className="bg-[#fecb02] px-1.5 py-0.5 opacity-40">C</span>
                          <span className="bg-[#ee8100] px-1.5 py-0.5 opacity-40">D</span>
                          <span className="bg-[#e63e11] px-1.5 py-0.5 opacity-40">E</span>
                        </div>
                        <div className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                          CLASIFICACIÓN NOVA: GRUPO 1
                        </div>
                        <div className="text-[8px] font-bold p-1 rounded border border-stone-300 text-stone-700">
                          59 kcal/100g
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-stone-50 border border-stone-200 space-y-1 text-[9px]">
                        <span className="font-bold text-stone-700 block">SEMÁFORO NUTRICIONAL (AESAN / OMS):</span>
                        <div className="flex items-center justify-between text-stone-800">
                          <span>🟢 Azúcares: 3.2g (Lácteos)</span>
                          <span className="text-emerald-700 font-bold">Óptimo</span>
                        </div>
                        <div className="flex items-center justify-between text-stone-800">
                          <span>🟢 Grasas Sat: 0.1g</span>
                          <span className="text-emerald-700 font-bold">Bajo</span>
                        </div>
                        <div className="flex items-center justify-between text-stone-800">
                          <span>🟢 Proteína: 10.3g</span>
                          <span className="text-emerald-700 font-bold">Alta biodisponibilidad</span>
                        </div>
                      </div>

                      <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[8px] text-emerald-900 leading-tight">
                        ✓ 0 Aditivos sospechosos ni edulcorantes artificiales. Leche desnatada y fermentos vivos.
                      </div>

                      <button 
                        type="button" 
                        onClick={onOpenDownload}
                        className="w-full py-2 rounded-lg bg-[#006633] hover:bg-[#00552b] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                      >
                        + Añadir a Mi Lista de la Compra
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. SCREEN: DIARIO NUTRICIONAL */}
                {activeScreen === 'diario' && (
                  <div className="space-y-2.5">
                    <div className="py-1 px-3 rounded-full bg-white border border-stone-300 text-center font-bold text-[10px] text-stone-700">
                      &lt; Hoy • Domingo, 20 de Septiembre &gt;
                    </div>

                    <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 text-[9px] text-orange-950 space-y-0.5">
                      <div className="font-black flex items-center gap-1">
                        <span>🔥 Racha de Compromiso: 1 día consecutivo activo</span>
                      </div>
                      <p className="text-stone-600">Hábito Inicial (1-3 días) • Te faltan 13 días para el hito de 14 días</p>
                    </div>

                    {/* Donut Chart and Targets */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-6 flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 border border-stone-200">
                          <div className="relative w-20 h-20 flex items-center justify-center">
                            {/* Circular gauge */}
                            <div className="w-full h-full rounded-full border-4 border-blue-100 border-t-[#0080ff] border-r-[#0080ff] rotate-45" />
                            <div className="absolute text-center">
                              <span className="text-[7px] text-stone-400 block uppercase font-bold">Consumidas</span>
                              <span className="text-sm font-black text-[#2B2A23] block leading-none">1.460</span>
                              <span className="text-[7px] text-stone-500 block">de 2.100 kcal</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-6 space-y-1.5 text-[9px]">
                          <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <span className="text-stone-500 block text-[7px]">CALORÍAS RESTANTES</span>
                            <span className="text-xs font-black text-emerald-900">640 kcal</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200">
                            <span className="text-stone-500 block text-[7px]">AGUA Y LÍQUIDOS</span>
                            <span className="text-xs font-black text-blue-900">1.85 L / 2.20 L (84%)</span>
                          </div>
                        </div>
                      </div>

                      {/* Macro lines */}
                      <div className="space-y-1 text-[8px] pt-1">
                        <div className="flex justify-between text-blue-900 font-bold">
                          <span>Proteína: 112g / 130g</span>
                          <span>86%</span>
                        </div>
                        <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[86%]" />
                        </div>

                        <div className="flex justify-between text-orange-900 font-bold">
                          <span>Carbohidratos: 145g / 190g</span>
                          <span>76%</span>
                        </div>
                        <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 w-[76%]" />
                        </div>

                        <div className="flex justify-between text-emerald-900 font-bold">
                          <span>Grasas Saludables: 52g / 65g</span>
                          <span>80%</span>
                        </div>
                        <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[80%]" />
                        </div>
                      </div>
                    </div>

                    {/* Meal list */}
                    <div className="space-y-1.5">
                      <span className="font-bold text-[10px] text-stone-700 block">Comidas Registradas Hoy:</span>
                      
                      <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[9px]">
                        <div>
                          <strong className="block text-[#2B2A23]">Desayuno: Tostada con tomate y AOVE</strong>
                          <span className="text-stone-500 text-[8px]">280 kcal • 7g Prot • 35g Carbos • 12g Grasas</span>
                        </div>
                        <span className="text-[8px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-black">Calidad A</span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[9px]">
                        <div>
                          <strong className="block text-[#2B2A23]">Almuerzo: Bowl de salmón salvaje y quinoa</strong>
                          <span className="text-stone-500 text-[8px]">524 kcal • 38g Prot • 45g Carbos • 19g Grasas</span>
                        </div>
                        <span className="text-[8px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-black">Calidad A</span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[9px]">
                        <div>
                          <strong className="block text-[#2B2A23]">Merienda: Yogur griego 0% con arándanos</strong>
                          <span className="text-stone-500 text-[8px]">215 kcal • 16g Prot • 14g Carbos • 10g Grasas</span>
                        </div>
                        <span className="text-[8px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-black">Calidad A</span>
                      </div>
                    </div>

                    <button 
                      type="button" 
                      onClick={onOpenDownload}
                      className="w-full py-2 rounded-lg bg-[#006633] hover:bg-[#00552b] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                    >
                      + Registrar Nueva Comida o Foto
                    </button>
                  </div>
                )}

                {/* 4. SCREEN: PLAN SEMANAL */}
                {activeScreen === 'plan-semanal' && (
                  <div className="space-y-2.5">
                    {/* Goals summary */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-black text-[10px] text-[#2B2A23]">Tus Metas Nutricionales Activas</span>
                        <span className="text-[8px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Calibrado</span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
                        <div className="p-1 rounded bg-emerald-50 border border-emerald-200">
                          <span className="text-[7px] text-stone-500 block">CALORÍAS</span>
                          <span className="font-black text-emerald-900">1.196</span>
                          <span className="text-[6px] text-stone-400 block">de 1.800</span>
                        </div>
                        <div className="p-1 rounded bg-blue-50 border border-blue-200">
                          <span className="text-[7px] text-stone-500 block">PROTEÍNA</span>
                          <span className="font-black text-blue-900">92g</span>
                          <span className="text-[6px] text-stone-400 block">de 120g</span>
                        </div>
                        <div className="p-1 rounded bg-orange-50 border border-orange-200">
                          <span className="text-[7px] text-stone-500 block">CARBOS</span>
                          <span className="font-black text-orange-900">93g</span>
                          <span className="text-[6px] text-stone-400 block">de 180g</span>
                        </div>
                        <div className="p-1 rounded bg-amber-50 border border-amber-200">
                          <span className="text-[7px] text-stone-500 block">GRASAS</span>
                          <span className="font-black text-amber-900">48g</span>
                          <span className="text-[6px] text-stone-400 block">de 55g</span>
                        </div>
                      </div>
                    </div>

                    {/* Day selector */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold">
                      <div className="p-1 rounded-lg bg-[#006633] text-white">LUN<br/>21 ✓</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">MAR<br/>22</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">MIÉ<br/>23</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">JUE<br/>24</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">VIE<br/>25</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">SÁB<br/>26</div>
                      <div className="p-1 rounded-lg bg-white border border-stone-200 text-stone-700">DOM<br/>27</div>
                    </div>

                    {/* Day Menu */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5 text-[9px]">
                      <div className="flex justify-between items-center border-b border-stone-100 pb-1">
                        <strong className="text-[#2B2A23]">Menú del Lunes (100% Comida Real)</strong>
                        <span className="text-[8px] text-stone-500 font-mono">2.050 kcal • P:125g</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-stone-50 border border-stone-100">
                        <span className="text-emerald-800 font-bold block text-[8px]">DESAYUNO (390 kcal)</span>
                        <span>Porridge de avena integral con semillas de chía, plátano y nueces</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
                        <span className="text-emerald-900 font-bold block text-[8px]">ALMUERZO PRINCIPAL (620 kcal)</span>
                        <span>Lentejas pardinas estofadas con verduras de temporada y arroz integral</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-stone-50 border border-stone-100">
                        <span className="text-amber-800 font-bold block text-[8px]">MERIENDA (220 kcal)</span>
                        <span>Manzana asada con canela de Ceilán y queso fresco batido 0%</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                        <span className="text-blue-900 font-bold block text-[8px]">CENA LIGERA (480 kcal)</span>
                        <span>Merluza al horno con espárragos trigueros y patata panadera</span>
                      </div>
                    </div>

                    <button 
                      type="button" 
                      onClick={onOpenDownload}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-[10px] text-center shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Autogenerar Menús Semanales con IA</span>
                    </button>
                  </div>
                )}

                {/* 5. SCREEN: ETAPAS DE LA VIDA */}
                {activeScreen === 'etapas-vida' && (
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1">
                      <span className="text-[8px] uppercase font-black bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                        PAUTAS OFICIALES EFSA / OMS
                      </span>
                      <h5 className="font-black text-xs text-[#2B2A23]">Nutrición por Etapas de la Vida</h5>
                      <p className="text-[9px] text-stone-600">Recomendaciones actualizadas de macro y micronutrientes para cada etapa vital</p>
                    </div>

                    <div className="space-y-1.5 text-[9px]">
                      <div className="p-2 rounded-xl bg-amber-50/80 border-2 border-amber-300 space-y-1">
                        <strong className="text-amber-950 block">🤰 Embarazo y Lactancia Materna (Gestación & Postparto)</strong>
                        <p className="text-stone-700 text-[8px] leading-tight">Ácido fólico (600 µg), Hierro hemo (27 mg), Omega-3 DHA (200 mg) y Calcio. Pautas EFSA: Control seguro de listeria y mercurio.</p>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-stone-200 space-y-1">
                        <strong className="text-[#2B2A23] block">🧬 Perimenopausia y Menopausia (45 - 65+ Años)</strong>
                        <p className="text-stone-700 text-[8px] leading-tight">Calcio (1.200 mg), Vitamina D3, Fitoestrógenos y proteína 1.2g/kg para preservación ósea y muscular.</p>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-stone-200 space-y-1">
                        <strong className="text-[#2B2A23] block">⚡ Deportistas y Rendimiento Físico</strong>
                        <p className="text-stone-700 text-[8px] leading-tight">Proteína 1.6 - 2.2 g/kg, recarga glucogénica y balance hidroelectrolítico peri-entreno.</p>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-stone-200 space-y-1">
                        <strong className="text-[#2B2A23] block">👴 Adultos Mayores (65+ Años)</strong>
                        <p className="text-stone-700 text-[8px] leading-tight">Prevención de sarcopenia: Proteína 1.2 - 1.5 g/kg, B12 reforzada, hidratación y fibra prebiótica.</p>
                      </div>
                    </div>

                    <button 
                      type="button" 
                      onClick={onOpenDownload}
                      className="w-full py-2 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                    >
                      ✓ Configurar Mi Etapa Biológica Activa
                    </button>
                  </div>
                )}

                {/* 6. SCREEN: NEVERA RESIDUO CERO */}
                {activeScreen === 'nevera' && (
                  <div className="space-y-2.5">
                    <div className="p-2 rounded-xl bg-[#006633] text-white text-[9px] space-y-1">
                      <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[8px] font-bold">
                        AHORRA HASTA 80 €/MES EN COMIDA
                      </span>
                      <h5 className="font-bold text-xs text-white">Nevera Residuo Cero con Visión IA</h5>
                      <p className="text-emerald-100 text-[8px]">Fotografía tu nevera y la IA crea platos mediterráneos con lo que ya tienes.</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-950 text-white space-y-2 text-[9px]">
                      <span className="text-emerald-300 font-bold block">✨ 5 Ingredientes detectados en tu foto:</span>
                      
                      <div className="flex flex-wrap gap-1 text-[8px] font-bold">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white">✓ 3 Huevos camperos</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white">✓ 2 Calabacines</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white">✓ Tomates maduros</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-800 text-white">✓ Cebolla dulce fresca</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-800 text-white">✓ AOVE</span>
                      </div>

                      <span className="text-emerald-200 text-[8px] block pt-1">
                        Evitas tirar 450 gramos de alimentos frescos a la basura hoy
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2 text-[9px]">
                      <span className="text-[8px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-bold">
                        Receta Generada por IA
                      </span>
                      <div>
                        <h5 className="font-black text-xs text-[#2B2A23]">Shakshuka de Calabacín y Huevo</h5>
                        <p className="text-[8px] text-stone-500">Tiempo: 15 min • Dificultad: Muy fácil • 0 desperdicio</p>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center text-[8px]">
                        <div className="p-1 rounded bg-stone-50">385 kcal</div>
                        <div className="p-1 rounded bg-blue-50 font-bold text-blue-900">24g Prot</div>
                        <div className="p-1 rounded bg-amber-50">6.8g Fibra</div>
                        <div className="p-1 rounded bg-emerald-100 font-bold text-emerald-900">Grado A</div>
                      </div>

                      <div className="space-y-1 text-[8px] text-stone-700">
                        <p><strong>Paso 1:</strong> Pica la cebolla y los calabacines. Pocha 5 min con AOVE.</p>
                        <p><strong>Paso 2:</strong> Añade el tomate maduro rallado y cocina a fuego medio.</p>
                        <p><strong>Paso 3:</strong> Casca los huevos, tapa y cuaja 3 minutos.</p>
                      </div>

                      <button 
                        type="button" 
                        onClick={onOpenDownload}
                        className="w-full py-2 rounded-lg bg-[#006633] hover:bg-[#00552b] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                      >
                        Cocinar con Modo Manos Libres
                      </button>
                    </div>
                  </div>
                )}

                {/* 7. SCREEN: PROGRESO DE PESO */}
                {activeScreen === 'progreso-peso' && (
                  <div className="space-y-2.5">
                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-[7px] uppercase font-bold text-stone-500 block">PESO ACTUAL</span>
                        <span className="text-xs font-black text-emerald-900">75.0 kg</span>
                        <span className="text-[7px] text-emerald-700 block">-4.2 kg</span>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-50 border border-blue-200">
                        <span className="text-[7px] uppercase font-bold text-stone-500 block">PESO META</span>
                        <span className="text-xs font-black text-blue-900">68.0 kg</span>
                        <span className="text-[7px] text-blue-700 block">Sin rebote</span>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                        <span className="text-[7px] uppercase font-bold text-stone-500 block">FALTANTE</span>
                        <span className="text-xs font-black text-amber-900">7.0 kg</span>
                        <span className="text-[7px] text-amber-700 block">0.5 kg/sem</span>
                      </div>
                    </div>

                    {/* Chart Box */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                      <div>
                        <h5 className="font-black text-xs text-[#2B2A23]">Curva de Pérdida de Grasa Sostenible</h5>
                        <p className="text-[8px] text-stone-500">Preservando el 100% de tu masa muscular mediante ingesta proteica adecuada</p>
                      </div>

                      {/* Line chart visualization */}
                      <div className="py-4 px-2 bg-stone-50 rounded-lg border border-stone-100 relative">
                        <div className="h-24 flex items-end justify-between px-3 relative">
                          {/* Baseline gridlines */}
                          <div className="absolute inset-x-0 top-0 border-b border-dashed border-stone-200" />
                          <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-stone-200" />
                          <div className="absolute inset-x-0 bottom-0 border-b border-dashed border-stone-200" />

                          {/* Chart line points */}
                          <div className="flex flex-col items-center gap-1 z-10">
                            <span className="text-[7px] font-bold text-teal-800">79.2</span>
                            <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shadow-xs" />
                            <span className="text-[7px] text-stone-400">Inicio</span>
                          </div>

                          <div className="flex flex-col items-center gap-1 z-10">
                            <div className="w-2 h-2 rounded-full bg-teal-600" />
                            <span className="text-[7px] text-stone-400">Sem 2</span>
                          </div>

                          <div className="flex flex-col items-center gap-1 z-10">
                            <div className="w-2 h-2 rounded-full bg-teal-600" />
                            <span className="text-[7px] text-stone-400">Sem 4</span>
                          </div>

                          <div className="flex flex-col items-center gap-1 z-10">
                            <div className="w-2 h-2 rounded-full bg-teal-600" />
                            <span className="text-[7px] text-stone-400">Sem 6</span>
                          </div>

                          <div className="flex flex-col items-center gap-1 z-10">
                            <div className="w-2 h-2 rounded-full bg-teal-600" />
                            <span className="text-[7px] text-stone-400">Sem 8</span>
                          </div>

                          <div className="flex flex-col items-center gap-1 z-10">
                            <span className="text-[7px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">Hoy: 75.0 ✓</span>
                            <div className="w-3 h-3 rounded-full bg-emerald-700 shadow-md ring-2 ring-emerald-300" />
                            <span className="text-[7px] font-bold text-emerald-900">Hoy</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button" 
                        onClick={onOpenDownload}
                        className="w-full py-2 rounded-lg bg-[#006633] hover:bg-[#00552b] text-white font-bold text-[10px] text-center shadow-xs cursor-pointer"
                      >
                        + Registrar Nuevo Peso y Medidas
                      </button>
                    </div>
                  </div>
                )}

                {/* 8. SCREEN: PERFIL METABÓLICO & GALA */}
                {activeScreen === 'nutricoach' && (
                  <div className="space-y-2.5">
                    {/* BMR and TDEE */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-[7px] uppercase font-bold text-stone-500 block">METABOLISMO BASAL (BMR)</span>
                        <span className="text-xs font-black text-emerald-900 block">1.502 kcal/día</span>
                        <span className="text-[7px] text-stone-500 block">Ecuación Harris-Benedict</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                        <span className="text-[7px] uppercase font-bold text-stone-500 block">GASTO TOTAL (TDEE)</span>
                        <span className="text-xs font-black text-blue-900 block">2.328 kcal/día</span>
                        <span className="text-[7px] text-stone-500 block">Actividad Moderada (3-5d)</span>
                      </div>
                    </div>

                    {/* Bio stats */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5 text-[9px]">
                      <span className="font-bold text-[#2B2A23] block">Datos Físicos y Estilo de Vida:</span>
                      <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="p-1 rounded bg-stone-50">
                          <span className="text-[7px] text-stone-400 block">EDAD</span>
                          <strong className="text-stone-800">30 años</strong>
                        </div>
                        <div className="p-1 rounded bg-stone-50">
                          <span className="text-[7px] text-stone-400 block">ALTURA</span>
                          <strong className="text-stone-800">170 cm</strong>
                        </div>
                        <div className="p-1 rounded bg-stone-50">
                          <span className="text-[7px] text-stone-400 block">GÉNERO</span>
                          <strong className="text-stone-800">Mujer</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-1 text-center pt-0.5">
                        <div className="p-1 rounded bg-stone-50">
                          <span className="text-[7px] text-stone-400 block">PESO ACTUAL</span>
                          <strong className="text-stone-800">75.0 kg</strong>
                        </div>
                        <div className="p-1 rounded bg-stone-50">
                          <span className="text-[7px] text-stone-400 block">PESO OBJETIVO</span>
                          <strong className="text-blue-900">68.0 kg (-7 kg)</strong>
                        </div>
                      </div>
                    </div>

                    {/* Perfil Card */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2 text-[9px]">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center font-bold text-emerald-800 text-xs">
                          📊
                        </div>
                        <div>
                          <strong className="text-[#2B2A23] block">Perfil Nutricional Personalizado</strong>
                          <span className="text-[8px] text-stone-500">Basado en evidencia pública (OMS, EFSA, BEDCA)</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[8px] text-emerald-900 leading-snug space-y-1">
                        <strong className="block font-bold">Plan activo: Pérdida de Peso Sostenible (1.800 kcal/día)</strong>
                        <p className="text-stone-700">Déficit calórico moderado de 528 kcal para quemar grasa preservando tu salud y energía.</p>
                      </div>

                      <div className="flex items-center justify-between text-[8px] text-stone-500 pt-1 border-t border-stone-100">
                        <span>Pautas clínicas automatizadas</span>
                        <span className="text-[#096121] font-bold">✓ Algoritmo Harris-Benedict</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Phone Bar with 4 Navigation Icons */}
              <div className="bg-white border-t border-stone-200 px-3 py-1.5 flex items-center justify-between text-[8px] font-bold text-stone-500">
                <div className={`flex flex-col items-center gap-0.5 ${currentMeta.activeNavTab === 'escaner' ? 'text-[#006633]' : ''}`}>
                  <span className="text-xs">📸</span>
                  <span>Escáner</span>
                  {currentMeta.activeNavTab === 'escaner' && <span className="w-3 h-0.5 bg-[#006633] rounded-full" />}
                </div>
                <div className={`flex flex-col items-center gap-0.5 ${currentMeta.activeNavTab === 'nutricion' ? 'text-[#006633]' : ''}`}>
                  <span className="text-xs">📊</span>
                  <span>Mi Nutrición</span>
                  {currentMeta.activeNavTab === 'nutricion' && <span className="w-3 h-0.5 bg-[#006633] rounded-full" />}
                </div>
                <div className={`flex flex-col items-center gap-0.5 ${currentMeta.activeNavTab === 'descubrir' ? 'text-[#006633]' : ''}`}>
                  <span className="text-xs">💡</span>
                  <span>Descubrir</span>
                  {currentMeta.activeNavTab === 'descubrir' && <span className="w-3 h-0.5 bg-[#006633] rounded-full" />}
                </div>
                <div className={`flex flex-col items-center gap-0.5 ${currentMeta.activeNavTab === 'perfil' ? 'text-[#006633]' : ''}`}>
                  <span className="text-xs">👤</span>
                  <span>Mi Perfil</span>
                  {currentMeta.activeNavTab === 'perfil' && <span className="w-3 h-0.5 bg-[#006633] rounded-full" />}
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="h-4 bg-white flex items-center justify-center">
                <div className="w-20 h-1 bg-[#2B2A23]/30 rounded-full" />
              </div>

            </div>
          </div>

          {/* RIGHT: Detailed Features and Clinical Explanations */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006633] text-white text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentMeta.badge}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black font-bricolage text-[#2B2A23]">
                {currentMeta.title}
              </h4>
              <p className="text-xs sm:text-sm font-bold text-[#006633]">
                {currentMeta.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              {currentMeta.description}
            </p>

            {/* Key Clinical and Tech Highlights */}
            <div className="p-3.5 rounded-xl bg-white border border-[#2B2A23]/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B2A23] block">
                Puntos destacados en esta pantalla:
              </span>
              <ul className="space-y-1.5 text-xs text-stone-800">
                {currentMeta.keyHighlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006633] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Screen Selector Quick Bar */}
            <div className="pt-1">
              <span className="text-[11px] font-bold text-stone-600 block mb-1.5">
                Navegar por las 8 pantallas oficiales:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {screens.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveScreen(s.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      s.id === activeScreen
                        ? 'bg-[#006633] text-white border-[#006633]'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-300'
                    }`}
                  >
                    {idx + 1}. {s.tabLabel.replace(/^\d+\.\s*/, '')}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#EF9AA0] hover:bg-[#eb888f] text-[#66363A] font-bold text-xs sm:text-sm border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] transition-all hover:scale-102 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Próximamente en la App</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-stone-500 font-mono-carrd">
                Diseño 100% oficial de TuNutriLens
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
