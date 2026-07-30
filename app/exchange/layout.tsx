import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Exchange Program — Trade In for HENREY EV | Kesla Auto Nepal',
  description:
    'Trade in your existing vehicle for a new HENREY electric car at Kesla Auto Nepal. Get a fair valuation and upgrade to Model C Pro or Model D. Exchange program available at Gatthaghar, Bhaktapur.',
  alternates: {
    canonical: 'https://keslaautonepal.com/exchange',
  },
  openGraph: {
    title: 'Vehicle Exchange Program | Kesla Auto Nepal',
    description: 'Trade in your existing vehicle for a new HENREY electric car at Kesla Auto Nepal. Get a fair valuation and upgrade to Model C Pro or Model D.',
    url: 'https://keslaautonepal.com/exchange',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ExchangeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
