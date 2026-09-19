import React from 'react';

interface TuNutriLensLogoProps {
  className?: string;
  size?: number | string;
  withText?: boolean;
  withBadge?: boolean;
}

export const TuNutriLensLogo: React.FC<TuNutriLensLogoProps> = ({
  className = '',
  size = 44,
  withText = false,
  withBadge = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative shrink-0 overflow-hidden shadow-md shadow-emerald-900/15 transition-transform duration-200"
        style={{
          width: typeof size === 'number' ? `${size}px` : size,
          height: typeof size === 'number' ? `${size}px` : size,
          borderRadius: typeof size === 'number' ? `${Math.round(size * 0.24)}px` : '24%',
        }}
      >
        <img
          src="/logo.svg"
          alt="TuNutriLens Logo Oficial"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {withText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
              TuNutri<span className="text-emerald-600">Lens</span>
            </span>
            {withBadge && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                IA Visión 3D
              </span>
            )}
          </div>
          <p className="text-[11px] font-medium text-slate-500 -mt-0.5 tracking-wide">
            Nutrición inteligente de máxima precisión
          </p>
        </div>
      )}
    </div>
  );
};
