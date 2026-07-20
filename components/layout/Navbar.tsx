"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <nav className="container mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between rounded-full transition-all duration-300 glass py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative w-10 h-10 rounded-full ring-1 ring-primary/30 overflow-hidden flex items-center justify-center shrink-0">
            <Image
              src="/images/kesla-logo.png"
              alt="Kesla Auto Logo"
              width={100}
              height={100}
              className="w-full h-full object-cover scale-[1.6]"
              priority
            />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter transition-colors text-on-background">
            Kesla<span className="text-primary">Auto</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-display text-sm uppercase tracking-widest font-semibold">
          <div className="group relative">
            <Link href="/models" className="flex items-center gap-1 hover:text-primary transition-colors py-2 text-on-background">
              Models <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-surface rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-outline-variant/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50 transform origin-top-left group-hover:scale-100 scale-95">
              <Link href="/models/hatchbacks" className="px-5 py-2.5 text-on-background hover:bg-primary/5 hover:text-primary transition-colors">Hatchbacks</Link>
              <Link href="/models/pickups" className="px-5 py-2.5 text-on-background hover:bg-primary/5 hover:text-primary transition-colors">Pickups</Link>
              <Link href="/models/microvans" className="px-5 py-2.5 text-on-background hover:bg-primary/5 hover:text-primary transition-colors">Microvans</Link>
            </div>
          </div>
          <Link href="/charging-network" className="hover:text-primary transition-colors py-2 text-on-background">Charging</Link>
          <Link href="/find-dealer" className="hover:text-primary transition-colors py-2 text-on-background">Dealers</Link>
          <Link href="/exchange" className="hover:text-primary transition-colors py-2 text-on-background">Exchange</Link>
          <Link href="/blog" className="hover:text-primary transition-colors py-2 text-on-background">Blog</Link>
          <Link href="/about" className="hover:text-primary transition-colors py-2 text-on-background">About</Link>
        </div>

        <div className="hidden md:block z-50">
          <Button variant="secondary" href="/test-drive" className="text-xs px-6 py-2">
            Book Test Drive
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative text-on-background"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 z-40 overflow-y-auto pt-20 pb-10">
            <div className="flex flex-col items-center gap-2">
              <Link href="/models" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary font-bold">Models</Link>
              <div className="flex flex-col items-center gap-2 mt-2 bg-surface-container-low px-8 py-4 rounded-2xl border border-outline-variant/20">
                <Link href="/models/hatchbacks" onClick={() => setMobileMenuOpen(false)} className="text-sm font-display uppercase tracking-widest hover:text-primary text-on-surface-variant">Hatchbacks</Link>
                <Link href="/models/pickups" onClick={() => setMobileMenuOpen(false)} className="text-sm font-display uppercase tracking-widest hover:text-primary text-on-surface-variant">Pickups</Link>
                <Link href="/models/microvans" onClick={() => setMobileMenuOpen(false)} className="text-sm font-display uppercase tracking-widest hover:text-primary text-on-surface-variant">Microvans</Link>
              </div>
            </div>
            <Link href="/charging-network" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary mt-4">Charging</Link>
            <Link href="/find-dealer" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Find a Dealer</Link>
            <Link href="/exchange" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Exchange</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Blog</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">About</Link>
            <Button variant="primary" href="/test-drive" className="mt-4">
              Book Test Drive
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
