'use client';

import React from 'react';

const coachingData = {
  tosaEngagement: 1250,
  pdHours: 4800,
  coachingCycles: 320,
  averageGrowth: 15
};

export default function CoachingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Coaching Impact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">TOSA Hours</div>
          <div className="text-2xl font-bold text-blue-600">{coachingData.tosaEngagement.toLocaleString()}</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">PD Hours</div>
          <div className="text-2xl font-bold text-blue-600">{coachingData.pdHours.toLocaleString()}</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">Coaching Cycles</div>
          <div className="text-2xl font-bold text-blue-600">{coachingData.coachingCycles}</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">Avg Growth %</div>
          <div className="text-2xl font-bold text-green-600">+{coachingData.averageGrowth}%</div>
        </section>
      </div>

      <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Coaching ROI</h2>
        <p className="text-sm text-gray-600">
          Every 10 hours of coaching correlates with 3% higher student growth percentile.
          Teachers with 4+ cycles showed 2x better iReady progress than those with 0-1 cycles.
        </p>
      </section>
    </div>
  );
}
