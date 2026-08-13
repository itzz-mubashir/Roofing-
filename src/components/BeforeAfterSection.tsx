import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_IMAGE, AFTER_IMAGE } from '../data/roofingData';
import { SlidersHorizontal, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#181A1D] text-[#E4E3DF] border-t border-[#2A2E35] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2 flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Interactive Roof Overhaul</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              BEFORE & AFTER TRANSFORMATION
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            Drag the divider line to compare a severely deteriorated residential roof system with Vanguard’s precision standing seam metal replacement.
          </p>
        </div>

        {/* Draggable Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] w-full max-w-5xl mx-auto border-2 border-[#2A2E35] overflow-hidden select-none cursor-ew-resize bg-[#0E1012] shadow-2xl"
        >
          {/* AFTER Image (Full background) */}
          <img
            src={AFTER_IMAGE}
            alt="Transformed Precision Standing Seam Metal Roof"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* AFTER Label Badge */}
          <div className="absolute top-6 right-6 z-10 px-4 py-2 bg-[#8C7355]/95 backdrop-blur-md text-white text-xs uppercase tracking-[0.2em] font-bold border border-[#A88C68] shadow-lg flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Vanguard Metal System (AFTER)</span>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={BEFORE_IMAGE}
              alt="Deteriorated Weathered Asphalt Roof"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            />

            {/* BEFORE Label Badge */}
            <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-[#121417]/95 backdrop-blur-md text-[#E4E3DF] text-xs uppercase tracking-[0.2em] font-bold border border-[#2A2E35] shadow-lg flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Aged Weathered Roof (BEFORE)</span>
            </div>
          </div>

          {/* Draggable Split Handle Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-1 bg-[#8C7355] shadow-[0_0_15px_rgba(140,115,85,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#8C7355] border-2 border-white flex items-center justify-center text-white shadow-2xl cursor-ew-resize">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Comparison Details Grid Below */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Before Issues Card */}
          <div className="p-6 bg-[#121417] border border-[#2A2E35] space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-amber-500 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Prior Conditions</span>
            </div>
            <ul className="space-y-2 text-xs text-[#A09D96]">
              <li className="flex items-start space-x-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Granule loss and curling asphalt shingles exposing structural sub-decking.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Active moisture intrusion along chimney flashings and valley troughs.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Susceptible to wind tear-off above 60 MPH gusts.</span>
              </li>
            </ul>
          </div>

          {/* After Upgrades Card */}
          <div className="p-6 bg-[#121417] border border-[#8C7355]/40 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C7355] flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#8C7355]" />
              <span>Vanguard Engineering Upgrades</span>
            </div>
            <ul className="space-y-2 text-xs text-[#C2C0BA]">
              <li className="flex items-start space-x-2">
                <span className="text-[#8C7355] font-bold">•</span>
                <span>24-Gauge standing seam metal panels with 100% concealed clip mechanical locks.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#8C7355] font-bold">•</span>
                <span>High-temperature ice & water shield barrier installed across entire roof deck.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#8C7355] font-bold">•</span>
                <span>150+ MPH Category 5 wind uplift rating with zero maintenance requirement.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
