// UI text. The site is English-only for now. The routing helpers below still
// take a language so Kannada or Hindi can be added back later (the earlier
// drafts are in git history): add the language here and a dictionary for it.
// Text in [brackets] is a placeholder.

export const languages = {
  en: { label: 'English', htmlLang: 'en-IN', ogLocale: 'en_IN' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

const en = {
  nav: { home: 'Home', about: 'About', facilities: 'Facilities', blog: 'Blog', contact: 'Contact' },
  navLabel: 'Main',
  footerNavLabel: 'Footer',
  brandSub: 'Health Centre · Life through Ayurveda',
  menu: 'Menu',
  skip: 'Skip to content',
  cta: {
    call: 'Call',
    callFull: 'Call the clinic',
    whatsapp: 'WhatsApp',
    whatsappFull: 'Message on WhatsApp',
    whatsappMessage: 'Hello, I would like to book a consultation.',
    book: 'Book a consultation',
    bookShort: 'Book consultation',
    bookText: 'Call or send a WhatsApp message to book. Please book 24 hours in advance where you can.',
  },
  hours: {
    consultationLabel: 'Consultation',
    consultationDays: 'Monday – Saturday',
    consultation: '9:30 am – 1:00 pm · 5:00 pm – 8:00 pm',
    therapiesLabel: 'Therapies',
    therapiesDays: 'Monday – Sunday',
    therapies: '7:00 am – 8:00 pm',
  },
  home: {
    metaTitle: 'Ayurvedic Health Centre in J. P. Nagar, Bengaluru',
    metaDescription:
      'Satva Ayur Health Centre, J. P. Nagar: doctor consultation, Abhyangam, Shirodhara, Panchakarma, Swarna Prashana and an authorised Vaidyaratnam medicine counter.',
    eyebrow: 'Welcome to nature’s cradle',
    title: 'Ayurveda, for a healthy you, today and tomorrow.',
    tagline: '“Life through Ayurveda…”',
    highlights: [
      { title: 'Doctor consultation', text: 'Qualified Ayurvedic doctors' },
      { title: 'Ayurvedic therapies', text: 'Abhyangam, Shirodhara & Panchakarma' },
      { title: 'Medicine counter', text: 'Authorised Vaidyaratnam dealer' },
      { title: 'Swarna Prashana', text: 'For children' },
    ],
    philosophyEyebrow: 'Classical tradition',
    philosophyTitle: 'Ayurveda — the science of life.',
    philosophyText:
      'Ayurveda is a way of living. Satva Ayur Health Centre has a team of qualified doctors and therapists, and a calm, therapeutic setting for healing, wellness and long-term health.',
    principles: [
      { name: 'Swasthya Rakshanam', text: 'Maintaining the health of the healthy.' },
      { name: 'Athurasya Roganuth', text: 'Healing the ailments.' },
    ],
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Classical therapies, under one roof.',
    facilitiesText: 'Every programme is decided after a consultation with our doctors.',
    signatureEyebrow: 'Ayur-Satva',
    signatureTitle: 'Signature therapies',
    signatureText: 'Our combination therapies bring several classical treatments together in one unhurried session.',
    signatureLink: 'See all signature therapies',
    doctorTitle: 'Meet the doctor',
    doctorText: '[Two or three sentences about the doctor’s training, years of practice and areas of interest.]',
    doctorLink: 'More about the centre',
    visitEyebrow: 'Visit us',
    visitTitle: 'Timings & location',
    blogTitle: 'From the blog',
    blogLink: 'All articles',
    learnMore: 'Learn more',
  },
  about: {
    metaTitle: 'About the Centre and Doctor',
    metaDescription: 'Satva Ayur Health Centre in J. P. Nagar, Bengaluru: our approach to classical Ayurveda, our doctors and therapists.',
    title: 'About Satva Ayur',
    intro:
      'Welcome to nature’s cradle. Satva Ayur Health Centre brings classical Ayurveda — doctor consultation, therapies and authentic medicines — together in J. P. Nagar, Bengaluru.',
    doctorTitle: 'The doctor',
    doctorBody: [
      '[Doctor’s education — college, degree, year — and any postgraduate training.]',
      '[Years of practice, hospitals or clinics worked at, and areas of special interest.]',
    ],
    credentials: 'Qualifications',
    registration: 'Registration',
    experience: 'years of practice',
    clinicTitle: 'The centre',
    clinicBody: [
      'Our team of qualified doctors and therapists provides a therapeutic environment for healing, wellness and long-term health.',
      'Alongside our therapies, the centre has an Ayurvedic medicine counter and is an authorised Vaidyaratnam medicine dealer. We also offer Swarna Prashana for children.',
    ],
  },
  facilities: {
    metaTitle: 'Ayurvedic Facilities & Therapies',
    metaDescription:
      'Abhyangam & Swedana, Shirodhara, eye and ear care, joint care, Ayur facials, Panchakarma, signature therapies and weight management programmes in J. P. Nagar, Bengaluru.',
    title: 'Facilities',
    pageTitle: '{title} in J. P. Nagar, Bengaluru',
    intro: 'Classical Ayurvedic therapies, each planned after a consultation with our doctors. Duration and medicines may be adjusted to your health, the season and the doctor’s advice.',
    servicesTitle: 'Also at the centre',
    therapies: 'therapies',
    programmes: 'programmes',
    notes: 'Good to know',
    ask: 'Ask about these therapies',
    all: 'All facilities',
    viewAll: 'View all facilities',
    menuText: 'Classical Ayurvedic therapies and programmes, planned after a consultation.',
    fullBody: 'Full body',
    local: 'Local area',
  },
  blog: {
    metaTitle: 'Ayurveda Blog',
    metaDescription: 'Articles on Ayurvedic daily routine, diet, seasonal care and therapies from Satva Ayur Health Centre, Bengaluru.',
    title: 'Blog',
    intro: 'Practical writing on Ayurveda, diet and daily routine.',
    read: 'Read article',
    published: 'Published',
    updated: 'Updated',
    by: 'Written by',
    empty: 'No articles yet.',
    emptyLink: 'Go to the home page',
    back: 'All articles',
    eyebrow: 'Ayur wisdom',
    otherLangs: 'Also available in',
  },
  contact: {
    metaTitle: 'Contact and Directions',
    metaDescription: 'Address, timings, phone, WhatsApp and email for Satva Ayur Health Centre, J. P. Nagar, Bengaluru.',
    title: 'Contact',
    intro: 'Call or message on WhatsApp to book a consultation or a therapy, or to ask a question.',
    address: 'Address',
    phone: 'Phone',
    hours: 'Timings',
    email: 'Email',
    directions: 'Get directions',
    mapTitle: 'Map showing the centre’s location',
  },
  notFound: { title: 'Page not found', text: 'The page you were looking for does not exist.', home: 'Go to the home page' },
  footer: {
    disclaimer:
      'Information on this website is for general education and is not a substitute for a consultation. Therapies are decided only after an in-person assessment.',
    rights: 'All rights reserved.',
  },
};

type Dict = typeof en;

const ui: Record<Lang, Dict> = { en };

export function t(lang: Lang): Dict {
  return ui[lang];
}

/** Build a site path for a language. `path` is language-neutral, e.g. '/about/'. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** Route param for the optional [...lang] segment (undefined = default language at the root). */
export function langParam(lang: Lang): string | undefined {
  return lang === defaultLang ? undefined : lang;
}

/** getStaticPaths entries for pages that exist in every language. */
export function langStaticPaths() {
  return langs.map((lang) => ({ params: { lang: langParam(lang) }, props: { lang } }));
}

export function formatDate(date: Date, lang: Lang): string {
  // Frontmatter dates are UTC midnight; format in UTC so the day never shifts with the build machine's timezone.
  return date.toLocaleDateString(languages[lang].htmlLang, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function whatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
