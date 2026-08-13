import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';
import { PROTECT_FOOTER_IMAGE } from '../data/roofingData';

interface ClosingCtaProps {
  onRequestAssessment: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onRequestAssessment }) => {
  return (
    <section className="relative py-32 sm:py-44 px-6 sm:px-8 overflow-hidden bg-[#0E1012] border-t border-[#2A2E35]">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={PROTECT_FOOTER_IMAGE}
          alt="Dramatic slate roof and copper flashing at golden hour"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012] via-[#0E1012]/70 to-[#0E1012]" />
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#181A1D]/90 border border-[#8C7355]/50 backdrop-blur-md">
          <Shield className="w-4 h-4 text-[#8C7355]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E4E3DF] font-bold">
            Vanguard System Defense
          </span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
          PROTECT WHAT'S<br />
          <span className="text-[#8C7355]">UNDERNEATH.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#C2C0BA] max-w-2xl mx-auto font-normal leading-relaxed">
          Schedule a comprehensive on-site roof assessment and thermal scan. Precision material engineering tailored specifically for your property.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestAssessment}
            className="px-10 py-5 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-2xl shadow-black border border-[#A88C68] flex items-center space-x-3 group"
          >
            <span>REQUEST AN ASSESSMENT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
