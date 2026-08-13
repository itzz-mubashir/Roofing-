import React from 'react';
import { CREDIBILITY_ITEMS } from '../data/roofingData';
import { ShieldCheck } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#181A1D] text-[#E4E3DF] border-t border-[#2A2E35] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#8C7355]" />
              <span>Standards & Compliance</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              STANDARDS OF CRAFTSMANSHIP
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            Grounded in rigorous technical qualifications, unyielding safety protocols, and uncompromising material standards.
          </p>
        </div>

        {/* Minimal 5-Item Editorial List Layout */}
        <div className="divide-y divide-[#2A2E35] border-y border-[#2A2E35]">
          {CREDIBILITY_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center hover:bg-[#121417]/50 px-4 transition-colors group"
            >
              <div className="lg:col-span-1 font-mono text-sm text-[#8C7355] font-bold">
                0{index + 1}
              </div>

              <div className="lg:col-span-5 font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#8C7355] transition-colors">
                {item.title}
              </div>

              <div className="lg:col-span-6 text-sm text-[#A09D96] leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
