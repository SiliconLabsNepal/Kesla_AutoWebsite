import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { models } from '@/data/models';
import { Battery, Zap, Timer, Gauge, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// For Next.js 15+ App Router, params is a Promise
export default async function ModelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const model = models.find((m) => m.slug === resolvedParams.slug);

  if (!model) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      {/* Detail Hero */}
      <section className="relative w-full h-[70vh] flex items-end pb-24 overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 z-0 bg-surface">
          <Image src={model.image} alt={model.name} fill sizes="100vw" className="object-cover opacity-30 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/95"></div>
        </div>
        
        <div className="container relative z-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
              {model.category}
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-on-background uppercase tracking-tighter leading-none mb-2">
              {model.name}
            </h1>
            <p className="text-2xl font-display font-medium text-on-surface-variant">
              From {model.price}
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" href="/test-drive">Book Test Drive</Button>
            <Button variant="primary" href="/find-dealer">Locate Dealer</Button>
          </div>
        </div>
      </section>

      {/* Core Specs Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
            {/* Stat Item */}
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <Battery className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">{model.range}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Max Range (WLTP)</div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">{model.power}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Peak Power</div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <Timer className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">{model.zeroToHundred}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">0-100 km/h</div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <Gauge className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">{model.topSpeed}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Top Speed</div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">5-Star</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Safety Rating</div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-on-background mb-1">{model.seats}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Seating Cap.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Battery Details */}
            <div>
              <h3 className="text-3xl font-display font-bold text-on-background uppercase tracking-wider mb-6 border-b border-outline-variant/20 pb-4">
                Architecture & Power
              </h3>
              <ul className="space-y-6 text-lg font-body text-on-surface-variant">
                <li className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                  <span>Battery Type</span>
                  <span className="text-on-background font-display">{model.battery}</span>
                </li>
                <li className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                  <span>Drive Type</span>
                  <span className="text-on-background font-display">All-Wheel Drive (AWD) Setup</span>
                </li>
              </ul>
            </div>

            {/* Smart Features */}
            <div>
              <h3 className="text-3xl font-display font-bold text-on-background uppercase tracking-wider mb-6 border-b border-outline-variant/20 pb-4">
                Hi-Tech Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/15 text-on-background font-display tracking-wide flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-24">
            <Button variant="primary" href={`/book/${model.slug}`}>Book Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
