import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us | Kesla Auto Pvt. Ltd.',
  description:
    'Contact Kesla Auto Pvt. Ltd. — exclusive Chufeng M31 dealer in Nepal. Located at Gathhaghar, Bhaktapur.',
};

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Kesla Auto Pvt. Ltd.
          </div>
          <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-center text-on-surface-variant font-body max-w-xl mx-auto">
            Have questions about the Henrey Model C PRO and D, or want to schedule a test drive?
            Visit us at our showroom in Gathhaghar, Bhaktapur or reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
              <MapPin className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-bold text-on-background uppercase mb-1">Showroom &amp; Office</h4>
                <p className="text-on-surface-variant font-body">
                  Kesla Auto Pvt. Ltd.<br />
                  Gathhaghar<br />
                  Bhaktapur, Nepal
                </p>
              </div>
            </div>

            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
              <Phone className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-bold text-on-background uppercase mb-1">Phone</h4>
                <p className="text-on-surface-variant font-body">9851420820</p>
                <p className="text-on-surface-variant/70 font-body text-sm mt-1">Sales &amp; Test Drive Inquiries</p>
              </div>
            </div>

            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
              <Mail className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-bold text-on-background uppercase mb-1">Email</h4>
                <p className="text-on-surface-variant font-body">info@keslaautonepal.com</p>
                <p className="text-on-surface-variant/70 font-body text-sm mt-1">We reply within 24 hours</p>
              </div>
            </div>

            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
              <Clock className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-bold text-on-background uppercase mb-1">Business Hours</h4>
                <p className="text-on-surface-variant font-body">Sun – Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-on-surface-variant font-body">Saturday: 10:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
