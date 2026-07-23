'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const heroImages = [
  { src: '/images/models/hero-nano-red1.png', alt: 'MINOVA Cherry Red in vibrant city nightlife', position: 'center 58%' },
    { src: '/images/models/hero-nano-white.png', alt: 'MINOVA Ruby Black in premium showroom', position: 'center 63%' },
  { src: '/images/models/hero-nano-white2.png', alt: 'MINOVA Future Gray at a futuristic charging station', position: 'center 60%' },
    { src: '/images/models/hero-nano-red3.png', alt: 'MINOVA Future Gray at a futuristic charging station', position: 'center 60%' },

  { src: '/images/models/hero-nano-red2.png', alt: 'MINOVA Lemon Green driving through tea gardens', position: 'center 56%' },

  // { src: '/images/models/hero-nano-red3.png', alt: 'henery EV white image', position: 'center 70%' },
  { src: '/images/models/hero-nano-logo.png', alt: 'MINOVA Logo', position: 'center' }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const isTransitioning = React.useRef(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrent(index);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  }, []);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      setCurrent((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 1000);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Sliding Images Container */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className="relative min-w-full h-full"
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: img.position }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Carousel dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-500 ${i === current
                ? 'w-8 bg-primary shadow-[0_0_8px_var(--primary)]'
                : 'w-3 bg-white/40 group-hover:bg-white/70'
                }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
