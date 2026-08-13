import React, { useState } from 'react';
import { AssessmentFormData } from '../types';
import { X, Check, ShieldCheck, ArrowRight, ArrowLeft, Calendar, MapPin, Building, Sparkles } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<AssessmentFormData>({
    propertyType: 'Residential Estate',
    roofAge: '15-25 Years',
    serviceNeeded: 'Full System Replacement',
    preferredMaterial: 'Standing Seam Metal',
    address: '',
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#121417] border border-[#2A2E35] max-w-2xl w-full text-[#E4E3DF] relative shadow-2xl overflow-hidden">
        
        {/* Top Bar Header */}
        <div className="p-6 bg-[#181A1D] border-b border-[#2A2E35] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#8C7355] text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                REQUEST A ROOF ASSESSMENT
              </h3>
              <div className="text-[10px] text-[#8C7355] uppercase tracking-widest font-mono">
                Vanguard Technical Inspection Protocol
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A09D96] hover:text-white border border-[#2A2E35] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {submitted ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#8C7355]/20 border-2 border-[#8C7355] text-[#8C7355] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-black text-2xl text-white uppercase">
                  ASSESSMENT REQUEST RECEIVED
                </h4>
                <p className="text-sm text-[#C2C0BA] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our Lead Technical Director will review your property details for <span className="text-[#8C7355] font-semibold">{formData.address || 'your property'}</span> and contact you within 24 hours to confirm your on-site inspection.
                </p>
              </div>

              <div className="p-4 bg-[#181A1D] border border-[#2A2E35] text-left max-w-md mx-auto space-y-2 font-mono text-xs">
                <div className="text-[#8C7355] font-bold border-b border-[#2A2E35] pb-1 uppercase">
                  Assessment Summary:
                </div>
                <div>Service: {formData.serviceNeeded}</div>
                <div>System: {formData.preferredMaterial}</div>
                <div>Target Date: {formData.preferredDate || 'Earliest Available'}</div>
              </div>

              <button
                onClick={resetForm}
                className="px-8 py-3 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.2em] font-bold"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step Indicator */}
              <div className="flex items-center justify-between border-b border-[#2A2E35] pb-4">
                <div className="text-xs uppercase tracking-widest font-mono text-[#8C7355]">
                  Step 0{step} of 03
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 w-8 rounded-full transition-all ${
                        s <= step ? 'bg-[#8C7355]' : 'bg-[#2A2E35]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* STEP 1: Property & Roof Scope */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-white">
                      1. Property Architecture Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Residential Estate',
                        'Commercial Property',
                        'Historic Home',
                        'Multi-Family',
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type as any })}
                          className={`p-3 text-left border text-xs uppercase tracking-wider font-semibold transition-all ${
                            formData.propertyType === type
                              ? 'bg-[#8C7355] border-[#A88C68] text-white'
                              : 'bg-[#181A1D] border-[#2A2E35] text-[#A09D96] hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-white">
                      2. Primary Service Required
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Full System Replacement',
                        'Specialized Metal/Slate System',
                        'Storm Damage Assessment',
                        'Precision Leak Repair',
                        'Comprehensive Inspection',
                      ].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceNeeded: srv as any })}
                          className={`p-3 text-left border text-xs uppercase tracking-wider font-semibold transition-all ${
                            formData.serviceNeeded === srv
                              ? 'bg-[#8C7355] border-[#A88C68] text-white'
                              : 'bg-[#181A1D] border-[#2A2E35] text-[#A09D96] hover:text-white'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Preferred Material & Age */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-white">
                      3. Preferred Material System
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Standing Seam Metal',
                        'Natural Quarried Slate',
                        'Luxury Asphalt Shingles',
                        'Architectural Clay Tile',
                        'Unsure / Need Expert Recommendation',
                      ].map((mat) => (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredMaterial: mat as any })}
                          className={`p-3 text-left border text-xs uppercase tracking-wider font-semibold transition-all ${
                            formData.preferredMaterial === mat
                              ? 'bg-[#8C7355] border-[#A88C68] text-white'
                              : 'bg-[#181A1D] border-[#2A2E35] text-[#A09D96] hover:text-white'
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-white">
                      4. Approximate Roof Age
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['0-5 Years', '5-15 Years', '15-25 Years', '25+ Years / Unknown'].map((age) => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setFormData({ ...formData, roofAge: age as any })}
                          className={`p-3 text-left border text-xs uppercase tracking-wider font-semibold transition-all ${
                            formData.roofAge === age
                              ? 'bg-[#8C7355] border-[#A88C68] text-white'
                              : 'bg-[#181A1D] border-[#2A2E35] text-[#A09D96] hover:text-white'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Address */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                      Property Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 1042 Highland Crest Way"
                      className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-white mb-1">
                      Additional Property Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe any active leaks, recent storm events, or architectural specifics..."
                      className="w-full bg-[#181A1D] border border-[#2A2E35] p-3 text-sm text-white focus:outline-none focus:border-[#8C7355]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-[#2A2E35] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 bg-[#181A1D] border border-[#2A2E35] text-xs uppercase tracking-wider font-semibold text-[#A09D96] hover:text-white flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#8C7355] hover:bg-[#A38766] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center space-x-2 border border-[#A88C68] shadow-lg"
                  >
                    <span>Submit Assessment Request</span>
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
