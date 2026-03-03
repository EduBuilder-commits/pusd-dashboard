'use client';

import React from 'react';

const stateData = {
  chronicAbsenteeism: 15.5,
  suspension: 1.5,
  graduation: 95.4,
  collegeCareer: 76.9
};

export default function StatePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">State Accountability</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-gray-500">Chronic Absenteeism</div>
          <div className="text-2xl font-bold">{stateData.chronicAbsenteeism}%</div>
          <div className="text-xs text-gray-500">Yellow tier</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="text-sm text-gray-500">Suspension Rate</div>
          <div className="text-2xl font-bold">{stateData.suspension}%</div>
          <div className="text-xs text-gray-500">Green tier</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="text-sm text-gray-500">Graduation Rate</div>
          <div className="text-2xl font-bold">{stateData.graduation}%</div>
          <div className="text-xs text-gray-500">Green tier</div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="text-sm text-gray-500">College/Career</div>
          <div className="text-2xl font-bold">{stateData.collegeCareer}%</div>
          <div className="text-xs text-gray-500">Blue tier</div>
        </section>
      </div>

      <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">CA Dashboard Colors</h2>
        <p className="text-sm text-gray-600">
          PUSD maintains strong performance across most metrics. Areas of focus include chronic absenteeism 
          (Yellow tier) and English Learner Progress (Orange tier at 53.4%).
        </p>
      </section>
    </div>
  );
}
