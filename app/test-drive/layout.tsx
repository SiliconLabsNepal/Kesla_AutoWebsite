import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Test Drive — HENREY Electric Vehicles | Kesla Auto Nepal',
  description:
    'Schedule your free test drive of HENREY Model C Pro or Model D electric car in Nepal. Visit our Gatthaghar, Bhaktapur showroom. Experience affordable EV performance firsthand.',
  alternates: {
    canonical: 'https://keslaautonepal.com/test-drive',
  },
  openGraph: {
    title: 'Book a Test Drive | Kesla Auto Nepal',
    description: 'Schedule your free test drive of HENREY Model C Pro or Model D electric car in Nepal.',
    url: 'https://keslaautonepal.com/test-drive',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TestDriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
