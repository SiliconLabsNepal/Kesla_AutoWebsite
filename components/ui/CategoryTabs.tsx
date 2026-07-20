"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Truck, Bus } from 'lucide-react';

export function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-3 mb-16">
      <Link
        href="/models/hatchbacks"
        className={`px-6 py-2.5 rounded-full border text-sm font-display uppercase tracking-widest transition-colors flex items-center gap-2 ${
          pathname === '/models/hatchbacks'
            ? 'bg-primary border-primary text-white shadow-md'
            : 'border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary bg-surface'
        }`}
      >
        <Car size={16} /> Hatchbacks
      </Link>
      <Link
        href="/models/pickups"
        className={`px-6 py-2.5 rounded-full border text-sm font-display uppercase tracking-widest transition-colors flex items-center gap-2 ${
          pathname === '/models/pickups'
            ? 'bg-primary border-primary text-white shadow-md'
            : 'border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary bg-surface'
        }`}
      >
        <Truck size={16} /> Pickups
      </Link>
      <Link
        href="/models/microvans"
        className={`px-6 py-2.5 rounded-full border text-sm font-display uppercase tracking-widest transition-colors flex items-center gap-2 ${
          pathname === '/models/microvans'
            ? 'bg-primary border-primary text-white shadow-md'
            : 'border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary bg-surface'
        }`}
      >
        <Bus size={16} /> Microvans
      </Link>
    </div>
  );
}
