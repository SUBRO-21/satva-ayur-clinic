import type { Lang } from '../i18n/ui';

// Treatment pages are generated from this list — one page per treatment per language.
// All copy is placeholder and must be reviewed by the doctor.
// Advertising rules for AYUSH practitioners apply: describe what the treatment involves,
// never promise a cure or guaranteed result.

interface TreatmentCopy {
  title: string;
  summary: string;
  body: string[];
  conditions: string[];
}

export interface Treatment {
  slug: string;
  /** Placeholder photo from the clinic brochure, in public/images. */
  image: string;
  copy: Record<Lang, TreatmentCopy>;
}

export const treatments: Treatment[] = [
  {
    slug: 'panchakarma',
    image: '/images/abhyanga.jpg',
    copy: {
      en: {
        title: 'Panchakarma',
        summary: 'Classical five-step detoxification and rejuvenation therapy, planned and supervised by the doctor.',
        body: [
          'Panchakarma is a set of classical Ayurvedic procedures used to clear accumulated doshas from the body. A programme usually includes preparatory oil therapies (snehana and swedana), the main procedure chosen for your condition, and a period of diet and rest afterwards.',
          'The length of the programme — commonly 7, 14 or 21 days — and the procedures used are decided after your consultation. [Placeholder: describe the clinic’s Panchakarma facilities and therapists.]',
        ],
        conditions: ['Seasonal detoxification', 'Chronic digestive complaints', 'Stress and fatigue'],
      },
      kn: {
        title: 'ಪಂಚಕರ್ಮ',
        summary: 'ವೈದ್ಯರ ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿ ನಡೆಯುವ ಶಾಸ್ತ್ರೀಯ ಶೋಧನ ಮತ್ತು ಪುನಶ್ಚೇತನ ಚಿಕಿತ್ಸೆ.',
        body: [
          'ಪಂಚಕರ್ಮವು ದೇಹದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ದೋಷಗಳನ್ನು ಹೊರಹಾಕುವ ಶಾಸ್ತ್ರೀಯ ಆಯುರ್ವೇದ ಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳ ಸಮೂಹ. ಇದರಲ್ಲಿ ಪೂರ್ವಕರ್ಮ (ಸ್ನೇಹನ, ಸ್ವೇದನ), ಮುಖ್ಯ ಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆಹಾರ–ವಿಶ್ರಾಂತಿ ಒಳಗೊಂಡಿರುತ್ತದೆ.',
          'ಚಿಕಿತ್ಸೆಯ ಅವಧಿ ಮತ್ತು ವಿಧಾನಗಳನ್ನು ಸಮಾಲೋಚನೆಯ ನಂತರ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ. [ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]',
        ],
        conditions: ['ಋತುಮಾನದ ಶೋಧನ', 'ದೀರ್ಘಕಾಲದ ಜೀರ್ಣಕ್ರಿಯೆ ತೊಂದರೆಗಳು', 'ಒತ್ತಡ ಮತ್ತು ಆಯಾಸ'],
      },
      hi: {
        title: 'पंचकर्म',
        summary: 'डॉक्टर की देखरेख में शास्त्रीय शोधन और कायाकल्प चिकित्सा।',
        body: [
          'पंचकर्म शास्त्रीय आयुर्वेदिक प्रक्रियाओं का समूह है, जिससे शरीर में जमा दोषों को बाहर निकाला जाता है। इसमें पूर्वकर्म (स्नेहन, स्वेदन), मुख्य प्रक्रिया और बाद में आहार व विश्राम शामिल होते हैं।',
          'उपचार की अवधि और प्रक्रियाएँ परामर्श के बाद तय की जाती हैं। [प्लेसहोल्डर]',
        ],
        conditions: ['ऋतु अनुसार शोधन', 'पुरानी पाचन समस्याएँ', 'तनाव और थकान'],
      },
    },
  },
  {
    slug: 'joint-and-back-pain',
    image: '/images/kati-basti.jpg',
    copy: {
      en: {
        title: 'Joint and back pain',
        summary: 'External therapies, herbal medicine and guided movement for long-standing joint and spine complaints.',
        body: [
          'Treatment for joint and back pain combines external therapies such as Abhyanga, Kati Basti, Janu Basti and Patra Pinda Sweda with internal herbal medicines and advice on posture, diet and movement.',
          '[Placeholder: describe how the clinic assesses pain and how many sessions a typical plan involves.]',
        ],
        conditions: ['Lower back pain', 'Knee osteoarthritis', 'Neck and shoulder stiffness'],
      },
      kn: {
        title: 'ಕೀಲು ಮತ್ತು ಬೆನ್ನು ನೋವು',
        summary: 'ದೀರ್ಘಕಾಲದ ಕೀಲು ಮತ್ತು ಬೆನ್ನುಮೂಳೆ ತೊಂದರೆಗಳಿಗೆ ಬಾಹ್ಯ ಚಿಕಿತ್ಸೆ, ಔಷಧಿ ಮತ್ತು ವ್ಯಾಯಾಮ ಮಾರ್ಗದರ್ಶನ.',
        body: [
          'ಅಭ್ಯಂಗ, ಕಟಿ ಬಸ್ತಿ, ಜಾನು ಬಸ್ತಿ ಮತ್ತು ಪತ್ರ ಪಿಂಡ ಸ್ವೇದದಂತಹ ಬಾಹ್ಯ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಆಂತರಿಕ ಔಷಧಿಗಳು ಹಾಗೂ ಆಹಾರ ಮತ್ತು ಚಲನೆಯ ಸಲಹೆಯೊಂದಿಗೆ ನೀಡಲಾಗುತ್ತದೆ.',
          '[ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]',
        ],
        conditions: ['ಕೆಳ ಬೆನ್ನು ನೋವು', 'ಮೊಣಕಾಲು ನೋವು', 'ಕುತ್ತಿಗೆ ಮತ್ತು ಭುಜದ ಬಿಗಿತ'],
      },
      hi: {
        title: 'जोड़ों और कमर का दर्द',
        summary: 'पुराने जोड़ों और रीढ़ की समस्याओं के लिए बाहरी थेरेपी, औषधि और व्यायाम मार्गदर्शन।',
        body: [
          'अभ्यंग, कटि बस्ति, जानु बस्ति और पत्र पिंड स्वेद जैसी बाहरी थेरेपी को आंतरिक औषधियों तथा आहार और व्यायाम की सलाह के साथ दिया जाता है।',
          '[प्लेसहोल्डर]',
        ],
        conditions: ['कमर के निचले हिस्से में दर्द', 'घुटनों का दर्द', 'गर्दन और कंधे की जकड़न'],
      },
    },
  },
  {
    slug: 'skin-and-hair',
    image: '/images/herbal-bowl.jpg',
    copy: {
      en: {
        title: 'Skin and hair',
        summary: 'Care for recurring skin and scalp conditions through diet, internal medicine and topical therapies.',
        body: [
          'Ayurveda looks at skin and hair complaints as signs of imbalance in digestion and the blood. Care usually combines internal medicines, dietary changes and topical preparations, with procedures such as Virechana where suitable.',
          '[Placeholder: add details of the clinic’s skin and hair consultations.]',
        ],
        conditions: ['Eczema and dry skin', 'Acne', 'Hair fall and dandruff'],
      },
      kn: {
        title: 'ಚರ್ಮ ಮತ್ತು ಕೂದಲು',
        summary: 'ಮರುಕಳಿಸುವ ಚರ್ಮ ಮತ್ತು ತಲೆಹೊಟ್ಟಿನ ಸಮಸ್ಯೆಗಳಿಗೆ ಆಹಾರ, ಔಷಧಿ ಮತ್ತು ಲೇಪನ ಚಿಕಿತ್ಸೆ.',
        body: [
          'ಆಯುರ್ವೇದದಲ್ಲಿ ಚರ್ಮ ಮತ್ತು ಕೂದಲಿನ ತೊಂದರೆಗಳನ್ನು ಜೀರ್ಣಕ್ರಿಯೆ ಮತ್ತು ರಕ್ತದ ಅಸಮತೋಲನದ ಲಕ್ಷಣಗಳಾಗಿ ನೋಡಲಾಗುತ್ತದೆ.',
          '[ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]',
        ],
        conditions: ['ಎಸ್ಜಿಮಾ ಮತ್ತು ಒಣ ಚರ್ಮ', 'ಮೊಡವೆ', 'ಕೂದಲು ಉದುರುವಿಕೆ ಮತ್ತು ತಲೆಹೊಟ್ಟು'],
      },
      hi: {
        title: 'त्वचा और बाल',
        summary: 'बार-बार होने वाली त्वचा और सिर की समस्याओं के लिए आहार, औषधि और लेप चिकित्सा।',
        body: [
          'आयुर्वेद त्वचा और बालों की समस्याओं को पाचन और रक्त के असंतुलन के लक्षण के रूप में देखता है।',
          '[प्लेसहोल्डर]',
        ],
        conditions: ['एक्ज़िमा और रूखी त्वचा', 'मुँहासे', 'बाल झड़ना और रूसी'],
      },
    },
  },
  {
    slug: 'womens-health',
    image: '/images/patra-pinda.jpg',
    copy: {
      en: {
        title: 'Women’s health',
        summary: 'Support for menstrual health, PCOS and the years around pregnancy and menopause.',
        body: [
          'Consultations for women’s health look closely at cycle history, digestion, sleep and stress. Plans may include herbal medicines, diet and routine changes, and therapies chosen for each stage of life.',
          '[Placeholder: mention if a woman doctor or therapist is available.]',
        ],
        conditions: ['Irregular or painful periods', 'PCOS', 'Menopause symptoms'],
      },
      kn: {
        title: 'ಮಹಿಳೆಯರ ಆರೋಗ್ಯ',
        summary: 'ಮುಟ್ಟಿನ ಆರೋಗ್ಯ, ಪಿಸಿಓಎಸ್ ಮತ್ತು ಗರ್ಭಧಾರಣೆ ಹಾಗೂ ಮುಟ್ಟು ನಿಲ್ಲುವ ಹಂತಗಳಲ್ಲಿ ಆರೈಕೆ.',
        body: [
          'ಮಹಿಳೆಯರ ಆರೋಗ್ಯದ ಸಮಾಲೋಚನೆಯಲ್ಲಿ ಮುಟ್ಟಿನ ಇತಿಹಾಸ, ಜೀರ್ಣಕ್ರಿಯೆ, ನಿದ್ರೆ ಮತ್ತು ಒತ್ತಡವನ್ನು ಗಮನಿಸಲಾಗುತ್ತದೆ.',
          '[ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]',
        ],
        conditions: ['ಅನಿಯಮಿತ ಅಥವಾ ನೋವಿನ ಮುಟ್ಟು', 'ಪಿಸಿಓಎಸ್', 'ಮುಟ್ಟು ನಿಲ್ಲುವ ಹಂತದ ಲಕ್ಷಣಗಳು'],
      },
      hi: {
        title: 'महिला स्वास्थ्य',
        summary: 'मासिक धर्म स्वास्थ्य, पीसीओएस और गर्भावस्था व रजोनिवृत्ति के दौरान देखभाल।',
        body: [
          'महिला स्वास्थ्य परामर्श में मासिक चक्र, पाचन, नींद और तनाव को ध्यान से देखा जाता है।',
          '[प्लेसहोल्डर]',
        ],
        conditions: ['अनियमित या दर्दनाक माहवारी', 'पीसीओएस', 'रजोनिवृत्ति के लक्षण'],
      },
    },
  },
  {
    slug: 'digestive-health',
    image: '/images/nasya.jpg',
    copy: {
      en: {
        title: 'Digestive health',
        summary: 'Restoring agni — digestive strength — through diet, routine and herbal medicine.',
        body: [
          'In Ayurveda, digestion (agni) is central to health. Treatment for digestive complaints focuses on meal timing, food choices suited to your constitution, and herbal medicines, with Panchakarma where needed.',
          '[Placeholder]',
        ],
        conditions: ['Acidity and bloating', 'Constipation', 'Irritable bowel'],
      },
      kn: {
        title: 'ಜೀರ್ಣಕ್ರಿಯೆ ಆರೋಗ್ಯ',
        summary: 'ಆಹಾರ, ದಿನಚರಿ ಮತ್ತು ಔಷಧಿಯ ಮೂಲಕ ಅಗ್ನಿಯನ್ನು ಸರಿಪಡಿಸುವುದು.',
        body: ['ಆಯುರ್ವೇದದಲ್ಲಿ ಜೀರ್ಣಶಕ್ತಿ (ಅಗ್ನಿ) ಆರೋಗ್ಯದ ಕೇಂದ್ರ. ಊಟದ ಸಮಯ, ಪ್ರಕೃತಿಗೆ ತಕ್ಕ ಆಹಾರ ಮತ್ತು ಔಷಧಿಗಳ ಮೇಲೆ ಗಮನ.', '[ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]'],
        conditions: ['ಆಮ್ಲೀಯತೆ ಮತ್ತು ಹೊಟ್ಟೆ ಉಬ್ಬರ', 'ಮಲಬದ್ಧತೆ', 'ಕರುಳಿನ ಕಿರಿಕಿರಿ'],
      },
      hi: {
        title: 'पाचन स्वास्थ्य',
        summary: 'आहार, दिनचर्या और औषधि से अग्नि को संतुलित करना।',
        body: ['आयुर्वेद में पाचन शक्ति (अग्नि) स्वास्थ्य का केंद्र है। भोजन का समय, प्रकृति के अनुसार आहार और औषधियों पर ध्यान दिया जाता है।', '[प्लेसहोल्डर]'],
        conditions: ['एसिडिटी और पेट फूलना', 'कब्ज़', 'इरिटेबल बाउल'],
      },
    },
  },
  {
    slug: 'stress-and-sleep',
    image: '/images/shirobasti.jpg',
    copy: {
      en: {
        title: 'Stress and sleep',
        summary: 'Calming therapies such as Shirodhara, alongside routine and diet changes for better rest.',
        body: [
          'Long-term stress and poor sleep are addressed through daily routine (dinacharya), diet, herbal medicines and calming therapies such as Shirodhara, Shiro Abhyanga and Nasya.',
          '[Placeholder]',
        ],
        conditions: ['Difficulty sleeping', 'Anxiety and restlessness', 'Tension headaches'],
      },
      kn: {
        title: 'ಒತ್ತಡ ಮತ್ತು ನಿದ್ರೆ',
        summary: 'ಶಿರೋಧಾರೆಯಂತಹ ಶಾಂತಗೊಳಿಸುವ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಉತ್ತಮ ನಿದ್ರೆಗೆ ದಿನಚರಿ ಬದಲಾವಣೆ.',
        body: ['ದೀರ್ಘಕಾಲದ ಒತ್ತಡ ಮತ್ತು ನಿದ್ರಾಹೀನತೆಗೆ ದಿನಚರಿ, ಆಹಾರ, ಔಷಧಿ ಮತ್ತು ಶಿರೋಧಾರೆ, ಶಿರೋ ಅಭ್ಯಂಗ, ನಸ್ಯದಂತಹ ಚಿಕಿತ್ಸೆಗಳು.', '[ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್]'],
        conditions: ['ನಿದ್ರೆಯ ತೊಂದರೆ', 'ಆತಂಕ ಮತ್ತು ಚಡಪಡಿಕೆ', 'ಒತ್ತಡದ ತಲೆನೋವು'],
      },
      hi: {
        title: 'तनाव और नींद',
        summary: 'शिरोधारा जैसी शांत करने वाली थेरेपी और बेहतर नींद के लिए दिनचर्या में बदलाव।',
        body: ['लंबे तनाव और खराब नींद के लिए दिनचर्या, आहार, औषधियाँ और शिरोधारा, शिरो अभ्यंग व नस्य जैसी थेरेपी।', '[प्लेसहोल्डर]'],
        conditions: ['नींद न आना', 'चिंता और बेचैनी', 'तनाव से सिरदर्द'],
      },
    },
  },
];
