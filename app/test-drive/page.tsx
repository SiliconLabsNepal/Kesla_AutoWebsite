"use client";
import React, { useState } from 'react';
import { hatchbacks } from '@/data/models';
import { dealers } from '@/data/dealers';
import { Button } from '@/components/ui/Button';
import { submitTestDrive } from '@/lib/api';

export default function TestDrive() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    modelId: '',
    dealerId: '',
    preferredDate: '',
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const modelName = hatchbacks.find((m) => m.id === formData.modelId)?.name || '';
      await submitTestDrive({ ...formData, modelName });
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Book a <span className="text-primary">Test Drive</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Experience the thrill of electric performance. Schedule your drive today.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface-container-high -z-10 -translate-y-1/2"></div>
          <div className={`absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-colors duration-300 ${step >= num ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(74,139,194,0.4)]' : 'bg-surface-container border border-outline-variant/30 text-outline-variant'}`}>
              {num}
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-8 border-b border-outline-variant/10 pb-4">1. Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">First Name</label>
                  <input type="text" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary focus:shadow-[0_1px_0_0_#4A8BC2]" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Last Name</label>
                  <input type="text" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary focus:shadow-[0_1px_0_0_#4A8BC2]" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Phone Number</label>
                  <input type="tel" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary focus:shadow-[0_1px_0_0_#4A8BC2]" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Email Address</label>
                  <input type="email" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary focus:shadow-[0_1px_0_0_#4A8BC2]" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button variant="primary" onClick={handleNext}>Continue to Vehicles</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-8 border-b border-outline-variant/10 pb-4">2. Select Model & Dealer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Choose Vehicle</label>
                  <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.modelId} onChange={(e) => setFormData({...formData, modelId: e.target.value})}>
                    <option value="">Select a Model</option>
                    {hatchbacks.map(m => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Choose Dealership</label>
                  <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.dealerId} onChange={(e) => setFormData({...formData, dealerId: e.target.value})}>
                    <option value="">Select Dealership</option>
                    {dealers.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.location})</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={handlePrev}>Back</Button>
                <Button variant="primary" onClick={handleNext}>Continue to Schedule</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-8 border-b border-outline-variant/10 pb-4">3. Schedule</h2>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Preferred Date & Time</label>
                <input type="datetime-local" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary w-full md:w-1/2" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={handlePrev}>Back</Button>
                <Button variant="primary" onClick={submitForm} disabled={submitting}>
                  {submitting ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-primary rounded-full shadow-[0_0_30px_rgba(74,139,194,0.5)]"></div>
              </div>
              <h2 className="text-4xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
                Booking <span className="text-primary">Confirmed</span>
              </h2>
              <p className="text-on-surface-variant font-body text-lg mb-8 max-w-md mx-auto">
                Thank you, {formData.firstName}. Your test drive has been requested. Our representative will be in touch shortly to confirm.
              </p>
              <Button variant="secondary" href="/">Return to Home</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
