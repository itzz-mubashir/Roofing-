import React from 'react';
import { PROCESS_STEPS } from '../data/roofingData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onRequestAssessment: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onRequestAssessment,
}) => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#121417] text-[#E4E3DF] border-t border-[#22262C] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2">
              Methodology & Execution
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              OUR 4-STEP PROCESS
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            A disciplined engineering workflow built around forensic diagnostics, precise material specification, master craftsmanship, and rigorous quality audits.
          </p>
        </div>

        {/* 4-Step Grid with Oversized Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="bg-[#181A1D] border border-[#2A2E35] p-8 flex flex-col justify-between hover:border-[#8C7355] transition-all duration-500 group relative"
            >
              {/* Oversized Step Number */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#2A2E35] pb-4">
                  <span className="font-display font-black text-6xl text-[#8C7355]/40 group-hover:text-[#8C7355] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A09D96]">
                    Phase 0{index + 1}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight group-hover:text-[#8C7355] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C7355] tracking-wider uppercase mt-1">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A09D96] leading-relaxed pt-2 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-[#2A2E35] mt-6 space-y-2">
                <div className="text-[10px] uppercase tracking-widest font-bold text-white">
                  Key Deliverables:
                </div>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#C2C0BA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7355] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#181A1D] border border-[#2A2E35] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-display font-bold text-2xl text-white uppercase">
              Ready to begin Phase 01: Forensic Assessment?
            </h3>
            <p className="text-sm text-[#A09D96]">
              Schedule an on-site structural moisture scan and material consultation with our lead technical director.
            </p>
          </div>

          <button
            onClick={onRequestAssessment}
            className="px-8 py-4 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.25em] font-bold flex items-center space-x-3 transition-colors shrink-0 shadow-lg border border-[#A88C68]"
          >
            <span>Initiate Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
