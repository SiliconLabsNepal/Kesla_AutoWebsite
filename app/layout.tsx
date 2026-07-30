import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keslaautonepal.com'),
  title: 'Kesla Auto — Affordable HENREY Electric Cars in Nepal',
  description:
    'Nepal\'s exclusive authorized HENREY EV dealer. Model C Pro (285km range) & Model D entry-level electric hatchbacks at convenient prices. Book a test drive at Gatthaghar, Bhaktapur.',
  keywords: [
    // Brand terms
    'Kesla Auto', 'Kesla Auto Nepal', 'KeslaAuto',
    // Product terms
    'HENREY EV Nepal', 'HENREY electric car', 'Model C Pro Nepal', 'Model D Nepal',
    'Model C Pro price Nepal', 'Model D price Nepal',
    // Category terms
    'electric vehicle Nepal', 'EV Nepal', 'electric car Nepal 2026',
    'entry level electric car Nepal', 'affordable EV Nepal',
    'cheap electric car Nepal', 'budget EV Nepal',
    'sasto electric car', 'electric car Kathmandu',
    // Location terms
    'EV dealer Bhaktapur', 'electric car Gatthaghar',
    'EV showroom Kathmandu valley',
    // Feature terms
    'electric hatchback Nepal', 'EV test drive Nepal',
    'electric car price Nepal', 'EV charging Nepal',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keslaautonepal.com',
    siteName: 'Kesla Auto Nepal',
    title: 'Kesla Auto — Affordable HENREY Electric Cars in Nepal',
    description:
      'Nepal\'s exclusive HENREY EV dealer. Model C Pro & Model D entry-level electric hatchbacks. Book a test drive today.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kesla Auto — HENREY Electric Vehicles Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kesla Auto — Affordable HENREY Electric Cars in Nepal',
    description:
      'Nepal\'s exclusive HENREY EV dealer. Model C Pro & Model D entry-level electric hatchbacks.',
    images: ['/images/og-image.png'],
  },
};

// AutoDealer structured data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Kesla Auto Pvt. Ltd.',
  url: 'https://keslaautonepal.com',
  logo: 'https://keslaautonepal.com/images/kesla-logo.png',
  description:
    'Nepal\'s exclusive authorized dealer for HENREY brand Electric Vehicles — Model C Pro and Model D.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gatthaghar',
    addressLocality: 'Bhaktapur',
    addressRegion: 'Bagmati',
    addressCountry: 'NP',
  },
  telephone: '+977-9851420820',
  email: 'info@keslaautonepal.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61589583907266',
    'https://www.instagram.com/keslaautonepal/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

