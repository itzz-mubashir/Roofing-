import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/roofingData';
import { MaterialItem } from '../types';
import { CheckCircle2, Shield, Wind, Sparkles, Scale, Clock } from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('asphalt');

  const selectedMaterial: MaterialItem =
    MATERIALS_DATA.find((m) => m.id === selectedId) || MATERIALS_DATA[0];

  return (
    <section id="materials" className="py-24 sm:py-32 bg-[#181A1D] text-[#E4E3DF] border-t border-[#2A2E35] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2">
              Architectural Specifications
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              PREMIUM ROOFING MATERIALS
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            Select a material system to examine macro craftsmanship, wind resistance ratings, structural weight profiles, and performance engineering.
          </p>
        </div>

        {/* Material Selection Tabs Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {MATERIALS_DATA.map((mat) => {
            const isActive = mat.id === selectedId;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedId(mat.id)}
                className={`p-5 text-left border transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-[#22262C] border-[#8C7355] text-white shadow-xl'
                    : 'bg-[#121417]/80 border-[#2A2E35] text-[#A09D96] hover:border-[#424854] hover:text-white'
                }`}
              >
                {/* Active Indicator Top Edge */}
                {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-[#8C7355]" />}
                
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C7355] mb-1">
                  System 0{MATERIALS_DATA.findIndex(m => m.id === mat.id) + 1}
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide uppercase">
                  {mat.name}
                </div>
                <div className="text-xs text-[#8E8B82] mt-1 line-clamp-1 font-normal">
                  {mat.specs.lifespan}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Material Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#121417] border border-[#2A2E35] p-6 sm:p-10 relative">
          
          {/* Left Column: Large Close-Up Photography with Macro Detail */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="relative group overflow-hidden border border-[#2A2E35] aspect-[4/3] bg-[#0E1012]">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Macro Texture Tag */}
              <div className="absolute bottom-4 left-4 bg-[#181A1D]/90 border border-[#8C7355]/40 backdrop-blur-md px-4 py-2 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#8C7355]" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">
                  Macro Craftsmanship Detail
                </span>
              </div>
            </div>

            {/* Material Tagline & Summary */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7355]">
                {selectedMaterial.tagline}
              </div>
              <p className="text-base text-[#C2C0BA] leading-relaxed">
                {selectedMaterial.description}
              </p>
            </div>
          </div>

          {/* Right Column: Technical Specs & Performance Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#181A1D] p-6 sm:p-8 border border-[#2A2E35]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C7355] border-b border-[#2A2E35] pb-3 mb-6">
                Engineering Metrics
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3 bg-[#121417] border border-[#2A2E35]">
                  <div className="flex items-center text-[10px] uppercase tracking-wider text-[#A09D96] mb-1">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-[#8C7355]" />
                    <span>Lifespan</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">{selectedMaterial.specs.lifespan}</div>
                </div>

                <div className="p-3 bg-[#121417] border border-[#2A2E35]">
                  <div className="flex items-center text-[10px] uppercase tracking-wider text-[#A09D96] mb-1">
                    <Wind className="w-3.5 h-3.5 mr-1.5 text-[#8C7355]" />
                    <span>Wind Rating</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">{selectedMaterial.specs.windRating}</div>
                </div>

                <div className="p-3 bg-[#121417] border border-[#2A2E35]">
                  <div className="flex items-center text-[10px] uppercase tracking-wider text-[#A09D96] mb-1">
                    <Scale className="w-3.5 h-3.5 mr-1.5 text-[#8C7355]" />
                    <span>System Weight</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">{selectedMaterial.specs.weight}</div>
                </div>

                <div className="p-3 bg-[#121417] border border-[#2A2E35]">
                  <div className="flex items-center text-[10px] uppercase tracking-wider text-[#A09D96] mb-1">
                    <Shield className="w-3.5 h-3.5 mr-1.5 text-[#8C7355]" />
                    <span>Impact Defense</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">{selectedMaterial.specs.impactClass}</div>
                </div>
              </div>

              {/* Material Key Features */}
              <div className="space-y-3 mb-8">
                <div className="text-xs uppercase tracking-widest font-bold text-white mb-2">
                  System Features:
                </div>
                {selectedMaterial.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#C2C0BA]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best For Callout */}
            <div className="p-4 bg-[#121417] border-l-2 border-[#8C7355] border-t border-r border-b border-[#2A2E35]">
              <div className="text-[10px] uppercase tracking-wider text-[#8C7355] font-bold">
                Ideal Application
              </div>
              <p className="text-xs text-[#E4E3DF] mt-1 italic">
                "{selectedMaterial.bestFor}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
