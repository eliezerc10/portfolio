import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Eliezer Castillo - Full Stack Developer",
  description = "Full Stack Developer with 4+ years of experience in React, TypeScript, Java, Spring Boot, and modern web technologies. Passionate about creating innovative solutions.",
  image = "https://eliezerc10.github.io/portfolio/profilePic.webp",
  url = "https://eliezerc10.github.io/portfolio/",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eliezer Castillo",
    "jobTitle": "Full Stack Developer",
    "url": url,
    "image": image,
    "description": description,
    "sameAs": [
      "https://www.linkedin.com/in/eliezer-castillo",
      "https://github.com/eliezerc10"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Angular",
      "Next.js",
      "Nest.js",
      "Full Stack Development",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Universidad"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Full Stack Developer, React, TypeScript, JavaScript, Java, Spring Boot, Angular, Next.js, Web Development, Portfolio" />
      <meta name="author" content="Eliezer Castillo" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Eliezer Castillo Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@eliezerc10" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#31333b" />
      <meta name="msapplication-TileColor" content="#31333b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
