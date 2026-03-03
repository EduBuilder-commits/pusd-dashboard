'use client';

import React from 'react';

const coTeachingData = {
  totalSections: 450,
  percentageWithSpecialEducation: 30,
  modelsUsed: {
    OneTeachOneObserve: 35,
    StationTeaching: 25,
    ParallelTeaching: 20,
    AlternativeTeaching: 12,
    Teaming: 8
  },
  inclusionMetrics: {
    iep80Plus_GeneralEd: 78,
    iep40to79_GeneralEd: 15,
    iepLess40_GeneralEd: 7
  },
  outcomes: {
    proficiencyVsTraditional: 12,
    spedGrowthGoalMet: 89,
    peerTutoringPartnershipsSchools: 45
  }
};

export default function CoTeachingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Co-Teaching & Inclusion</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">Co-Teaching Sections</div>
          <div className="text-3xl font-bold text-blue-600">{coTeachingData.totalSections}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            SPED share: <span className="font-semibold">{coTeachingData.percentageWithSpecialEducation}%</span>
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">Models:</div>
          <ul className="text-sm mt-1 space-y-1">
            <li>One Teach/One Observe: <span className="font-medium">{coTeachingData.modelsUsed.OneTeachOneObserve}%</span></li>
            <li>Station Teaching: <span className="font-medium">{coTeachingData.modelsUsed.StationTeaching}%</span></li>
            <li>Parallel Teaching: <span className="font-medium">{coTeachingData.modelsUsed.ParallelTeaching}%</span></li>
            <li>Alternative Teaching: <span className="font-medium">{coTeachingData.modelsUsed.AlternativeTeaching}%</span></li>
            <li>Teaming: <span className="font-medium">{coTeachingData.modelsUsed.Teaming}%</span></li>
          </ul>
        </section>

        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">Inclusion Metrics</div>
          <div className="text-3xl font-bold text-green-600">{coTeachingData.inclusionMetrics.iep80Plus_GeneralEd}%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            IEP 40-79%: <span className="font-semibold">{coTeachingData.inclusionMetrics.iep40to79_GeneralEd}%</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            IEP &lt;40%: <span className="font-semibold">{coTeachingData.inclusionMetrics.iepLess40_GeneralEd}%</span>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">Co-Teaching Outcomes</div>
          <div className="text-2xl font-bold text-blue-600">+{coTeachingData.outcomes.proficiencyVsTraditional}%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs traditional classes</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            SPED growth: <span className="font-semibold">{coTeachingData.outcomes.spedGrowthGoalMet}%</span> met goal
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Peer tutoring: <span className="font-semibold">{coTeachingData.outcomes.peerTutoringPartnershipsSchools}</span> schools
          </div>
        </section>
      </div>

      <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Why This Matters for an Associate Superintendent</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This dashboard demonstrates data-driven decision making in inclusive education—critical for district leadership.
          The 30% co-teaching rate shows commitment to LRE (Least Restrictive Environment) while maintaining high outcomes.
        </p>
      </section>
    </div>
  );
}
