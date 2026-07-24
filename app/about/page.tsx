import React from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, MapPin, Award, Calendar, Shield, FileText, Truck } from 'lucide-react';

export const metadata = {
  title: 'About Us | Kesla Auto Pvt. Ltd.',
  description:
    'Kesla Auto Pvt. Ltd. — Government of Nepal registered agent for HENREY brand Electric Vehicles (Model C Pro, Model D) and Spare Parts, authorized by HENAN HENREY',
};

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">

        {/* Hero heading */}
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Government Registered Agent · Nepal
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Kesla Auto Pvt. Ltd. — driving Nepal&apos;s electric future.
          </p>
        </div>

        {/* About content */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-6 text-on-surface-variant font-body leading-relaxed text-lg mb-12">
          <p>
            <strong className="text-on-background">Kesla Auto Pvt. Ltd.</strong> is a
            <strong className="text-primary"> Government of Nepal registered agent</strong> for the sale and distribution of
            <strong className="text-on-background"> HENREY brand Electric Vehicles</strong> — specifically the
            <strong className="text-primary"> Model C Pro</strong> and <strong className="text-primary">Model D</strong> — along with genuine spare parts,
            throughout the territory of Nepal.
          </p>
          <p>
            Our agency registration was granted by the
            <strong className="text-on-background"> Department of Commerce, Supplies and Consumer Protection</strong> under the
            Ministry of Industry, Commerce and Supplies, Government of Nepal, in accordance with the
            <strong className="text-on-background"> Nepal Agency Act, 2014 (1957)</strong>. The registration certificate
            (A.R. No. 2799) was issued on date 2082-12-18 BS, confirming Kesla Auto as the authorized agent for HENREY brand
            electric vehicles manufactured by <strong className="text-on-background">HENAN HENREY AUTOMOBILE TECHNOLOGY CO. LTD.</strong> based on China.
            {/* <strong className="text-on-background"> XIZANG XIMA AUTO AUTOMOBILE TECHNOLOGY CO. LTD.</strong>,
             both based in China. */}
          </p>
          <p>
            Based at <strong className="text-on-background">Gatthaghar,Bhaktapur, Nepal</strong> and registered under
            registration certificate number <strong className="text-on-background">001-2530</strong>, we are committed to bringing
            high-quality, reliable electric vehicles to Nepali businesses and individuals. Our mission is to offer exceptional
            after-sales support, genuine parts availability, and a transparent buying experience — backed by the trust of
            internationally recognized manufacturers and a government-registered agency.
          </p>
        </div>

        {/* Government Registration Badge */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-primary w-7 h-7" />
            <h2 className="text-2xl font-display font-bold text-on-background uppercase tracking-wide">
              Government Registered Agency
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface-variant font-body">
            <div className="flex gap-3">
              <FileText className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">A.R. No.:</span> 2799
              </div>
            </div>
            <div className="flex gap-3">
              <Calendar className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">Issued:</span> 2082-12-18 (BS)
              </div>
            </div>
            <div className="flex gap-3">
              <FileText className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">Registration No.:</span> 001-2530
              </div>
            </div>
            <div className="flex gap-3">
              <Calendar className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">Valid Until:</span> 2083-09-16 (BS)
              </div>
            </div>
            <div className="flex gap-3 md:col-span-2">
              <Shield className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">Issuing Authority:</span> Department of Commerce, Supplies and Consumer Protection, Ministry of Industry, Commerce and Supplies, Government of Nepal
              </div>
            </div>
            <div className="flex gap-3 md:col-span-2">
              <FileText className="text-primary w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <span className="text-on-background font-semibold">Legal Basis:</span> Nepal Agency Act, 2014 (1957) &amp; Agency (Consolidation) Rules, 2019 (1962)
              </div>
            </div>
          </div>
        </div>

        {/* Authorization highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <Award className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Authorized HENREY Agent</h3>
              <p className="text-on-surface-variant text-sm">
                Government-registered agent for HENREY Brand Electric Vehicles (Model C Pro &amp; Model D) and spare parts across Nepal,
                certified by the Department of Commerce, Supplies and Consumer Protection.
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <Truck className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Direct Manufacturer Partnership</h3>
              <p className="text-on-surface-variant text-sm">
                Authorized by both <strong className="text-on-background">HENAN HENREY AUTOMOBILE TECHNOLOGY CO. LTD.</strong> of China
                {/* <strong className="text-on-background"> XIZANG XIMA AUTO AUTOMOBILE TECHNOLOGY CO. LTD.</strong> of China. */}
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <Calendar className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Certificate Validity</h3>
              <p className="text-on-surface-variant text-sm">
                Agency registration certificate valid until <strong className="text-on-background">2083-09-16 (BS)</strong>.
                Issued under A.R. No. 2799, compliant with the Nepal Agency Act, 2014 (1957).
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <MapPin className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Our Location</h3>
              <p className="text-on-surface-variant text-sm">
                 Gatthaghar,Bhaktapur, Nepal<br />
                Registration Certificate No. 001-2530
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4 md:col-span-2">
            <CheckCircle2 className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Manufacturers</h3>
              <p className="text-on-surface-variant text-sm">
                <strong className="text-on-background">HENAN HENREY AUTOMOBILE TECHNOLOGY CO. LTD.</strong> <br />
                {/* <strong className="text-on-background"> XIZANG XIMA AUTO AUTOMOBILE TECHNOLOGY CO. LTD.</strong><br /> */}
                China-based manufacturers of HENREY Brand Electric Vehicles and Automotive Technology.
              </p>
            </div>
          </div> 


          
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">2</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">EV Models Available</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">Govt.</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">Registered Agency</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">100%</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">Genuine Parts &amp; Service</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" href="/contact">Contact Us</Button>
        </div>

      </div>
    </div>
  );
}
