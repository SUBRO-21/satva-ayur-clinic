// UI text for every language. English is the source; Kannada and Hindi are
// first drafts and should be reviewed by a native speaker before launch.
// Text in [brackets] is a placeholder.

export const languages = {
  en: { label: 'English', htmlLang: 'en-IN', ogLocale: 'en_IN' },
  kn: { label: 'ಕನ್ನಡ', htmlLang: 'kn-IN', ogLocale: 'kn_IN' },
  hi: { label: 'हिन्दी', htmlLang: 'hi-IN', ogLocale: 'hi_IN' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

const en = {
  nav: { home: 'Home', about: 'About', treatments: 'Treatments', blog: 'Blog', contact: 'Contact' },
  navLabel: 'Main',
  footerNavLabel: 'Footer',
  brandSub: 'Ayurveda Clinic',
  menu: 'Menu',
  language: 'Language',
  skip: 'Skip to content',
  cta: {
    call: 'Call',
    callFull: 'Call the clinic',
    whatsapp: 'WhatsApp',
    whatsappFull: 'Message on WhatsApp',
    whatsappMessage: 'Hello, I would like to book a consultation.',
    book: 'Book a consultation',
    bookText: 'Call or send a WhatsApp message to book. We usually reply within a few hours.',
  },
  hours: { text: 'Mon – Sat, 9:00 am – 7:00 pm', closed: 'Sunday closed' },
  home: {
    metaTitle: 'Ayurvedic Clinic in [Area], Bengaluru',
    metaDescription:
      'Personalised Ayurvedic consultation, Panchakarma and treatment for joint pain, skin, digestion and women’s health in [Area], Bengaluru.',
    eyebrow: 'Ayurvedic clinic · [Area], Bengaluru',
    title: 'Classical Ayurveda, practised with care.',
    text: 'Personalised consultation and treatment led by [Doctor Name], BAMS. Every plan begins with a detailed assessment of your constitution and health history.',
    treatmentsTitle: 'Treatments',
    treatmentsText: 'Care for long-standing conditions and for staying well.',
    approachTitle: 'How a visit works',
    approach: [
      { title: 'Consultation', text: 'A detailed conversation about your health, lifestyle and history, with pulse and constitution assessment.' },
      { title: 'Your plan', text: 'A treatment plan written for you: therapies, herbal medicines, diet and daily routine.' },
      { title: 'Follow-up', text: 'Regular reviews to see what is working and adjust the plan as you progress.' },
    ],
    doctorTitle: 'Meet the doctor',
    doctorText: '[Two or three sentences about the doctor’s training, years of practice and areas of interest.]',
    doctorLink: 'More about the clinic',
    blogTitle: 'From the blog',
    blogLink: 'All articles',
    visitTitle: 'Visit the clinic',
  },
  about: {
    metaTitle: 'About the Clinic and Doctor',
    metaDescription: 'Meet [Doctor Name], BAMS, and learn about Satva Ayurveda Clinic’s approach to classical Ayurvedic care in Bengaluru.',
    title: 'About Satva',
    intro: '[One-paragraph introduction to the clinic: when it was founded, its philosophy, and who it serves.]',
    doctorTitle: 'The doctor',
    doctorBody: [
      '[Doctor’s education — college, degree, year — and any postgraduate training.]',
      '[Years of practice, hospitals or clinics worked at, and areas of special interest.]',
    ],
    credentials: 'Qualifications',
    registration: 'Registration',
    experience: 'years of practice',
    clinicTitle: 'The clinic',
    clinicBody: ['[Describe the clinic space, therapy rooms, and the team of therapists.]'],
  },
  treatments: {
    metaTitle: 'Ayurvedic Treatments',
    metaDescription: 'Panchakarma and Ayurvedic treatment for joint and back pain, skin and hair, women’s health, digestion, stress and sleep in Bengaluru.',
    title: 'Treatments',
    pageTitle: '{title} in Bengaluru',
    intro: 'Each treatment plan is decided after a consultation. The pages below explain what each one involves.',
    conditions: 'Often sought for',
    ask: 'Ask about this treatment',
    all: 'All treatments',
    more: 'Read more',
  },
  blog: {
    metaTitle: 'Ayurveda Blog',
    metaDescription: 'Articles on Ayurvedic daily routine, diet, seasonal care and treatments from Satva Ayurveda Clinic, Bengaluru.',
    title: 'Blog',
    intro: 'Practical writing on Ayurveda, diet and daily routine.',
    read: 'Read article',
    published: 'Published',
    updated: 'Updated',
    by: 'Written by',
    empty: 'No articles in this language yet.',
    emptyLink: 'Read articles in English',
    back: 'All articles',
    otherLangs: 'Also available in',
  },
  contact: {
    metaTitle: 'Contact and Directions',
    metaDescription: 'Address, opening hours, phone and WhatsApp for Satva Ayurveda Clinic in [Area], Bengaluru.',
    title: 'Contact',
    intro: 'Call or message on WhatsApp to book a consultation or ask a question.',
    address: 'Address',
    phone: 'Phone',
    hours: 'Hours',
    email: 'Email',
    directions: 'Get directions',
    mapTitle: 'Map showing the clinic location',
  },
  notFound: { title: 'Page not found', text: 'The page you were looking for does not exist.', home: 'Go to the home page' },
  footer: {
    disclaimer:
      'Information on this website is for general education and is not a substitute for a consultation. Treatment is decided only after an in-person assessment.',
    rights: 'All rights reserved.',
  },
};

type Dict = typeof en;

const kn: Dict = {
  nav: { home: 'ಮುಖಪುಟ', about: 'ನಮ್ಮ ಬಗ್ಗೆ', treatments: 'ಚಿಕಿತ್ಸೆಗಳು', blog: 'ಬ್ಲಾಗ್', contact: 'ಸಂಪರ್ಕ' },
  navLabel: 'ಮುಖ್ಯ ಮೆನು',
  footerNavLabel: 'ಅಡಿಟಿಪ್ಪಣಿ',
  brandSub: 'ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್',
  menu: 'ಮೆನು',
  language: 'ಭಾಷೆ',
  skip: 'ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ',
  cta: {
    call: 'ಕರೆ ಮಾಡಿ',
    callFull: 'ಕ್ಲಿನಿಕ್‌ಗೆ ಕರೆ ಮಾಡಿ',
    whatsapp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್',
    whatsappFull: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    whatsappMessage: 'ನಮಸ್ಕಾರ, ನಾನು ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.',
    book: 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
    bookText: 'ಬುಕ್ ಮಾಡಲು ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ. ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ ಉತ್ತರಿಸುತ್ತೇವೆ.',
  },
  hours: { text: 'ಸೋಮ – ಶನಿ, ಬೆಳಿಗ್ಗೆ 9:00 – ಸಂಜೆ 7:00', closed: 'ಭಾನುವಾರ ರಜೆ' },
  home: {
    metaTitle: 'ಬೆಂಗಳೂರಿನ [ಪ್ರದೇಶ]ದಲ್ಲಿ ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್',
    metaDescription:
      'ಬೆಂಗಳೂರಿನ [ಪ್ರದೇಶ]ದಲ್ಲಿ ವೈಯಕ್ತಿಕ ಆಯುರ್ವೇದ ಸಮಾಲೋಚನೆ, ಪಂಚಕರ್ಮ ಮತ್ತು ಕೀಲು ನೋವು, ಚರ್ಮ, ಜೀರ್ಣಕ್ರಿಯೆ ಹಾಗೂ ಮಹಿಳೆಯರ ಆರೋಗ್ಯಕ್ಕೆ ಚಿಕಿತ್ಸೆ.',
    eyebrow: 'ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್ · [ಪ್ರದೇಶ], ಬೆಂಗಳೂರು',
    title: 'ಕಾಳಜಿಯಿಂದ ಅಭ್ಯಸಿಸುವ ಶಾಸ್ತ್ರೀಯ ಆಯುರ್ವೇದ.',
    text: '[ವೈದ್ಯರ ಹೆಸರು], BAMS ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ. ಪ್ರತಿಯೊಂದು ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯೂ ನಿಮ್ಮ ಪ್ರಕೃತಿ ಮತ್ತು ಆರೋಗ್ಯ ಇತಿಹಾಸದ ವಿವರವಾದ ಪರೀಕ್ಷೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.',
    treatmentsTitle: 'ಚಿಕಿತ್ಸೆಗಳು',
    treatmentsText: 'ದೀರ್ಘಕಾಲದ ಸಮಸ್ಯೆಗಳಿಗೆ ಮತ್ತು ಆರೋಗ್ಯವಾಗಿರಲು ಆರೈಕೆ.',
    approachTitle: 'ಭೇಟಿ ಹೇಗಿರುತ್ತದೆ',
    approach: [
      { title: 'ಸಮಾಲೋಚನೆ', text: 'ನಿಮ್ಮ ಆರೋಗ್ಯ, ಜೀವನಶೈಲಿ ಮತ್ತು ಇತಿಹಾಸದ ಬಗ್ಗೆ ವಿವರವಾದ ಮಾತುಕತೆ, ನಾಡಿ ಮತ್ತು ಪ್ರಕೃತಿ ಪರೀಕ್ಷೆಯೊಂದಿಗೆ.' },
      { title: 'ನಿಮ್ಮ ಯೋಜನೆ', text: 'ನಿಮಗಾಗಿಯೇ ರೂಪಿಸಿದ ಚಿಕಿತ್ಸಾ ಯೋಜನೆ: ಚಿಕಿತ್ಸೆಗಳು, ಔಷಧಿಗಳು, ಆಹಾರ ಮತ್ತು ದಿನಚರಿ.' },
      { title: 'ಮುಂದಿನ ಭೇಟಿಗಳು', text: 'ಯಾವುದು ಫಲ ನೀಡುತ್ತಿದೆ ಎಂದು ನೋಡಿ ಯೋಜನೆಯನ್ನು ಹೊಂದಿಸಲು ನಿಯಮಿತ ಪರಿಶೀಲನೆ.' },
    ],
    doctorTitle: 'ವೈದ್ಯರ ಪರಿಚಯ',
    doctorText: '[ವೈದ್ಯರ ತರಬೇತಿ, ಅನುಭವ ಮತ್ತು ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರಗಳ ಬಗ್ಗೆ ಎರಡು–ಮೂರು ವಾಕ್ಯಗಳು.]',
    doctorLink: 'ಕ್ಲಿನಿಕ್ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು',
    blogTitle: 'ಬ್ಲಾಗ್‌ನಿಂದ',
    blogLink: 'ಎಲ್ಲಾ ಲೇಖನಗಳು',
    visitTitle: 'ಕ್ಲಿನಿಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ',
  },
  about: {
    metaTitle: 'ಕ್ಲಿನಿಕ್ ಮತ್ತು ವೈದ್ಯರ ಬಗ್ಗೆ',
    metaDescription: '[ವೈದ್ಯರ ಹೆಸರು], BAMS ಅವರನ್ನು ಭೇಟಿಯಾಗಿ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಸತ್ವ ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್‌ನ ಶಾಸ್ತ್ರೀಯ ಆಯುರ್ವೇದ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.',
    title: 'ಸತ್ವದ ಬಗ್ಗೆ',
    intro: '[ಕ್ಲಿನಿಕ್‌ನ ಪರಿಚಯ: ಯಾವಾಗ ಆರಂಭವಾಯಿತು, ಅದರ ತತ್ವ ಮತ್ತು ಯಾರಿಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ.]',
    doctorTitle: 'ವೈದ್ಯರು',
    doctorBody: ['[ವೈದ್ಯರ ಶಿಕ್ಷಣ — ಕಾಲೇಜು, ಪದವಿ, ವರ್ಷ.]', '[ಅನುಭವದ ವರ್ಷಗಳು ಮತ್ತು ವಿಶೇಷ ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರಗಳು.]'],
    credentials: 'ಅರ್ಹತೆಗಳು',
    registration: 'ನೋಂದಣಿ',
    experience: 'ವರ್ಷಗಳ ಅನುಭವ',
    clinicTitle: 'ಕ್ಲಿನಿಕ್',
    clinicBody: ['[ಕ್ಲಿನಿಕ್, ಚಿಕಿತ್ಸಾ ಕೊಠಡಿಗಳು ಮತ್ತು ಚಿಕಿತ್ಸಕರ ತಂಡದ ವಿವರಣೆ.]'],
  },
  treatments: {
    metaTitle: 'ಆಯುರ್ವೇದ ಚಿಕಿತ್ಸೆಗಳು',
    metaDescription: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪಂಚಕರ್ಮ ಮತ್ತು ಕೀಲು–ಬೆನ್ನು ನೋವು, ಚರ್ಮ–ಕೂದಲು, ಮಹಿಳೆಯರ ಆರೋಗ್ಯ, ಜೀರ್ಣಕ್ರಿಯೆ, ಒತ್ತಡ ಮತ್ತು ನಿದ್ರೆಗೆ ಆಯುರ್ವೇದ ಚಿಕಿತ್ಸೆ.',
    title: 'ಚಿಕಿತ್ಸೆಗಳು',
    pageTitle: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ {title}',
    intro: 'ಪ್ರತಿ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಸಮಾಲೋಚನೆಯ ನಂತರ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ. ಕೆಳಗಿನ ಪುಟಗಳು ಪ್ರತಿಯೊಂದರ ವಿವರ ನೀಡುತ್ತವೆ.',
    conditions: 'ಸಾಮಾನ್ಯವಾಗಿ ಇವುಗಳಿಗೆ',
    ask: 'ಈ ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ಕೇಳಿ',
    all: 'ಎಲ್ಲಾ ಚಿಕಿತ್ಸೆಗಳು',
    more: 'ಇನ್ನಷ್ಟು ಓದಿ',
  },
  blog: {
    metaTitle: 'ಆಯುರ್ವೇದ ಬ್ಲಾಗ್',
    metaDescription: 'ಸತ್ವ ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್‌ನಿಂದ ದಿನಚರಿ, ಆಹಾರ, ಋತುಚರ್ಯೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಳ ಕುರಿತ ಲೇಖನಗಳು.',
    title: 'ಬ್ಲಾಗ್',
    intro: 'ಆಯುರ್ವೇದ, ಆಹಾರ ಮತ್ತು ದಿನಚರಿಯ ಕುರಿತು ಉಪಯುಕ್ತ ಬರಹಗಳು.',
    read: 'ಲೇಖನ ಓದಿ',
    published: 'ಪ್ರಕಟಿತ',
    updated: 'ನವೀಕರಿಸಲಾಗಿದೆ',
    by: 'ಬರೆದವರು',
    empty: 'ಈ ಭಾಷೆಯಲ್ಲಿ ಇನ್ನೂ ಲೇಖನಗಳಿಲ್ಲ.',
    emptyLink: 'ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಲೇಖನಗಳನ್ನು ಓದಿ',
    back: 'ಎಲ್ಲಾ ಲೇಖನಗಳು',
    otherLangs: 'ಇತರ ಭಾಷೆಗಳಲ್ಲಿ',
  },
  contact: {
    metaTitle: 'ಸಂಪರ್ಕ ಮತ್ತು ದಾರಿ',
    metaDescription: 'ಬೆಂಗಳೂರಿನ [ಪ್ರದೇಶ]ದಲ್ಲಿರುವ ಸತ್ವ ಆಯುರ್ವೇದ ಕ್ಲಿನಿಕ್‌ನ ವಿಳಾಸ, ಸಮಯ, ಫೋನ್ ಮತ್ತು ವಾಟ್ಸ್‌ಆ್ಯಪ್.',
    title: 'ಸಂಪರ್ಕ',
    intro: 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಲು ಅಥವಾ ಪ್ರಶ್ನೆ ಕೇಳಲು ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮಾಡಿ.',
    address: 'ವಿಳಾಸ',
    phone: 'ಫೋನ್',
    hours: 'ಸಮಯ',
    email: 'ಇಮೇಲ್',
    directions: 'ದಾರಿ ತೋರಿಸಿ',
    mapTitle: 'ಕ್ಲಿನಿಕ್ ಸ್ಥಳದ ನಕ್ಷೆ',
  },
  notFound: { title: 'ಪುಟ ಸಿಗಲಿಲ್ಲ', text: 'ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.', home: 'ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ' },
  footer: {
    disclaimer:
      'ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಮಾಹಿತಿ ಸಾಮಾನ್ಯ ತಿಳುವಳಿಕೆಗಾಗಿ ಮಾತ್ರ; ಇದು ಸಮಾಲೋಚನೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ನೇರ ಪರೀಕ್ಷೆಯ ನಂತರವೇ ಚಿಕಿತ್ಸೆಯನ್ನು ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.',
    rights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
};

const hi: Dict = {
  nav: { home: 'होम', about: 'हमारे बारे में', treatments: 'उपचार', blog: 'ब्लॉग', contact: 'संपर्क' },
  navLabel: 'मुख्य मेन्यू',
  footerNavLabel: 'फ़ुटर',
  brandSub: 'आयुर्वेद क्लिनिक',
  menu: 'मेन्यू',
  language: 'भाषा',
  skip: 'मुख्य सामग्री पर जाएँ',
  cta: {
    call: 'कॉल करें',
    callFull: 'क्लिनिक को कॉल करें',
    whatsapp: 'व्हाट्सऐप',
    whatsappFull: 'व्हाट्सऐप पर संदेश भेजें',
    whatsappMessage: 'नमस्ते, मुझे परामर्श बुक करना है।',
    book: 'परामर्श बुक करें',
    bookText: 'बुक करने के लिए कॉल करें या व्हाट्सऐप संदेश भेजें। हम आमतौर पर कुछ ही घंटों में जवाब देते हैं।',
  },
  hours: { text: 'सोम – शनि, सुबह 9:00 – शाम 7:00', closed: 'रविवार बंद' },
  home: {
    metaTitle: '[क्षेत्र], बेंगलुरु में आयुर्वेदिक क्लिनिक',
    metaDescription:
      '[क्षेत्र], बेंगलुरु में व्यक्तिगत आयुर्वेदिक परामर्श, पंचकर्म और जोड़ों के दर्द, त्वचा, पाचन व महिला स्वास्थ्य के लिए उपचार।',
    eyebrow: 'आयुर्वेदिक क्लिनिक · [क्षेत्र], बेंगलुरु',
    title: 'शास्त्रीय आयुर्वेद, पूरी देखभाल के साथ।',
    text: '[डॉक्टर का नाम], BAMS के नेतृत्व में व्यक्तिगत परामर्श और उपचार। हर उपचार योजना आपकी प्रकृति और स्वास्थ्य इतिहास की विस्तृत जाँच से शुरू होती है।',
    treatmentsTitle: 'उपचार',
    treatmentsText: 'पुरानी समस्याओं के लिए और स्वस्थ रहने के लिए देखभाल।',
    approachTitle: 'परामर्श कैसे होता है',
    approach: [
      { title: 'परामर्श', text: 'आपके स्वास्थ्य, जीवनशैली और इतिहास पर विस्तृत बातचीत, नाड़ी और प्रकृति परीक्षण के साथ।' },
      { title: 'आपकी योजना', text: 'आपके लिए बनाई गई उपचार योजना: थेरेपी, औषधियाँ, आहार और दिनचर्या।' },
      { title: 'फॉलो-अप', text: 'नियमित समीक्षा, ताकि देखा जा सके कि क्या असर कर रहा है और योजना में बदलाव किया जा सके।' },
    ],
    doctorTitle: 'डॉक्टर से मिलिए',
    doctorText: '[डॉक्टर के प्रशिक्षण, अनुभव और रुचि के क्षेत्रों के बारे में दो–तीन वाक्य।]',
    doctorLink: 'क्लिनिक के बारे में और जानें',
    blogTitle: 'ब्लॉग से',
    blogLink: 'सभी लेख',
    visitTitle: 'क्लिनिक आएँ',
  },
  about: {
    metaTitle: 'क्लिनिक और डॉक्टर के बारे में',
    metaDescription: '[डॉक्टर का नाम], BAMS से मिलिए और बेंगलुरु के सत्व आयुर्वेद क्लिनिक की शास्त्रीय आयुर्वेदिक देखभाल के बारे में जानिए।',
    title: 'सत्व के बारे में',
    intro: '[क्लिनिक का परिचय: कब शुरू हुआ, इसका दृष्टिकोण और यह किसकी सेवा करता है।]',
    doctorTitle: 'डॉक्टर',
    doctorBody: ['[डॉक्टर की शिक्षा — कॉलेज, डिग्री, वर्ष।]', '[अनुभव के वर्ष और विशेष रुचि के क्षेत्र।]'],
    credentials: 'योग्यता',
    registration: 'पंजीकरण',
    experience: 'वर्षों का अनुभव',
    clinicTitle: 'क्लिनिक',
    clinicBody: ['[क्लिनिक, थेरेपी कक्षों और थेरेपिस्ट टीम का विवरण।]'],
  },
  treatments: {
    metaTitle: 'आयुर्वेदिक उपचार',
    metaDescription: 'बेंगलुरु में पंचकर्म और जोड़ों व कमर दर्द, त्वचा व बाल, महिला स्वास्थ्य, पाचन, तनाव और नींद के लिए आयुर्वेदिक उपचार।',
    title: 'उपचार',
    pageTitle: 'बेंगलुरु में {title}',
    intro: 'हर उपचार योजना परामर्श के बाद तय की जाती है। नीचे दिए पेज बताते हैं कि हर उपचार में क्या शामिल है।',
    conditions: 'आमतौर पर इनके लिए',
    ask: 'इस उपचार के बारे में पूछें',
    all: 'सभी उपचार',
    more: 'और पढ़ें',
  },
  blog: {
    metaTitle: 'आयुर्वेद ब्लॉग',
    metaDescription: 'सत्व आयुर्वेद क्लिनिक, बेंगलुरु से दिनचर्या, आहार, ऋतुचर्या और उपचारों पर लेख।',
    title: 'ब्लॉग',
    intro: 'आयुर्वेद, आहार और दिनचर्या पर उपयोगी लेख।',
    read: 'लेख पढ़ें',
    published: 'प्रकाशित',
    updated: 'अद्यतन',
    by: 'लेखक',
    empty: 'इस भाषा में अभी कोई लेख नहीं है।',
    emptyLink: 'अंग्रेज़ी में लेख पढ़ें',
    back: 'सभी लेख',
    otherLangs: 'अन्य भाषाओं में',
  },
  contact: {
    metaTitle: 'संपर्क और रास्ता',
    metaDescription: '[क्षेत्र], बेंगलुरु में सत्व आयुर्वेद क्लिनिक का पता, समय, फ़ोन और व्हाट्सऐप।',
    title: 'संपर्क',
    intro: 'परामर्श बुक करने या कोई प्रश्न पूछने के लिए कॉल करें या व्हाट्सऐप करें।',
    address: 'पता',
    phone: 'फ़ोन',
    hours: 'समय',
    email: 'ईमेल',
    directions: 'रास्ता देखें',
    mapTitle: 'क्लिनिक के स्थान का नक्शा',
  },
  notFound: { title: 'पेज नहीं मिला', text: 'आप जो पेज ढूँढ रहे हैं, वह मौजूद नहीं है।', home: 'होम पेज पर जाएँ' },
  footer: {
    disclaimer:
      'इस वेबसाइट की जानकारी केवल सामान्य जानकारी के लिए है और परामर्श का विकल्प नहीं है। उपचार केवल प्रत्यक्ष जाँच के बाद तय किया जाता है।',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
};

const ui: Record<Lang, Dict> = { en, kn, hi };

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
