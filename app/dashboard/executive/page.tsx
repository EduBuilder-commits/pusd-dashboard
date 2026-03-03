'use client';

import React from 'react';

export default function ExecutiveSummaryPage() {
  const metrics = [
    { label: 'Chronic Absenteeism', value: '15.5%', trend: '-0.3%', color: 'yellow', tier: 'Yellow' },
    { label: 'Graduation Rate', value: '95.4%', trend: '+0.2%', color: 'green', tier: 'Green' },
    { label: 'College/Career Ready', value: '76.9%', trend: '+4.7%', color: 'blue', tier: 'Blue' },
    { label: 'Suspension Rate', value: '1.5%', trend: '-0.2%', color: 'green', tier: 'Green' },
    { label: 'EL Progress', value: '53.4%', trend: '-4.6%', color: 'orange', tier: 'Orange' },
    { label: 'CAASP ELA', value: '+56.5', trend: '-2.6', color: 'blue', tier: 'Blue' },
  ];

  const coTeaching = {
    sections: 450,
    spedPercent: 30,
    iep80Plus: 78
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold">Executive Summary</h1>
        <p className="text-blue-100 mt-1">Poway Unified School District • 2024-2025</p>
        <p className="text-sm text-blue-200 mt-4">Prepared for Board Presentation</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-5 border-t-4" 
               style={{ borderColor: metric.color === 'blue' ? '#3b82f6' : metric.color === 'green' ? '#22c55e' : metric.color === 'yellow' ? '#eab308' : '#f97316' }}>
            <div className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
            <div className="text-3xl font-bold mt-1">{metric.value}</div>
            <div className="flex items-center gap-2 mt-2">
              <span className={`text-sm font-medium ${metric.trend.startsWith('+') ? 'text-green-600' : metric.trend === '-2.6' || metric.trend === '-4.6' ? 'text-red-600' : 'text-gray-600'}`}>
                {metric.trend}
              </span>
              <span className="text-xs text-gray-400">vs prior year</span>
            </div>
            <div className="mt-2 inline-block px-2 py-1 rounded text-xs font-medium" 
                 style={{ backgroundColor: metric.color === 'blue' ? '#dbeafe' : metric.color === 'green' ? '#dcfce7' : metric.color === 'yellow' ? '#fef9c3' : '#ffedd5', color: metric.color === 'blue' ? '#1d4ed8' : metric.color === 'green' ? '#166534' : metric.color === 'yellow' ? '#a16207' : '#c2410c' }}>
              {metric.tier} Tier
            </div>
          </div>
        ))}
      </div>

      {/* Co-Teaching Spotlight */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Co-Teaching & Inclusion</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">{coTeaching.sections}</div>
            <div className="text-sm text-gray-500 mt-1">Co-Teaching Sections</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">{coTeaching.spedPercent}%</div>
            <div className="text-sm text-gray-500 mt-1">With Special Education</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{coTeaching.iep80Plus}%</div>
            <div className="text-sm text-gray-500 mt-1">IEP Students in Gen Ed ≥80%</div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>District maintains Blue/Green performance on CA Dashboard despite enrollment decline</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">!</span>
            <span>Chronic absenteeism remains area of focus (15.5%) — targeted interventions in progress</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">!</span>
            <span>EL Progress dropped to Orange (53.4%) — PD redirected to elementary ELD</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>College/Career readiness improved to 76.9% — up 4.7% from prior year</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✓</span>
            <span>30% of sections co-taught — leading to +12% proficiency for SPED students</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
