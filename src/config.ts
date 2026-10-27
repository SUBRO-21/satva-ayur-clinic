// Clinic details used across the site and in Google structured data.
// Everything in [brackets] or marked TODO is a placeholder — replace before launch.
// Keep name, address and phone written exactly as they appear on the Google Business Profile.

const mapsQuery = encodeURIComponent(
  'Satva Ayur Health Centre, 1753, 17th Main Rd, KSRTC Layout, 2nd Phase, J. P. Nagar, Bengaluru 560078',
);

export const clinic = {
  name: 'Satva Ayur Health Centre',
  tagline: 'Life through Ayurveda',
  shortName: 'Satva Ayur',
  doctor: {
    name: 'Dr. [Doctor Name]',
    qualification: 'BAMS, MD (Ayurveda)', // TODO
    registration: '[KAR Reg. No. 00000]', // TODO: state AYUSH registration number
    experienceYears: 10, // TODO
  },
  phone: '080-26760088',
  phoneHref: '+918026760088',
  mobile: '+91 94489 42843',
  mobileHref: '+919448942843',
  whatsapp: '919448942843', // TODO: confirm the mobile number is the clinic's WhatsApp
  whatsappDisplay: '+91 94489 42843',
  email: 'SatvaAyur@gmail.com',
  address: {
    street: '1753, 17th Main Rd, KSRTC Layout, 2nd Phase',
    locality: 'J. P. Nagar',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560078',
    country: 'IN',
  },
  geo: { lat: 12.9063, lng: 77.5857 }, // TODO: exact clinic coordinates from Google Maps
  // Used for structured data. Human-readable hours live in src/i18n/ui.ts.
  openingHours: [
    // Consultation
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '13:00' },
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:00', closes: '20:00' },
    // Therapies
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '20:00' },
  ],
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  social: [] as string[], // TODO: Instagram, Facebook, YouTube URLs
};

export const fullAddress = [
  clinic.address.street,
  clinic.address.locality,
  `${clinic.address.city} ${clinic.address.postalCode}`,
  clinic.address.region,
].join(', ');
