import { ComparisonItem, DishScanDemo, NutritionPlanProfile, FaqItem } from '../types';

export const COMPARISON_DATA: ComparisonItem[] = [
  // CATEGORÍA: PRECISIÓN DE ESCANEO
  {
    id: 'scan-method',
    category: 'scanning',
    feature: 'Método de reconocimiento visual',
    description: 'Capacidad de identificar alimentos reales sin depender de códigos de barras',
    tunutrilens: {
      value: 'Visión Computacional 3D + IA Multicapa',
      detail: 'Reconoce comida real, platos caseros y de restaurantes con 1 sola foto en <2 segundos.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Búsqueda manual de texto',
      detail: 'Obliga a teclear ingrediente por ingrediente entre miles de entradas duplicadas y erróneas.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Solo código de barras',
      detail: 'Inútil ante comida fresca, casera o platos preparados fuera de un envase industrial.',
      isInferior: true,
    },
  },
  {
    id: 'scan-precision-rate',
    category: 'scanning',
    feature: 'Margen de error calórico promedio',
    description: 'Desviación en kilocalorías respecto al valor nutricional químico real',
    tunutrilens: {
      value: 'Margen mínimo inferior al 3.2%',
      detail: 'Entrenado con más de 4.8 millones de platos validados con densitometría y balanza de precisión.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Desviación entre 28% y 45%',
      detail: 'Estimaciones subjetivas del usuario ("un puñado", "una porción mediana") provocan desajustes calóricos masivos.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Sin cálculo calórico de plato',
      detail: 'Solo califica el producto individual envasado, no cuantifica ración ni ingesta del plato global.',
      isInferior: true,
    },
  },
  {
    id: 'scan-volumetric',
    category: 'scanning',
    feature: 'Estimación volumétrica y peso sin báscula',
    description: 'Cálculo de gramos mediante perspectiva y mapeo de profundidad óptica',
    tunutrilens: {
      value: 'Mapeo 3D de profundidad volumétrica',
      detail: 'Calcula densidad por ingrediente detectado para estimar gramos exactos sin necesidad de pesar nada.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Exige pesar todo en báscula',
      detail: 'Si estás en un restaurante o de viaje, es imposible registrar los gramos con exactitud.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'No dispone de estimación',
      detail: 'Asume porciones estándar de 100g sin saber cuánto vas a comer en realidad.',
      isInferior: true,
    },
  },
  {
    id: 'scan-hidden-fats',
    category: 'scanning',
    feature: 'Detección de aceites y aderezos ocultos',
    description: 'Identificación de grasas de cocción, vinagretas y salsas que disparan las calorías',
    tunutrilens: {
      value: 'Algoritmo de brillo y textura espectral',
      detail: 'Detecta trazas de aceite de oliva, salsas emulsionadas y métodos de cocción (frito, plancha, vapor).',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Completamente ignorado si no lo buscas',
      detail: 'El 82% de usuarios olvida registrar el aceite de cocina, sumando 300-500 kcal no contabilizadas al día.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'No aplicable a platos cocinados',
      detail: 'No analiza recetas elaboradas ni combinaciones culinarias.',
      isInferior: true,
    },
  },
  {
    id: 'scan-speed',
    category: 'scanning',
    feature: 'Tiempo promedio de registro por comida',
    description: 'Tiempo invertido por el usuario en apuntar cada desayuno, almuerzo o cena',
    tunutrilens: {
      value: '1.8 segundos (1 foto instantánea)',
      detail: 'Apunta tu cámara, un clic y todos los ingredientes y macros quedan registrados.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: '4 a 7 minutos por comida',
      detail: 'Proceso tedioso que causa que más del 65% de usuarios abandone la app en las primeras 2 semanas.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: '15-30 segundos por código de barras',
      detail: 'Requiere escanear cada paquete por separado antes de cocinar.',
      isInferior: true,
    },
  },

  // CATEGORÍA: PERSONALIZACIÓN DE PLANES NUTRICIONALES
  {
    id: 'plan-adaptability',
    category: 'personalization',
    feature: 'Adaptación metabólica dinámica',
    description: 'Ajuste de macronutrientes y calorías en tiempo real según respuesta corporal',
    tunutrilens: {
      value: 'Reajuste metabólico dinámico continuo',
      detail: 'Monitorea tu tasa metabólica, gasto calórico y adherencia real; recalibra las metas cada semana de forma automática.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Fórmula estática fija (Harris-Benedict)',
      detail: 'Te asigna un número de calorías invariable para siempre, ignorando adaptaciones metabólicas o mesetas de pérdida.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Sin planes nutricionales',
      detail: 'No genera menús, planes de macros ni objetivos personalizados.',
      isInferior: true,
    },
  },
  {
    id: 'plan-health-conditions',
    category: 'personalization',
    feature: 'Personalización clínica y patologías',
    description: 'Compatibilidad con sensibilidades digestivas, resistencia a insulina y estilos de vida',
    tunutrilens: {
      value: 'Perfil clínico avanzado (+40 patologías)',
      detail: 'Planes compatibles con SIBO, celiaquía, hipotiroidismo, SOP, resistencia a la insulina, deportistas y embarazo.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Genérico: Solo filtros básicos',
      detail: 'No contempla interacciones de micronutrientes ni adaptaciones fisiológicas específicas.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Sin integración clínica',
      detail: 'Solo indica presencia de aditivos genéricos con criterio estándar no individualizado.',
      isInferior: true,
    },
  },
  {
    id: 'plan-flexibility',
    category: 'personalization',
    feature: 'Flexibilidad ante vida social y eventos',
    description: 'Gestión de salidas a cenar fuera de casa sin arruinar tu plan',
    tunutrilens: {
      value: 'Modo "Cena Fuera" con compensación inteligente',
      detail: 'Escaneas el plato del restaurante y TuNutriLens recalibra de manera saludable las siguientes comidas sin culpa ni castigos.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Culpa y barra roja de exceso calórico',
      detail: 'Pinta el número en rojo generando estrés y no ofrece ninguna solución estratégica de rebalance.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Inexistente',
      detail: 'No gestiona diarios de comidas ni planes continuos.',
      isInferior: true,
    },
  },
  {
    id: 'plan-micronutrients',
    category: 'personalization',
    feature: 'Enfoque en densidad nutricional real',
    description: 'Priorización de micronutrientes, salud digestiva y absorción frente al mero déficit',
    tunutrilens: {
      value: 'Índice de Densidad y Biodisponibilidad',
      detail: 'Mide magnesio, hierro quelado, fibra prebiótica y perfil lipídico. Tu salud importa más que un número vacío.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Conteo ciego de calorías ("IIFYM")',
      detail: 'Premia comer productos procesados mientras "encajen en las calorías", sacrificando salud hormonal y saciedad.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Semáforo simplista (0-100)',
      detail: 'Algoritmo rígido que a menudo penaliza grasas saludables como el aceite de oliva virgen extra o frutos secos.',
      isInferior: true,
    },
  },

  // CATEGORÍA: EXPERIENCIA Y FIABILIDAD
  {
    id: 'exp-database-quality',
    category: 'experience',
    feature: 'Fiabilidad de la base de datos de alimentos',
    description: 'Verificación clínica de la información nutricional',
    tunutrilens: {
      value: '100% Verificada por Nutricionistas Colegiados',
      detail: 'Sin entradas duplicadas de usuarios. Datos respaldados por tablas de composición química oficiales.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Base de datos colaborativa desordenada',
      detail: 'Cualquier usuario puede subir datos falsos (ej. pizzas con 0 calorías o plátanos con 90g de proteína).',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Dependiente de ficha del fabricante',
      detail: 'Frecuentemente desactualizada cuando las marcas reformulan ingredientes.',
      isInferior: true,
    },
  },
  {
    id: 'exp-ads',
    category: 'experience',
    feature: 'Experiencia limpia sin interrupciones',
    description: 'Publicidad y banners que estorban el uso cotidiano',
    tunutrilens: {
      value: '100% Libre de anuncios intrusivos',
      detail: 'Diseño limpio, enfocado en tu experiencia, salud y rapidez de uso diario.',
      isSuperior: true,
    },
    competitorTraditional: {
      name: 'MyFitnessPal / Típico',
      value: 'Saturado de banners y popups',
      detail: 'Banners a pantalla completa, vídeos molestos y bloqueo de funciones básicas tras muros de pago abusivos.',
      isInferior: true,
    },
    competitorBarcode: {
      name: 'Yuka / Escáneres',
      value: 'Básico pero con recomendaciones de pago',
      detail: 'Promociona productos alternativos patrocinados.',
      isInferior: true,
    },
  },
];

export const DEMO_DISHES: DishScanDemo[] = [
  {
    id: 'salmon-poke',
    name: 'Poke Bowl de Salmón Salvaje y Aguacate',
    category: 'Plato Completo Mixto',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    confidenceScore: 99.2,
    scanTime: '1.4s',
    totalCalories: 564,
    macros: {
      protein: 36,
      carbs: 48,
      fat: 24,
      fiber: 9,
    },
    micronutrients: [
      { name: 'Omega-3 (EPA/DHA)', amount: '2.4g', dailyValuePercent: 120 },
      { name: 'Vitamina D', amount: '12µg', dailyValuePercent: 80 },
      { name: 'Potasio', amount: '780mg', dailyValuePercent: 35 },
      { name: 'Magnesio', amount: '95mg', dailyValuePercent: 28 },
    ],
    detectedItems: [
      { name: 'Salmón fresco en dados', weight: '145g', calories: 275, confidence: 99, color: '#f97316', x: 38, y: 35 },
      { name: 'Aguacate Hass en láminas', weight: '65g', calories: 104, confidence: 98, color: '#10b981', x: 65, y: 42 },
      { name: 'Arroz integral sazonado', weight: '120g', calories: 134, confidence: 97, color: '#eab308', x: 50, y: 65 },
      { name: 'Edamame desgranado', weight: '45g', calories: 51, confidence: 99, color: '#84cc16', x: 28, y: 55 },
    ],
    traditionalComparison: {
      traditionalTime: '5 min 20 s',
      traditionalAccuracy: '58% estimada',
      traditionalError: '+185 kcal no registradas (aderezo de sésamo y aceite)',
      notes: 'En MyFitnessPal tendrías que buscar 6 ingredientes separados y adivinar los gramos de cada uno.',
    },
  },
  {
    id: 'avocado-toast',
    name: 'Tostada Campesina con Aguacate y Huevo Poché',
    category: 'Desayuno Saludable',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
    confidenceScore: 98.8,
    scanTime: '1.2s',
    totalCalories: 388,
    macros: {
      protein: 16,
      carbs: 32,
      fat: 22,
      fiber: 8,
    },
    micronutrients: [
      { name: 'Colina', amount: '155mg', dailyValuePercent: 37 },
      { name: 'Vitamina E', amount: '3.6mg', dailyValuePercent: 30 },
      { name: 'Ácido Fólico', amount: '110µg', dailyValuePercent: 27 },
      { name: 'Hierro', amount: '2.5mg', dailyValuePercent: 18 },
    ],
    detectedItems: [
      { name: 'Pan de masa madre integral', weight: '70g', calories: 175, confidence: 99, color: '#d97706', x: 45, y: 60 },
      { name: 'Aguacate machacado con lima', weight: '60g', calories: 96, confidence: 98, color: '#10b981', x: 55, y: 45 },
      { name: 'Huevo de corral poché', weight: '55g', calories: 78, confidence: 99, color: '#f59e0b', x: 40, y: 38 },
      { name: 'Aceite de oliva virgen extra + semillas', weight: '5ml', calories: 39, confidence: 95, color: '#84cc16', x: 62, y: 30 },
    ],
    traditionalComparison: {
      traditionalTime: '4 min 10 s',
      traditionalAccuracy: '64% estimada',
      traditionalError: 'Ignora el tipo de pan y omite el AOVE rociado',
      notes: 'Un escáner de código de barras no sirve aquí porque compraste el pan en la panadería local.',
    },
  },
  {
    id: 'lentil-stew',
    name: 'Guiso Casero de Lentejas con Hortalizas',
    category: 'Comida Casera / Cuchara',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    confidenceScore: 97.9,
    scanTime: '1.6s',
    totalCalories: 340,
    macros: {
      protein: 21,
      carbs: 52,
      fat: 5,
      fiber: 16,
    },
    micronutrients: [
      { name: 'Hierro vegetal', amount: '6.8mg', dailyValuePercent: 48 },
      { name: 'Zinc', amount: '3.2mg', dailyValuePercent: 29 },
      { name: 'Vitamina A (Betacarotenos)', amount: '620µg', dailyValuePercent: 77 },
      { name: 'Fibra soluble', amount: '7.5g', dailyValuePercent: 50 },
    ],
    detectedItems: [
      { name: 'Lenteja pardina cocida', weight: '220g', calories: 210, confidence: 98, color: '#92400e', x: 50, y: 55 },
      { name: 'Zanahoria y calabaza en brunoise', weight: '85g', calories: 35, confidence: 97, color: '#f97316', x: 35, y: 40 },
      { name: 'Sofrito suave (cebolla y tomate)', weight: '40g', calories: 38, confidence: 96, color: '#ef4444', x: 60, y: 35 },
      { name: 'Caldo vegetal reducido', weight: '120ml', calories: 57, confidence: 95, color: '#ca8a04', x: 45, y: 70 },
    ],
    traditionalComparison: {
      traditionalTime: '8 min manual',
      traditionalAccuracy: '39% (cálculo a ciegas)',
      traditionalError: 'El usuario suele elegir "Lentejas de bote" con 50% de error en densidad',
      notes: 'Los platos de cuchara son la gran pesadilla de MyFitnessPal. TuNutriLens analiza la densidad del caldo en 3D.',
    },
  },
  {
    id: 'grilled-chicken-salad',
    name: 'Ensalada Mediterránea de Pollo a la Brasa y Nueces',
    category: 'Plato Restaurante / Fitness',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    confidenceScore: 99.4,
    scanTime: '1.3s',
    totalCalories: 445,
    macros: {
      protein: 42,
      carbs: 14,
      fat: 25,
      fiber: 7,
    },
    micronutrients: [
      { name: 'Vitamina C', amount: '45mg', dailyValuePercent: 60 },
      { name: 'Calcio bioasimilable', amount: '180mg', dailyValuePercent: 22 },
      { name: 'Niacina (B3)', amount: '14mg', dailyValuePercent: 88 },
      { name: 'Selenio', amount: '28µg', dailyValuePercent: 51 },
    ],
    detectedItems: [
      { name: 'Pechuga de pollo a la brasa', weight: '160g', calories: 232, confidence: 99, color: '#eab308', x: 45, y: 40 },
      { name: 'Hojas verdes y espinacas tiernas', weight: '80g', calories: 18, confidence: 99, color: '#15803d', x: 30, y: 60 },
      { name: 'Nueces de California', weight: '20g', calories: 130, confidence: 98, color: '#78350f', x: 65, y: 55 },
      { name: 'Tomates cherry y aliño ligero', weight: '65g', calories: 65, confidence: 97, color: '#dc2626', x: 60, y: 35 },
    ],
    traditionalComparison: {
      traditionalTime: '4 min 30 s',
      traditionalAccuracy: '52% en restaurante',
      traditionalError: 'Subestimación habitual de frutos secos y aderezos (+220 kcal)',
      notes: 'El escáner visual de TuNutriLens aísla las nueces y estima su gramaje con exactitud milimétrica.',
    },
  },
];

export const NUTRITION_PLAN_PROFILES: NutritionPlanProfile[] = [
  {
    id: 'fat-loss',
    title: 'Pérdida de Grasa con Preservación Muscular',
    targetUser: 'Personas que buscan reducir porcentaje graso sin pasar hambre ni perder tono',
    icon: 'Flame',
    goal: 'Déficit calórico inteligente del 15% con alta saciedad y recargas estratégicas',
    tuNutrilensApproach: {
      strategy: 'Déficit ondulante adaptativo: Calcula tu gasto calórico real día a día. Aumenta carbohidratos en días de mayor actividad y prioriza volumen gástrico mediante fibra y proteína de alta digestibilidad.',
      micronutrientFocus: ['Leucina (3g por ingesta principal)', 'Magnesio bisglicinato (recuperación nerviosa)', 'Potasio (equilibrio hídrico)'],
      metabolicAdjustment: 'Si tu peso se estanca 10 días, TuNutriLens no te recorta más calorías (lo que arruinaría tu metabolismo); programa una semana de mantenimiento controlado.',
      dailyFlexibility: '¿Cena con amigos el sábado? La app ajusta tus comidas previas y posteriores para que disfrutes sin frenar tu progreso.',
    },
    competitorApproach: {
      strategy: 'Déficit lineal agresivo e invariable (ej. "1200 kcal para todos"). Provoca fatiga, caída metabólica y rebote a las pocas semanas.',
      flaw: 'Ignora la calidad de la comida; permite 500 kcal de galletas mientras "estén en el total". Cero educación nutricional.',
      calorieRestriction: 'Recorte arbitrario del 30-40% sin considerar tu masa magra ni gasto hormonal.',
    },
  },
  {
    id: 'hypertrophy',
    title: 'Ganancia Muscular Limpia y Rendimiento',
    targetUser: 'Deportistas y practicantes de fuerza que buscan volumen limpio',
    icon: 'Dumbbell',
    goal: 'Superávit moderado (+250-350 kcal) sincronizado con las horas de entrenamiento',
    tuNutrilensApproach: {
      strategy: 'Sincronización peri-entrenamiento (Nutrient Timing): Distribuye carbohidratos de asimilación controlada antes y después de tus sesiones registradas mediante tu smartwatch.',
      micronutrientFocus: ['Creatina natural en dieta', 'Zinc y Vitamina D3 (eje hormonal)', 'Electrolitos biodisponibles'],
      metabolicAdjustment: 'Ajuste semanal según velocidad de ganancia: 0.25% - 0.5% del peso corporal para asegurar que es músculo y no grasa.',
      dailyFlexibility: 'Ajuste de días de descanso con reducción selectiva de hidratos y aumento de ácidos grasos monoinsaturados.',
    },
    competitorApproach: {
      strategy: 'Superávit indiscriminado que termina en ganancia descontrolada de grasa visceral.',
      flaw: 'No discrimina cuándo entrenas ni qué calidad tienen las fuentes proteicas.',
      calorieRestriction: 'Suma 500 kcal fijas todos los días, incluso cuando pasas el domingo en el sofá.',
    },
  },
  {
    id: 'digestive-health',
    title: 'Salud Digestiva y Sensibilidades (SIBO/FODMAP)',
    targetUser: 'Gente con hinchazón, digestiones pesadas, colon irritable o intolerancias',
    icon: 'Sparkles',
    goal: 'Eliminar inflamación abdominal identificando disparadores en tiempo real',
    tuNutrilensApproach: {
      strategy: 'Detección visual de alimentos fermentables (FODMAPs) y alertas tempranas en el plato antes de dar el primer bocado.',
      micronutrientFocus: ['Glutamina y zinc carnosina', 'Fibra soluble no irritante', 'Polifenoles antiinflamatorios'],
      metabolicAdjustment: 'Fases progresivas: eliminación estratégica, desinflamación y reintroducción guiada con registro de síntomas visual.',
      dailyFlexibility: 'Sustitutos inteligentes instantáneos: si escaneas un plato con ajo/cebolla concentrada, te sugiere cómo equilibrarlo.',
    },
    competitorApproach: {
      strategy: 'Inexistente. Las apps tradicionales no tienen la menor idea de qué es un FODMAP o la permeabilidad intestinal.',
      flaw: 'Te recomienda barritas procesadas llenas de polialcoholes y edulcorantes que empeoran drásticamente la hinchazón.',
      calorieRestriction: 'Enfocado únicamente en calorías, perpetuando problemas digestivos crónicos.',
    },
  },
  {
    id: 'glucose-longevity',
    title: 'Control Glucémico y Anti-Envejecimiento',
    targetUser: 'Resistencia a la insulina, prediabetes o personas buscando longevidad celular',
    icon: 'HeartPulse',
    goal: 'Aplanar curvas de glucosa y maximizar autofagia con alimentos reales de bajo impacto',
    tuNutrilensApproach: {
      strategy: 'Orden de ingesta inteligente (Smart Sequencing): Te enseña a comer primero las verduras y fibra, luego proteínas y grasas, y al final los hidratos para reducir el pico de glucosa hasta un 73%.',
      micronutrientFocus: ['Cromo y ácido alfa lipoico', 'Polifenoles del cacao y frutos rojos', 'Ácido acético natural'],
      metabolicAdjustment: 'Análisis de carga glucémica total del plato escaneado mediante reconocimiento de almidones resistentes.',
      dailyFlexibility: 'Si vas a consumir un postre, te indica qué compensación de caminata o fibra previa neutraliza el pico.',
    },
    competitorApproach: {
      strategy: 'Trata 50g de carbohidratos de brócoli exactamente igual que 50g de carbohidratos de refresco.',
      flaw: 'Causa caídas energéticas, picos de insulina y hambre voraz a las 2 horas de comer.',
      calorieRestriction: 'No evalúa la respuesta hormonal a los alimentos.',
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'scanner',
    question: '¿Cómo logra TuNutriLens tanta precisión al escanear un plato?',
    answer: 'A diferencia de las apps que solo leen códigos de barras o buscan palabras en texto, TuNutriLens utiliza un modelo de visión artificial multimodal 3D entrenado con más de 4.8 millones de platos reales. Analiza el volumen, la textura superficial, los brillos de aceites/salsas y la densidad de cada ingrediente segmentado para calcular los gramos exactos sin necesidad de báscula.',
  },
  {
    category: 'scanner',
    question: '¿Qué pasa con los platos caseros o de restaurantes con salsas mezcladas?',
    answer: 'Esa es precisamente nuestra mayor ventaja frente a MyFitnessPal y Yuka. TuNutriLens cuenta con detección espectral de capas. Si tienes un guiso de lentejas, un curry o una ensalada con aderezo, el escáner identifica los ingredientes base y estima la presencia de aceites y grasas de cocción con un margen de error menor al 3.2%.',
  },
  {
    category: 'plans',
    question: '¿En qué se diferencian los planes de TuNutriLens de una dieta tradicional de internet?',
    answer: 'Las apps antiguas te asignan un número de calorías estático (por ejemplo 1.800 kcal) calculado con una fórmula genérica de hace 40 años. TuNutriLens crea un plan dinámico y adaptativo: si duermes mal, si tu reloj inteligente detecta más gasto calórico o si sales a cenar el fin de semana, el plan se recalibra en tiempo real sin culpas ni restricciones absurdas, asegurando salud hormonal y adherencia a largo plazo.',
  },
  {
    category: 'plans',
    question: '¿Toma en cuenta alergias, intolerancias o patologías como SIBO o resistencia a la insulina?',
    answer: 'Sí, totalmente. Al configurar tu perfil puedes marcar más de 40 condiciones clínicas y digestivas (celiaquía, intolerancia a la lactosa, FODMAPs, diabetes tipo 2, SOP, hipotiroidismo, etc.). TuNutriLens adaptará las recomendaciones de micronutrientes y te avisará si un plato escaneado contiene ingredientes conflictivos.',
  },
  {
    category: 'general',
    question: 'Ya tengo el dominio comprado y quiero usar TuNutriLens, ¿cuándo puedo empezar?',
    answer: '¡Excelente noticia! Puedes apuntarte en esta misma web para obtener el enlace directo de descarga para iOS y Android, con soporte directo de nuestro equipo de nutricionistas colegiados.',
  },
  {
    category: 'general',
    question: '¿Puedo importar mi historial previo de MyFitnessPal o Apple Health?',
    answer: 'Sí. TuNutriLens cuenta con sincronización nativa en 1 clic con Apple Health, Google Health Connect y exportadores de MyFitnessPal, para que no pierdas ni un solo día de tus registros históricos de peso y macros.',
  },
];

export const KEY_STATS = [
  { value: '98.4%', label: 'Precisión media en escaneo de comida real', detail: 'Frente al 58% de estimaciones en apps tradicionales' },
  { value: '< 2 seg', label: 'Tiempo para registrar un plato completo', detail: 'Frente a 5-7 minutos buscando ingredientes a mano' },
  { value: '4.8M+', label: 'Platos analizados con validación de laboratorio', detail: 'Base de datos 100% verificada por nutricionistas' },
  { value: '91%', label: 'Tasa de adherencia a los 6 meses', detail: 'El doble que los métodos basados en dietas restrictivas rígidas' },
];
