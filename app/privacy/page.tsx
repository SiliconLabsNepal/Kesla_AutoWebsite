import React from 'react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Privacy Policy | Kesla Auto Pvt. Ltd.',
  description:
    'Privacy Policy for Kesla Auto Pvt. Ltd. — how we collect, use, and protect your information across our website.',
};

const LAST_UPDATED = 'July 22, 2026';

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Kesla Auto Pvt. Ltd.
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-10 text-on-surface-variant font-body leading-relaxed">

          <section>
            <p>
              Kesla Auto Pvt. Ltd. (&ldquo;Kesla Auto&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website
              to provide information about, and facilitate inquiries for, HENREY brand electric vehicles and the Chufeng M31
              electric pickup in Nepal. This Privacy Policy explains what information we collect through the website, how we
              use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-3">We collect information you voluntarily submit through our website forms, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-on-background">Test Drive Requests</strong> — name, phone number, email, preferred vehicle model, dealer, and preferred date.</li>
              <li><strong className="text-on-background">Booking Requests</strong> — name, phone number, email, vehicle model and color, dealer, preferred date, and any notes you provide.</li>
              <li><strong className="text-on-background">Contact Messages</strong> — name, phone number, email, subject, and message content.</li>
              <li><strong className="text-on-background">Vehicle Exchange Requests</strong> — your phone number and email, details of the vehicle you wish to trade in (make, model, year, mileage), and the EV model you&rsquo;re interested in.</li>
              <li><strong className="text-on-background">Newsletter Signup</strong> — your email address, if you choose to subscribe.</li>
            </ul>
            <p className="mt-3">
              We do not knowingly collect payment card details, government ID numbers, or other sensitive personal data through
              this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to test drive, booking, exchange, and contact inquiries.</li>
              <li>To coordinate with our dealer network on your behalf.</li>
              <li>To send you requested updates, offers, or newsletters (only if you subscribed).</li>
              <li>To improve our website, vehicle lineup information, and customer service.</li>
              <li>To comply with applicable Nepali law and respond to lawful requests from authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              3. Third-Party Services
            </h2>
            <p className="mb-3">Our website relies on a small number of third-party services to operate:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-on-background">Supabase</strong> — stores form submissions (test drives, bookings, contact messages, exchange requests) in a secured database.</li>
              <li><strong className="text-on-background">Email Delivery (Zoho Mail)</strong> — sends confirmation and notification emails when you submit a form.</li>
              <li><strong className="text-on-background">Google Maps</strong> — powers the dealer locator and charging network maps. Google may process your interactions with the embedded map per its own privacy policy.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              4. Cookies
            </h2>
            <p>
              We use minimal cookies and browser storage required for basic website functionality (such as remembering your
              display preferences). We do not use cookies for third-party advertising or cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              5. Data Retention &amp; Security
            </h2>
            <p>
              We retain inquiry and booking data for as long as necessary to fulfill your request and to comply with our
              business record-keeping obligations. We use reasonable administrative and technical safeguards to protect your
              information, though no method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              6. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of the personal information you&rsquo;ve submitted to us by
              contacting us using the details below. We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              7. Children&rsquo;s Privacy
            </h2>
            <p>
              Our website and services are intended for adults inquiring about or purchasing vehicles. We do not knowingly
              collect information from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes take effect once posted on this page, with the
              &ldquo;Last updated&rdquo; date revised accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled, contact us at:
            </p>
            <p className="mt-3">
              <strong className="text-on-background">Kesla Auto Pvt. Ltd.</strong><br />
              Gathhaghar, Bhaktapur, Nepal<br />
              Phone: 9851420820<br />
              Email: info@keslaautonepal.com
            </p>
          </section>

        </div>

        <div className="flex justify-center mt-12">
          <Button variant="primary" href="/contact">Contact Us</Button>
        </div>

      </div>
    </div>
  );
}
