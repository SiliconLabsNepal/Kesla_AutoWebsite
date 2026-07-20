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
  title: 'Kesla Auto Pvt. Ltd. | Authorized Dealer — Chufeng M31 Nepal',
  description:
    'Kesla Auto Pvt. Ltd. is the exclusive authorized dealer for Chufeng M31 1.5-ton light truck pickup in Nepal. Serving customers from Gathhaghar, Bhaktapur.',
  keywords: [
    'Kesla Auto',
    'Kesla Motors',
    'Chufeng M31',
    'pickup truck Nepal',
    'light truck Nepal',
    'Gathhaghar Bhaktapur',
    'authorized dealer Nepal',
    'Xizang Xima Auto',
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
