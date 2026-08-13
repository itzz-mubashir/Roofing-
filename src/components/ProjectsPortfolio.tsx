import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/roofingData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Eye, ArrowUpRight, Compass } from 'lucide-react';

interface ProjectsPortfolioProps {
  onRequestAssessment: () => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  onRequestAssessment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Roof Replacement',
    'Metal Roofing',
    'Storm Damage Restoration',
    'Roof Repair',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#121417] text-[#E4E3DF] border-t border-[#22262C] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E35] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2 flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              DISTINCTIVE ROOFING WORK
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md mt-4 md:mt-0 font-normal">
            An asymmetric editorial showcase of completed roof replacements, standing seam alloy systems, historic slate restorations, and structural storm recoveries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#8C7355] text-white border-[#A88C68] shadow-md'
                  : 'bg-[#181A1D] text-[#A09D96] border-[#2A2E35] hover:border-[#424854] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetric col spans: alternating wide (7 cols) and narrow (5 cols) layouts
            const isWide = index % 2 === 0;
            const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpanClass} group cursor-pointer bg-[#181A1D] border border-[#2A2E35] hover:border-[#8C7355]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden relative`}
              >
                {/* Image Container with Roof Focus */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1012]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181A1D] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#121417]/90 border border-[#8C7355]/40 text-[#E4E3DF] text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-5 py-2.5 bg-[#8C7355] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Project Details</span>
                    </div>
                  </div>
                </div>

                {/* Content Footer */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#A09D96] uppercase tracking-widest mb-2 font-mono">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase group-hover:text-[#8C7355] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#A09D96] mt-2 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Specifications Footer Line */}
                  <div className="pt-4 border-t border-[#2A2E35] flex items-center justify-between text-xs text-[#C2C0BA]">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#8C7355]">
                      {project.material}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A09D96] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestAssessment={onRequestAssessment}
      />
    </section>
  );
};
