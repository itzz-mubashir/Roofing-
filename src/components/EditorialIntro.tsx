import React from 'react';
import { Shield, Layers, Umbrella, Cpu } from 'lucide-react';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#121417] text-[#E4E3DF] border-t border-[#22262C] relative overflow-hidden">
      {/* Editorial Decorative Grid lines */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#8C7355]" />
              <span>Philosophy & Craft</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-5xl tracking-tight text-white uppercase leading-[1.05]">
              YOUR ROOF DOES MORE THAN COVER YOUR HOME.
            </h2>

            <div className="w-20 h-1 bg-[#8C7355]" />
          </div>

          {/* Right Body Text Column with Editorial Spacing */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#C2C0BA] leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl text-white font-medium leading-snug">
              It is your property's first defense against extreme environmental forces, thermal load, and structural aging.
            </p>

            <p>
              A true architectural roof is a complex, high-performance system. The difference between standard contractor work and master-level roofing lies in what is unseen: membrane adhesion, flashing geometry, deck ventilation dynamics, and copper joinery.
            </p>

            <p>
              At <strong className="text-white font-semibold">Vanguard Roofing Systems</strong>, we reject superficial cosmetic installs. Every slate shingle, standing seam metal panel, and Class 4 asphalt roof we install is custom engineered to deliver uncompromising weather resistance, architectural permanence, and commanding curb appeal.
            </p>

            {/* Editorial Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#2A2E35]">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#181A1D] border border-[#2A2E35] text-[#8C7355] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-sm tracking-wide">
                    Zero-Leak Geometry
                  </h3>
                  <p className="text-xs text-[#A09D96] mt-1 leading-normal">
                    Custom soldered copper valleys and step flashings that direct heavy rain completely away from roof joints.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#181A1D] border border-[#2A2E35] text-[#8C7355] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-sm tracking-wide">
                    Multi-Layer Armor
                  </h3>
                  <p className="text-xs text-[#A09D96] mt-1 leading-normal">
                    Self-healing ice & water underlayment applied across all eaves, valleys, and structural roof hips.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#181A1D] border border-[#2A2E35] text-[#8C7355] shrink-0">
                  <Umbrella className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-sm tracking-wide">
                    Extreme Wind Uplift
                  </h3>
                  <p className="text-xs text-[#A09D96] mt-1 leading-normal">
                    Engineered mechanical fastening systems verified to withstand continuous 150+ MPH Category 5 winds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#181A1D] border border-[#2A2E35] text-[#8C7355] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-sm tracking-wide">
                    Thermal Massing
                  </h3>
                  <p className="text-xs text-[#A09D96] mt-1 leading-normal">
                    Continuous ridge airflow and reflective underlayments to reduce attic heat buildup and HVAC energy loss.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
