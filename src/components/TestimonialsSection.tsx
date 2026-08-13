import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/roofingData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const item = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#121417] text-[#E4E3DF] border-t border-[#22262C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-4">
          Client & Architect Observations
        </div>

        <div className="relative bg-[#181A1D] border border-[#2A2E35] p-8 sm:p-16 space-y-10 shadow-2xl">
          
          {/* Quote Icon */}
          <div className="flex items-center justify-between border-b border-[#2A2E35] pb-6">
            <Quote className="w-12 h-12 text-[#8C7355]" />
            <span className="font-mono text-xs text-[#A09D96] uppercase tracking-widest">
              Record 0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
          </div>

          {/* Large Editorial Quote */}
          <blockquote className="font-display font-medium text-2xl sm:text-4xl text-white leading-snug tracking-tight">
            "{item.quote}"
          </blockquote>

          {/* Author Details & Controls */}
          <div className="pt-8 border-t border-[#2A2E35] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-display font-bold text-lg text-white uppercase tracking-wide">
                {item.author}
              </div>
              <div className="text-xs text-[#8C7355] uppercase tracking-wider font-semibold mt-0.5">
                {item.role} • {item.location}
              </div>
              <div className="text-xs text-[#A09D96] mt-1 font-mono">
                Roof System: {item.roofType}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-3 bg-[#121417] hover:bg-[#22262C] text-[#C2C0BA] hover:text-white border border-[#2A2E35] transition-colors"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-3 bg-[#121417] hover:bg-[#22262C] text-[#C2C0BA] hover:text-white border border-[#2A2E35] transition-colors"
                aria-label="Next quote"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
