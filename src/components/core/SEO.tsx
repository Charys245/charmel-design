import { Helmet } from "react-helmet-async";

export interface SEOProps {
  /** Page title - will be displayed in browser tab */
  title?: string;
  /** Meta description for search engines */
  description?: string;
  /** Open Graph title (defaults to title if not provided) */
  ogTitle?: string;
  /** Open Graph description (defaults to description if not provided) */
  ogDescription?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Open Graph type (default: "website") */
  ogType?: "website" | "article" | "profile";
  /** Twitter card type */
  twitterCard?: "summary" | "summary_large_image";
  /** Canonical URL */
  canonical?: string;
  /** Additional keywords */
  keywords?: string;
  /** Author name */
  author?: string;
  /** Robots directive */
  robots?: string;
  /** Language/locale */
  locale?: string;
  /** Site name for OG */
  siteName?: string;
  /** Don't append site name to title */
  noSiteName?: boolean;
}

const DEFAULT_SITE_NAME = "Charmel Tobou";
const DEFAULT_DESCRIPTION = "Brand Designer & Graphiste — Identités visuelles audacieuses pour marques ambitieuses.";

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  canonical,
  keywords,
  author = "Charmel Tobou",
  robots = "index, follow",
  locale = "fr_FR",
  siteName = DEFAULT_SITE_NAME,
  noSiteName = false,
}: SEOProps) {
  const fullTitle = title
    ? (noSiteName ? title : `${title} · ${siteName}`)
    : siteName;

  const finalOgTitle = ogTitle || title || siteName;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default SEO;
