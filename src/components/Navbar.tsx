import React, { useState } from 'react';
import { Smartphone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group" id="brand-logo-link">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-emerald-500/30 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/logo.svg"
                alt="TuNutriLens"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
                TuNutri<span className="text-emerald-600">Lens</span>
              </span>
              <p className="text-[10px] font-semibold text-slate-500 tracking-wide hidden sm:block">
                Por Gala Rodríguez • Univ. de Navarra
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#como-funciona" className="hover:text-emerald-600 transition-colors">
              Cómo Funciona
            </a>
            <a href="#comparativa" className="hover:text-emerald-600 transition-colors">
              Comparativa
            </a>
            <a href="#creadora" className="hover:text-emerald-600 transition-colors">
              La Creadora
            </a>
            <a href="#descargar" className="hover:text-emerald-600 transition-colors">
              Descargar
            </a>
          </nav>

          {/* Action Button: Download App */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-download-btn"
              onClick={onOpenWaitlist}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-sm shadow-emerald-600/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Descargar App</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Cómo Funciona
          </a>
          <a
            href="#comparativa"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Comparativa vs Otras Apps
          </a>
          <a
            href="#creadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            La Creadora (Gala Rodríguez)
          </a>
          <a
            href="#descargar"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Descargar
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Descargar App Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
