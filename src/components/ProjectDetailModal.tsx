import React from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestAssessment: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestAssessment,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#121417] border border-[#2A2E35] max-w-4xl w-full max-h-[90vh] overflow-y-auto text-[#E4E3DF] relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#181A1D] text-[#A09D96] hover:text-white border border-[#2A2E35] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-[#0E1012]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-[#8C7355] text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
              {project.category}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Details Grid */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#181A1D] p-4 border border-[#2A2E35]">
            <div>
              <div className="flex items-center text-[10px] uppercase text-[#A09D96] tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#8C7355]" />
                Location
              </div>
              <div className="font-bold text-xs text-white">{project.location}</div>
            </div>

            <div>
              <div className="flex items-center text-[10px] uppercase text-[#A09D96] tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#8C7355]" />
                Completion
              </div>
              <div className="font-bold text-xs text-white">{project.completionTime} ({project.year})</div>
            </div>

            <div>
              <div className="flex items-center text-[10px] uppercase text-[#A09D96] tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5 mr-1 text-[#8C7355]" />
                Scale / Pitch
              </div>
              <div className="font-bold text-xs text-white">{project.squareFootage} • {project.pitch}</div>
            </div>

            <div>
              <div className="flex items-center text-[10px] uppercase text-[#A09D96] tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#8C7355]" />
                Primary Material
              </div>
              <div className="font-bold text-xs text-white line-clamp-1">{project.material}</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C7355]">
              Project Engineering Overview
            </h3>
            <p className="text-sm sm:text-base text-[#C2C0BA] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3 pt-4 border-t border-[#2A2E35]">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-white">
              Technical Execution Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-[#C2C0BA] bg-[#181A1D] p-3 border border-[#2A2E35]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#2A2E35] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A09D96]">
              Interested in a similar roof system for your property?
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestAssessment();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Request System Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
