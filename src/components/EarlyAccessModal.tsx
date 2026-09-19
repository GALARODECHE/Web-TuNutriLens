import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Gift, Smartphone, Apple } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const [goal, setGoal] = useState('fat-loss');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    const randomCode = 'TNL-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(randomCode);
    setIsSubmitted(true);

    try {
      localStorage.setItem(
        'tunutrilens_download_request',
        JSON.stringify({ name, email, platform, goal, code: randomCode, date: new Date().toISOString() })
      );
    } catch {
      // Ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2A23]/70 backdrop-blur-xs font-mono-carrd text-[#2B2A23] animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-[1.75rem] p-6 sm:p-8 shadow-[8px_8px_0px_#2B2A23] border-[3px] border-[#2B2A23]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#2B2A23] hover:bg-[#EF9AA0]/40 transition-colors border border-[#2B2A23]"
          aria-label="Cerrar ventana"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF9AA0] text-[#66363A] text-xs font-bold border border-[#2B2A23]">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Acceso y Descarga Inmediata</span>
              </div>

              <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-[#2B2A23] tracking-[-0.05rem]">
                Descarga TuNutriLens
              </h3>

              <p className="text-xs sm:text-sm text-[#2B2A23]/90 leading-relaxed">
                Empieza a escanear platos y nevera en 1 segundo con criterio de <strong className="text-[#2B2A23]">Gala Rodríguez (Univ. de Navarra)</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2A23] mb-1">
                  Tu Teléfono
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlatform('ios')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border-2 border-[#2B2A23] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      platform === 'ios'
                        ? 'bg-[#2B2A23] text-white shadow-[2px_2px_0px_#2B2A23]'
                        : 'bg-white text-[#2B2A23] hover:bg-slate-50'
                    }`}
                  >
                    <Apple className="w-4 h-4" />
                    <span>iPhone (iOS)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlatform('android')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border-2 border-[#2B2A23] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      platform === 'android'
                        ? 'bg-[#2B2A23] text-white shadow-[2px_2px_0px_#2B2A23]'
                        : 'bg-white text-[#2B2A23] hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Android</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2A23] mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#2B2A23] text-sm focus:bg-white outline-none bg-white text-[#2B2A23]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2A23] mb-1">
                  Correo Electrónico (para recibir el enlace)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#2B2A23] text-sm focus:bg-white outline-none bg-white text-[#2B2A23]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2A23] mb-1">
                  Tu Objetivo
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#2B2A23] text-xs sm:text-sm outline-none bg-white text-[#2B2A23]"
                >
                  <option value="fat-loss">Pérdida de grasa sin ansiedad ni efecto rebote</option>
                  <option value="muscle">Ganancia de masa muscular y rendimiento</option>
                  <option value="digestive">Salud digestiva (SIBO, FODMAPs, inflamación)</option>
                  <option value="health">Mejorar energía y relación con la comida</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#096121] hover:bg-[#074e1a] text-white font-bold text-sm border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] transition-all cursor-pointer"
                >
                  <span>Obtener Enlace de Descarga Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#2B2A23]/70 text-center">
              <ShieldCheck className="w-4 h-4 text-[#096121]" />
              <span>Dudas directas: <a href="mailto:contacto@tunutrilens.es" className="font-bold underline text-[#2B2A23]">contacto@tunutrilens.es</a></span>
            </div>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-[#2B2A23] text-[#096121] mx-auto flex items-center justify-center shadow-[3px_3px_0px_#2B2A23]">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-bricolage text-2xl font-bold text-[#2B2A23]">
                ¡Enlace Enviado, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2A23] max-w-sm mx-auto">
                Hemos enviado tu enlace para <strong className="text-[#096121]">{platform === 'ios' ? 'iPhone (App Store)' : 'Android'}</strong> a <strong className="underline">{email}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border-2 border-[#2B2A23] shadow-[3px_3px_0px_#2B2A23] max-w-xs mx-auto text-center">
              <span className="text-[10px] uppercase font-bold text-[#2B2A23]/70 tracking-wider block">
                Tu Código de Descarga
              </span>
              <span className="text-xl font-bold text-[#096121] tracking-widest mt-1 block">
                {reservationCode}
              </span>
              <span className="text-[11px] text-[#2B2A23] font-medium block mt-1">
                ✓ Se activará automáticamente al iniciar sesión
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#2B2A23] text-white font-bold text-xs hover:bg-black transition-colors cursor-pointer"
            >
              Cerrar y Volver a la Web
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
