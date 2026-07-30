import { Metadata } from 'next';
import { models } from '@/data/models';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);
  
  if (!model) {
    return {
      title: 'Book Vehicle | Kesla Auto Nepal',
    };
  }

  return {
    title: `Book ${model.name} | Kesla Auto Nepal`,
    description: `Reserve your new ${model.name} today from Kesla Auto, the exclusive authorized HENREY EV dealer in Nepal.`,
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
