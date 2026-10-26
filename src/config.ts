// Clinic details used across the site and in Google structured data.
// Everything in [brackets] or marked TODO is a placeholder — replace before launch.
// Keep name, address and phone written exactly as they appear on the Google Business Profile.

export const clinic = {
  name: 'Satva Ayur Health Centre', // Name as printed on the clinic brochure
  tagline: 'Life through Ayurveda',
  shortName: 'Satva Ayur',
  doctor: {
    name: 'Dr. [Doctor Name]',
    qualification: 'BAMS, MD (Ayurveda)', // TODO
    registration: '[KAR Reg. No. 00000]', // TODO: state AYUSH registration number
    experienceYears: 10, // TODO
  },
  phone: '+91 90000 00000', // TODO: display format
  phoneHref: '+919000000000', // TODO: tel: format, no spaces
  whatsapp: '919000000000', // TODO: country code + number, digits only
  whatsappDisplay: '+91 90000 00000', // TODO: display format of the WhatsApp number
  email: 'hello@example.com', // TODO
  address: {
    street: '[No. 00, Street name]',
    locality: '[Area]',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560000',
    country: 'IN',
  },
  geo: { lat: 12.9716, lng: 77.5946 }, // TODO: exact clinic coordinates
  // Used for structured data. Human-readable hours live in src/i18n/ui.ts.
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  mapsLink: 'https://maps.google.com/?q=Bengaluru', // TODO: share link from Google Business Profile
  mapsEmbed: 'https://www.google.com/maps?q=Bengaluru&output=embed', // TODO
  social: [] as string[], // TODO: Instagram, Facebook, YouTube URLs
};

export const fullAddress = [
  clinic.address.street,
  clinic.address.locality,
  `${clinic.address.city} ${clinic.address.postalCode}`,
  clinic.address.region,
].join(', ');
