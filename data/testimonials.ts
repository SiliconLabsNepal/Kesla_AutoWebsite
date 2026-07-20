export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  reviewText: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sushant Shrestha',
    vehicle: 'Volt X',
    rating: 5,
    reviewText: 'The Volt X has completely transformed my daily commute in Kathmandu. The silent operation and the futuristic rotating screen make it feel like Im driving a spaceship.',
  },
  {
    id: '2',
    name: 'Riya Gurung',
    vehicle: 'Drive Pro',
    rating: 5,
    reviewText: 'Incredible acceleration and premium interior. I test drove many luxury cars, but the Drive Pro offers an unmatched experience at its price point.',
  },
];
