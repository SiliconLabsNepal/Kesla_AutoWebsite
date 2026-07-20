import React from 'react';

export default function HiTech() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4 text-center">
          Intelligence & <span className="text-primary">Connectivity</span>
        </h1>
        <p className="text-on-surface-variant font-body text-xl mb-12">
          Your command center, redefined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15">
            <h3 className="text-2xl font-display font-bold text-on-background mb-4">Cockpit Rotational Screen</h3>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Experience the world's first 15.6" adaptive rotating touchscreen. Our central hub automatically pivots to landscape or portrait mode depending on your application, seamlessly integrating with our intelligent voice assistant to control climate, media, and navigation completely hands-free.
            </p>
          </div>
          <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15">
            <h3 className="text-2xl font-display font-bold text-on-background mb-4">DiPilot ADAS System</h3>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Our Advanced Driver Assistance System uses an array of millimeter-wave radars and high-definition cameras to provide comprehensive 360-degree monitoring. Features include adaptive cruise control, lane centering, automatic emergency braking, and autonomous parking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
