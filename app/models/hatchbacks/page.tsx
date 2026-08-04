import React from 'react';
import { Car } from 'lucide-react';
import { hatchbacks } from '@/data/models';
import { CategorySection } from '@/components/ui/CategorySection';
import { CategoryTabs } from '@/components/ui/CategoryTabs';

export const metadata = {
  title: 'Electric Hatchbacks — Model C Pro & Model D | Kesla Auto Nepal',
  description:
    'Compare HENREY electric hatchbacks in Nepal. Model C Pro (285km range, fast charging) and Model D (220km range, entry-level). Affordable EVs for city driving.',
};

export default function HatchbacksPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
              Electric <span className="text-on-surface-variant">Hatchbacks</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Compact electric city cars designed perfectly for navigating Kathmandu's streets, offering efficiency and affordability.
            </p>
          </div>
        </div>

        <CategoryTabs />

        <div className="mt-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-on-background">Explore the Models</h2>
          <CategorySection
            title="Hatchbacks"
            subtitle="Compact electric city cars — perfect for Kathmandu's streets"
            icon={Car}
            models={hatchbacks}
          />
        </div>
      </div>
    </div>
  );
}
