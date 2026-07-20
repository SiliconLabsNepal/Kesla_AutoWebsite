export interface EVModel {
  id: string;
  name: string;
  slug: string;
  price: string;
  range: string;
  power: string;
  battery: string;
  zeroToHundred: string;
  topSpeed: string;
  seats: number;
  category: 'Hatchback' | 'Pickup' | 'Microvan';
  colors: { name: string; hex: string; image?: string }[];
  features: string[];
  image: string;
  colorName?: string;
  comingSoon: boolean;
  payload?: string;
}

// ─── HATCHBACKS ──────────────────────────────────────────────

const modelC: EVModel = {
  id: 'h2',
  name: 'Model C',
  slug: 'model-c',
  price: 'Contact for Price',
  range: '220km',
  power: '34kW',
  battery: '18kWh LFP Battery',
  zeroToHundred: '14.5s',
  topSpeed: '100km/h',
  seats: 4,
  category: 'Hatchback',
  comingSoon: true,
  colors: [
    { name: 'Pastel Blue', hex: '#A8C8E8' },
    { name: 'Pearl White', hex: '#F0F0EC' },
    { name: 'Coral Pink', hex: '#E89898' },
  ],
  features: [
    'EPS Power Steering',
    'ABS + EBD',
    'Reverse Camera & Radar',
    'Dual Screens',
    'PU Seats',
    'TPMS',
    'Remote Key',
    'Driver Airbag',
  ],
  image: '/images/models/model-c.png',
};

const modelCPro: EVModel = {
  id: 'h3',
  name: 'Model C Pro',
  slug: 'model-c-pro',
  price: 'Contact for Price',
  range: '285km',
  power: '35kW',
  battery: '25kWh LFP Battery',
  zeroToHundred: '13.8s',
  topSpeed: '100km/h',
  seats: 4,
  category: 'Hatchback',
  comingSoon: false,
  colors: [
    { name: 'Red', hex: '#C41E3A', image: '/images/models/henrey-red.png' },
    { name: 'Gray', hex: '#C0C0C0', image: '/images/models/henrey-gray.png' },
    { name: 'Black', hex: '#1A1A1A', image: '/images/models/henrey-black.png' },
    { name: 'White', hex: '#F0F0EC', image: '/images/models/henrey-white.png' },
    { name: 'Green', hex: '#B5D89B', image: '/images/models/henrey-green.png' },
  ],
  features: [
    'Fast Charging (36 min)',
    'EPS Power Steering',
    'ABS + EBD',
    'Reverse Camera & Radar',
    'Dual Screens',
    'PU Seats',
    'TPMS',
    'Remote Key',
    'Driver Airbag',
    'Alloy Wheels',
  ],
  image: '/images/models/henrey-red.png',
};

const modelD: EVModel = {
  id: 'h4',
  name: 'Model D',
  slug: 'model-d',
  price: 'Contact for Price',
  range: '220km',
  power: '34kW',
  battery: '18kWh LFP Battery',
  zeroToHundred: '14.5s',
  topSpeed: '100km/h',
  seats: 4,
  category: 'Hatchback',
  comingSoon: false,
  colors: [
    { name: 'Red', hex: '#C41E3A', image: '/images/models/henrey-red.png' },
    { name: 'Gray', hex: '#C0C0C0', image: '/images/models/henrey-gray.png' },
    { name: 'Black', hex: '#1A1A1A', image: '/images/models/henrey-black.png' },
    { name: 'White', hex: '#F0F0EC', image: '/images/models/henrey-white.png' },
    { name: 'Green', hex: '#B5D89B', image: '/images/models/henrey-green.png' },
  ],
  features: [
    'EPS Power Steering',
    'ABS + EBD',
    'Reverse Camera & Radar',
    '7-inch LCD Display',
    'Fabric Seats',
    'TPMS',
    'Remote Key',
    'Halogen Headlights',
  ],
  image: '/images/models/henrey-red.png',
};

const modelDPro: EVModel = {
  id: 'h5',
  name: 'Model D Pro',
  slug: 'model-d-pro',
  price: 'Contact for Price',
  range: '285km',
  power: '35kW',
  battery: '25kWh LFP Battery',
  zeroToHundred: '13.8s',
  topSpeed: '100km/h',
  seats: 4,
  category: 'Hatchback',
  comingSoon: true,
  colors: [
    { name: 'Racing Green', hex: '#2E5A3E' },
    { name: 'Pearl White', hex: '#F0F0EC' },
    { name: 'Graphite Gray', hex: '#4A4A4A' },
  ],
  features: [
    'Fast Charging (36 min)',
    'EPS Power Steering',
    'ABS + EBD',
    'Reverse Camera & Radar',
    '7-inch LCD Display',
    'Fabric Seats',
    'TPMS',
    'Remote Key',
    'LED Headlights',
  ],
  image: '/images/models/model-d-pro.png',
};

// ─── PICKUPS ─────────────────────────────────────────────────

const m31Flatbed: EVModel = {
  id: 'p1',
  name: 'Chufeng M31',
  slug: 'm31-flatbed',
  price: 'Contact for Price',
  range: '235km',
  power: '70kW',
  battery: '41.93kWh LFP Battery',
  zeroToHundred: 'N/A',
  topSpeed: '90km/h',
  seats: 2,
  category: 'Pickup',
  comingSoon: false,
  payload: '1.5 Ton',
  colors: [
    { name: 'Commercial White', hex: '#F5F5F0' },
    { name: 'Industrial Blue', hex: '#3A5A8C' },
  ],
  features: [
    '1.5-Ton Payload Capacity',
    'ABS + EBD Braking',
    'Electric Power Steering',
    'Fog Lights (Standard)',
    'Reverse Radar',
    'Fast + Slow Charging',
    'Cab-over RHD Design',
    '3200mm Cargo Bed',
  ],
  image: '/images/models/m31-flatbed.png',
};

// ─── MICROVANS ───────────────────────────────────────────────

const bus350E: EVModel = {
  id: 'v1',
  name: 'Passenger Bus 350E',
  slug: 'bus-350e',
  price: 'Contact for Price',
  range: '350km',
  power: '90kW',
  battery: '77.28kWh',
  zeroToHundred: 'N/A',
  topSpeed: 'N/A',
  seats: 18,
  category: 'Microvan',
  comingSoon: true,
  colors: [
    { name: 'Transit White', hex: '#F5F5F0' },
    { name: 'Blue Stripe', hex: '#2563EB' },
  ],
  features: [
    '18-Seat Capacity',
    '350km Range',
    '77.28kWh Battery',
    '90kW Peak Power',
    '350 Nm Peak Torque',
    'Commercial Transit Ready',
    'LHD / RHD Available',
  ],
  image: '/images/models/bus-350e.png',
};

const slk6540BEV: EVModel = {
  id: 'v2',
  name: 'SLK6540BEV',
  slug: 'slk6540bev',
  price: 'Contact for Price',
  range: '340km',
  power: '100kW',
  battery: '87kWh LFP Battery',
  zeroToHundred: 'N/A',
  topSpeed: 'N/A',
  seats: 18,
  category: 'Microvan',
  comingSoon: true,
  colors: [
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Pearl White', hex: '#F0F0EC' },
  ],
  features: [
    '18-Seat Capacity (4+4+4+4+2)',
    '340km Range (NEDC)',
    '87kWh LFP Battery',
    '100kW Peak Power',
    'Front Disc / Rear Drum Brakes',
    'ABS + EBD',
    'Double Wishbone Front Suspension',
    'EPS Steering',
    'Fast + Slow Charging',
    'LHD / RHD Available',
  ],
  image: '/images/models/slk6540bev.png',
};

// ─── EXPORT ──────────────────────────────────────────────────

export const models: EVModel[] = [
  // Hatchbacks
  modelC,
  modelCPro,
  modelD,
  modelDPro,
  // Pickups
  m31Flatbed,
  // Microvans
  bus350E,
  slk6540BEV,
];

// Helpers for filtering by category
export const hatchbacks = models.filter((m) => m.category === 'Hatchback');
export const pickups = models.filter((m) => m.category === 'Pickup');
export const microvans = models.filter((m) => m.category === 'Microvan');

// Available (not coming soon) models
export const availableModels = models.filter((m) => !m.comingSoon);
