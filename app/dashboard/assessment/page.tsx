'use client';

import React from 'react'

// District-wide assessment periods
const assessmentPeriods = ['Fall', 'Winter', 'Spring', 'Summer']

// District-wide assessments (4 times/year) - synthetic data
const districtAssessments = {
  ELA: {
    fall: { avg: 52, growth: 0 },
    winter: { avg: 58, growth: +6 },
    spring: { avg: 64, growth: +12 },
    summer: { avg: 66, growth: +14 }
  },
  Math: {
    fall: { avg: 48, growth: 0 },
    winter: { avg: 54, growth: +6 },
    spring: { avg: 60, growth: +12 },
    summer: { avg: 62, growth: +14 }
  },
  Science: {
    fall: { avg: 45, growth: 0 },
    winter: { avg: 50, growth: +5 },
    spring: { avg: 56, growth: +11 },
    summer: { avg: 58, growth: +13 }
  }
}

// State testing (CAASPP)
const stateTesting = {
  ELA: { district: 62, state: 55, difference: +7 },
  Math: { district: 58, state: 51, difference: +7 },
  Science: { district: 54, state: 48, difference: +6 }
}

// Subgroups for breakdown
const subgroups = [
  { id: 'all', name: 'All Students', icon: '🎯', color: 'blue' },
  { id: 'el', name: 'English Learners', icon: '🌐', color: 'red' },
  { id: 'sed', name: 'Socioeconomically Disadvantaged', icon: '📉', color: 'orange' },
  { id: 'swd', name: 'Students with Disabilities', icon: '♿', color: 'purple' },
  { id: 'homeless', name: 'Homeless', icon: '🛖', color: 'pink' },
  { id: 'foster', name: 'Foster Youth', icon: '🏠', color: 'yellow' },
  { id: 'aa', name: 'African American', icon: '👤', color: 'cyan' },
  { id: 'latino', name: 'Latino/Hispanic', icon: '👥', color: 'lime' },
]

// Synthetic subgroup data
const subgroupData: Record<string, Record<string, { ela: number; math: number; science: number }>> = {
  all: { fall: { ela: 52, math: 48, science: 45 }, winter: { ela: 58, math: 54, science: 50 }, spring: { ela: 64, math: 60, science: 56 } },
  el: { fall: { ela: 35, math: 38, science: 32 }, winter: { ela: 42, math: 44, science: 38 }, spring: { ela: 48, math: 50, science: 44 } },
  sed: { fall: { ela: 42, math: 39, science: 36 }, winter: { ela: 48, math: 45, science: 41 }, spring: { ela: 54, math: 51, science: 47 } },
  swd: { fall: { ela: 32, math: 30, science: 28 }, winter: { ela: 38, math: 36, science: 34 }, spring: { ela: 44, math: 42, science: 40 } },
  homeless: { fall: { ela: 30, math: 28, science: 26 }, winter: { ela: 36, math: 34, science: 32 }, spring: { ela: 42, math: 40, science: 38 } },
  foster: { fall: { ela: 28, math: 26, science: 24 }, winter: { ela: 34, math: 32, science: 30 }, spring: { ela: 40, math: 38, science: 36 } },
  aa: { fall: { ela: 44, math: 41, science: 38 }, winter: { ela: 50, math: 47, science: 44 }, spring: { ela: 56, math: 53, science: 50 } },
  latino: { fall: { ela: 46, math: 43, science: 40 }, winter: { ela: 52, math: 49, science: 46 }, spring: { ela: 58, math: 55, science: 52 } },
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Assessment Hub</h1>
      
      {/* District-Wide Assessments (4x/year) */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span> District-Wide Assessments (4x Year)
        </h2>
        <p className="text-sm text-slate-400 mb-4">Benchmark assessments administered throughout the academic year</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* ELA */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-blue-400">📖 ELA</h3>
            <div className="space-y-3">
              {assessmentPeriods.map((period, idx) => {
                const data = districtAssessments.ELA[period.toLowerCase() as keyof typeof districtAssessments.ELA]
                return (
                  <div key={period} className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">{period}</span>
                    <div className="text-right">
                      <span className="font-semibold">{data.avg}%</span>
                      {idx > 0 && (
                        <span className={`text-xs ml-2 ${data.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.growth > 0 ? '+' : ''}{data.growth}%
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Math */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-purple-400">🔢 Math</h3>
            <div className="space-y-3">
              {assessmentPeriods.map((period, idx) => {
                const data = districtAssessments.Math[period.toLowerCase() as keyof typeof districtAssessments.Math]
                return (
                  <div key={period} className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">{period}</span>
                    <div className="text-right">
                      <span className="font-semibold">{data.avg}%</span>
                      {idx > 0 && (
                        <span className={`text-xs ml-2 ${data.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.growth > 0 ? '+' : ''}{data.growth}%
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Science */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-green-400">🔬 Science</h3>
            <div className="space-y-3">
              {assessmentPeriods.map((period, idx) => {
                const data = districtAssessments.Science[period.toLowerCase() as keyof typeof districtAssessments.Science]
                return (
                  <div key={period} className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">{period}</span>
                    <div className="text-right">
                      <span className="font-semibold">{data.avg}%</span>
                      {idx > 0 && (
                        <span className={`text-xs ml-2 ${data.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.growth > 0 ? '+' : ''}{data.growth}%
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* State Testing */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">🏛️</span> State Testing (CAASPP)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(stateTesting).map(([subject, data]) => (
            <div key={subject} className="bg-slate-700 rounded-lg p-4">
              <h3 className="font-semibold mb-3">{subject}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">District</span>
                  <span className="font-semibold">{data.district}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">State</span>
                  <span className="font-semibold">{data.state}%</span>
                </div>
                <div className="pt-2 border-t border-slate-600">
                  <span className={`text-sm font-semibold ${data.difference > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {data.difference > 0 ? '+' : ''}{data.difference}% vs State
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Assessment Data by Subgroup */}
      <section className="bg-slate-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">👥</span> Assessment Data by Subgroup
        </h2>
        <p className="text-sm text-slate-400 mb-4">District-wide assessment results broken down by student subgroups</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">Subgroup</th>
                <th className="text-center py-3 px-4" colSpan={3}>Fall</th>
                <th className="text-center py-3 px-4" colSpan={3}>Winter</th>
                <th className="text-center py-3 px-4" colSpan={3}>Spring</th>
              </tr>
              <tr className="border-b border-slate-700 text-xs text-slate-400">
                <th className="py-2 px-4"></th>
                <th className="text-center py-2 px-2">ELA</th>
                <th className="text-center py-2 px-2">Math</th>
                <th className="text-center py-2 px-2">Sci</th>
                <th className="text-center py-2 px-2">ELA</th>
                <th className="text-center py-2 px-2">Math</th>
                <th className="text-center py-2 px-2">Sci</th>
                <th className="text-center py-2 px-2">ELA</th>
                <th className="text-center py-2 px-2">Math</th>
                <th className="text-center py-2 px-2">Sci</th>
              </tr>
            </thead>
            <tbody>
              {subgroups.map(subgroup => {
                const data = subgroupData[subgroup.id]
                const fall = data?.fall || { ela: 0, math: 0, science: 0 }
                const winter = data?.winter || { ela: 0, math: 0, science: 0 }
                const spring = data?.spring || { ela: 0, math: 0, science: 0 }
                
                return (
                  <tr key={subgroup.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <span>{subgroup.icon}</span>
                      <span className="font-medium">{subgroup.name}</span>
                    </td>
                    <td className="text-center py-3 px-2">{fall.ela}%</td>
                    <td className="text-center py-3 px-2">{fall.math}%</td>
                    <td className="text-center py-3 px-2">{fall.science}%</td>
                    <td className="text-center py-3 px-2 bg-blue-900/20">{winter.ela}%</td>
                    <td className="text-center py-3 px-2 bg-purple-900/20">{winter.math}%</td>
                    <td className="text-center py-3 px-2 bg-green-900/20">{winter.science}%</td>
                    <td className="text-center py-3 px-2 font-semibold">{spring.ela}%</td>
                    <td className="text-center py-3 px-2 font-semibold">{spring.math}%</td>
                    <td className="text-center py-3 px-2 font-semibold">{spring.science}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
