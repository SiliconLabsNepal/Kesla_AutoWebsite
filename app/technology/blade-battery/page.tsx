import React from 'react';
import { Button } from '@/components/ui/Button';

export default function BladeBattery() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4 text-center">
          Blade <span className="text-primary">Battery</span>
        </h1>
        <p className="text-on-surface-variant font-body text-xl mb-12">
          Uncompromised security and peak performance perfectly balanced.
        </p>

        <div className="h-64 bg-surface-container-high rounded-3xl border border-primary/30 mb-12 flex items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/20 via-surface-container to-surface-container-lowest"></div>
           <h3 className="text-2xl font-display font-bold text-primary z-10 animate-pulse">LFP Cell-to-Pack Tech Diagram</h3>
        </div>

        <div className="text-left bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-6 text-on-surface-variant font-body leading-relaxed text-lg mb-12">
          <p>
            The Blade Battery represents a revolutionary approach to battery architecture. By arranging individual cells in an array and then inserting them into a battery pack like blades, the space utilization of the battery pack is increased by over 50% compared to conventional lithium iron phosphate block batteries.
          </p>
          <p>
            Beyond energy density, its defining feature is safety. It successfully passed the nail penetration test without emitting smoke or catching fire, while the surface temperature only reached 30 to 60°C.
          </p>
        </div>
      </div>
    </div>
  );
}
