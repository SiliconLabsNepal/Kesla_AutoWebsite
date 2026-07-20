"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { models } from '@/data/models';
import { dealers } from '@/data/dealers';
import { Button } from '@/components/ui/Button';
import { submitBooking } from '@/lib/api';

export default function BookYourCar() {
  const { slug } = useParams<{ slug: string }>();
  const model = models.find((m) => m.slug === slug);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    color: model?.colors[0]?.name || '',
    dealerId: '',
    preferredDate: '',
    notes: '',
  });

  if (!model) {
    notFound();
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitBooking({ modelSlug: model.slug, modelName: model.name, ...formData });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen bg-surface pt-32 pb-24">
        <div className="container max-w-2xl mx-auto text-center py-16 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-primary rounded-full shadow-[0_0_30px_rgba(74,139,194,0.5)]"></div>
          </div>
          <h2 className="text-4xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Booking <span className="text-primary">Confirmed</span>
          </h2>
          <p className="text-on-surface-variant font-body text-lg mb-8 max-w-md mx-auto">
            Thank you{formData.firstName ? `, ${formData.firstName}` : ''}. Your {model.name} booking request has been received. Our representative will be in touch shortly to confirm.
          </p>
          <Button variant="secondary" href="/">Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Book Your <span className="text-primary">Car</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Reserve your {model.name} today. Our dealer will contact you to finalize the details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Vehicle Specification Summary */}
          <div className="lg:col-span-2 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15 h-fit">
            <div className="relative w-full h-40 bg-white rounded-xl overflow-hidden mb-6">
              <Image src={model.image} alt={model.name} fill sizes="400px" className="object-contain p-4" />
            </div>
            <h3 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-1">
              {model.name}
            </h3>
            <p className="text-primary font-display text-sm tracking-widest uppercase mb-6">{model.price}</p>

            <ul className="space-y-3 text-sm font-body text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                <span>Range</span>
                <span className="text-on-background font-display">{model.range}</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                <span>Power</span>
                <span className="text-on-background font-display">{model.power}</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                <span>Battery</span>
                <span className="text-on-background font-display">{model.battery}</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                <span>Top Speed</span>
                <span className="text-on-background font-display">{model.topSpeed}</span>
              </li>
              <li className="flex justify-between">
                <span>Seats</span>
                <span className="text-on-background font-display">{model.seats}</span>
              </li>
            </ul>
          </div>

          {/* Booking Form */}
          <form onSubmit={submitForm} className="lg:col-span-3 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/15">
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-8 border-b border-outline-variant/10 pb-4">
              Your Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">First Name</label>
                <input type="text" required className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Last Name</label>
                <input type="text" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Phone Number</label>
                <input type="tel" required className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Email Address</label>
                <input type="email" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider mb-8 border-b border-outline-variant/10 pb-4">
              Vehicle Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {model.colors.length > 0 && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Preferred Color</label>
                  <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })}>
                    {model.colors.map((c) => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Preferred Dealership</label>
                <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.dealerId} onChange={(e) => setFormData({ ...formData, dealerId: e.target.value })}>
                  <option value="">Select Dealership</option>
                  {dealers.map((d) => (
                    <option key={d.id} value={d.id}>{d.name} ({d.location})</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Preferred Delivery Date</label>
                <input type="date" className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Additional Notes</label>
              <textarea rows={3} className="bg-surface-container-lowest border border-outline-variant/20 rounded-md px-4 py-3 text-on-background focus:outline-none focus:border-primary resize-none" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex justify-end">
              <Button variant="primary" type="submit" disabled={submitting}>
                {submitting ? 'Booking...' : 'Confirm Booking'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
