import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';

interface NavbarProps {
  onRequestAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAssessment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Materials', href: '#materials' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#121417]/90 backdrop-blur-md py-4 border-b border-[#2A2E35]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-[#8C7355] bg-[#181A1D] flex items-center justify-center text-[#E4E3DF] group-hover:border-[#E4E3DF] transition-colors">
            <Shield className="w-5 h-5 text-[#8C7355] group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-[0.2em] text-lg text-white leading-none">
              VANGUARD
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A09D96] font-medium mt-1">
              Roofing Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#C2C0BA] hover:text-white transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C7355] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Action */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onRequestAssessment}
            className="group relative inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#8C7355] hover:bg-[#A38766] transition-all duration-300 shadow-lg shadow-black/40 border border-[#A88C68]"
          >
            <span>Request an Assessment</span>
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#C2C0BA] hover:text-white border border-[#2C3038] bg-[#181A1D]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#121417]/98 backdrop-blur-xl border-t border-[#2A2E35] flex flex-col justify-between p-8 z-50 animate-fadeIn">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7355] font-bold block border-b border-[#2A2E35] pb-2">
              Navigation Menu
            </span>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold tracking-wider text-white hover:text-[#8C7355] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#2A2E35]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAssessment();
              }}
              className="w-full py-4 bg-[#8C7355] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2"
            >
              <span>Request an Assessment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-[#8E8B82] tracking-wider uppercase text-center pt-2">
              Protection • Precision • Permanence
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
