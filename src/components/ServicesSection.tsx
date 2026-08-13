import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/roofingData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onRequestAssessment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestAssessment,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('service-replacement');

  const selectedService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#121417] text-[#E4E3DF] border-t border-[#22262C] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Full Scope Capabilities</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              ROOFING SERVICES
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            Precision engineered roofing solutions ranging from complete estate replacements to thermal leak diagnostics and storm damage restoration.
          </p>
        </div>

        {/* Large Typography Editorial Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left List: Large Typography Item Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {SERVICES_DATA.map((srv) => {
              const isActive = srv.id === activeServiceId;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveServiceId(srv.id)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#181A1D] border-[#8C7355] text-white shadow-xl translate-x-1'
                      : 'bg-[#121417] border-[#2A2E35] text-[#A09D96] hover:border-[#424854] hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <span className="font-mono text-xs uppercase font-bold text-[#8C7355]">
                      {srv.code}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-[#8C7355] transition-colors">
                        {srv.title}
                      </h3>
                      <div className="text-xs text-[#8E8B82] mt-0.5 line-clamp-1">
                        {srv.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-[#8C7355] translate-x-1' : 'text-[#A09D96] group-hover:translate-x-1'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Panel: Large Imagery & Detailed Scope Display */}
          <div className="lg:col-span-6 bg-[#181A1D] border border-[#2A2E35] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Visual Panel */}
            <div className="relative aspect-[16/9] overflow-hidden border border-[#2A2E35] bg-[#0E1012]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1D] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-widest text-white bg-[#121417]/80 px-3 py-1 border border-[#8C7355]/40 backdrop-blur-md">
                Scope: {selectedService.code}
              </div>
            </div>

            {/* Description & Scope Checklist */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-2xl text-white uppercase">
                {selectedService.title}
              </h4>

              <p className="text-sm text-[#C2C0BA] leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#2A2E35]">
                <div className="text-xs uppercase tracking-widest font-bold text-[#8C7355]">
                  Execution Standards:
                </div>
                {selectedService.details.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#E4E3DF]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Trigger */}
            <button
              onClick={onRequestAssessment}
              className="w-full py-4 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 transition-all border border-[#A88C68] shadow-lg"
            >
              <span>Schedule Service Assessment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
