import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Car, Truck, Bus } from 'lucide-react';

export default function ModelsLandingPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="mb-16 border-b border-outline-variant/20 pb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Select <span className="text-on-surface-variant">Category</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Choose a vehicle category to explore our complete EV lineup for Nepal.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/models/hatchbacks" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
            <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
              <Image src="/images/models/hero-nano-gray.png" alt="Hatchbacks" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t "></div>
            <div className="relative z-10 text-center">
              <Car className="w-10 h-10 text-white mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h3 className="text-4xl font-display font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors drop-shadow-md">
                Hatchbacks
              </h3>
            </div>
          </Link>

          <Link href="/models/pickups" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
            <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
              <Image src="/images/models/m31-flatbed.png" alt="Pickups" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t "></div>
            <div className="relative z-10 text-center">
              <Truck className="w-10 h-10 text-white mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h3 className="text-4xl font-display font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors drop-shadow-md">
                Pickups
              </h3>
            </div>
          </Link>

          <Link href="/models/microvans" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
            <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
              <Image src="/images/models/slk6540bev.png" alt="Microvans" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t "></div>
            <div className="relative z-10 text-center">
              <Bus className="w-10 h-10 text-white mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h3 className="text-4xl font-display font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors drop-shadow-md">
                Microvans
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
