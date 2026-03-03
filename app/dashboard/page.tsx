'use client';

import React from 'react';

const districtData = {
  name: 'Poway Unified School District',
  students: 34405,
  SED_pct: 15.8,
  EL_pct: 6.8,
  schools: 32
};

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">PUSD Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">District</div>
          <div className="text-xl font-bold">{districtData.name}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">Students</div>
          <div className="text-xl font-bold">{districtData.students.toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">Schools</div>
          <div className="text-xl font-bold">{districtData.schools}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">High Needs</div>
          <div className="text-xl font-bold">SED {districtData.SED_pct}% · EL {districtData.EL_pct}%</div>
        </div>
      </div>

      <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Executive Summary</h2>
        <p className="text-sm text-gray-600">
          PUSD serves 34,405 students across 32 schools. The district maintains strong academic performance 
          with Blue/Green CA Dashboard ratings while serving 15.8% socioeconomically disadvantaged and 
          6.8% English Learner students.
        </p>
      </section>
    </div>
  );
}
