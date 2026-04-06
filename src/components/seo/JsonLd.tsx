interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Intelliware Global Consulting and Services LLP',
  alternateName: 'Intelliware Global',
  url: 'https://www.intelliwareglobal.com',
  logo: 'https://www.intelliwareglobal.com/logo.png',
  description:
    'Enterprise-grade technology consulting firm delivering Cloud, AI, Cybersecurity, Data & Analytics, and Digital Transformation solutions for EMEA markets.',
  foundingDate: '2023',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 500,
  },
  areaServed: [
    { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', name: 'Europe' } },
    { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', name: 'Middle East' } },
    { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', name: 'Africa' } },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '71-75 Shelton Street, Covent Garden',
      addressLocality: 'London',
      postalCode: 'WC2H 9JQ',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Business Bay, The Opus Tower, Floor 12',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Embassy TechVillage, Outer Ring Road',
      addressLocality: 'Bengaluru',
      postalCode: '560103',
      addressCountry: 'IN',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@intelliwareglobal.com',
    contactType: 'sales',
    availableLanguage: ['English', 'German', 'French', 'Arabic', 'Spanish'],
  },
  sameAs: [],
  knowsAbout: [
    'Cloud Computing', 'Artificial Intelligence', 'Machine Learning',
    'Cybersecurity', 'Data Analytics', 'Digital Transformation',
    'Enterprise Solutions', 'IT Consulting', 'Application Development',
    'IoT', 'Quality Engineering', 'Managed Services',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Intelliware Global',
  url: 'https://www.intelliwareglobal.com',
  publisher: {
    '@type': 'Organization',
    name: 'Intelliware Global Consulting and Services LLP',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.intelliwareglobal.com/services?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export function createServiceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `https://www.intelliwareglobal.com/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Intelliware Global',
      url: 'https://www.intelliwareglobal.com',
    },
    areaServed: 'EMEA',
    serviceType: 'IT Consulting',
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
