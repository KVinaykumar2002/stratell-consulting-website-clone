import { useParams } from 'react-router-dom';
import { Head } from '@/lib/use-head';
import { technologiesData } from '@/lib/technologies-data';
import TechnologyPageContent from '@/app/technologies/[slug]/technology-page-content';
import NotFoundPage from './NotFoundPage';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function TechnologyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const technology = slug ? technologiesData[slug] : null;

  if (!technology) {
    return <NotFoundPage />;
  }

  const title = `${technology.title} - Expert Technology Solutions | TechnoRealm`;
  const description = `${technology.fullDescription.slice(0, 155)}...`;

  return (
    <>
      <Head
        title={title}
        description={description}
        keywords={`${technology.title.toLowerCase()}, ${technology.title.toLowerCase()} solutions, ${technology.title.toLowerCase()} consulting, technology solutions, TechnoRealm, ${technology.benefits.slice(0, 3).map(b => b.toLowerCase()).join(', ')}`}
        canonical={`${siteUrl}/technologies/${slug}`}
        ogTitle={title}
        ogDescription={technology.shortDescription}
        ogUrl={`${siteUrl}/technologies/${slug}`}
        ogImage={technology.heroImage}
        twitterTitle={title}
        twitterDescription={technology.shortDescription}
        twitterImage={technology.heroImage}
      />
      <TechnologyPageContent technology={technology} />
    </>
  );
}

