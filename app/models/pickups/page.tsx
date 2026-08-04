import type { Metadata } from 'next';
import React from 'react';
import { Truck } from 'lucide-react';
import { pickups } from '@/data/models';
import { CategorySection } from '@/components/ui/CategorySection';
import { CategoryTabs } from '@/components/ui/CategoryTabs';

export const metadata: Metadata = {
  title: 'Electric Pickups — Heavy-Duty EV Trucks | Kesla Auto Nepal',
  description: 'Discover HENREY electric pickup trucks in Nepal. Built for tough terrain and heavy payloads with zero emissions. Coming soon to Kesla Auto.',
};

export default function PickupsPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
              Electric <span className="text-on-surface-variant">Pickups</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Heavy-duty electric trucks built for Nepal's demanding terrain and commercial utility, delivering power without emissions.
            </p>
          </div>
        </div>

        <CategoryTabs />

        <div className="mt-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-on-background">Explore the Models</h2>
          <CategorySection
            title="Pickups"
            subtitle="Heavy-duty electric trucks built for Nepal's terrain"
            icon={Truck}
            models={pickups}
            showComingSoonOverlay
          />
        </div>
      </div>
    </div>
  );
}
