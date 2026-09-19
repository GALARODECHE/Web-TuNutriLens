export interface ComparisonItem {
  id: string;
  category: 'scanning' | 'personalization' | 'experience';
  feature: string;
  description: string;
  tunutrilens: {
    value: string;
    detail: string;
    isSuperior: boolean;
  };
  competitorTraditional: {
    name: string; // ej. MyFitnessPal / Apps tradicionales
    value: string;
    detail: string;
    isInferior: boolean;
  };
  competitorBarcode: {
    name: string; // ej. Yuka / Escáneres de código de barras
    value: string;
    detail: string;
    isInferior: boolean;
  };
}

export interface DishScanDemo {
  id: string;
  name: string;
  category: string;
  image: string;
  confidenceScore: number;
  scanTime: string;
  totalCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  micronutrients: {
    name: string;
    amount: string;
    dailyValuePercent: number;
  }[];
  detectedItems: {
    name: string;
    weight: string;
    calories: number;
    confidence: number;
    color: string;
    x: number; // percentage for bounding marker
    y: number;
  }[];
  traditionalComparison: {
    traditionalTime: string;
    traditionalAccuracy: string;
    traditionalError: string;
    notes: string;
  };
}

export interface NutritionPlanProfile {
  id: string;
  title: string;
  targetUser: string;
  icon: string;
  goal: string;
  tuNutrilensApproach: {
    strategy: string;
    micronutrientFocus: string[];
    metabolicAdjustment: string;
    dailyFlexibility: string;
  };
  competitorApproach: {
    strategy: string;
    flaw: string;
    calorieRestriction: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'scanner' | 'plans' | 'general';
}
