import React from 'react';
import { Truck } from 'lucide-react';
import { pickups } from '@/data/models';
import { CategorySection } from '@/components/ui/CategorySection';
import { CategoryTabs } from '@/components/ui/CategoryTabs';

export default function PickupsPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
              Vehicle <span className="text-on-surface-variant">Catalog</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              From compact city hatchbacks to heavy-duty electric pickups and 18-seat microbuses &mdash; explore our complete EV lineup for Nepal.
            </p>
          </div>
        </div>

        <CategoryTabs />

        <CategorySection
          title="Pickups"
          subtitle="Heavy-duty electric trucks built for Nepal's terrain"
          icon={Truck}
          models={pickups}
        />
      </div>
    </div>
  );
}
