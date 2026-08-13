export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Anjali & Rohan',
    event: 'Wedding',
    quote: 'BHAVI captured our wedding day with such profound sensitivity. Every time we look at our photos, we are instantly transported back to the magic of those moments. Truly a masterful storyteller.',
    rating: 5,
    location: 'Kochi, Kerala',
  },
  {
    id: 't-2',
    name: 'Meera Thomas',
    event: 'Model Portfolio',
    quote: 'The level of professionalism and artistic vision was outstanding. The editorial shots exceeded our highest expectations, bringing a cinematic luxury to our brand campaign.',
    rating: 5,
    location: 'Thiruvananthapuram, Kerala',
  },
  {
    id: 't-3',
    name: 'Karthik & Sneha',
    event: 'Pre-Wedding',
    quote: 'We were quite nervous about being in front of the camera, but the whole experience was incredibly relaxed. The resulting portraits are natural, raw, and beautifully us.',
    rating: 5,
    location: 'Munnar, Kerala',
  },
  {
    id: 't-4',
    name: 'Lakshmi Jewellers',
    event: 'Commercial Campaign',
    quote: 'A rare eye for detail. Our heritage jewelry collection was photographed with an understanding of light and texture that made every piece look absolutely stunning.',
    rating: 4.5,
    location: 'Thrissur, Kerala',
  },
  {
    id: 't-5',
    name: 'Divya & Arjun',
    event: 'Wedding',
    quote: 'From the candid laughter to the quiet, tearful moments, nothing was missed. The album is a beautiful legacy that our family will treasure for generations.',
    rating: 5,
    location: 'Kozhikode, Kerala',
  },
  {
    id: 't-6',
    name: 'Sarah Abraham',
    event: 'Film Photography Session',
    quote: 'I wanted something moody and evocative, and the film portraits delivered exactly that. It felt less like a photoshoot and more like creating art together.',
    rating: 5,
    location: 'Ernakulam, Kerala',
  },
  {
    id: 't-7',
    name: 'The Malabar Resort',
    event: 'Drone & Architecture',
    quote: 'The aerial photography completely transformed how we market our property. Breathtaking perspectives that showcase the true luxury and scale of our resort.',
    rating: 5,
    location: 'Wayanad, Kerala',
  },
  {
    id: 't-8',
    name: 'Priya & Vishnu',
    event: 'Wedding',
    quote: 'Absolute perfection. The aesthetic is incredibly refined and elegant. We felt like we were in an editorial magazine spread while still keeping the warmth of our special day.',
    rating: 5,
    location: 'Alappuzha, Kerala',
  },
];
