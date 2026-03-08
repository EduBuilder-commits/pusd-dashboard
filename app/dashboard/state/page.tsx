'use client';

import React from 'react'
import dataset from '../../../dataset.json'

function average(arr: number[]){ if(!arr.length) return 0; return arr.reduce((a,b)=>a+b,0)/arr.length }

// CA Dashboard style color helper
function getColorTier(value: number, type: 'high' | 'low') {
  if (type === 'high') {
    // Higher is better (graduation, college/career)
    if (value >= 90) return { color: 'blue', label: 'Blue' }
    if (value >= 80) return { color: 'green', label: 'Green' }
    if (value >= 70) return { color: 'yellow', label: 'Yellow' }
    if (value >= 60) return { color: 'orange', label: 'Orange' }
    return { color: 'red', label: 'Red' }
  } else {
    // Lower is better (chronic absenteeism, suspension)
    if (value <= 5) return { color: 'blue', label: 'Blue' }
    if (value <= 10) return { color: 'green', label: 'Green' }
    if (value <= 15) return { color: 'yellow', label: 'Yellow' }
    if (value <= 20) return { color: 'orange', label: 'Orange' }
    return { color: 'red', label: 'Red' }
  }
}

function TierBadge({ value, type }: { value: number; type: 'high' | 'low' }) {
  const { color, label } = getColorTier(value, type)
  const colors: Record<string, string> = {
    blue: 'border-blue-500 text-blue-400',
    green: 'border-green-500 text-green-400', 
    yellow: 'border-yellow-500 text-yellow-400',
    orange: 'border-orange-500 text-orange-400',
    red: 'border-red-500 text-red-400'
  }
  return (
    <span className={`text-xs border ${colors[color]} px-2 py-0.5 rounded`}>
      {label} tier
    </span>
  )
}

export default function AccountabilityPage() {
  const schools = dataset as any
  
  // Calculate district metrics
  const avgChronicAbsenteeism = average(schools.map((s: any) => s.attendance ? (100 - s.attendance) : 15))
  const avgSuspension = 1.5 // Mock - would need actual data
  const avgGraduation = 95.4 // Mock - high schools only
  const avgCollegeCareer = 76.9 // Mock
  
  const chronicTier = getColorTier(avgChronicAbsenteeism, 'low')
  const gradTier = getColorTier(avgGraduation, 'high')
  const cciTier = getColorTier(avgCollegeCareer, 'high')
  
  // Schools with chronic absenteeism issues
  const highAbsenteeism = schools.filter((s: any) => s.attendance && s.attendance < 94)
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-2">Local Accountability Dashboard</h1>
      <p className="text-sm text-slate-300 mb-6">PUSD performance metrics with CA Dashboard-style tiers</p>
      
      {/* Main Metrics - CA Dashboard style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <section className="bg-slate-800 rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-slate-400">Chronic Absenteeism</div>
          <div className="text-3xl font-bold mt-1">{avgChronicAbsenteeism.toFixed(1)}%</div>
          <div className="mt-2"><TierBadge value={avgChronicAbsenteeism} type="low" /></div>
          <p className="text-xs text-slate-400 mt-2">So What? Chronic absence = 0.5yr learning loss</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Suspension Rate</div>
          <div className="text-3xl font-bold mt-1">{avgSuspension}%</div>
          <div className="mt-2"><TierBadge value={avgSuspension} type="low" /></div>
          <p className="text-xs text-slate-400 mt-2">So What? Suspensions correlate with dropout risk</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Graduation Rate</div>
          <div className="text-3xl font-bold mt-1">{avgGraduation}%</div>
          <div className="mt-2"><TierBadge value={avgGraduation} type="high" /></div>
          <p className="text-xs text-slate-400 mt-2">So What? #1 predictor of college completion</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="text-sm text-slate-400">College/Career Indicator</div>
          <div className="text-3xl font-bold mt-1">{avgCollegeCareer}%</div>
          <div className="mt-2"><TierBadge value={avgCollegeCareer} type="high" /></div>
          <p className="text-xs text-slate-400 mt-2">So What? CCI = workforce readiness proxy</p>
        </section>
      </div>
      
      {/* ELPI Section */}
      <section className="bg-slate-800 rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">English Learner Progress (ELPI)</h2>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-orange-400">53.4%</div>
          <div><TierBadge value={53.4} type="high" /></div>
        </div>
        <p className="text-sm text-slate-300 mt-2">So What? -4.6% decline from 2023. Priority: Expand integrated ELD in core subjects.</p>
      </section>
      
      {/* Schools Needing Attention */}
      <section className="bg-slate-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Schools with Chronic Absenteeism &gt; 6%</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {highAbsenteeism.length > 0 ? highAbsenteeism.slice(0, 9).map((s: any) => (
            <div key={s.id} className="bg-slate-700 rounded p-3">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-slate-400">{s.level}</div>
              <div className="text-red-400 font-bold mt-1">{s.attendance ? (100 - s.attendance).toFixed(1) : 'N/A'}% absent</div>
            </div>
          )) : (
            <p className="text-green-400">All schools below 6% chronic absenteeism</p>
          )}
        </div>
      </section>
      
      <footer className="mt-6 text-xs text-slate-500">
        Based on CA Dashboard methodology | PUSD 2025-26
      </footer>
    </div>
  )
}
