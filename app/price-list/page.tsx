import React from 'react';
import { models } from '@/data/models';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'HENREY EV Price List Nepal 2026 — Model C Pro & Model D | Kesla Auto',
  description:
    'Official HENREY electric car prices in Nepal. Model C Pro and Model D pricing, specifications comparison, and financing options. Contact Kesla Auto for the best deals.',
  alternates: {
    canonical: 'https://keslaautonepal.com/price-list',
  },
  openGraph: {
    title: 'HENREY EV Price List Nepal 2026 | Kesla Auto',
    description: 'Official HENREY electric car prices in Nepal. Model C Pro and Model D pricing and specifications.',
    url: 'https://keslaautonepal.com/price-list',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function PriceList() {
  const priceListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'HENREY EV Price List Nepal',
    itemListElement: models.map((model, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: `HENREY ${model.name}`,
        image: `https://keslaautonepal.com${model.image}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NPR',
          availability: model.comingSoon ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
        }
      }
    }))
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceListJsonLd) }}
      />
      <div className="container max-w-5xl">
        
        <div className="mb-12 border-b border-outline-variant/20 pb-8 flex flex-col sm:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
              Official <span className="text-primary">Price List</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Transparent, upfront pricing across all our electric vehicle variations. 
            </p>
          </div>
          <Button variant="secondary" className="px-6 flex gap-2">
            <Download size={18} /> Download PDF
          </Button>
        </div>

        <div className="bg-surface-container rounded-2xl border border-outline-variant/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body">
              <thead>
                <tr className="bg-surface border-b border-outline-variant/30 text-on-background font-display text-xs uppercase tracking-widest">
                  <th className="px-6 py-5">Model</th>
                  <th className="px-6 py-5">Category</th>
                  <th className="px-6 py-5">Battery</th>
                  <th className="px-6 py-5">Range</th>
                  <th className="px-6 py-5">Power</th>
                  <th className="px-6 py-5 text-right">Price (NPR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {models.map((model, idx) => (
                  <tr key={model.id} className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                    <td className="px-6 py-5">
                      <span className="text-on-background font-display font-bold tracking-wider">{model.name}</span>
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant text-sm">
                      {model.category}
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant text-sm">
                      {model.battery}
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant text-sm">
                      {model.range}
                    </td>
                    <td className="px-6 py-5 text-sm text-primary">
                      {model.power}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="text-on-background font-display font-bold tracking-widest">{model.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-surface p-6 border-t border-outline-variant/30 flex justify-between items-center text-xs text-on-surface-variant font-body">
            <p>* Prices are subject to change without prior notice.</p>
            <p className="text-on-background">Last Updated: April 2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}
