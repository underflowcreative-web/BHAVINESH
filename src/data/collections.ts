export interface CollectionItem {
  id: string;
  title: string;
  badge?: string;
  coverage: string[];
  team: string[];
  includes: string[];
  description?: string;
  additions?: string[];
  image: string;
  ctaText: string;
  eventTypeOption: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: 'classic-memories',
    title: 'Classic Memories',
    coverage: ['Wedding Eve', 'Wedding Day'],
    team: ['1 Still Photographer', '1 Candid Photographer'],
    includes: ['Premium Wedding Album'],
    image: '/images/client/1ljbELOPGq4p821MRMbu0H9_b3RQTnsL8__DSC1373.JPG',
    ctaText: 'Enquire About This Collection',
    eventTypeOption: 'Wedding',
  },
  {
    id: 'cinematic-bliss',
    title: 'Cinematic Bliss',
    coverage: ['Wedding Eve', 'Wedding Day'],
    team: ['1 Still Photographer', '1 Videographer'],
    includes: ['20-minute Cinematic Film', 'Instagram Reel', 'Optional Drone Coverage'],
    image: '/images/client/1OPiohkC-39652qDD_ez43SHW1HZ0zl3r_DSC01064.jpg',
    ctaText: 'Enquire About This Collection',
    eventTypeOption: 'Wedding',
  },
  {
    id: 'grand-celebration',
    title: 'Grand Celebration',
    coverage: ['Pre-Wedding', 'Wedding Eve', 'Wedding Day'],
    team: ['2 Still Photographers', '1 Videographer'],
    includes: [
      'Pre-Wedding Photography',
      '20-minute Cinematic Film',
      'Instagram Reel',
      'Optional Drone Coverage',
    ],
    image: '/images/client/11nIs1YZf75lnXDlwRCOq4EouKxNEw_Sm__DSC4308-2.JPG',
    ctaText: 'Enquire About This Collection',
    eventTypeOption: 'Wedding',
  },
  {
    id: 'royal-moments',
    title: 'Royal Moments',
    badge: 'Bride & Groom Experience',
    coverage: ['Complete Wedding Coverage'],
    team: ['2 Still Photographers', '2 Videographers', 'Drone Team'],
    includes: [
      'Pre-Wedding Photography',
      'Pre-Wedding Cinematic Film',
      '20-minute Wedding Film',
      '2 Instagram Reels',
      'Premium Wedding Albums',
    ],
    image: '/images/client/16E9CENfCEoCsCZ05I3dkHSEoBWD9Vwo2_DSC01056.jpg',
    ctaText: 'Enquire About This Collection',
    eventTypeOption: 'Wedding',
  },
  {
    id: 'premium-custom',
    title: 'Premium Custom Experience',
    coverage: ['Customized Coverage'],
    team: ['Bespoke Photography Team'],
    description: 'A completely personalized photography experience designed around your wedding and celebrations.',
    includes: [
      'Drone Coverage',
      'Same-Day Edit',
      'Live Photo Printing',
      'Live Streaming',
      'LED Display',
      'Additional Albums',
      'Additional Events',
      'QR Photo Sharing',
    ],
    image: '/images/client/1_aXNQANoYnjoj1i8oFeFK8kD0jv-321r_DSC01176.jpg',
    ctaText: 'Build Your Custom Collection',
    eventTypeOption: 'Commercial Campaign',
  },
];

export const preWeddingCard = {
  id: 'pre-wedding-experience',
  title: 'Pre-Wedding Experience',
  includes: [
    'Professional Shoot',
    'Highlight Reel',
    '20+ Edited Images',
    'Raw Files Delivered via Google Drive',
  ],
  image: '/images/client/1ufMZu8uTd8AnpOfDf7Ht71QfQZfXHo2x_DSC03059.JPG',
  ctaText: 'Book a Pre-Wedding Consultation',
  eventTypeOption: 'Pre-Wedding',
};
