import React, { useState } from 'react';
import { DEMO_DISHES } from '../data/contentData';
import { DishScanDemo } from '../types';
import { Scan, Sparkles, CheckCircle2, AlertTriangle, Clock, Zap, ArrowRight, Layers, Eye } from 'lucide-react';

export const ScanSimulator: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<DishScanDemo>(DEMO_DISHES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [highlightedItemIndex, setHighlightedItemIndex] = useState<number | null>(null);

  const handleDishChange = (dish: DishScanDemo) => {
    setSelectedDish(dish);
    setHighlightedItemIndex(null);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 600);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Scan className="w-4 h-4 text-emerald-400" />
            <span>Simulador Interactivo en Tiempo Real</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
            Comprueba la <span className="text-emerald-400">precisión milimétrica</span> de escaneo
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Selecciona cualquier plato a continuación y mira cómo el algoritmo de TuNutriLens descompone cada ingrediente, calcula el volumen sin báscula y detecta grasas ocultas que las apps tradicionales ignoran.
          </p>
        </div>

        {/* Dish Selector Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {DEMO_DISHES.map((dish) => {
            const isSelected = selectedDish.id === dish.id;
            return (
              <button
                key={dish.id}
                onClick={() => handleDishChange(dish)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{dish.name}</span>
                <span className="text-[10px] opacity-80 uppercase px-1.5 py-0.5 rounded bg-black/20">
                  {dish.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Camera Viewport with AR Markers */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl relative">
            
            {/* Visual Header */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs z-20">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="TuNutriLens" className="w-4 h-4 rounded-sm object-cover" />
                <span className="font-bold text-white">Lente TuNutriLens v4.2</span>
                <span className="text-slate-400">• Mapeo Volumétrico 3D Activo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800 text-[11px]">
                  {selectedDish.confidenceScore}% Precisión
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  {selectedDish.scanTime}
                </span>
              </div>
            </div>

            {/* Camera View Area */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isScanning ? 'opacity-40 scale-105 filter blur-xs' : 'opacity-85'
                }`}
              />

              {/* Grid scanning overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

              {/* Scanning laser line animation */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-pulse top-1/2" />
              )}

              {/* AR Markers positioned over the dish */}
              {!isScanning &&
                selectedDish.detectedItems.map((item, idx) => {
                  const isHighlighted = highlightedItemIndex === idx;
                  return (
                    <div
                      key={idx}
                      style={{ top: `${item.y}%`, left: `${item.x}%` }}
                      onClick={() => setHighlightedItemIndex(isHighlighted ? null : idx)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-10 ${
                        isHighlighted ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-xl hover:border-emerald-400">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0 animate-ping"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold text-white whitespace-nowrap">{item.name}</p>
                          <div className="flex items-center gap-2 text-[10px] text-slate-300">
                            <span className="font-semibold text-emerald-400">{item.weight}</span>
                            <span>•</span>
                            <span>{item.calories} kcal</span>
                            <span>•</span>
                            <span className="text-slate-400 font-mono">{item.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* Instructions banner at bottom of image */}
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <span>Haz clic en los marcadores para inspeccionar cada ingrediente detectado</span>
                <span className="text-emerald-400 font-semibold">Cálculo de volumen sin báscula</span>
              </div>
            </div>

            {/* Detected ingredients list strip */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Ingredientes detectados por TuNutriLens en este plato:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedDish.detectedItems.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHighlightedItemIndex(idx)}
                    onMouseLeave={() => setHighlightedItemIndex(null)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      highlightedItemIndex === idx
                        ? 'bg-emerald-950/60 border-emerald-500 text-white'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <div className="flex items-center justify-between mt-1 text-[11px]">
                      <span className="text-emerald-400 font-semibold">{item.weight}</span>
                      <span className="text-slate-400">{item.calories} kcal</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Breakdown & Direct Competitor Reality Check */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Real nutritional values box */}
            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider">
                    Análisis Nutricional Global
                  </span>
                  <h3 className="text-xl font-black text-white font-display">{selectedDish.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-400 font-display">
                    {selectedDish.totalCalories}
                  </span>
                  <span className="text-xs text-slate-400 block -mt-1 font-medium">kcal calculadas</span>
                </div>
              </div>

              {/* Macros Breakdown */}
              <div>
                <p className="text-xs font-bold text-slate-400 mb-2">Macronutrientes equilibrados:</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Proteína</span>
                    <span className="text-base font-bold text-orange-400">{selectedDish.macros.protein}g</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Carbos</span>
                    <span className="text-base font-bold text-amber-400">{selectedDish.macros.carbs}g</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Grasas</span>
                    <span className="text-base font-bold text-emerald-400">{selectedDish.macros.fat}g</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Fibra</span>
                    <span className="text-base font-bold text-teal-400">{selectedDish.macros.fiber}g</span>
                  </div>
                </div>
              </div>

              {/* Micronutrient Bioavailability Preview */}
              <div>
                <p className="text-xs font-bold text-slate-400 mb-2">Micronutrientes esenciales detectados:</p>
                <div className="space-y-2">
                  {selectedDish.micronutrients.map((micro, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-slate-300 font-medium">{micro.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-300">{micro.amount}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({micro.dailyValuePercent}% CDR)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Reality Check vs Competitor */}
            <div className="bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 rounded-3xl p-6 border border-rose-900/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm text-white">¿Qué pasaría si intentas registrar este plato en MyFitnessPal o Yuka?</h4>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Tiempo perdido:</strong> {selectedDish.traditionalComparison.traditionalTime} frente a 1.4 segundos de TuNutriLens.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Error crítico:</strong> {selectedDish.traditionalComparison.traditionalError}.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Incompatibilidad de códigos:</strong> {selectedDish.traditionalComparison.notes}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Precisión en apps tradicionales: <strong className="text-rose-400">{selectedDish.traditionalComparison.traditionalAccuracy}</strong></span>
                <span className="text-emerald-400 font-bold">TuNutriLens: {selectedDish.confidenceScore}%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
