import type { Metadata } from 'next';
import React from 'react';
import { Bus } from 'lucide-react';
import { microvans } from '@/data/models';
import { CategorySection } from '@/components/ui/CategorySection';
import { CategoryTabs } from '@/components/ui/CategoryTabs';

export const metadata: Metadata = {
  title: 'Electric Microvans — 18-Seat Passenger EVs | Kesla Auto Nepal',
  description: 'Explore HENREY electric microvans in Nepal. Perfect for commercial transit, offering 18-seat capacity and excellent range for urban commuting.',
};

export default function MicrovansPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
              Electric <span className="text-on-surface-variant">Microvans</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              18-seat electric passenger buses designed for efficient commercial transit and comfortable urban commuting in Nepal.
            </p>
          </div>
        </div>

        <CategoryTabs />

        <div className="mt-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-on-background">Explore the Models</h2>
          <CategorySection
            title="Microvans"
            subtitle="18-seat electric passenger buses for commercial transit"
            icon={Bus}
            models={microvans}
          />
        </div>
      </div>
    </div>
  );
}
