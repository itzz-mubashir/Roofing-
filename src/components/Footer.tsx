import React from 'react';
import { Shield, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0E1012] text-[#A09D96] border-t border-[#2A2E35] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#8C7355] bg-[#181A1D] flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-[#8C7355]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-[0.2em] text-lg text-white leading-none">
                  VANGUARD
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C7355] font-semibold mt-1">
                  Roofing Systems
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed max-w-sm">
              Engineered architectural roofing systems designed for lasting protection, structural precision, and permanence. Specialized in standing seam alloy, natural Vermont slate, clay tile, and Class 4 impact shingles.
            </p>

            <div className="space-y-2 text-xs text-[#C2C0BA] pt-2 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#8C7355]" />
                <span>Regional Headquarters & Fabrication Facility</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8C7355]" />
                <span>Direct Line: (800) 555-ROOF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#8C7355]" />
                <span>Assessments: contact@vanguardroofing.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-white border-b border-[#2A2E35] pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-widest">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Roofing Services</a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors">Materials Specification</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">4-Step Process</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Philosophy & Craft</a>
              </li>
            </ul>
          </div>

          {/* Local Service Regions & SEO */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-white border-b border-[#2A2E35] pb-2">
              Regional Coverage
            </h4>
            <p className="text-xs text-[#8E8B82] leading-relaxed">
              Serving premier residential estates, commercial developments, and historic properties across regional metros, coastal zones, and mountain communities.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {['Metro Estates', 'Coastal Slopes', 'High Alpine', 'Historic Districts', 'Commercial Corridors'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-[#181A1D] border border-[#2A2E35] text-[10px] uppercase font-mono text-[#8C7355]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2E35] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8B82]">
          <div>
            © {new Date().getFullYear()} Vanguard Roofing Systems. All Rights Reserved. Protection • Precision • Permanence.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#181A1D] hover:bg-[#22262C] text-[#C2C0BA] hover:text-white border border-[#2A2E35] transition-colors flex items-center space-x-2"
            aria-label="Back to top"
          >
            <span className="text-[10px] uppercase tracking-widest font-mono">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
