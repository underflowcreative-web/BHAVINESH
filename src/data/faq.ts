export interface FAQ {
  id: string;
  category: string;
  iconName: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-equipment',
    category: 'Equipment & Tech',
    iconName: 'Camera',
    question: 'What camera equipment do you use?',
    answer: 'We use industry-leading Sony professional equipment including the Sony A1 Mark II paired with Sony G Master lenses. Our secondary camera systems include the Sony A7R V and Sony A7R III. This setup allows us to capture exceptional detail, dynamic range and reliability in every lighting condition.',
  },
  {
    id: 'faq-travel',
    category: 'Destination & Travel',
    iconName: 'Plane',
    question: 'Do you travel for destination weddings?',
    answer: 'Yes. We happily travel for destination weddings and events across India and internationally. Travel and accommodation can either be arranged by the client or charged separately depending on the location and project requirements.',
  },
  {
    id: 'faq-delivery',
    category: 'Delivery & RAW Access',
    iconName: 'Clock',
    question: 'When will we receive our photographs?',
    answer: 'All RAW photographs are shared on the same day or the following day after the event whenever possible. If the client provides a laptop or external hard drive, we can hand over the RAW files immediately on the event day itself. Final retouched high-resolution galleries follow shortly.',
  },
  {
    id: 'faq-style',
    category: 'Artistic Philosophy',
    iconName: 'Palette',
    question: 'What is your editing style?',
    answer: 'Our editing philosophy is clean, timeless and natural. We focus on preserving authentic colours and emotions with minimal yet refined edits using Adobe Lightroom and Adobe Photoshop.',
  },
  {
    id: 'faq-albums',
    category: 'Handcrafted Heirlooms',
    iconName: 'BookOpen',
    question: 'Do you provide wedding albums?',
    answer: 'Yes. We offer premium handcrafted wedding albums featuring luxury multi-texture pages and high-quality printing designed to preserve your memories for generations.',
  },
  {
    id: 'faq-booking',
    category: 'Booking & Process',
    iconName: 'CalendarCheck',
    question: 'How do I book a session with you?',
    answer: 'Simply fill out our WhatsApp enquiry form with your event details. We confirm availability instantly and reserve your dates upon receiving an advance deposit.',
  },
  {
    id: 'faq-pricing',
    category: 'Investment & Custom Quotes',
    iconName: 'Sparkles',
    question: 'How much do you charge for coverage?',
    answer: 'Every celebration is unique. We offer tailored collections based on coverage hours, team size, and location. Contact us via WhatsApp for a personalized proposal.',
  },
  {
    id: 'faq-commercial',
    category: 'Licensing & Commercial Use',
    iconName: 'Award',
    question: 'Can I use the photos for commercial or brand purposes?',
    answer: 'Yes, commercial licensing and full usage rights are available for fashion, model portfolio, brand campaigns, and commercial assignments upon request.',
  },
];
