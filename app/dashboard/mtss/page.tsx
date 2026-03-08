'use client';

import React from 'react'

// MTSS Tier Distribution
const tierData = {
  total: 12450,
  tier1: { count: 9360, percent: 75.2 },
  tier2: { count: 2175, percent: 17.5 },
  tier3: { count: 915, percent: 7.3 }
}

// Demographic breakdown by tier
const demographicBreakdown = [
  { 
    group: 'English Learners', 
    icon: '🌐', 
    tier1: 58, 
    tier2: 28, 
    tier3: 14,
    total: 2840,
    risk: true 
  },
  { 
    group: 'Socioeconomically Disadvantaged', 
    icon: '📉', 
    tier1: 62, 
    tier2: 25, 
    tier3: 13,
    total: 5120,
    risk: true 
  },
  { 
    group: 'Students with Disabilities', 
    icon: '♿', 
    tier1: 42, 
    tier2: 32, 
    tier3: 26,
    total: 1890,
    risk: true 
  },
  { 
    group: 'Foster Youth', 
    icon: '🏠', 
    tier1: 35, 
    tier2: 30, 
    tier3: 35,
    total: 156,
    risk: true 
  },
  { 
    group: 'Homeless (McKinney-Vento)', 
    icon: '🛖', 
    tier1: 38, 
    tier2: 32, 
    tier3: 30,
    total: 234,
    risk: true 
  },
  { 
    group: 'African American', 
    icon: '👤', 
    tier1: 60, 
    tier2: 25, 
    tier3: 15,
    total: 890,
    risk: true 
  },
  { 
    group: 'Latino/Hispanic', 
    icon: '👥', 
    tier1: 65, 
    tier2: 23, 
    tier3: 12,
    total: 4280,
    risk: false 
  },
  { 
    group: 'Asian', 
    icon: '🎯', 
    tier1: 82, 
    tier2: 14, 
    tier3: 4,
    total: 1560,
    risk: false 
  },
  { 
    group: 'White', 
    icon: '⚪', 
    tier1: 80, 
    tier2: 15, 
    tier3: 5,
    total: 3200,
    risk: false 
  },
]

// Interventions by Tier
const tierInterventions = {
  tier1: {
    name: 'Universal (Tier 1)',
    description: 'Core instruction for all students',
    interventions: [
      'High-quality core curriculum (ELA, Math, Science)',
      'Positive Behavioral Interventions & Supports (PBIS)',
      'Social-emotional learning (SEL) curriculum',
      'Universal screening 3x/year',
      'Differentiated instruction',
      'Flexible grouping',
    ],
    staff: ['All classroom teachers', 'Counselors', 'Administrators'],
    metrics: ['80% at benchmark', 'Chronic absenteeism <5%']
  },
  tier2: {
    name: 'Targeted (Tier 2)',
    description: 'Additional support for students not responding to Tier 1',
    interventions: [
      'Small group instruction (3-5 students)',
      'Reading intervention (30 min/day)',
      'Math intervention blocks',
      'Behavioral check-in/check-out (BIP)',
      'Lunch/after-school tutoring',
      'Mentorship programs',
      'Attendance monitoring',
    ],
    staff: ['Intervention specialists', 'TOSAs', 'Paraprofessionals'],
    metrics: ['15% of students', 'Exit rate: 65% to Tier 1']
  },
  tier3: {
    name: 'Intensive (Tier 3)',
    description: 'Individualized support for students with significant gaps',
    interventions: [
      '1:1 tutoring (4-5x/week)',
      'Intensive reading intervention (60+ min/day)',
      'Behavior intervention plans',
      'Student success team (SST) monitoring',
      'Counseling/social work services',
      'Medical/health coordination',
      'Crisis intervention',
    ],
    staff: ['Specialists', 'School psychologists', 'Nurses', 'Admin'],
    metrics: ['5% of students', 'Exit rate: 40% to Tier 1/2']
  }
}

// Exit rates
const exitRates = {
  tier2to1: 65,
  tier3to2: 40,
  tier3to1: 15
}

export default function MTSSPage() {
  const funnelHeight1 = 100
  const funnelHeight2 = (tierData.tier2.count / tierData.tier1.count) * 100
  const funnelHeight3 = (tierData.tier3.count / tierData.tier1.count) * 100

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">MTSS Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Total Students</div>
          <div className="text-3xl font-bold">{tierData.total.toLocaleString()}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Tier 1 (Universal)</div>
          <div className="text-3xl font-bold text-green-400">{tierData.tier1.percent}%</div>
          <div className="text-xs text-slate-400">{tierData.tier1.count.toLocaleString()} students</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-slate-400">Tier 2 (Targeted)</div>
          <div className="text-3xl font-bold text-yellow-400">{tierData.tier2.percent}%</div>
          <div className="text-xs text-slate-400">{tierData.tier2.count.toLocaleString()} students</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
          <div className="text-sm text-slate-400">Tier 3 (Intensive)</div>
          <div className="text-3xl font-bold text-red-400">{tierData.tier3.percent}%</div>
          <div className="text-xs text-slate-400">{tierData.tier3.count.toLocaleString()} students</div>
        </div>
      </div>

      {/* Funnel Graphic */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Funnel */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">MTSS Funnel</h2>
          <div className="flex flex-col items-center justify-center py-8">
            {/* Tier 1 */}
            <div className="w-80 bg-green-600 rounded-t-lg flex items-center justify-center py-4 text-center" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
              <div>
                <div className="font-bold text-lg">Tier 1 - Universal</div>
                <div className="text-sm">9,360 students (75.2%)</div>
              </div>
            </div>
            {/* Tier 2 */}
            <div className="w-64 bg-yellow-600 flex items-center justify-center py-4 text-center -mt-1" style={{ clipPath: 'polygon(5% 0, 95% 0, 90% 100%, 10% 100%)' }}>
              <div>
                <div className="font-bold text-lg">Tier 2 - Targeted</div>
                <div className="text-sm">2,175 students (17.5%)</div>
              </div>
            </div>
            {/* Tier 3 */}
            <div className="w-40 bg-red-600 rounded-b-lg flex items-center justify-center py-4 text-center -mt-1">
              <div>
                <div className="font-bold text-lg">Tier 3 - Intensive</div>
                <div className="text-sm">915 students (7.3%)</div>
              </div>
            </div>
          </div>
          
          {/* Exit Rates */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <h3 className="font-medium mb-2">Exit Rates (This Year)</h3>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-green-900/30 rounded p-2">
                <div className="text-green-400 font-bold">{exitRates.tier2to1}%</div>
                <div className="text-xs text-slate-400">Tier 2 → Tier 1</div>
              </div>
              <div className="bg-yellow-900/30 rounded p-2">
                <div className="text-yellow-400 font-bold">{exitRates.tier3to2}%</div>
                <div className="text-xs text-slate-400">Tier 3 → Tier 2</div>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <div className="text-red-400 font-bold">{exitRates.tier3to1}%</div>
                <div className="text-xs text-slate-400">Tier 3 → Tier 1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interventions by Tier */}
        <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
          {['tier1', 'tier2', 'tier3'].map((tier) => {
            const t = tierInterventions[tier as keyof typeof tierInterventions]
            const colors = {
              tier1: { bg: 'bg-green-900/30', border: 'border-green-500', text: 'text-green-400', header: 'bg-green-600' },
              tier2: { bg: 'bg-yellow-900/30', border: 'border-yellow-500', text: 'text-yellow-400', header: 'bg-yellow-600' },
              tier3: { bg: 'bg-red-900/30', border: 'border-red-500', text: 'text-red-400', header: 'bg-red-600' },
            }
            const c = colors[tier as keyof typeof colors]
            
            return (
              <div key={tier} className={`${c.bg} rounded-lg border ${c.border} overflow-hidden`}>
                <div className={`${c.header} px-3 py-2 font-semibold`}>
                  {t.name}
                </div>
                <div className="p-3">
                  <p className="text-xs text-slate-400 mb-2">{t.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-slate-300 mb-1">Interventions:</p>
                    <ul className="text-xs space-y-1">
                      {t.interventions.slice(0, 4).map((int, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-green-400">✓</span>
                          <span>{int}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs">
                    <p className="font-medium text-slate-300">Staff:</p>
                    <p className="text-slate-400">{t.staff[0]}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Demographic Breakdown */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">👥</span> MTSS Tier Distribution by Demographic Group
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">Group</th>
                <th className="text-right py-3 px-4">Total</th>
                <th className="text-center py-3 px-4">Tier 1 %</th>
                <th className="text-center py-3 px-4">Tier 2 %</th>
                <th className="text-center py-3 px-4">Tier 3 %</th>
                <th className="text-center py-3 px-4">Tier 3 Students</th>
                <th className="text-center py-3 px-4">Risk Flag</th>
              </tr>
            </thead>
            <tbody>
              {demographicBreakdown.map((demo) => {
                const tier3Students = Math.round(demo.total * (demo.tier3 / 100))
                const isHighRisk = demo.tier3 > 15
                
                return (
                  <tr key={demo.group} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <span>{demo.icon}</span>
                      <span>{demo.group}</span>
                    </td>
                    <td className="text-right py-3 px-4">{demo.total.toLocaleString()}</td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${demo.tier1}%` }}></div>
                        </div>
                        <span>{demo.tier1}%</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${demo.tier2}%` }}></div>
                        </div>
                        <span>{demo.tier2}%</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div className={`h-2 rounded-full ${isHighRisk ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${demo.tier3}%` }}></div>
                        </div>
                        <span>{demo.tier3}%</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4 font-medium">{tier3Students}</td>
                    <td className="text-center py-3 px-4">
                      {isHighRisk ? (
                        <span className="px-2 py-1 bg-red-900 text-red-300 rounded text-xs font-medium">HIGH RISK</span>
                      ) : (
                        <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">OK</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
            <h3 className="font-semibold text-red-400 mb-3">🚨 High Priority Actions</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400">1.</span>
                <span>Review 35 foster youth in Tier 3 - coordinate with foster services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">2.</span>
                <span>30% of homeless students in Tier 3 - housing stability interventions needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">3.</span>
                <span>26% of SWD in Tier 3 - IEP progress monitoring reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">4.</span>
                <span>EL Tier 3 at 14% - intensify language support interventions</span>
              </li>
            </ul>
          </div>
          
          {/* Monitor */}
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-3">👀 Monitor & Evaluate</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">1.</span>
                <span>SED tier distribution - ensure equity in intervention access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">2.</span>
                <span>African American students - 15% in Tier 3, investigate root causes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">3.</span>
                <span>Latino/Hispanic trending - 12% in Tier 3, early intervention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">4.</span>
                <span>Track exit rates - target 70% Tier 2→1 movement</span>
              </li>
            </ul>
          </div>
          
          {/* Wins */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-3">✅ Current Wins</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Asian students: Only 4% in Tier 3</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>White students: Meeting district average (5% Tier 3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Tier 2→1 exit rate at 65% (exceeds 60% target)</span>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-3">📚 Resources Needed</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>2 FTE reading interventionists (EL focus)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>1 FTE behavior specialist (Tier 3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>McKinney-Vento liaison hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>Foster youth case manager</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
