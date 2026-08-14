export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 's-1',
    title: 'Wedding Photography',
    description: 'Documenting your most significant moments with an editorial eye. We weave together the grand elegance and intimate emotions of your celebration into a timeless visual legacy.',
    image: '/images/client/1ljbELOPGq4p821MRMbu0H9_b3RQTnsL8__DSC1373.JPG',
    slug: 'wedding-photography',
  },
  {
    id: 's-2',
    title: 'Pre-Wedding Romance',
    description: 'Intimate, cinematic couple portraits amidst Kerala natural landscapes, heritage backwaters, and luxury architectural venues.',
    image: '/images/client/1-iqsBARTBUeI_hgFsg_dTa7PtIUTOLMm_DSC03476.JPG',
    slug: 'pre-wedding',
  },
  {
    id: 's-3',
    title: 'Model Portfolio',
    description: 'Avant-garde and editorial shoots that highlight style, mood, and attitude. We create high-impact, magazine-ready model portfolios.',
    image: '/images/client/1ufMZu8uTd8AnpOfDf7Ht71QfQZfXHo2x_DSC03059.JPG',
    slug: 'model-shoot',
  },
  {
    id: 's-4',
    title: 'Commercial Campaigns',
    description: 'High-end brand campaigns, product launches, corporate stories, and commercial photography assignments.',
    image: '/images/client/1_aXNQANoYnjoj1i8oFeFK8kD0jv-321r_DSC01176.jpg',
    slug: 'commercial-photography',
  },
  {
    id: 's-5',
    title: 'Drone & Aerial Cinematography',
    description: 'Breathtaking 4K aerial perspectives providing scale and context. Ideal for grand venues, Kerala backwaters, and overhead perspectives.',
    image: '/images/client/1EPAIlfINCyW1_j32N_ztY9OH0o7Bsast_DJI_0221.jpg',
    slug: 'drone-photography',
  },
  {
    id: 's-6',
    title: 'Film & Analog Artistry',
    description: 'The authentic charm of analog film. Perfect for those who appreciate nostalgic grain, organic textures, and deliberate pacing.',
    image: '/images/client/1Yz28qZ6_tfdW1Tb3GldMXUIfjsEhT46V_DSC00027.JPG',
    slug: 'film-photography',
  },
  {
    id: 's-7',
    title: 'Maternity & Baby Shoot',
    description: 'Heartwarming maternity and newborn sessions celebrating life beginnings with soft, glowing light and timeless warmth.',
    image: '/images/client/1oFf7oXgQR0DRJjbCcblbwixRdno_5Kmw_DSC09672.JPG',
    slug: 'baby-shoot',
  },
];
