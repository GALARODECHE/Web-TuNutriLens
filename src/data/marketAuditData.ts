export interface CompetitorScore {
  name: string;
  score: number;
  note?: string;
  badge?: string;
}

export interface DimensionAudit {
  id: number;
  title: string;
  shortTitle: string;
  category: string;
  scores: {
    tunutrilens: number;
    myfitnesspal: number;
    yuka: number;
    calai: number;
    myrealfood: number;
  };
  marketProblem: string;
  tunutrilensAdvantage: string[];
  rivalAnalysis: {
    myfitnesspal: { verdict: string; detail: string };
    yuka: { verdict: string; detail: string };
    calai: { verdict: string; detail: string };
    myrealfood: { verdict: string; detail: string };
  };
}

export const COMPETITORS = [
  { id: 'tunutrilens', name: 'TuNutriLens™', score: '10/10', color: 'bg-emerald-100 text-[#096121] border-[#096121]', isWinner: true },
  { id: 'myrealfood', name: 'MyRealFood', score: '4.7/10', color: 'bg-amber-50 text-amber-900 border-amber-300', isWinner: false },
  { id: 'yuka', name: 'Yuka', score: '4.3/10', color: 'bg-stone-100 text-stone-800 border-stone-300', isWinner: false },
  { id: 'calai', name: 'Cal AI / Foodvisor', score: '3.1/10', color: 'bg-orange-50 text-orange-900 border-orange-300', isWinner: false },
  { id: 'myfitnesspal', name: 'MyFitnessPal', score: '2.2/10', color: 'bg-rose-50 text-rose-900 border-rose-300', isWinner: false },
];

export const KEY_THESIS = {
  title: 'Análisis Comparativo de Funcionalidades',
  text: 'TuNutriLens integra en una sola aplicación el reconocimiento visual de platos cocinados, la lectura bromatológica de etiquetado y la detección de alimentos en nevera para la reducción del desperdicio alimentario doméstico.',
  source: 'Análisis comparativo de funcionalidades públicas y modelos de servicio disponibles en el mercado (2026). Datos nutricionales basados en BEDCA, USDA y EFSA.'
};

export const MARKET_DIMENSIONS: DimensionAudit[] = [
  {
    id: 1,
    title: 'Visión Triple Integrada (Plato + Supermercado + Nevera)',
    shortTitle: 'Visión Triple Integrada',
    category: 'Tecnología Visual & Escaneo',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 3,
      yuka: 4,
      calai: 6,
      myrealfood: 4
    },
    marketProblem: 'El usuario tiene que usar 3 apps distintas: una para contar calorías (MyFitnessPal), otra para el supermercado (Yuka) y la imaginación para ver qué cocina con lo que le sobra en la nevera.',
    tunutrilensAdvantage: [
      'Escáner de Plato: Reconoce ingredientes visibles, cocciones y guarniciones estimando gramos y macros.',
      'Escáner de Supermercado: Lee códigos de barras y etiquetas analizando lista de ingredientes y grado de procesamiento.',
      'Cámara de Nevera en Vivo: Enfoca baldas y cajones para detectar alimentos frescos próximos a caducar.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Inexistente en cocina y nevera',
        detail: 'Solo busca textos en buscador o lee códigos de barras. No reconoce platos cocinados por foto con precisión ni tiene modo nevera.'
      },
      yuka: {
        verdict: 'Solo código de barras',
        detail: 'Estrictamente limitada a envases con código EAN. Cero reconocimiento de comida real en plato o en frigorífico.'
      },
      calai: {
        verdict: 'Solo foto estática de plato',
        detail: 'Solo analiza una foto estática de plato con modelos genéricos anglosajones. Sin escáner de supermercado ni detector de nevera.'
      },
      myrealfood: {
        verdict: 'Código de barras y fotos en red social',
        detail: 'Sin visión computacional en vivo ni escaneo inteligente de nevera.'
      }
    }
  },
  {
    id: 2,
    title: 'Detector de Nevera Anti-Desperdicio (Residuo Cero)',
    shortTitle: 'Nevera Anti-Desperdicio',
    category: 'Sostenibilidad & Economía',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 0,
      yuka: 0,
      calai: 0,
      myrealfood: 2
    },
    marketProblem: 'En España se tiran más de 1.200 millones de kilos de comida al año (unos 250 € - 300 € por hogar al año perdidos en la basura según el Ministerio de Agricultura y Alimentación MAPA).',
    tunutrilensAdvantage: [
      'Visión por cámara para registrar vegetales, lácteos, carnes y verduras que tienes abiertos.',
      'Generador de recetas de rescate adaptadas a tus ingredientes disponibles en menos de 5 segundos.',
      'Contador en tiempo real de Dinero Ahorrado (€) y Kg de CO2 prevenidos.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'No existe',
        detail: 'Ninguna función para gestionar sobras, caducidades ni recetas de despensa.'
      },
      yuka: {
        verdict: 'No existe',
        detail: 'No interactúa con lo que tienes guardado en casa ni en despensa.'
      },
      calai: {
        verdict: 'No existe',
        detail: 'Centrada exclusivamente en calorías estéticas individuales sin gestión de inventario.'
      },
      myrealfood: {
        verdict: 'Recetario estático manual',
        detail: 'Buscador manual de recetas por texto, pero sin reconocimiento visual de tu nevera ni cálculo de ahorro económico.'
      }
    }
  },
  {
    id: 3,
    title: 'Índice de Salud Mediterránea (ISM 0-100) vs Calorías Vacías',
    shortTitle: 'Índice ISM vs Calorías Vacías',
    category: 'Rigor Nutricional & Salud',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 2,
      yuka: 6,
      calai: 4,
      myrealfood: 7
    },
    marketProblem: 'El conteo calórico ciego es biológicamente obsoleto: 400 kcal de galletas ultraprocesadas "0% azúcares" tienen el mismo número en MyFitnessPal que 400 kcal de lentejas estofadas con verduras y AOVE, pero un impacto metabólico radicalmente opuesto.',
    tunutrilensAdvantage: [
      'Puntuación ISM de 0 a 100 ponderando grasas monoinsaturadas (ácido oleico), antioxidantes, fibra fermentable y matriz alimentaria.',
      'Semáforo nutricional visual por colores (verde, ámbar, rojo) para tomar decisiones al instante sin ansiedad.',
      'Diferenciación estricta entre carbohidratos complejos / fibra y azúcares libres añadidos.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Ciego a la calidad biológica',
        detail: 'Promueve el modelo IIFYM ("If It Fits Your Macros") donde lo único que importa es no pasarse del número, incentivando ultraprocesados light.'
      },
      yuka: {
        verdict: 'Algoritmo rígido con sesgos',
        detail: 'Penaliza alimentos grasos cardiosaludables tradicionales (como el jamón ibérico o ciertos quesos artesanos) por su alto contenido lipídico o calórico.'
      },
      calai: {
        verdict: 'Calorías y macros estándar',
        detail: 'No calcula índices de longevidad ni micronutrientes protectores para la salud metabólica.'
      },
      myrealfood: {
        verdict: 'Clasificación Nova cualitativa',
        detail: 'Distingue comida real y ultraprocesados, pero carece de algoritmo clínico cuantitativo (ISM) que pondere densidades nutricionales completas.'
      }
    }
  },
  {
    id: 4,
    title: 'Semáforo Toxicológico de Aditivos (EFSA) y Alérgenos',
    shortTitle: 'Semáforo de Aditivos & Alérgenos',
    category: 'Seguridad Alimentaria & Tóxicos',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 1,
      yuka: 8,
      calai: 0,
      myrealfood: 5
    },
    marketProblem: 'Muchos productos "fitness" y "proteicos" de supermercado están repletos de edulcorantes artificiales (sucralosa, acesulfamo K), emulsionantes (E466, E433) y fosfatos que dañan la microbiota intestinal.',
    tunutrilensAdvantage: [
      'Identificación de códigos E y nombres comunes con dictámenes de la Autoridad Europea de Seguridad Alimentaria (EFSA).',
      'Distinción entre aditivos inocuos (ácido ascórbico, lecitina) y aditivos controvertidos o potencialmente nocivos para la barrera intestinal.',
      'Detección personalizada de los 14 alérgenos de declaración obligatoria (gluten, lactosa, frutos de cáscara, etc.).'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Inexistente',
        detail: 'No analiza aditivos químicos, edulcorantes artificiales ni su impacto en la salud metabólica.'
      },
      yuka: {
        verdict: 'Buen análisis de aditivos',
        detail: 'Yuka destaca en este punto con información clara. TuNutriLens iguala este rigor y lo conecta directamente al plato cocinado y a la etapa vital.'
      },
      calai: {
        verdict: 'Inexistente',
        detail: 'No tiene lector de aditivos ni de ingredientes químicos.'
      },
      myrealfood: {
        verdict: 'Básico',
        detail: 'Menciona ingredientes pero sin fichas toxicológicas detalladas de cada aditivo.'
      }
    }
  },
  {
    id: 5,
    title: 'Nutrición Personalizada por Etapas Vitales',
    shortTitle: 'Personalización por Etapas Vitales',
    category: 'Personalización Clínica',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 2,
      yuka: 0,
      calai: 2,
      myrealfood: 3
    },
    marketProblem: 'Las necesidades de una mujer embarazada (ácido fólico, yodo, hierro) o en peri/postmenopausia (calcio, vitamina D3, fitoquímicos) no tienen nada que ver con las de un varón deportista de 25 años. Las apps tratan a todos con la misma fórmula de Harris-Benedict genérica.',
    tunutrilensAdvantage: [
      'Perfiles específicos: Adulto estándar, Rendimiento Deportivo, Embarazo/Lactancia, Menopausia/Salud Ósea, Tercera Edad y Crecimiento.',
      'Alertas preventivas de alimentos prohibidos o de riesgo (ej: toxoplasmosis y listeriosis en embarazo).',
      'Objetivos automáticos para 10 micronutrientes clave (hierro, calcio, magnesio, B12, zinc, potasio, folatos).'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Fórmula fija estándar',
        detail: 'Solo ajusta calorías y reparto de macros según peso y objetivo de peso corporal.'
      },
      yuka: {
        verdict: 'No existe perfil biológico',
        detail: 'Misma nota para cualquier persona sin importar edad o estado fisiológico.'
      },
      calai: {
        verdict: 'Solo modo fitness',
        detail: 'Ajuste de déficit calórico para perder peso o superávit para ganar músculo, sin enfoque en salud hormonal o reproductiva.'
      },
      myrealfood: {
        verdict: 'Planes genéricos',
        detail: 'Sin motor de prescripción de micronutrientes por etapa fisiológica.'
      }
    }
  },
  {
    id: 6,
    title: 'Menú Semanal Inteligente + Lista de Compra por Pasillos',
    shortTitle: 'Menú Semanal + Lista por Pasillos',
    category: 'Planificación & Organización',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 3,
      yuka: 0,
      calai: 1,
      myrealfood: 6
    },
    marketProblem: 'Tener una lista de comidas y luego tener que escribir a mano qué comprar en el súper hace que la gente abandone sus dietas en menos de 2 semanas.',
    tunutrilensAdvantage: [
      'Generación automática con IA de 7 días completos (desayuno, comida, cena y snacks).',
      'Generación instantánea de lista de la compra clasificada por pasillos (Frutería, Carnicería, Pescadería, Despensa, etc.).',
      'Exportación e impresión en PDF limpio para llevar en el móvil o pegar en la nevera.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Muy limitado bajo de pago',
        detail: 'Requiere plan Premium caro y no genera listas de la compra organizadas por pasillos de supermercados europeos.'
      },
      yuka: {
        verdict: 'No existe',
        detail: 'No ofrece menús ni listas de compras.'
      },
      calai: {
        verdict: 'Solo registro reactivo',
        detail: 'Solo sirve para registrar lo que ya comiste, no para planificar tu semana con antelación.'
      },
      myrealfood: {
        verdict: 'Menús predefinidos rígidos',
        detail: 'Cuenta con menús semanales en su suscripción de pago, pero menos flexibles y sin integración de sobras de nevera.'
      }
    }
  },
  {
    id: 7,
    title: 'Bases de Datos Científicas Verificadas (BEDCA / EFSA / USDA)',
    shortTitle: 'Bases Científicas Verificadas',
    category: 'Fiabilidad Científica',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 3,
      yuka: 6,
      calai: 5,
      myrealfood: 6
    },
    marketProblem: 'MyFitnessPal permite que cualquier usuario suba alimentos a la base pública. El resultado: existen 50 entradas distintas para "Plátano", algunas con 0 calorías y otras con 300 kcal, arruinando cualquier rigor analítico.',
    tunutrilensAdvantage: [
      'Datos nutricionales basados en la Base de Datos Española de Composición de Alimentos (BEDCA), CIQUAL y USDA oficial.',
      'Algoritmos de visión computacional calibrados para porciones reales del sur de Europa.',
      'Valores de micronutrientes y oligoelementos validados sin datos basura introducidos por terceros.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Base comunitaria caótica',
        detail: 'Millones de registros no verificados con errores garrafales que distorsionan el balance diario.'
      },
      yuka: {
        verdict: 'OpenFoodFacts comunitaria',
        detail: 'Depende de las fotos y datos que suben los usuarios, con errores ocasionales en etiquetado.'
      },
      calai: {
        verdict: 'IA sin fuentes transparentes',
        detail: 'Estimaciones basadas en modelos cerrados sin enlace a fuentes clínicas contrastables.'
      },
      myrealfood: {
        verdict: 'Base española propietaria',
        detail: 'Buena base de productos españoles pero con catálogo más acotado.'
      }
    }
  },
  {
    id: 8,
    title: 'Privacidad Sanitaria Europea (Art. 9 RGPD) & Cero Rastreadores',
    shortTitle: 'Privacidad Sanitaria (Art. 9 RGPD)',
    category: 'Ética, Privacidad & RGPD',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 2,
      yuka: 8,
      calai: 4,
      myrealfood: 5
    },
    marketProblem: 'Muchas aplicaciones convencionales incluyen publicidad programática de terceros, rastreadores comerciales o políticas de privacidad bajo normativas extracomunitarias.',
    tunutrilensAdvantage: [
      'Alojamiento en infraestructura con cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679).',
      'Experiencia de usuario limpia sin publicidad programática de terceros.',
      'Control total: el usuario puede borrar o exportar sus datos de hábitos en cualquier momento.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Modelo con publicidad y rastreadores',
        detail: 'Su versión gratuita incorpora publicidad de redes externas de anunciantes y políticas de compartición publicitaria estándar en EE.UU.'
      },
      yuka: {
        verdict: 'Independiente sin publicidad',
        detail: 'Yuka mantiene un modelo de negocio independiente basado en suscripción sin venta de datos ni anuncios publicitarios.'
      },
      calai: {
        verdict: 'Jurisdicción estadounidense',
        detail: 'Compañía radicada en EE.UU. con términos de servicio sujetos principalmente a la normativa norteamericana.'
      },
      myrealfood: {
        verdict: 'Ecosistema comercial propio',
        detail: 'Integra un catálogo comercial y recomendaciones vinculadas a productos de su propia plataforma y colaboradores.'
      }
    }
  },
  {
    id: 9,
    title: 'Precio Justo, Transparente y Sin Letra Pequeña',
    shortTitle: 'Precio Justo & Sin Letra Pequeña',
    category: 'Relación Calidad / Precio',
    scores: {
      tunutrilens: 10,
      myfitnesspal: 4,
      yuka: 7,
      calai: 3,
      myrealfood: 6
    },
    marketProblem: 'Apps como Cal AI o MyFitnessPal cobran hasta 79,99 € - 119,99 € al año con tácticas de renovación automática difíciles de cancelar, o planes mensuales desproporcionados de casi 20 €/mes.',
    tunutrilensAdvantage: [
      'Plan Gratuito real para siempre (5 fotos al mes + acceso a Descubrir y recetas).',
      'Plan Pro desde 4,99 €/mes (59,99 €/año) con informes en PDF y 40 escaneos.',
      'Tarifa Ilimitada a 7,49 €/mes (89,99 €/año) con uso total de los 3 escáneres sin cortes (con Política de Uso Justo de hasta 600 fotos/mes para evitar el uso indiscriminado).',
      'Transparencia total: 7 días de prueba con cancelación garantizada y sin permanencia forzosa.'
    ],
    rivalAnalysis: {
      myfitnesspal: {
        verdict: 'Coste elevado para ver anuncios',
        detail: 'La versión gratuita está saturada de banners y la versión Premium cuesta hasta 19,99 €/mes o 79,99 €/año.'
      },
      yuka: {
        verdict: 'Económica pero muy limitada',
        detail: 'Es barata (15€/año), pero porque solo escanea códigos de barras y no ofrece diario, recetas de nevera ni menús.'
      },
      calai: {
        verdict: 'Muy cara con suscripciones agresivas',
        detail: 'Precios de 9,99 € a 29,99 € al mes con pruebas gratuitas que se renuevan automáticamente si no estás atento.'
      },
      myrealfood: {
        verdict: 'Precio medio',
        detail: 'Alrededor de 4,99 € a 6,99 € al mes o 39,99 € al año por funciones de comunidad y menús estáticos.'
      }
    }
  }
];

export const TOTAL_AVERAGES = {
  tunutrilens: '10 / 10',
  myfitnesspal: '2.2 / 10',
  yuka: '4.3 / 10',
  calai: '3.1 / 10',
  myrealfood: '4.7 / 10'
};
