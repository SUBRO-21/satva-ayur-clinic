// Facility pages are generated from this list — one page per category.
// Content comes from the clinic's own service list (info .txt).
// Advertising rules for AYUSH practitioners apply: describe what a therapy involves,
// never promise a cure or a guaranteed result.

export interface Therapy {
  name: string;
  duration?: string;
  /** Full-body (Sarvanga) and local (Sthanika) durations, for swedana therapies. */
  formats?: { fullBody: string; local: string };
  text?: string;
  /** Therapies combined in a signature or weight-management programme. */
  includes?: string[];
}

export interface Facility {
  slug: string;
  /** Placeholder photo, in public/images. */
  image: string;
  title: string;
  /** Sanskrit or English sub-name shown under the title. */
  subtitle: string;
  tagline: string;
  intro: string;
  therapies: Therapy[];
  notes?: string[];
}

export const facilities: Facility[] = [
  {
    slug: 'abhyangam-swedana',
    image: '/images/abhyanga.jpg',
    title: 'Abhyangam & Swedana',
    subtitle: 'Ayurvedic massage and herbal steam',
    tagline: 'Medicated-oil massages and herbal fomentation.',
    intro:
      'Classical oil massages with oils chosen for you, followed by herbal steam or fomentation to help the medicines penetrate.',
    therapies: [
      { name: 'Abhyanga', duration: '45 min', text: 'The basic Satvic massage with individual-specific oils. Stimulates circulation, tones and relaxes the muscles and strengthens the body.' },
      { name: 'Vishesha Abhyanga', duration: '45 min', text: 'Full-body, synchronised four-hand massage with medicated oils that work into the deeper tissues.' },
      { name: 'Rejuvenation Massage', duration: '60 min', text: 'A seven-step rejuvenating massage with medicated oil to relax the muscles and strengthen the body.' },
      { name: 'Mardhana', duration: '45 min', text: 'Deep-tissue massage with firm strokes to relax tired muscles, for those with persistent aches.' },
      { name: 'Samvahana', duration: '45 min', text: 'Gentle, feather-touch strokes with rare herbal essential oils — suited to sensitive skin and good for circulation.' },
      { name: 'Kaya Seka (Pizhichil)', duration: '45 min', text: 'Warm medicated oils or decoctions poured over the whole body to relax and strengthen it. Traditionally used in vascular, nerve and musculoskeletal conditions.' },
      { name: 'Sarwanga Udwarthana', duration: '45 min', text: 'A cleansing medicated-powder massage that improves circulation, complexion and body tone; often part of weight management.' },
      { name: 'Baala Abhyanga', duration: '30 min', text: 'A rejuvenating massage for children with medicated oils, to strengthen the tissues.' },
      { name: 'Spinal Massage', duration: '30 min', text: 'Focused massage for the spine and back muscles to ease pain and stiffness.' },
      { name: 'Sthanika Abhyanga', duration: '20 min', text: 'Area-specific massage.' },
      { name: 'Sthanika Udwarthana', duration: '30 min', text: 'Area-specific powder massage.' },
      { name: 'Garbhini & Soothika Abhyanga', duration: '30 min', text: 'Dedicated prenatal and postnatal massages.' },
      { name: 'Bhashpa Sweda', formats: { fullBody: '15 min', local: '15 min' }, text: 'Herbal steam bath in a steam chamber, helping the oils penetrate deeply.' },
      { name: 'Parisheka Sweda', formats: { fullBody: '30 min', local: '15 min' }, text: 'Herbal bath with a continuous pouring of warm decoctions.' },
      { name: 'Patrapinda Sweda', formats: { fullBody: '30 min', local: '15 min' }, text: 'Massage and fomentation with bundles of herbal leaves to relieve pain and soothe the tissues.' },
      { name: 'Churna Pinda Sweda', formats: { fullBody: '30 min', local: '15 min' }, text: 'Fomentation with medicated-powder bundles; often used for joint stiffness.' },
      { name: 'Shashtika Shali Pinda Sweda (Njavara Kizhi)', formats: { fullBody: '30 min', local: '20 min' }, text: 'Fomentation with bundles of rice cooked in medicated milk, after a massage. A nourishing therapy that builds muscle strength; also used in children’s and elder care.' },
      { name: 'Valooka Sweda', formats: { fullBody: '40 min', local: '20 min' }, text: 'Fomentation to relax deeper tissues and ease stiffness and discomfort — for tired legs, a stressed back and tired shoulders.' },
    ],
    notes: [
      'Swedana works best on an oiled body, which allows the medicines to be absorbed well.',
      'All Abhyangam and Bhashpa Sweda procedures are followed by a body scrub.',
      'Duration, therapies and medicines may change according to the doctor’s advice, your health and the season.',
    ],
  },
  {
    slug: 'shiropakrama',
    image: '/images/shirodhara.jpg',
    title: 'Shiropakrama',
    subtitle: 'Head and scalp therapies',
    tagline: 'Shirodhara and other therapies for the head.',
    intro:
      'Therapies for the head and scalp, including the classical dharas — a continuous, gentle stream of medicated liquid over the forehead.',
    therapies: [
      { name: 'Taila Dhara', duration: '60 min', text: 'A continuous flow of medicated oil over the forehead. Deeply relaxing; strengthens the hair roots and may help with headaches, anxiety and disturbed sleep.' },
      { name: 'Ksheeradhara', duration: '60 min', text: 'Dhara with medicated milk, for disturbed sleep, anxiety and stress.' },
      { name: 'Takra Dhara', duration: '60 min', text: 'A continuous stream of medicated buttermilk over the forehead — de-stressing and refreshing.' },
      { name: 'Sheetha Sudha', duration: '45 min', text: 'A unique combination of cooling medicated liquids poured over the forehead to cool the body, calm the mind and relieve stress.' },
      { name: 'Shiro Abhyanga', duration: '20 min', text: 'A relaxing head massage with medicated oils that cools the head and helps care for the hair.' },
      { name: 'Shiro Basti', duration: '60 min', text: 'Warm medicated oil held on the head within a leather cap. Traditionally used in nervous-system conditions and sleeplessness.' },
      { name: 'Kesha Kaanti', duration: '45 min', text: 'An oil massage with a herbal hair pack — a cooling therapy for healthy hair, dandruff and hair fall.' },
    ],
  },
  {
    slug: 'indriya-paricharya',
    image: '/images/nasya.jpg',
    title: 'Indriya Paricharya',
    subtitle: 'Care of the sense organs',
    tagline: 'Gentle therapies for the eyes and ears.',
    intro: 'Soothing external therapies for the eyes and ears.',
    therapies: [
      { name: 'Akshi Tarpana', duration: '30 min', text: 'A rejuvenating eye therapy that soothes and nourishes, and relieves eye strain and watering.' },
      { name: 'Akshi Seka', duration: '30 min', text: 'A continuous stream of medicated milk over the eyes, with a cooling effect that relieves eye strain.' },
      { name: 'Karna Poorana', duration: '30 min', text: 'An external rejuvenating therapy to strengthen the ears.' },
    ],
  },
  {
    slug: 'sandhi-paricharya',
    image: '/images/kati-basti.jpg',
    title: 'Sandhi Paricharya',
    subtitle: 'Joint and spinal care',
    tagline: 'Warm-oil therapies for knees, back and neck.',
    intro: 'Warm medicated oil is held over a joint inside a ring of dough, to ease pain and stiffness and nourish the joint.',
    therapies: [
      { name: 'Janu Basti', duration: '60 min', text: 'For the knees — eases pain and weakness and lubricates the joint and ligaments; often sought for degenerative knee problems.' },
      { name: 'Kati Basti', duration: '60 min', text: 'For the lower back — strengthens the muscles and eases strain from poor posture, spondylosis and arthritis.' },
      { name: 'Greeva Basti', duration: '60 min', text: 'For the neck and shoulders — eases pain and strain and strengthens the cervical region.' },
    ],
  },
  {
    slug: 'alankara',
    image: '/images/herbal-bowl.jpg',
    title: 'Alankara',
    subtitle: 'Ayurvedic beauty care',
    tagline: 'Ayur facials, foot care and skin therapies.',
    intro: 'Beauty treatments using traditional Ayurvedic preparations.',
    therapies: [
      { name: 'Lotus Feet', duration: '60 min', text: 'A foot-care procedure that relieves stress and strain and cares for cracked feet.' },
      { name: 'Navaneetha', duration: '60 min', text: 'Full-body massage with herbal creams for soft, supple skin.' },
      { name: 'Mukha Lepa (Ayur Facial)', duration: '60 min', text: 'An anti-ageing facial for mature skin, to bring back glow and lustre. Choose from: Shuddi (neem, for oily, acne-prone skin) · Varna (Kumkumadi Taila, for complexion) · Kaanti (milk and Navara rice, for lustre) · Bala (dry-fruit preparations, to tone the skin).' },
    ],
  },
  {
    slug: 'panchakarma',
    image: '/images/patra-pinda.jpg',
    title: 'Panchakarma',
    subtitle: 'Bio-purification therapies',
    tagline: 'The five classical cleansing procedures.',
    intro:
      'A five-part bio-purification therapy with preventive, restorative and rejuvenating aims. The procedure and its length are decided after a consultation.',
    therapies: [
      { name: 'Vamana', duration: '10–12 days', text: 'Therapeutic emesis.' },
      { name: 'Virechana', duration: '10–14 days', text: 'Therapeutic purgation.' },
      { name: 'Basti', duration: '8, 16 or 30 days', text: 'Medicated enema.' },
      { name: 'Nasya', duration: '7 days', text: 'Nasal administration of medicines.' },
      { name: 'Raktamokshana', text: 'Bloodletting with leeches.' },
    ],
  },
  {
    slug: 'ayur-satva-signature',
    image: '/images/shirobasti.jpg',
    title: 'Ayur-Satva',
    subtitle: 'Signature combination therapies',
    tagline: 'Several classical therapies in one session.',
    intro: 'Our signature programmes combine classical therapies into one unhurried session.',
    therapies: [
      { name: 'Ayurdamrutha', duration: '2 hrs', includes: ['Sarwanga Abhyanga & Swedana', 'Shirodhara'] },
      { name: 'Ayur Raksha', duration: '2½ hrs', includes: ['Sarwanga Abhyanga & Swedana', 'Shirodhara', 'Ayur Facial'] },
      { name: 'Ayur Laghava', duration: '2 hrs', includes: ['Sarwanga Udwarthana', 'Sarwanga Abhyanga & Swedana'] },
      { name: 'Ayurpusti', duration: '2 hrs', includes: ['Navara Facial', 'Full-body Navara Massage'] },
      { name: 'Kaya Kalpa', duration: '3 hrs', includes: ['Sarwanga Udwarthana', 'Sarwanga Abhyanga & Swedana', 'Shirodhara'] },
      { name: 'Tarunya', duration: '3 hrs', includes: ['Sarwanga Abhyanga & Swedana', 'Lotus Feet', 'Ayur Facial', 'Kesha Kaanti'] },
    ],
  },
  {
    slug: 'weight-management',
    image: '/images/greeva-basti.jpg',
    title: 'Weight Management',
    subtitle: 'Structured programmes',
    tagline: 'Udwarthana and Panchakarma-based programmes.',
    intro: 'Five structured programmes combining Udwarthana powder massage, Virechana and Basti. The right programme is chosen after a consultation.',
    therapies: [
      { name: 'Type 1', duration: '11 days', includes: ['Virechana'] },
      { name: 'Type 2', duration: '14 days', includes: ['6 Udwarthana', 'Virechana'] },
      { name: 'Type 3', includes: ['6 Udwarthana', 'Virechana', '15 Udwarthana'] },
      { name: 'Type 4', includes: ['15 Udwarthana', '3 Sadyo Virechana', 'Diet plan'] },
      { name: 'Type 5', includes: ['6 Udwarthana', 'Virechana', '15 Udwarthana', '8 Basti'] },
    ],
  },
];

/** Other services at the centre, shown alongside the facilities. */
export const services = [
  { title: 'Doctor consultation', text: 'Consultation with our qualified Ayurvedic doctors before any therapy or programme.' },
  { title: 'Medicine counter', text: 'Ayurvedic medicines at the centre — we are an authorised Vaidyaratnam medicine dealer.' },
  { title: 'Swarna Prashana', text: 'The traditional Swarna Prashana for children.' },
];
