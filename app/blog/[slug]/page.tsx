import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { Button } from '@/components/ui/Button';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-3xl mx-auto">
        <Button variant="tertiary" href="/blog" className="mb-8 p-0 text-sm">&larr; Back to News</Button>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex gap-4 mb-10 text-sm font-display uppercase tracking-widest text-primary border-b border-outline-variant/20 pb-6">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="text-on-surface-variant">by {post.author}</span>
        </div>

        <div className="w-full h-64 md:h-96 bg-surface-container-high rounded-2xl mb-12 border border-outline-variant/15 flex items-center justify-center relative overflow-hidden">
             <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover opacity-80" priority />
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_100%)] opacity-40"></div>
        </div>

        <div className="text-on-surface-variant font-body text-lg leading-relaxed flex flex-col gap-6">
          <p className="text-on-background font-medium text-xl border-l-4 border-primary pl-4">{post.excerpt}</p>
          <div className="mt-4">
             {/* This would be a rich text render or dangerouslySetInnerHTML in production */}
             <p>{post.content}</p>
             <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id sem et justo fringilla mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris varius id sem eget convallis.</p>
             <p className="mt-4">Donec accumsan eros diam, id iaculis purus elementum eu. Phasellus et justo lorem. Nunc viverra, eros congue tincidunt dignissim, elit libero venenatis lacus, at elementum tellus sem feugiat diam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
