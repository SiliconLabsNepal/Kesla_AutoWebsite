import React from 'react';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { availableModels } from '@/data/models';

export default function Home() {
  const featuredModels = availableModels.slice(0, 3);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0 bg-black opacity-90">
          <HeroCarousel />
        </div>

        <div className="container relative z-20 text-center px-4">
        </div>
      </section>

      {/* 1.5 Category Grid (Hudson Style) */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/models/hatchbacks" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
              <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
                <Image src="/images/models/hero-nano-gray.png" alt="Hatchbacks" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" priority />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
              <h3 className="relative z-10 text-4xl font-display font-bold text-on-background uppercase tracking-widest group-hover:text-primary transition-colors">
                Hatchbacks
              </h3>
            </a>

            <a href="/models/pickups" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
              <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
                <Image src="/images/models/m31-flatbed.png" alt="Pickups" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" priority />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
              <h3 className="relative z-10 text-4xl font-display font-bold text-on-background uppercase tracking-widest group-hover:text-primary transition-colors">
                Pickups
              </h3>
            </a>

            <a href="/models/microvans" className="group relative h-[400px] overflow-hidden rounded-2xl flex items-end justify-center pb-12 cursor-pointer shadow-md border border-outline-variant/20">
              <div className="absolute inset-0 bg-surface-container-lowest transition-transform duration-700 group-hover:scale-105">
                <Image src="/images/models/slk6540bev.png" alt="Microvans" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80" priority />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
              <h3 className="relative z-10 text-4xl font-display font-bold text-on-background uppercase tracking-widest group-hover:text-primary transition-colors">
                Microvans
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Video Presentation */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest group">
            <video
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              autoPlay
              muted
              loop
              playsInline
            // controls
            // poster="/videos/hero-nano-logo.png"
            >
              {/* Note: Update the source src to match your actual video file when uploaded */}
              <source src="/videos/henery-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10"></div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 1 */}
      <section
        className="w-full h-[60vh] min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/parallax-pickup.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
            Conquer Any Terrain
          </h2>
          <p className="text-white text-lg md:text-xl font-body drop-shadow-md">
            The Chufeng M31 delivers unparalleled payload capacity and electric efficiency.
          </p>
        </div>
      </section>

      {/* 2. Featured Models */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-4 uppercase tracking-tighter">
                Featured <span className="text-on-surface-variant">Models</span>
              </h2>
              <p className="text-on-surface-variant text-lg font-body max-w-xl">
                From the sporty Model C Pro hatchback to the rugged M31 pickup &mdash; explore our available electric vehicles.
              </p>
            </div>
            <Button variant="tertiary" href="/models" className="group">
              View All Catalog <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <Card key={model.id} hoverable className="p-0 flex flex-col group cursor-pointer bg-surface overflow-hidden shadow-sm border border-outline-variant/20" >
                {/* White image panel */}
                <div className="w-full h-48 bg-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image src={model.image} alt={model.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover p-4" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider">{model.name}</h3>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest">{model.category}</p>
                    <p className="text-primary font-display font-medium mt-1">{model.price}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant text-xs uppercase tracking-widest">Range</span>
                      <span className="text-on-background font-display">{model.range}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant text-xs uppercase tracking-widest">
                        {model.category === 'Pickup' ? 'Payload' : 'Power'}
                      </span>
                      <span className="text-on-background font-display">
                        {model.category === 'Pickup' ? model.payload ?? 'N/A' : model.power}
                      </span>
                    </div>
                  </div>
                  <Button variant="secondary" href={`/models/${model.slug}`} className="mt-auto w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary">
                    View Specifications
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Authorization Highlight */}
      <section className="py-24 bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/15 p-8 flex items-end group">
            <Image src="/images/models/tech-bg.jpg" alt="Kesla Auto Showroom" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background/95 z-0"></div>
            <div className="relative z-10 glass p-6 rounded-xl w-full">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-primary w-6 h-6" />
                <h4 className="text-white font-display font-bold">Officially Authorized · April 2026</h4>
              </div>
              <p className="text-on-surface-variant text-sm">Authorized by Xizang Xima Auto Automotive Technology Co., Ltd., International Sales Division.</p>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
              Chufeng M31
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-6 uppercase tracking-tighter leading-tight">
              Nepal&rsquo;s Exclusive <br />Light Truck Dealer
            </h2>
            <p className="text-on-surface-variant font-body text-lg mb-8">
              Kesla Auto Pvt. Ltd. is the sole entity in Nepal authorized to market and sell the
              <strong className="text-on-background"> Chufeng M31 1.5-ton light truck pickup</strong>.
              Built for Nepal&rsquo;s terrain — from the valley floor to highland routes — the M31 delivers rugged reliability
              for businesses and individuals alike.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-on-background font-display font-bold mb-1">1.5 Ton Payload</h5>
                  <p className="text-on-surface-variant text-sm">Heavy-duty capacity for commercial use.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-on-background font-display font-bold mb-1">Multi-Terrain</h5>
                  <p className="text-on-surface-variant text-sm">Engineered for Nepal&rsquo;s diverse road conditions.</p>
                </div>
              </div>
            </div>

            <Button variant="tertiary" href="/about" className="group">
              About Our Authorization <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Parallax Divider 2 */}
      <section
        className="w-full h-[60vh] min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/parallax-hatchback.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
            City Mobility, Redefined
          </h2>
          <p className="text-white text-lg md:text-xl font-body drop-shadow-md">
            Compact yet spacious. Navigate tight streets with our nimble electric hatchbacks.
          </p>
        </div>
      </section>

      {/* 4. Statistics Counter */}
      <section className="py-20 border-y border-outline-variant/10 bg-surface-container-low">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant/20">
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-primary mb-2">8</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">EV Models</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-on-background mb-2">3</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Vehicle Categories</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-on-background mb-2">2026</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Authorization Year</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-on-background mb-2">1st</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Exclusive Nepal Dealer</p>
          </div>
        </div>
      </section>

    </div>
  );
}
