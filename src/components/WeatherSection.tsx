import React, { useState } from 'react';
import { Sun, CloudRain, Snowflake, Wind, ShieldCheck, Thermometer, Droplets } from 'lucide-react';
import { HERO_IMAGE } from '../data/roofingData';

export const WeatherSection: React.FC = () => {
  const [activeWeather, setActiveWeather] = useState<'sun' | 'rain' | 'ice' | 'wind'>('rain');

  const weatherModes = [
    {
      id: 'rain',
      label: 'Heavy Torrential Rain',
      icon: CloudRain,
      metric: '0.00% Water Intrusion',
      title: 'Water Isolation & Flow Dynamics',
      description: 'Integrated self-healing rubberized ice & water barriers, continuous solder-welded copper valleys, and deep drip edge profiles channel water safely into gutter systems without sub-membrane backing.',
      specs: [
        'High-density synthetic non-woven underlayment',
        'Continuous concealed flashing along roof hips',
        'Zero-leak seal around all pipe boots & chimneys',
      ],
      filterStyle: 'brightness(0.85) contrast(1.15) hue-rotate(180deg)',
    },
    {
      id: 'wind',
      label: '150+ MPH Wind Uplift',
      icon: Wind,
      metric: 'Category 5 Certified',
      title: 'Aerodynamic Lock & Fastener Matrix',
      description: 'Concealed mechanical seam clips allow micro-sliding under intense atmospheric pressure differentials, eliminating fastener shear and preventing panel tear-off.',
      specs: [
        'Heavy 24-gauge structural steel standing seams',
        'Dual-locking starter strip perimeter anchoring',
        'Tested to UL 580 Class 90 uplift standards',
      ],
      filterStyle: 'brightness(0.9) contrast(1.2) saturate(0.8)',
    },
    {
      id: 'sun',
      label: 'Extreme Thermal Heat',
      icon: Sun,
      metric: '70% Solar Reflectance',
      title: 'Radiant Heat Barrier & UV Defense',
      description: 'Kynar 500 resin coatings and ceramic granule formulations reflect solar radiation, maintaining cooler attic temperatures and preventing roof deck thermal warping.',
      specs: [
        'Cool Roof Rating Council (CRRC) compliant',
        'Reduces attic thermal load by up to 35°F',
        'UV-resistant pigments preventing color chalking',
      ],
      filterStyle: 'brightness(1.1) contrast(1.05) sepia(0.2)',
    },
    {
      id: 'ice',
      label: 'Freezing Ice & Snow',
      icon: Snowflake,
      metric: 'Freeze-Thaw Immune',
      title: 'Thermal Expansion & Ice Dam Defense',
      description: 'Flexible underlayment membranes accommodate extreme temperature swings from -20°F to 140°F without cracking, while snow guards prevent heavy roof avalanches.',
      specs: [
        'Full-eave ice dam barrier protection',
        'Solid brass and bronze snow guard arrays',
        'Zero thermal bridging through sub-deck insulation',
      ],
      filterStyle: 'brightness(0.95) contrast(1.1) hue-rotate(200deg)',
    },
  ];

  const currentMode = weatherModes.find((m) => m.id === activeWeather) || weatherModes[0];

  return (
    <section className="py-24 sm:py-32 bg-[#181A1D] text-[#E4E3DF] border-t border-[#2A2E35] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2 flex items-center space-x-2">
              <Thermometer className="w-4 h-4" />
              <span>Environmental Resilience</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              BUILT FOR THE WEATHER
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            Simulate environmental stress conditions to examine how Vanguard roof systems defend against torrential rain, hurricane winds, radiant heat, and freeze-thaw cycles.
          </p>
        </div>

        {/* Weather Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {weatherModes.map((mode) => {
            const IconComponent = mode.icon;
            const isActive = mode.id === activeWeather;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveWeather(mode.id as any)}
                className={`p-4 sm:p-5 text-left border transition-all duration-300 flex items-center space-x-3 ${
                  isActive
                    ? 'bg-[#8C7355] border-[#A88C68] text-white shadow-xl'
                    : 'bg-[#121417] border-[#2A2E35] text-[#A09D96] hover:border-[#424854] hover:text-white'
                }`}
              >
                <IconComponent className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#8C7355]'}`} />
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm uppercase tracking-wide">
                    {mode.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Environmental Simulator Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121417] border border-[#2A2E35] p-6 sm:p-10 relative">
          
          {/* Left Column: Atmospheric Roofing Canvas */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#2A2E35] bg-[#0E1012]">
            <img
              src={HERO_IMAGE}
              alt="Weather resilient roof system"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-1000"
              style={{ filter: currentMode.filterStyle }}
            />

            {/* Subtle Weather Ambient Overlay */}
            {activeWeather === 'rain' && (
              <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay animate-pulse pointer-events-none" />
            )}
            {activeWeather === 'sun' && (
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-color-dodge pointer-events-none" />
            )}
            {activeWeather === 'ice' && (
              <div className="absolute inset-0 bg-cyan-900/20 mix-blend-color pointer-events-none" />
            )}

            {/* Live Metric Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-[#181A1D]/90 border border-[#8C7355] backdrop-blur-md px-5 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8C7355] font-bold">
                Performance Metric
              </div>
              <div className="font-display font-black text-xl text-white tracking-wide">
                {currentMode.metric}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#181A1D] p-6 sm:p-8 border border-[#2A2E35]">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C7355] flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#8C7355]" />
                <span>Structural Defense Protocol</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white uppercase leading-snug">
                {currentMode.title}
              </h3>

              <p className="text-sm text-[#C2C0BA] leading-relaxed">
                {currentMode.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-[#2A2E35]">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  Engineering Specifications:
                </div>
                {currentMode.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#A09D96]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355] mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#121417] border-l-2 border-[#8C7355] text-xs text-[#E4E3DF] font-mono">
              VERIFIED UNDER EXTREME ENVIRONMENTAL LOAD
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
