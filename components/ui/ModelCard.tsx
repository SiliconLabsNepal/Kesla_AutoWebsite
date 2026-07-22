"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { ArrowRight, Clock, X, ZoomIn } from 'lucide-react';
import { type EVModel } from '@/data/models';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

/* ────────────────────────────────────────────
   Enlarged Photo Lightbox
   ──────────────────────────────────────────── */
function PhotoLightbox({
  model,
  activeColor,
  onColorChange,
  onClose,
}: {
  model: EVModel;
  activeColor: EVModel['colors'][number] | null;
  onColorChange: (c: EVModel['colors'][number]) => void;
  onClose: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animate in on mount
  useEffect(() => {
    // Small timeout so the initial state renders before transition triggers
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Wait for exit animation to finish
    setTimeout(onClose, 300);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const imageSrc = activeColor?.image || model.image;
  const colorLabel = activeColor?.name || model.colorName || '';

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view of ${model.name}`}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: isVisible ? 'rgba(7, 15, 24, 0.88)' : 'rgba(7, 15, 24, 0)',
        backdropFilter: isVisible ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter: isVisible ? 'blur(16px)' : 'blur(0px)',
        transition: 'background-color 0.35s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 border border-white/15 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Close enlarged view"
      >
        <X size={22} />
      </button>

      {/* Content panel */}
      <div
        className="relative flex flex-col items-center max-w-4xl w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
          transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Model name & color */}
        <div className="text-center mb-5">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
            {model.name}
          </h3>
          {colorLabel && (
            <p className="text-white/50 font-display text-sm tracking-widest uppercase mt-1">
              {colorLabel}
            </p>
          )}
        </div>

        {/* Enlarged image */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08]"
          style={{ aspectRatio: '16 / 10' }}
        >
          {/* Subtle radial glow behind the car */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(43, 110, 168, 0.12) 0%, transparent 70%)',
            }}
          />

          <Image
            src={imageSrc}
            alt={`${model.name} – ${colorLabel || 'vehicle photo'}`}
            fill
            sizes="(max-width: 768px) 95vw, 800px"
            className="object-contain p-6 md:p-10 transition-opacity duration-500"
            style={{ opacity: isImageLoaded ? 1 : 0 }}
            onLoad={() => setIsImageLoaded(true)}
            priority
          />

          {/* Loading shimmer */}
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
            </div>
          )}
        </div>

        {/* Color picker inside lightbox */}
        {model.colors.length > 1 && (
          <div className="mt-6 flex items-center gap-3 flex-wrap justify-center">
            <span className="text-white/40 text-xs font-display uppercase tracking-widest mr-1">
              Color
            </span>
            {model.colors.map((c) => (
              <button
                key={c.name}
                title={c.name}
                type="button"
                onClick={() => {
                  onColorChange(c);
                  setIsImageLoaded(false);
                }}
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 transition-all duration-200 hover:scale-115 active:scale-90 cursor-pointer ${activeColor?.name === c.name
                  ? 'border-white ring-2 ring-white/40 ring-offset-2 ring-offset-transparent scale-110'
                  : 'border-white/20 hover:border-white/60'
                  }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        {/* Hint */}
        <p className="mt-4 text-white/25 text-xs font-body tracking-wide">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/40 font-mono text-[10px]">ESC</kbd> or click outside to close
        </p>
      </div>
    </div>,
    document.body
  );
}

/* ────────────────────────────────────────────
   Model Card
   ──────────────────────────────────────────── */
export function ModelCard({ model, showComingSoonOverlay = false }: { model: EVModel; showComingSoonOverlay?: boolean }) {
  const isComingSoon = model.comingSoon;
  const [activeColor, setActiveColor] = useState(model.colors[0] || null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Card
        hoverable={!isComingSoon}
        className={`p-0 flex flex-col group cursor-pointer overflow-hidden relative ${isComingSoon
          ? 'bg-surface-container-low/50 border-outline-variant/10'
          : 'bg-surface-container-low'
          }`}
      >
        {/* Coming Soon Overlay */}
        {(isComingSoon || showComingSoonOverlay) && (
          <div className="absolute inset-0 z-30 bg-background/40 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-5 py-2 flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span className="text-primary font-display font-bold text-sm tracking-widest uppercase">
                Coming Soon
              </span>
            </div>
          </div>
        )}

        {/* Image area — clickable to enlarge */}
        <button
          type="button"
          onClick={() => {
            if (!isComingSoon) setLightboxOpen(true);
          }}
          disabled={isComingSoon}
          className={`w-full h-56 bg-white relative overflow-hidden transition-transform duration-500 border-0 p-0 ${isComingSoon ? 'cursor-not-allowed' : 'cursor-zoom-in'
            } ${isComingSoon ? '' : 'group-hover:scale-105'}`}
          aria-label={`Enlarge photo of ${model.name}`}
        >
          <Image
            src={activeColor?.image || model.image}
            alt={`${model.name} - ${activeColor?.name || 'Default'}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-contain p-4 transition-all duration-300 ${isComingSoon ? 'opacity-50 grayscale-30' : ''}`}
          />

          {/* Zoom hint icon — shown on hover */}
          {!isComingSoon && (
            <div className="absolute bottom-3 right-3 z-10 p-1.5 rounded-lg bg-on-background/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <ZoomIn size={16} />
            </div>
          )}
        </button>

        <div className="p-5 flex flex-col flex-1">
          {/* Color swatches */}
          <div className="flex items-center gap-2 mb-4 flex-wrap relative z-20">
            {model.colors.map((c) => (
              <button
                key={c.name}
                title={c.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColor(c);
                }}
                className={`w-5 h-5 rounded-full border transition-all duration-200 hover:scale-115 active:scale-90 cursor-pointer ${activeColor?.name === c.name
                  ? 'border-primary ring-2 ring-primary/40 ring-offset-2 ring-offset-background scale-105'
                  : 'border-outline-variant/30 hover:border-on-background/50'
                  }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>

          <div className="mb-3 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider">{model.name}</h3>
              <p className="text-on-surface-variant font-display text-xs tracking-widest uppercase">
                {activeColor ? `${activeColor.name} · ` : (model.colorName ? `${model.colorName} · ` : '')}{model.category}
              </p>
            </div>
            <div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-primary font-bold text-xs tracking-widest font-display whitespace-nowrap">
              {model.price}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            <div className="flex flex-col">
              <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Range</span>
              <span className="text-on-background font-display text-base">{model.range}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">
                {model.category === 'Pickup' ? 'Payload' : '0–100 km/h'}
              </span>
              <span className="text-on-background font-display text-base">
                {model.category === 'Pickup' ? model.payload ?? 'N/A' : model.zeroToHundred}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Power</span>
              <span className="text-on-background font-display text-base">{model.power}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">
                {model.category === 'Microvan' ? 'Seats' : 'Top Speed'}
              </span>
              <span className="text-on-background font-display text-base">
                {model.category === 'Microvan' ? `${model.seats} seats` : model.topSpeed}
              </span>
            </div>
          </div>

          {isComingSoon ? (
            <button
              disabled
              className="mt-auto w-full py-2.5 rounded-xl border border-outline-variant/20 text-on-surface-variant/50 font-display text-sm tracking-wider cursor-not-allowed"
            >
              Coming Soon
            </button>
          ) : (
            <div className="mt-auto flex flex-col gap-2">
              <Button
                variant="secondary"
                href={`/models/${model.slug}`}
                className="w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary text-sm"
              >
                View Specifiactions <ArrowRight size={14} className="ml-1 inline" />
              </Button>
              <Button
                variant="primary"
                href={`/book/${model.slug}`}
                className="w-full text-sm"
              >
                Book Now
              </Button>
            </div>
          )}
        </div>
      </Card>

      {/* Enlarged photo lightbox */}
      {lightboxOpen && (
        <PhotoLightbox
          model={model}
          activeColor={activeColor}
          onColorChange={(c) => setActiveColor(c)}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
