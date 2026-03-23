import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string | null;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  tags?: string[];
}

const SITE_NAME = 'The Deji Joseph';
const BASE_URL = 'https://thedejijoseph.com';

const SEO = ({
  title,
  description,
  url,
  image,
  type = 'website',
  publishedAt,
  updatedAt,
  authorName,
  tags,
}: SEOProps) => {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : undefined;

  const jsonLd = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image || undefined,
        datePublished: publishedAt,
        dateModified: updatedAt || publishedAt,
        author: {
          '@type': 'Person',
          name: authorName || 'Deji Joseph',
          url: BASE_URL,
        },
        publisher: {
          '@type': 'Person',
          name: 'Deji Joseph',
          url: BASE_URL,
        },
        mainEntityOfPage: canonicalUrl,
        keywords: tags?.join(', '),
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: canonicalUrl,
        author: {
          '@type': 'Person',
          name: 'Deji Joseph',
          url: BASE_URL,
        },
      };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Article-specific */}
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      {tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
