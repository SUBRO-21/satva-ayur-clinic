// schema.org structured data. Google reads this to show the clinic's
// address, hours and phone in search results and Maps.
import { clinic } from '../config';
import { facilities } from '../data/facilities';
import { t } from '../i18n/ui';

export function clinicSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': new URL('/#clinic', site).href,
    name: clinic.name,
    alternateName: [clinic.shortName, 'Satva Ayur Ayurvedic Clinic, JP Nagar'],
    description:
      'Ayurvedic clinic in J. P. Nagar, Bengaluru offering doctor consultation, classical Ayurvedic therapies, Panchakarma, Swarna Prashana for children and an authorised Vaidyaratnam medicine counter.',
    url: site.href,
    telephone: clinic.mobileHref,
    email: clinic.email,
    image: new URL('/og-default.png', site).href,
    logo: new URL('/images/logo.jpg', site).href,
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
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      ...t('en').home.areas.map((name) => ({ '@type': 'Place', name })),
    ],
    knowsAbout: ['Ayurveda', 'Panchakarma', 'Abhyanga', 'Shirodhara', 'Swarna Prashana', 'Skin disorders', 'Diabetes', 'Thyroid disorders'],
    availableService: facilities.map((f) => ({
      '@type': 'MedicalTherapy',
      name: f.title,
      description: f.tagline,
      url: new URL(`/facilities/${f.slug}/`, site).href,
    })),
    employee: { '@id': new URL('/#doctor', site).href },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: new URL('/consultation/', site).href,
        actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
      },
      result: { '@type': 'Reservation', name: 'Ayurvedic consultation' },
    },
    ...(clinic.social.length > 0 && { sameAs: clinic.social }),
  };
}

export function websiteSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': new URL('/#website', site).href,
    name: clinic.name,
    alternateName: clinic.shortName,
    url: site.href,
    inLanguage: 'en-IN',
    publisher: { '@id': new URL('/#clinic', site).href },
  };
}

export function physicianSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': new URL('/#doctor', site).href,
    name: clinic.doctor.name,
    description: `${clinic.doctor.qualification} Ayurvedic physician with over ${clinic.doctor.experienceYears} years of clinical experience, with a special interest in skin disorders, diabetes and thyroid-related conditions.`,
    image: new URL(clinic.doctor.photo, site).href,
    url: new URL('/about/', site).href,
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: clinic.doctor.qualification },
    identifier: clinic.doctor.registration,
    knowsAbout: ['Ayurveda', 'Skin disorders', 'Diabetes', 'Thyroid disorders', 'Panchakarma'],
    worksFor: { '@id': new URL('/#clinic', site).href },
    address: { '@type': 'PostalAddress', addressLocality: clinic.address.city, addressRegion: clinic.address.region, addressCountry: clinic.address.country },
    telephone: clinic.mobileHref,
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
  image?: string;
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
    ...(opts.image && { image: new URL(opts.image, opts.site).href }),
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

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
