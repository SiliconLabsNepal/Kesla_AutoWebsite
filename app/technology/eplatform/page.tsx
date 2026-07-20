import React from 'react';
import { Button } from '@/components/ui/Button';

export default function EPlatform() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4 text-center">
          ePlatform <span className="text-primary">3.0</span>
        </h1>
        <p className="text-on-surface-variant font-body text-xl mb-12">
          The cradle of the next generation of Electric Vehicles.
        </p>

        <div className="text-left bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-6 text-on-surface-variant font-body leading-relaxed text-lg mb-12">
          <h3 className="text-on-background font-display font-bold text-2xl uppercase tracking-widest">Built for Intelligence</h3>
          <p>
            e-Platform 3.0 is a highly integrated platform exclusively designed for pure electric vehicles. It seamlessly integrates the Blade Battery into the vehicle's structural frame, significantly increasing rigidity and crash safety.
          </p>
          <p>
            Featuring the world's first 8-in-1 electric powertrain, the overall system efficiency is drastically improved. This leads to longer range, faster charging times via high-voltage 800V architectures, and smoother driving dynamics.
          </p>
        </div>
      </div>
    </div>
  );
}
