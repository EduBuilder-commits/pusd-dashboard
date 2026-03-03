'use client';

import React from 'react';

const mtssData = {
  tier1: 80,
  tier2: 15,
  tier3: 5
};

export default function MTSSPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">MTSS Tracker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="bg-green-50 dark:bg-green-900/20 rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="text-sm text-gray-500">Tier 1 (Universal)</div>
          <div className="text-3xl font-bold text-green-600">{mtssData.tier1}%</div>
          <div className="text-sm text-gray-500">All students</div>
        </section>
        <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-gray-500">Tier 2 (Targeted)</div>
          <div className="text-3xl font-bold text-yellow-600">{mtssData.tier2}%</div>
          <div className="text-sm text-gray-500">Additional support</div>
        </section>
        <section className="bg-red-50 dark:bg-red-900/20 rounded-lg shadow p-4 border-l-4 border-red-500">
          <div className="text-sm text-gray-500">Tier 3 (Intensive)</div>
          <div className="text-3xl font-bold text-red-600">{mtssData.tier3}%</div>
          <div className="text-sm text-gray-500">Intensive intervention</div>
        </section>
      </div>

      <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Intervention Flow</h2>
        <p className="text-sm text-gray-600">
          Students move through tiers based on data-driven decisions. 
          78% of Tier 2 students exit to Tier 1 within one semester.
        </p>
      </section>
    </div>
  );
}
