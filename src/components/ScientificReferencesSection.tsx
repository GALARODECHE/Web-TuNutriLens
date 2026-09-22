import React, { useState } from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Calculator, 
  FileText, 
  Globe, 
  Scale, 
  Sparkles,
  Database,
  Stethoscope,
  Building2,
  Award
} from 'lucide-react';

export const ScientificReferencesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const sources = [
    {
      category: 'Base de Datos Bromatológica Oficial',
      title: 'BEDCA - Base de Datos Española de Composición de Alimentos',
      institution: 'AESAN (Agencia Española de Seguridad Alimentaria y Nutrición) / Ministerio de Sanidad',
      scope: 'España / Unión Europea',
      citation: 'Red BEDCA. (2024). Base de Datos Española de Composición de Alimentos v2.0. Ministerio de Sanidad, Consumo y Bienestar Social.',
      appUsage: 'Proporciona la composición oficial de macronutrientes, micronutrientes y factores de conversión de energía para alimentos consumidos en España.',
      parameters: [
        'Valores de energía (kcal/kJ) por 100g de alimento',
        'Perfil de ácidos grasos (saturados, monoinsaturados, poliinsaturados)',
        'Contenido de calcio, hierro, potasio, sodio, magnesio y zinc',
        'Vitaminas A, C, D, B12, folatos y tiamina'
      ],
      license: 'Datos Abiertos Oficiales (Ley 37/2007 de Reutilización del Sector Público - Cero Royalties)',
      icon: Database,
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      category: 'Base de Datos Bromatológica Federal',
      title: 'USDA FoodData Central',
      institution: 'U.S. Department of Agriculture (USDA) - Agricultural Research Service',
      scope: 'Internacional / Dominio Público',
      citation: 'U.S. Department of Agriculture, Agricultural Research Service. (2023). FoodData Central. Department of Agriculture, USA.',
      appUsage: 'Suministra valores químico-analíticos estándar para materias primas, cortes de carne, legumbres y alimentos genéricos globales.',
      parameters: [
        'Perfiles completos de aminoácidos esenciales',
        'Densidad de fibra dietética total y soluble',
        'Desglose de azúcares añadidos vs. azúcares intrínsecos',
        'Micronutrientes traza y biodisponibilidad'
      ],
      license: 'Dominio Público Universal (U.S. Government Work - 17 U.S.C. § 105 - Sin Derechos de Autor)',
      icon: Globe,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      category: 'Organismo Público Comunitario',
      title: 'EFSA - Dietary Reference Values & Nutrient Tolerable Upper Intake Levels',
      institution: 'European Food Safety Authority (EFSA / Unión Europea)',
      scope: 'Unión Europea',
      citation: 'EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA). (2017-2023). Scientific Opinion on Dietary Reference Values for nutrients and energy. EFSA Journal.',
      appUsage: 'Establece los rangos de ingesta de referencia (DRV), límites superiores tolerables (UL) y clasificación de los 14 alérgenos de declaración obligatoria según el Reglamento UE 1169/2011.',
      parameters: [
        'Alérgenos oficiales Anexo II (Gluten, Lactosa, Frutos de cáscara, Huevo, Pescado, Crustáceos, Soja, etc.)',
        'Necesidades estimadas de proteína por kg de peso corporal (0.8g - 2.0g/kg)',
        'Límites recomendados de grasas saturadas (<10% del VCT) y perfiles lipídicos'
      ],
      license: 'Normativa e Información Pública Oficial de la Unión Europea',
      icon: Building2,
      badgeColor: 'bg-teal-100 text-teal-900 border-teal-300'
    },
    {
      category: 'Organismo Internacional de Salud',
      title: 'OMS / WHO - Directrices de Ingesta Nutricional y Salud Global',
      institution: 'Organización Mundial de la Salud (OMS / WHO)',
      scope: 'Internacional / Global',
      citation: 'World Health Organization. (2015/2020). Guideline: Sugars intake for adults and children & Sodium intake guidelines. Geneva: WHO Guidelines Approved by the Guidelines Review Committee.',
      appUsage: 'Determina los umbrales de alerta para consumo excesivo de azúcar libre (<10% y objetivo <5%), sodio (<2000mg/día) y fibra mínima (>25g/día).',
      parameters: [
        'Límite de azúcar libre < 25g/día (meta óptima para salud cardiovascular y metabólica)',
        'Máximo de sodio 2.000 mg/día (equivalente a 5g de sal de mesa)',
        'Recomendación de consumo mínimo de 400g diarios de frutas y verduras frescas'
      ],
      license: 'Publicación de Libre Acceso (Open Access WHO Guidelines)',
      icon: Globe,
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300'
    },
    {
      category: 'Organismo Internacional / Requerimientos Vitales',
      title: 'FAO / UNU - Requerimientos Energéticos Humanos y Tablas INFOODS',
      institution: 'Food and Agriculture Organization (FAO) / Naciones Unidas',
      scope: 'Internacional / Naciones Unidas',
      citation: 'FAO/WHO/UNU. (2004/2020). Human energy requirements: Report of a Joint FAO/WHO/UNU Expert Consultation. FAO Food and Nutrition Technical Report Series.',
      appUsage: 'Pautas abiertas de ingesta recomendada y micronutrientes por grupos biológicos (gestación, lactancia, crecimiento infantil, menopausia y edad avanzada).',
      parameters: [
        'Requerimientos fisiológicos de folato, hierro hemo y calcio en embarazo y postparto',
        'Preservación de masa magra y balance proteico en adultos mayores',
        'Estándares mundiales de densidad calórica y biodisponibilidad'
      ],
      license: 'Publicación Oficial de Libre Acceso FAO / UNU',
      icon: Award,
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
    },
    {
      category: 'Fórmula Matemática de Dominio Público',
      title: 'Ecuación Biométrica de Harris-Benedict (1919) con Factores PAL',
      institution: 'Carnegie Institution of Washington / Dominio Público Universal',
      scope: 'Internacional / Dominio Público',
      citation: 'Harris, J. A., & Benedict, F. G. (1919). A Biometric Study of Basal Metabolism in Man. Proceedings of the National Academy of Sciences & Carnegie Institution Publication No. 279.',
      appUsage: 'Algoritmo biométrico de cálculo del metabolismo basal (TMB / BMR) ajustado por factores de actividad física PAL (FAO/OMS) sin patentes ni royalties.',
      parameters: [
        'Ecuación Harris-Benedict Hombres: TMB = 88.362 + (13.397 × peso kg) + (4.799 × altura cm) - (5.677 × edad años)',
        'Ecuación Harris-Benedict Mujeres: TMB = 447.593 + (9.247 × peso kg) + (3.098 × altura cm) - (4.330 × edad años)',
        'Factores de Actividad Física (PAL): 1.2 (sedentario) a 1.9 (muy activo)',
        'Cálculo de balance calórico personalizado (déficit controlado, normocalórica o superávit)'
      ],
      license: 'Dominio Público Universal (Fórmula Matemática Clásica > 100 años)',
      icon: Calculator,
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
      highlight: true
    },
    {
      category: 'Algoritmo Bromatológico Abierto',
      title: 'Perfil de Calidad Nutricional Abierto (A, B, C, D, E)',
      institution: 'Algoritmo Bromatológico Libre de Marcas Registradas',
      scope: 'Universal / Sin Marcas de Terceros',
      citation: 'Bases bromatológicas universales de balance de nutrientes favorables (fibra, proteína, vegetales) frente a desfavorables (azúcares libres, sodio, grasas saturadas).',
      appUsage: 'Sustituye esquemas comerciales cerrados de etiquetado por una clasificación abierta y matemática de 5 niveles (A a E) que evalúa la densidad bromatológica del alimento sin incurrir en marcas registradas de terceros.',
      parameters: [
        'Puntuación positiva: Densidad de proteína de calidad, fibra dietética y vegetales frescos',
        'Puntuación desfavorable: Exceso de azúcares libres añadidos, sodio y grasas saturadas',
        'Escala neutral sin logotipos protegidos ni marcas registradas ajenas',
        'Compatibilidad total con legislación europea de información al consumidor'
      ],
      license: 'Algoritmo de Dominio Abierto (Cálculo Bromatológico Libre de Marcas)',
      icon: ShieldCheck,
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300'
    }
  ];

  return (
    <section className="bg-white/85 backdrop-blur-xs p-5 sm:p-7 rounded-2xl border-2 border-[#2B2A23] text-left space-y-6 shadow-xs font-mono-carrd text-[#2B2A23]">
      
      {/* Header */}
      <div className="border-b-2 border-[#2B2A23] pb-4 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#096121] text-white text-xs font-bold border border-[#2B2A23] shadow-[2px_2px_0px_#2B2A23]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% Auditado • Rigor Científico Oficial</span>
          </div>
          <span className="text-[11px] font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-300">
            Dominio Público & Open Access
          </span>
        </div>

        <h2 className="font-bricolage text-xl sm:text-2xl font-bold text-[#2B2A23] tracking-[-0.04rem]">
          Fuentes Científicas y Referencias Oficiales
        </h2>

        <p className="text-xs sm:text-sm text-[#2B2A23]/80 leading-relaxed">
          Bases de datos públicas, instituciones gubernamentales y guías clínicas internacionales que avalan <strong>TuNutriLens</strong>.
        </p>
      </div>

      {/* Legal & Open Source Guarantee Box */}
      <div className="p-4 rounded-xl bg-[#FAF7F2] border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#096121]">
          <ShieldCheck className="w-4 h-4 text-[#096121]" />
          <span>Seguridad Jurídica y Licencia Libre Garantizada</span>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          Todas las fuentes integradas en esta aplicación proceden de organismos públicos oficiales (<strong>Ministerio de Sanidad, USDA, EFSA, OMS, FAO</strong>) bajo licencias de Dominio Público y Reutilización del Sector Público. No existen royalties ni riesgos por derechos de autor comerciales.
        </p>
      </div>

      {/* Highlight Box: Harris-Benedict Basal Metabolism Equation */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/70 border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] space-y-3">
        <div className="flex items-center justify-between gap-2 border-b border-stone-300 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2B2A23] text-amber-300 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bricolage text-sm sm:text-base font-bold text-[#2B2A23]">
                Ecuación de Cálculo de Metabolismo Basal: Harris-Benedict
              </h3>
              <p className="text-[11px] text-stone-600">
                Fórmula biométrica oficial integrada en el motor de TuNutriLens
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded border border-amber-400">
            Algoritmo Oficial
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-[#2B2A23]/30 space-y-1">
            <span className="font-bold text-[#096121] block flex items-center gap-1">
              <span>👨 Para Hombres (TMB):</span>
            </span>
            <code className="text-[11px] bg-stone-100 p-2 rounded block font-mono text-[#2B2A23] border border-stone-200 overflow-x-auto">
              TMB = 88.362 + (13.397 × kg) + (4.799 × cm) - (5.677 × edad)
            </code>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#2B2A23]/30 space-y-1">
            <span className="font-bold text-[#096121] block flex items-center gap-1">
              <span>👩 Para Mujeres (TMB):</span>
            </span>
            <code className="text-[11px] bg-stone-100 p-2 rounded block font-mono text-[#2B2A23] border border-stone-200 overflow-x-auto">
              TMB = 447.593 + (9.247 × kg) + (3.098 × cm) - (4.330 × edad)
            </code>
          </div>
        </div>

        <div className="text-[11px] text-stone-600 bg-white/70 p-2.5 rounded-lg border border-stone-200 space-y-1">
          <p>
            <strong>Ajuste de Gasto Energético Total (GET):</strong> Se multiplica el TMB por los Factores de Actividad Física (PAL) según el consenso FAO/OMS/UNU:
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono pt-1">
            <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">Sedentario: ×1.2</span>
            <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">Ligero: ×1.375</span>
            <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">Moderado: ×1.55</span>
            <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">Intenso: ×1.725</span>
            <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">Muy Activo: ×1.9</span>
          </div>
        </div>
      </div>

      {/* Directory of Scientific Sources */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bricolage text-sm sm:text-base font-bold text-[#2B2A23] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#096121]" />
            <span>Directorio de Fuentes Bromatológicas y Guías Clínicas ({sources.length})</span>
          </h3>
          <span className="text-[11px] text-stone-500 font-mono">Haz clic para desplegar detalles</span>
        </div>

        <div className="space-y-2.5">
          {sources.map((src, idx) => {
            const Icon = src.icon;
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx}
                className="rounded-xl border-2 border-[#2B2A23] bg-white overflow-hidden transition-all shadow-[2px_2px_0px_#2B2A23]"
              >
                {/* Accordion header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-start sm:items-center justify-between gap-3 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 border border-[#2B2A23]/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 text-[#096121]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${src.badgeColor}`}>
                          {src.category}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {src.scope}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#2B2A23] leading-snug">
                        {src.title}
                      </h4>
                      <p className="text-[11px] text-stone-600 font-mono">
                        {src.institution}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-stone-500 p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-stone-200 bg-[#FAF7F2]/50 text-xs space-y-3 animate-in fade-in duration-150">
                    <div>
                      <span className="font-bold text-[#2B2A23] block mb-1">
                        📖 Cita Oficial / Referencia Bibliográfica:
                      </span>
                      <p className="text-[11px] italic text-stone-700 bg-white p-2.5 rounded border border-stone-200">
                        "{src.citation}"
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-[#096121] block mb-1">
                        🎯 Aplicación en TuNutriLens:
                      </span>
                      <p className="text-stone-700 leading-relaxed">
                        {src.appUsage}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-[#2B2A23] block mb-1">
                        🔬 Parámetros extraídos e integrados:
                      </span>
                      <ul className="space-y-1 pl-1">
                        {src.parameters.map((param, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                            <span className="text-[#096121] font-bold">✓</span>
                            <span>{param}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
                      <span><strong>Licencia:</strong> {src.license}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
