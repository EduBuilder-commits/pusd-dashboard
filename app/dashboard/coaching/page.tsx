'use client';

import React from 'react'

// Overall coaching data
const coachingData = {
  totalTeachers: 680,
  teachersOnCycles: 245,
  principalsOnCycles: 18,
  totalCycles: 486,
  avgCyclesPerTeacher: 2.8,
  avgGrowth: 15,
  tosaFTE: 8,
  tosaHours: 3200,
}

// Funnel stages
const funnelData = {
  identified: { count: 180, label: 'Identified for Support', percent: 100 },
  planning: { count: 145, label: 'In Planning/Goal-Setting', percent: 81 },
  active: { count: 98, label: 'Active Coaching Cycles', percent: 54 },
  improving: { count: 72, label: 'Showing Growth', percent: 40 },
  mastered: { count: 45, label: 'Goals Met/Mastered', percent: 25 },
}

// School-level coaching data
const schoolCoaching = [
  { school: 'Design39Campus', teachers: 28, cycles: 42, growth: +18, status: 'green', level: 'Elementary' },
  { school: 'Westwood Elementary', teachers: 22, cycles: 35, growth: +16, status: 'green', level: 'Elementary' },
  { school: 'Canyon View Elementary', teachers: 18, cycles: 28, growth: +15, status: 'green', level: 'Elementary' },
  { school: 'Monterey Ridge', teachers: 20, cycles: 30, growth: +14, status: 'green', level: 'Elementary' },
  { school: 'Del Norte High', teachers: 45, cycles: 58, growth: +12, status: 'yellow', level: 'High' },
  { school: 'Westview High', teachers: 52, cycles: 62, growth: +11, status: 'yellow', level: 'High' },
  { school: 'Mesa Verde Middle', teachers: 32, cycles: 45, growth: +14, status: 'green', level: 'Middle' },
  { school: 'Oak Valley Middle', teachers: 28, cycles: 38, growth: +13, status: 'green', level: 'Middle' },
  { school: 'Mt. Carmel High', teachers: 38, cycles: 42, growth: +10, status: 'yellow', level: 'High' },
  { school: 'Garden Road Elementary', teachers: 15, cycles: 18, growth: +8, status: 'red', level: 'Elementary' },
  { school: 'Pomerado Elementary', teachers: 14, cycles: 15, growth: +7, status: 'red', level: 'Elementary' },
  { school: 'Valley Elementary', teachers: 12, cycles: 12, growth: +6, status: 'red', level: 'Elementary' },
]

// Teacher breakdown by status
const teacherStatus = [
  { status: 'New Teachers (0-2 yrs)', count: 85, avgCycles: 3.2, growth: +12, color: 'blue' },
  { status: 'Developing (3-5 yrs)', count: 120, avgCycles: 2.8, growth: +15, color: 'yellow' },
  { status: 'Proficient (6-15 yrs)', count: 280, avgCycles: 2.5, growth: +18, color: 'green' },
  { status: 'Veteran (15+ yrs)', count: 195, avgCycles: 1.8, growth: +14, color: 'purple' },
]

// Principal coaching data
const principalCoaching = [
  { principal: 'Dr. Martinez', school: 'Design39Campus', cycles: 8, focus: 'Instructional Leadership', status: 'green' },
  { principal: 'Ms. Johnson', school: 'Westwood Elementary', cycles: 6, focus: 'Data-Driven PLCs', status: 'green' },
  { principal: 'Mr. Chen', school: 'Canyon View', cycles: 5, focus: 'Observation Feedback', status: 'green' },
  { principal: 'Dr. Williams', school: 'Del Norte High', cycles: 4, focus: 'Equity & Access', status: 'yellow' },
  { principal: 'Ms. Brown', school: 'Westview High', cycles: 4, focus: 'Teacher Leadership', status: 'yellow' },
  { principal: 'Mr. Garcia', school: 'Mesa Verde', cycles: 3, focus: 'MTSS Integration', status: 'green' },
]

// Coaching focus areas
const focusAreas = [
  { area: 'Explicit Instruction', teachers: 85, avgGrowth: +18, color: 'blue' },
  { area: 'Checking for Understanding', teachers: 72, avgGrowth: +16, color: 'green' },
  { area: 'Differentiated Instruction', teachers: 68, avgGrowth: +14, color: 'purple' },
  { area: 'Questioning Strategies', teachers: 55, avgGrowth: +12, color: 'yellow' },
  { area: 'Formative Assessment', teachers: 48, avgGrowth: +15, color: 'red' },
  { area: 'Student Engagement', teachers: 45, avgGrowth: +13, color: 'cyan' },
]

// Improvement timeline
const improvementData = [
  { month: 'Month 1', identified: 180, active: 45, improving: 0, mastered: 0 },
  { month: 'Month 2', identified: 175, active: 78, improving: 15, mastered: 0 },
  { month: 'Month 3', identified: 170, active: 95, improving: 42, mastered: 8 },
  { month: 'Month 4', identified: 168, active: 98, improving: 65, mastered: 28 },
  { month: 'Month 5', identified: 165, active: 95, improving: 72, mastered: 45 },
]

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Instructional Coaching Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="text-sm text-slate-400">Total Teachers</div>
          <div className="text-3xl font-bold">{coachingData.totalTeachers}</div>
          <div className="text-xs text-slate-400">{Math.round(coachingData.teachersOnCycles/coachingData.totalTeachers*100)}% on cycles</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Teachers on Cycles</div>
          <div className="text-3xl font-bold text-green-400">{coachingData.teachersOnCycles}</div>
          <div className="text-xs text-slate-400">{coachingData.avgCyclesPerTeacher} avg cycles</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500">
          <div className="text-sm text-slate-400">Principals on Cycles</div>
          <div className="text-3xl font-bold">{coachingData.principalsOnCycles}</div>
          <div className="text-xs text-slate-400">of 38 schools</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-slate-400">Avg Growth</div>
          <div className="text-3xl font-bold text-yellow-400">+{coachingData.avgGrowth}%</div>
          <div className="text-xs text-slate-400">per cycle</div>
        </div>
      </div>

      {/* Coaching Funnel */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          { ...funnelData.identified, color: 'bg-blue-600' },
          { ...funnelData.planning, color: 'bg-indigo-600' },
          { ...funnelData.active, color: 'bg-yellow-600' },
          { ...funnelData.improving, color: 'bg-green-600' },
        ].map((stage, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 text-center">
            <div className={`${stage.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2`}>
              <span className="font-bold">{stage.count}</span>
            </div>
            <div className="text-sm font-medium">{stage.label}</div>
            <div className="text-xs text-slate-400">{stage.percent}%</div>
          </div>
        ))}
        {/* Mastered - separate highlight */}
        <div className="bg-green-900/50 border-2 border-green-500 rounded-lg p-4 text-center">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <span className="font-bold">{funnelData.mastered.count}</span>
          </div>
          <div className="text-sm font-medium text-green-300">Goals Met</div>
          <div className="text-xs text-green-400">{funnelData.mastered.percent}%</div>
        </div>
      </div>

      {/* Funnel Visual */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Coaching Funnel: Teacher Growth Pipeline</h2>
        <div className="flex flex-col items-center">
          {/* Top bar */}
          <div className="w-full max-w-3xl bg-blue-600 rounded-t-lg h-12 flex items-center justify-center">
            <span className="font-medium">Identified for Support: {funnelData.identified.count} teachers</span>
          </div>
          {/* Middle bars */}
          <div className="flex w-full max-w-3xl gap-1">
            <div className="flex-1 bg-indigo-600 h-10 flex items-center justify-center text-xs">
              Planning: {funnelData.planning.count}
            </div>
          </div>
          <div className="flex w-full max-w-2xl gap-1">
            <div className="flex-1 bg-yellow-600 h-10 flex items-center justify-center text-xs">
              Active Cycles: {funnelData.active.count}
            </div>
          </div>
          <div className="flex w-full max-w-xl gap-1">
            <div className="flex-1 bg-green-600 h-10 flex items-center justify-center text-xs">
              Showing Growth: {funnelData.improving.count}
            </div>
          </div>
          {/* Bottom bar */}
          <div className="w-1/3 bg-green-400 rounded-b-lg h-10 flex items-center justify-center text-xs text-black font-semibold">
            Mastered: {funnelData.mastered.count}
          </div>
        </div>
      </section>

      {/* School-Level Coaching */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">🏫</span> Coaching by School
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">School</th>
                <th className="text-left py-3 px-4">Level</th>
                <th className="text-right py-3 px-4">Teachers</th>
                <th className="text-right py-3 px-4">Cycles</th>
                <th className="text-right py-3 px-4">Avg Growth</th>
                <th className="text-center py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {schoolCoaching.map((school) => (
                <tr key={school.school} className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-3 px-4 font-medium">{school.school}</td>
                  <td className="py-3 px-4 text-slate-400">{school.level}</td>
                  <td className="text-right py-3 px-4">{school.teachers}</td>
                  <td className="text-right py-3 px-4">{school.cycles}</td>
                  <td className="text-right py-3 px-4">
                    <span className={school.growth >= 12 ? 'text-green-400' : school.growth >= 8 ? 'text-yellow-400' : 'text-red-400'}>
                      +{school.growth}%
                    </span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      school.status === 'green' ? 'bg-green-900 text-green-300' :
                      school.status === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {school.status === 'green' ? 'High' : school.status === 'yellow' ? 'Moderate' : 'Low'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Two Column: Teacher Status & Focus Areas */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Teacher Breakdown */}
        <section className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Teachers by Experience Level</h2>
          <div className="space-y-3">
            {teacherStatus.map((t) => (
              <div key={t.status} className="bg-slate-700 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{t.status}</span>
                  <span className="text-sm text-slate-400">{t.count} teachers</span>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-16 bg-slate-600 rounded-full h-2">
                      <div className={`bg-${t.color}-500 h-2 rounded-full`} style={{ width: `${t.avgCycles * 30}%` }}></div>
                    </div>
                    <span>{t.avgCycles} cycles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 font-medium">+{t.growth}%</span>
                    <span className="text-slate-400">growth</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Focus Areas */}
        <section className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Coaching Focus Areas</h2>
          <div className="space-y-3">
            {focusAreas.map((focus) => (
              <div key={focus.area} className="bg-slate-700 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{focus.area}</span>
                  <span className="text-green-400 font-medium">+{focus.avgGrowth}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(focus.teachers / 100) * 100}%` }}></div>
                  </div>
                  <span className="text-xs text-slate-400">{focus.teachers} teachers</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Principal Coaching */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">👔</span> Principal Coaching Cycles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principalCoaching.map((p) => (
            <div key={p.principal} className="bg-slate-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{p.principal}</p>
                  <p className="text-xs text-slate-400">{p.school}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  p.status === 'green' ? 'bg-green-900 text-green-300' :
                  p.status === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {p.cycles} cycles
                </span>
              </div>
              <p className="text-xs text-slate-400">Focus: {p.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Items */}
      <section className="bg-slate-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">🎯</span> Action Items & Recommendations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* High Priority */}
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
            <h3 className="font-semibold text-red-400 mb-3">🚨 High Priority</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400">1.</span>
                <span>3 elementary schools (Garden Road, Pomerado, Valley) below 10% growth - assign additional TOSA support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">2.</span>
                <span>Increase principal coaching at high schools - only 2/5 currently engaged</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">3.</span>
                <span>Veteran teachers (15+ yrs) at only 1.8 cycles - need different approach</span>
              </li>
            </ul>
          </div>
          
          {/* Monitor */}
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-3">👀 Monitor</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">1.</span>
                <span>High school growth trending down - review coaching model</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">2.</span>
                <span>New teacher growth at +12% - ensure adequate support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">3.</span>
                <span>Questioning Strategies area needs attention - lowest growth</span>
              </li>
            </ul>
          </div>
          
          {/* Wins */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-3">✅ Current Wins</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Elementary schools exceeding growth targets (+15% avg)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Proficient teachers showing +18% growth - peer leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>45 teachers mastered goals - ready to mentor</span>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-3">📚 Resources Needed</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>1 additional TOSA for low-performing schools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>Veteran teacher coaching protocol</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>High school coaching model redesign</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
