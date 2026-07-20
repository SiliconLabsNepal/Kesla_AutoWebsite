'use client';

import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

export interface MarkerLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type?: string;
  details?: string;
}

interface LocatorMapProps {
  locations: MarkerLocation[];
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  height?: string;
}

export function LocatorMap({ 
  locations, 
  defaultCenter = { lat: 27.7172, lng: 85.3240 }, // Default Kathmandu
  defaultZoom = 12,
  height = '600px'
}: LocatorMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MarkerLocation | null>(null);
  
  // Calculate center based on locations if provided
  const center = locations.length > 0 
    ? { lat: locations[0].lat, lng: locations[0].lng } 
    : defaultCenter;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  if (!apiKey) {
    return (
      <div className="w-full bg-surface-container flex items-center justify-center border border-outline-variant/15 rounded-2xl" style={{ height }}>
        <p className="text-on-surface-variant font-display">Google Maps API key is missing.</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-outline-variant/15 relative" style={{ height }}>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={center}
          defaultZoom={defaultZoom}
          mapId="DEMO_MAP_ID" // Requires a Map ID for AdvancedMarker
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          {locations.map((loc) => (
            <AdvancedMarker
              key={loc.id}
              position={{ lat: loc.lat, lng: loc.lng }}
              onClick={() => setSelectedLocation(loc)}
            >
              <Pin 
                background={loc.type === 'DC Fast' ? '#1d4ed8' : loc.type === 'AC' ? '#3b82f6' : '#ea4335'} 
                borderColor={'#ffffff'} 
                glyphColor={'#ffffff'} 
              />
            </AdvancedMarker>
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2 max-w-[200px] text-gray-900">
                <h3 className="font-bold text-sm mb-1">{selectedLocation.name}</h3>
                {selectedLocation.details && (
                  <p className="text-xs">{selectedLocation.details}</p>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
