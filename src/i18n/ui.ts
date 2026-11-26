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
    bookOnline: 'Book online',
    bookText: 'Book online, call or send a WhatsApp message. Please book 24 hours in advance where you can.',
  },
  hours: {
    consultationLabel: 'Consultation',
    consultationDays: 'Monday – Saturday',
    consultation: '10:30 am – 6:30 pm',
    therapiesLabel: 'Therapies',
    therapiesDays: 'Monday – Sunday',
    therapies: '7:00 am – 7:00 pm',
  },
  home: {
    metaTitle: 'Ayurvedic Health Centre in J. P. Nagar, Bengaluru',
    metaDescription:
      'Satva Ayur Health Centre, J. P. Nagar: doctor consultation, Abhyangam, Shirodhara, Panchakarma, Swarna Prashana and an authorised Vaidyaratnam medicine counter.',
    title: 'Ayurveda, for a healthy you, today and tomorrow.',
    tagline: '“Life through Ayurveda…”',
    highlights: [
      { title: 'Doctor consultation', text: 'Qualified Ayurvedic doctors' },
      { title: 'Ayurvedic therapies', text: 'Abhyangam, Shirodhara & Panchakarma' },
      { title: 'Medicine counter', text: 'Authorised Vaidyaratnam dealer' },
      { title: 'Swarna Prashana', text: 'For children' },
    ],
    philosophyEyebrow: 'Classical tradition',
    philosophyTitle: 'Satva Ayur',
    philosophyText:
      'Ayurveda is a way of living. Satva Ayur Health Centre has a team of qualified doctors and therapists, and a calm, therapeutic setting for healing, wellness and long-term health.',
    principles: [
      { name: 'Prakrithi Rakshanam', text: 'Protecting nature and natural balance.' },
      { name: 'Aturasya Vikara Prashamanam', text: 'Relieving diseases and restoring health.' },
    ],
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Classical therapies, under one roof.',
    facilitiesIntro:
      'Satva Ayur Health Centre is dedicated to holistic healthcare through the timeless wisdom of Ayurveda. We focus on natural healing, disease management, preventive healthcare and overall well-being by restoring the body’s natural balance. Our approach combines traditional Ayurvedic principles with personalised care for a healthier and happier life.',
    facilitiesText: 'Every programme is decided after a consultation with our doctors.',
    doctorTitle: 'Meet the doctor',
    doctorText:
      'Dr. Gayathri S. is an experienced Ayurvedic physician with over 10 years of clinical experience, specializing in the holistic management of skin disorders, diabetes and thyroid-related conditions.',
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
      'Dr. Gayathri S. is an experienced Ayurvedic physician with over 10 years of clinical experience, specializing in the holistic management of skin disorders, diabetes and thyroid-related conditions.',
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
      'Abhyangam & Swedana, Shirodhara, eye and ear care, joint care, Ayur facials, Panchakarma, and Ayur-Satva signature therapies in J. P. Nagar, Bengaluru.',
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
  consultation: {
    metaTitle: 'Book an Ayurvedic Consultation',
    metaDescription:
      'Request an in-clinic Ayurvedic consultation with Dr. Gayathri S. at Satva Ayur Health Centre, J. P. Nagar, Bengaluru. We call or WhatsApp you to confirm the slot.',
    eyebrow: 'In-clinic consultation',
    title: 'Book a consultation',
    intro: 'Tell us a little about yourself and when you’d like to visit. We’ll call or WhatsApp you to confirm a time.',
    formTitle: 'Request an appointment',
    formNote: 'Fields marked * are required. It takes about a minute.',
    groupYou: 'About you',
    groupVisit: 'Your visit',
    groupMore: 'Anything we should know?',
    name: 'Full name',
    phone: 'Phone number',
    phoneHint: 'Preferably your WhatsApp number',
    email: 'Email',
    age: 'Age',
    gender: 'Gender',
    genders: ['Female', 'Male', 'Prefer not to say'],
    forWhom: 'Consultation for',
    forWhomOptions: ['Myself', 'My child', 'A family member'],
    concern: 'Main concern',
    concernPlaceholder: 'Choose one (optional)',
    concerns: [
      'Skin (eczema, psoriasis, acne, pigmentation)',
      'Diabetes',
      'Thyroid',
      'Joint, back or neck pain',
      'Stress, anxiety or sleep',
      'Digestion',
      'Women’s health',
      'Child health / Swarna Prashana',
      'Panchakarma or therapy advice',
      'General wellness check',
      'Other',
    ],
    date: 'Preferred date',
    dateHint: 'Monday – Saturday',
    time: 'Preferred time',
    times: ['Morning (10:30 am – 1 pm)', 'Afternoon (1 – 4 pm)', 'Evening (4 – 6:30 pm)'],
    visitType: 'Visit type',
    visitTypes: ['First visit', 'Follow-up'],
    message: 'Symptoms or questions',
    messagePlaceholder: 'Briefly describe what you’d like help with, how long it has been going on, and any current medicines.',
    consent: 'I agree to be contacted by Satva Ayur about this request.',
    submit: 'Request consultation',
    sending: 'Sending…',
    whatsapp: 'Send on WhatsApp instead',
    whatsappOnly: 'Send request on WhatsApp',
    privacy: 'Your details are used only to arrange your consultation and are never shared.',
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a valid 10-digit phone number.',
      email: 'Please enter a valid email address.',
      date: 'Please choose a date from today onwards.',
      sunday: 'Consultations are Monday to Saturday. Please pick another day.',
      consent: 'Please tick the box so we can contact you.',
    },
    successTitle: 'Thank you — request received',
    successText: 'We’ll call or WhatsApp you during clinic hours to confirm your appointment. For anything urgent, please call us.',
    failText: 'Sorry, the request could not be sent. Please send it on WhatsApp or call us instead.',
    waIntro: 'Hello, I would like to book a consultation.',
    asideTitle: 'Your doctor',
    timingsTitle: 'Consultation timings',
    whereTitle: 'Where',
    stepsTitle: 'What happens next',
    steps: [
      { title: 'Send your request', text: 'Share your details and a preferred date and time.' },
      { title: 'We confirm', text: 'Our team calls or WhatsApps you to fix a convenient slot.' },
      { title: 'Meet the doctor', text: 'A personal consultation, assessment of your Prakruthi, and a care plan.' },
    ],
    bring: 'Please bring any recent reports and a list of the medicines you take.',
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
