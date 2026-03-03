'use client';

import React from 'react';

const assessmentData = {
  iready: {
    fall: 58,
    winter: 62,
    spring: 67
  },
  caaspp: {
    ela: 56.5,
    math: 39.8
  }
};

export default function AssessmentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Assessment Hub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">iReady Growth (Gr 2-8)</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Fall</span>
              <span className="font-semibold">{assessmentData.iready.fall}% proficient</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Winter</span>
              <span className="font-semibold">{assessmentData.iready.winter}% proficient</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Spring</span>
              <span className="font-semibold">{assessmentData.iready.spring}% proficient</span>
            </div>
            <div className="mt-2 pt-2 border-t text-green-600 font-semibold">
              +{assessmentData.iready.spring - assessmentData.iready.fall}% growth
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">CAASPP Proficiency</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">ELA</span>
              <span className="font-semibold">{assessmentData.caaspp.ela} points above</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Math</span>
              <span className="font-semibold">{assessmentData.caaspp.math} points above</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
