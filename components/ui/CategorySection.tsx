import React from 'react';
import { Clock } from 'lucide-react';
import { type EVModel } from '@/data/models';
import { ModelCard } from './ModelCard';

export function CategorySection({
  title,
  subtitle,
  icon: Icon,
  models: categoryModels,
}: {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  models: EVModel[];
}) {
  const available = categoryModels.filter((m) => !m.comingSoon);
  const comingSoon = categoryModels.filter((m) => m.comingSoon);

  return (
    <section className="mb-20" id={`category-${title.toLowerCase()}`}>
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-outline-variant/20">
        <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-on-background uppercase tracking-tighter">
            {title}
          </h2>
          <p className="text-on-surface-variant text-sm font-body">{subtitle}</p>
        </div>
      </div>

      {/* Available Models */}
      {available.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {available.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      )}

      {/* Coming Soon Divider */}
      {comingSoon.length > 0 && (
        <>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-outline-variant/15" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5">
              <Clock size={14} className="text-primary" />
              <span className="text-primary text-xs font-display font-semibold uppercase tracking-widest">
                Coming Soon
              </span>
            </div>
            <div className="h-px flex-1 bg-outline-variant/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {comingSoon.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </>
      )}

      {/* If no available models, show message */}
      {available.length === 0 && comingSoon.length > 0 && (
        <p className="text-on-surface-variant text-sm mb-8 italic">
          All models in this category are coming soon. Stay tuned for availability updates.
        </p>
      )}
    </section>
  );
}
