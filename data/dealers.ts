export interface Dealer {
  id: string;
  name: string;
  location: string;
  province: string;
  type: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

export const dealers: Dealer[] = [
  {
    id: '1',
    name: 'Kesla Auto Pvt. Ltd. — Gathhaghar (Head Office)',
    location: 'Gathhaghar, Bhaktapur',
    province: 'Bagmati',
    type: 'Authorized Showroom, Sales & Service',
    phone: '9851420820',
    email: 'info@keslaautonepal.com',
    coordinates: { lat: 27.673967, lng: 85.376960 },
  },
];
