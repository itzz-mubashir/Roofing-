import React from 'react';
import { ArrowDownRight, ShieldCheck, Wind, Award } from 'lucide-react';
import { HERO_IMAGE } from '../data/roofingData';

interface HeroProps {
  onRequestAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAssessment }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 overflow-hidden bg-[#121417]">
      {/* Background Image Layer with Cinematic Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Cinematic architectural standing seam metal roof at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite_alternate] transition-transform duration-[10000ms]"
          style={{ animationDuration: '20s' }}
        />
        {/* Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-[#121417]/60" />
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto pt-12">
        <div className="max-w-3xl">
          {/* Category Eyebrow Tag */}
          <div className="inline-flex items-center space-x-3 px-3 py-1.5 bg-[#181A1D]/90 border border-[#8C7355]/40 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8C7355] animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E4E3DF] font-semibold">
              Architectural Roofing Systems
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92] mb-8">
            BUILT ABOVE.<br />
            <span className="text-[#8C7355] underline decoration-[#8C7355]/30 underline-offset-8">
              BUILT TO LAST.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-[#C5C3BC] font-normal leading-relaxed max-w-2xl mb-10 border-l-2 border-[#8C7355] pl-6 py-1">
            Premium roofing systems designed for lasting protection, performance, and curb appeal.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onRequestAssessment}
              className="px-8 py-4 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-2xl shadow-black/80 border border-[#A88C68] flex items-center justify-center space-x-3 group"
            >
              <span>REQUEST AN ASSESSMENT</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              className="px-8 py-4 bg-[#181A1D]/80 hover:bg-[#22262C] text-[#E4E3DF] hover:text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 border border-[#2F343D] flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>EXPLORE OUR WORK</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 border-t border-[#2A2E35]/80 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="flex items-center space-x-4 bg-[#181A1D]/80 p-4 border border-[#2A2E35] backdrop-blur-md">
          <div className="p-2.5 bg-[#8C7355]/10 border border-[#8C7355]/30 text-[#8C7355]">
            <Wind className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-lg text-white tracking-wide">150+ MPH RATED</div>
            <div className="text-[11px] text-[#A09D96] uppercase tracking-wider">Category 5 Wind Uplift Defense</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-[#181A1D]/80 p-4 border border-[#2A2E35] backdrop-blur-md">
          <div className="p-2.5 bg-[#8C7355]/10 border border-[#8C7355]/30 text-[#8C7355]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-lg text-white tracking-wide">CLASS 4 IMPACT</div>
            <div className="text-[11px] text-[#A09D96] uppercase tracking-wider">UL 2218 Hail Resistance</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-[#181A1D]/80 p-4 border border-[#2A2E35] backdrop-blur-md">
          <div className="p-2.5 bg-[#8C7355]/10 border border-[#8C7355]/30 text-[#8C7355]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-lg text-white tracking-wide">ZERO-LEAK GUARANTEE</div>
            <div className="text-[11px] text-[#A09D96] uppercase tracking-wider">Precision Drip & Flashing</div>
          </div>
        </div>
      </div>
    </section>
  );
};
