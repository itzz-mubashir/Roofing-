import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialIntro } from './components/EditorialIntro';
import { MaterialsSection } from './components/MaterialsSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesSection } from './components/ServicesSection';
import { WeatherSection } from './components/WeatherSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';

export default function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  const handleOpenAssessment = () => {
    setAssessmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121417] text-[#E4E3DF] font-sans selection:bg-[#8C7355] selection:text-white">
      {/* Top Header Navbar */}
      <Navbar onRequestAssessment={handleOpenAssessment} />

      <main>
        {/* Fullscreen Hero */}
        <Hero onRequestAssessment={handleOpenAssessment} />

        {/* Editorial Statement */}
        <EditorialIntro />

        {/* Premium Roofing Materials Specification */}
        <MaterialsSection />

        {/* Distinctive Projects Portfolio */}
        <ProjectsPortfolio onRequestAssessment={handleOpenAssessment} />

        {/* Interactive Before & After Transformation */}
        <BeforeAfterSection />

        {/* Sophisticated Services Showcase */}
        <ServicesSection onRequestAssessment={handleOpenAssessment} />

        {/* Built for the Weather Simulator */}
        <WeatherSection />

        {/* 4-Step Engineering Process */}
        <ProcessSection onRequestAssessment={handleOpenAssessment} />

        {/* Minimal Credibility Standards */}
        <CredibilitySection />

        {/* Editorial Quotes & Testimonials */}
        <TestimonialsSection />

        {/* Full-width Closing Call to Action */}
        <ClosingCta onRequestAssessment={handleOpenAssessment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Multi-step Assessment Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
      />
    </div>
  );
}
