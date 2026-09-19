import React from 'react';
import { Mail, ShieldCheck, Heart, Smartphone } from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-emerald-500/40">
                <img src="/logo.svg" alt="TuNutriLens" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                TuNutri<span className="text-emerald-400">Lens</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              La app de nutrición con visión de alta precisión y planes clínicos personalizados. Diseñada por <strong className="text-slate-200">Gala Rodríguez Echebarrieta</strong>, Diplomada en Nutrición Humana y Dietética por la Universidad de Navarra.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contacto:</span>
              <a href="mailto:contacto@tunutrilens.es" className="text-emerald-400 hover:text-emerald-300 font-semibold underline">
                contacto@tunutrilens.es
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:text-white transition-colors">
                  Comparativa vs Apps
                </a>
              </li>
              <li>
                <a href="#creadora" className="hover:text-white transition-colors">
                  Gala Rodríguez (Creadora)
                </a>
              </li>
              <li>
                <a href="#descargar" className="hover:text-white transition-colors">
                  Descargar App
                </a>
              </li>
            </ul>
          </div>

          {/* Download Quick Card */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Descargar App
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Descarga TuNutriLens y empieza a cuidar tu salud con respaldo clínico.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Descargar / Reservar</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TuNutriLens. Creada por Gala Rodríguez Echebarrieta. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="mailto:contacto@tunutrilens.es" className="hover:text-slate-200">
              contacto@tunutrilens.es
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Privacidad y Salud Protegida
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
