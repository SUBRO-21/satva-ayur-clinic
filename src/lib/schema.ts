// schema.org structured data. Google reads this to show the clinic's
// address, hours and phone in search results and Maps.
import { clinic } from '../config';

export function clinicSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': new URL('/#clinic', site).href,
    name: clinic.name,
    url: site.href,
    telephone: clinic.phoneHref,
    email: clinic.email,
    image: new URL('/og-default.png', site).href,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.address.street}, ${clinic.address.locality}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: clinic.geo.lat, longitude: clinic.geo.lng },
    openingHoursSpecification: clinic.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMap: clinic.mapsLink,
    availableLanguage: ['English', 'Kannada', 'Hindi'],
    sameAs: clinic.social,
  };
}

export function physicianSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: clinic.doctor.name,
    description: clinic.doctor.qualification,
    worksFor: { '@id': new URL('/#clinic', site).href },
    telephone: clinic.phoneHref,
  };
}

export function articleSchema(opts: {
  site: URL;
  url: string;
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  updatedDate?: Date;
  lang: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': new URL('/#clinic', opts.site).href },
    mainEntityOfPage: opts.url,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
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
