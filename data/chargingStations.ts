export interface ChargingStation {
  id: string;
  name: string;
  location: string;
  type: string; // 'DC Fast' or 'AC Slow'
  power: number; // in kW
  guns: number;
  phone: string;
  coordinates: { lat: number; lng: number };
}

export const chargingStations: ChargingStation[] = [
  {
    id: '1',
    name: 'Kesla Auto Charging Station - Gathaghar',
    location: 'Gathaghar, Bhaktapur',
    type: 'DC Fast',
    power: 30,
    guns: 1,
    phone: '9851420820',
    coordinates: { lat: 27.673967, lng: 85.376960 },
  }
];
