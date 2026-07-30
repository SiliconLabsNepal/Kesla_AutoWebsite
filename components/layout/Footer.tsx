import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// const TwitterIcon = ({ size = 18 }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//   </svg>
// );

// const YoutubeIcon = ({ size = 18 }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
//     <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
//   </svg>
// );

export const Footer = () => {
  return (
    <footer className="bg-dark-surface pt-20 pb-10 mt-auto border-t border-outline-variant/10 text-gray-300">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image
              src="/images/kesla-logo.png"
              alt="Kesla Auto Logo"
              width={48}
              height={48}
              className="rounded-full ring-1 ring-primary/30"
            />
            <span className="text-3xl font-display font-bold tracking-tighter text-white">
              Kesla<span className="text-primary">Auto</span>
            </span>
          </Link>
          <p className="text-on-surface-variant font-body leading-relaxed mb-2">
            Authorized exclusive dealer for Henrey EV Cars in Nepal.
          </p>
          <p className="text-on-surface-variant/60 font-body text-xs mb-6">
            Authorized by HENAN HENREY AUTOMOBILE TECHNOLOGY CO. LTD.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61589583907266&sk=about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/keslaautonepal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant">
              <InstagramIcon size={18} />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant">
              <TwitterIcon size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant">
              <YoutubeIcon size={18} />
            </a> */}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Vehicles</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li><Link href="/models/model-d" className="hover:text-primary transition-colors">Model D</Link></li>
            <li><Link href="/models/model-c-pro" className="hover:text-primary transition-colors">Model C Pro</Link></li>
            {/* <li><Link href="/models/bus-350e" className="hover:text-primary transition-colors">Passenger Bus 350E</Link></li>
            <li><Link href="/models/slk6540bev" className="hover:text-primary transition-colors">SLK6540BEV</Link></li> */}
            <li><Link href="/#models" className="hover:text-primary transition-colors">All Models</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li><Link href="/charging-network" className="hover:text-primary transition-colors">Charging Network</Link></li>
            <li><Link href="/find-dealer" className="hover:text-primary transition-colors">Find a Dealer</Link></li>
            <li><Link href="/test-drive" className="hover:text-primary transition-colors">Book Test Drive</Link></li>
            <li><Link href="/price-list" className="hover:text-primary transition-colors">Price List</Link></li>
            <li><Link href="/exchange" className="hover:text-primary transition-colors">Vehicle Exchange</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">News &amp; Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Newsletter</h4>
          <p className="text-on-surface-variant mb-4 font-body text-sm">
            Subscribe for the latest Kesla Auto updates &amp; offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-dark-surface-container px-4 py-3 rounded-md w-full border-b border-outline-variant/30 text-white focus:outline-none focus:border-primary transition-colors font-body"
            />
            <button className="bg-primary text-on-primary px-4 py-3 rounded-md font-display font-bold uppercase tracking-wider hover:bg-primary-container transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-sm font-body">
        <p>&copy; {new Date().getFullYear()} Kesla Auto Pvt. Ltd. Gathhaghar, Bhaktapur, Nepal. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-display uppercase tracking-widest text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
