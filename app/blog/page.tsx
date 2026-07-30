import React from 'react';
import Image from 'next/image';
import { blogs } from '@/data/blogs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'EV News & Blog — Electric Vehicle Updates Nepal | Kesla Auto',
  description:
    'Latest news about electric vehicles in Nepal. HENREY EV updates, government policies, charging infrastructure, and expert insights from Kesla Auto.',
  alternates: {
    canonical: 'https://keslaautonepal.com/blog',
  },
  openGraph: {
    title: 'EV News & Blog | Kesla Auto',
    description: 'Latest news about electric vehicles in Nepal. HENREY EV updates, government policies, and expert insights.',
    url: 'https://keslaautonepal.com/blog',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BlogIndex() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Kesla Auto EV Blog',
    description: 'Latest news about electric vehicles in Nepal.',
    url: 'https://keslaautonepal.com/blog',
    blogPost: blogs.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      image: `https://keslaautonepal.com${post.image}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      },
      url: `https://keslaautonepal.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
          Latest <span className="text-primary">News</span>
        </h1>
        <p className="text-on-surface-variant font-body text-xl mb-12 border-b border-outline-variant/20 pb-8">
          Stay updated with Kesla Auto news, HENREY EV technology, and electric vehicle insights for Nepal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Card key={post.id} className="flex flex-col h-full bg-surface-container-low! hover:bg-surface-container-high! transition-colors">
              <div className="w-full h-48 bg-surface-container-highest border-b border-outline-variant/15 flex items-center justify-center relative overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-4 mb-3 text-xs font-display uppercase tracking-widest text-primary">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="text-on-surface-variant">&bull;</span>
                  <span className="text-on-surface-variant">{post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-on-background mb-3 tracking-wide leading-tight">{post.title}</h3>
                <p className="text-on-surface-variant font-body text-sm mb-6 flex-1">{post.excerpt}</p>
                <Button variant="secondary" href={`/blog/${post.slug}`} className="w-full">Read Article</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
