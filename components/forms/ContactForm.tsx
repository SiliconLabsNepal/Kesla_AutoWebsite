"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitContactMessage } from '@/lib/api';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitContactMessage(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/15 text-center">
        <h3 className="font-display font-bold text-on-background text-2xl mb-2">Message Sent</h3>
        <p className="text-on-surface-variant text-sm">
          Thank you{formData.name ? `, ${formData.name}` : ''}. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/15">
      <h3 className="font-display font-bold text-on-background text-2xl mb-2">Send a Message</h3>
      <p className="text-on-surface-variant text-sm mb-6">
        Inquire about the Chufeng M31, pricing, financing, or after-sales service.
      </p>
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input
          id="contact-name"
          type="text"
          placeholder="Full Name"
          className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          id="contact-phone"
          type="tel"
          placeholder="Phone Number"
          className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          id="contact-email"
          type="email"
          placeholder="Email Address"
          className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <select
          id="contact-subject"
          className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-surface-variant focus:outline-none focus:border-primary"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="">Select Inquiry Type</option>
          <option value="test-drive">Book a Test Drive</option>
          <option value="pricing">Pricing &amp; Finance</option>
          <option value="service">After-Sales Service</option>
          <option value="parts">Spare Parts</option>
          <option value="other">General Inquiry</option>
        </select>
        <textarea
          id="contact-message"
          placeholder="Your Message..."
          rows={4}
          className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button variant="primary" type="submit" className="mt-4" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit Inquiry'}
        </Button>
      </form>
    </div>
  );
}
