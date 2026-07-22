import React from 'react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Terms & Conditions | Kesla Auto Pvt. Ltd.',
  description:
    'Terms and Conditions for using the Kesla Auto Pvt. Ltd. website, including vehicle inquiries, bookings, and exchange requests.',
};

const LAST_UPDATED = 'July 22, 2026';

export default function TermsAndConditions() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Kesla Auto Pvt. Ltd.
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Terms &amp; <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-10 text-on-surface-variant font-body leading-relaxed">

          <section>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the Kesla Auto Pvt. Ltd. (&ldquo;Kesla Auto&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) website. By browsing this website or submitting any form on it
              (test drive, booking, contact, or exchange), you agree to these Terms. If you do not agree, please do not use
              the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              1. About Kesla Auto
            </h2>
            <p>
              Kesla Auto Pvt. Ltd. is a Government of Nepal registered agent (A.R. No. 2799, Registration No. 001-2530) for
              HENREY brand electric vehicles and the Chufeng M31 electric pickup, based at Gathhaghar, Bhaktapur, Nepal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              2. Use of This Website
            </h2>
            <p>
              This website is provided for informational purposes and to help you learn about, and inquire regarding, our
              vehicle lineup. You agree to use the website only for lawful purposes and to provide accurate information when
              submitting any form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              3. Vehicle Information &amp; Pricing
            </h2>
            <p>
              Vehicle specifications, images, colors, and availability shown on this website are for general reference and
              may change without notice. Prices are provided upon inquiry (&ldquo;Contact for Price&rdquo;) and are subject to
              confirmation at the time of purchase. Models marked &ldquo;Coming Soon&rdquo; are not yet available for booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              4. Test Drives &amp; Bookings
            </h2>
            <p>
              Submitting a test drive or booking request through this website is an expression of interest only and does not
              constitute a binding contract of sale. All test drives and bookings are subject to vehicle availability, dealer
              confirmation, and completion of any required paperwork at the dealership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              5. Vehicle Exchange Requests
            </h2>
            <p>
              Vehicle exchange requests submitted through this website are preliminary inquiries only. Final valuation of any
              trade-in vehicle, and the terms of any exchange, are determined by Kesla Auto after physical inspection of the
              vehicle and are not guaranteed by information submitted online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              6. Intellectual Property
            </h2>
            <p>
              All text, images, logos, and other content on this website are the property of Kesla Auto Pvt. Ltd. or its
              licensors (including HENAN HENREY AUTOMOBILE TECHNOLOGY CO. LTD. and XIZANG XIMA AUTO AUTOMOBILE TECHNOLOGY CO.
              LTD.) and may not be reproduced or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              7. Third-Party Links &amp; Services
            </h2>
            <p>
              This website links to, or embeds, third-party services such as Google Maps and our social media pages. We are
              not responsible for the content, availability, or practices of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Kesla Auto Pvt. Ltd. is not liable for any indirect, incidental, or
              consequential damages arising from your use of this website, including reliance on vehicle information that is
              later corrected or updated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of Nepal. Any disputes arising from your use of this website shall be
              subject to the jurisdiction of the competent courts of Nepal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              10. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms from time to time. Changes take effect once posted on this page, with the
              &ldquo;Last updated&rdquo; date revised accordingly. Continued use of the website after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide mb-4">
              11. Contact Us
            </h2>
            <p>
              For questions about these Terms, contact us at:
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
