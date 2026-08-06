'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the brochure during this session
    const hasSeenBrochure = sessionStorage.getItem('hasSeenBrochure');

    if (!hasSeenBrochure) {
      // Open the brochure on initial load with a slight delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenBrochure', 'true');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-500">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center animate-in zoom-in-90 slide-in-from-bottom-4 duration-700 ease-out">
        
        {/* Animated Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 md:-top-6 md:-right-6 z-50 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:rotate-90 border border-white/10"
          aria-label="Close Brochure"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
        
        {/* Outer Glow Effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse opacity-70"></div>

        <div className="relative w-full h-[80vh] md:h-[85vh] flex-1 flex items-center justify-center group perspective-[1000px]">
          
          {/* Brochure Container with 3D-like hover effect */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_100px_-15px_rgba(0,0,0,1)] ring-1 ring-white/20 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_120px_-10px_rgba(0,0,0,1)] bg-black/60 backdrop-blur-sm">
            <img
              src="/images/models/kesla_bookings.png"
              alt="Kesla Auto Brochure"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Subtle overlay shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
