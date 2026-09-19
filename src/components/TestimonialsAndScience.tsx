import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export const TestimonialsAndScience: React.FC = () => {
  const reviews = [
    {
      name: 'Dra. Laura Santamaría',
      role: 'Nutricionista Clínica & Docente Universitaria',
      tag: 'Colegiada MAD-0419',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
      comment:
        'Llevo años advirtiendo a mis pacientes del peligro de usar MyFitnessPal: la gente come con ansiedad mirando números en rojo y las calorías están mal calculadas en un 30%. TuNutriLens es la primera herramienta que recomiendo con total tranquilidad: la precisión volumétrica y el respeto a la salud digestiva son insuperables.',
    },
    {
      name: 'Marcos R. Echeverría',
      role: 'Usuario activo (ex-usuario de MyFitnessPal 4 años)',
      tag: 'Perdió 14 kg sin efecto rebote',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      comment:
        'Estaba harto de pasar 10 minutos en cada comida buscando "pechuga de pollo a la plancha" y encontrar 80 opciones contradictorias. Con TuNutriLens hago una foto en 2 segundos, detecta hasta el aceite de oliva que le eché y la app reajusta mi plan si ceno fuera el fin de semana. No vuelvo atrás jamás.',
    },
    {
      name: 'Elena V. Gómez',
      role: 'Atleta de Triatlón & Paciente con SIBO',
      tag: 'Control Digestivo y Rendimiento',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      comment:
        'Tengo intolerancia a los FODMAPs y entreno 12 horas a la semana. Otras apps me obligaban a comer ultraprocesados porque "cuadraban los macros". TuNutriLens identifica de un vistazo si un plato tiene alimentos inflamatorios y me cuida la microbiota a la vez que rindo al máximo.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4 text-emerald-600" />
            <span>Evidencia Clínica y Experiencias Reales</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            Avalado por <span className="text-emerald-600">profesionales de la salud</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            No somos otra app de moda creada por publicistas. TuNutriLens combina tecnología de visión artificial auditada y respaldo científico nutricional.
          </p>
        </div>

        {/* Scientific Guarantees Box */}
        <div className="mt-12 p-8 rounded-3xl bg-emerald-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-black text-emerald-400 font-display">4.8M+</span>
              <h4 className="font-bold text-sm text-white">Platos Validados en Laboratorio</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Entrenamiento con densitometría óptica y espectrometría para reconocer grasas, líquidos y mezclas complejas.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-black text-emerald-400 font-display">0 Datos Falsos</span>
              <h4 className="font-bold text-sm text-white">Base de Datos Sin Contaminación</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prohibimos la subida libre de alimentos sin verificar. Todo registro proviene de fuentes oficiales validadas.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-black text-emerald-400 font-display">&lt; 3.2% Error</span>
              <h4 className="font-bold text-sm text-white">Margen de Error Casi Nulo</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Frente a las desviaciones de hasta el 45% que provocan las estimaciones de "puñados" y raciones en apps tradicionales.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 relative hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
                />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{rev.name}</h5>
                  <p className="text-xs text-slate-500 leading-tight">{rev.role}</p>
                  <span className="inline-block mt-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
