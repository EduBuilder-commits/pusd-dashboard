'use client';

import React from 'react'

// Co-teaching coverage data
const coTeachingData = {
  totalSections: 1240,
  coTaught: 520,
  coTeachPercent: 42,
  generalEd: 580,
  specialEdOnly: 140,
}

// Co-teaching models
const coTeachingModels = [
  { 
    model: 'One Teach / One Observe', 
    percent: 35, 
    description: 'One teacher instructs while the other observes student learning',
    bestFor: 'Data collection, initial implementation',
    color: 'blue'
  },
  { 
    model: 'Station Teaching', 
    percent: 25, 
    description: 'Students rotate through stations led by different teachers',
    bestFor: 'Differentiated instruction, small groups',
    color: 'green'
  },
  { 
    model: 'Parallel Teaching', 
    percent: 20, 
    description: 'Both teachers teach the same content to smaller groups',
    bestFor: 'Large classes, content reinforcement',
    color: 'purple'
  },
  { 
    model: 'Alternative Teaching', 
    percent: 12, 
    description: 'One teacher leads whole group while other works with small group',
    bestFor: 'Tier 2 intervention within class',
    color: 'yellow'
  },
  { 
    model: 'Teaming', 
    percent: 8, 
    description: 'Both teachers share responsibility for all students',
    bestFor: 'Full inclusion, team planning',
    color: 'red'
  },
]

// IEP Level distribution
const iepLevels = [
  { level: '80-100% Gen Ed', percent: 42, count: 794, description: 'Mostly in general education' },
  { level: '60-79% Gen Ed', percent: 28, count: 529, description: 'Significant Gen Ed participation' },
  { level: '40-59% Gen Ed', percent: 18, count: 340, description: 'Balanced SD/Gen Ed' },
  { level: '20-39% Gen Ed', percent: 8, count: 151, description: 'Mostly specialized' },
  { level: '0-19% Gen Ed', percent: 4, count: 76, description: 'Primarily specialized' },
]

// Subject area breakdown
const subjectAreas = [
  { subject: 'ELA', coTeach: 68, trad: 32, growth: +15, icon: '📖' },
  { subject: 'Math', coTeach: 72, trad: 28, growth: +18, icon: '🔢' },
  { subject: 'Science', coTeach: 45, trad: 55, growth: +12, icon: '🔬' },
  { subject: 'Social Studies', coTeach: 38, trad: 62, growth: +10, icon: '🌍' },
  { subject: 'Electives', coTeach: 15, trad: 85, growth: +8, icon: '🎨' },
]

// Demographic breakdown - co-teaching by subgroup
const demographicBreakdown = [
  { group: 'English Learners', icon: '🌐', total: 2840, coTaught: 1820, pct: 64, goal: 70, status: 'yellow' },
  { group: 'Students with Disabilities', icon: '♿', total: 1890, coTaught: 1320, pct: 70, goal: 75, status: 'yellow' },
  { group: 'Socioeconomically Disadvantaged', icon: '📉', total: 5120, coTaught: 3072, pct: 60, goal: 65, status: 'green' },
  { group: 'African American', icon: '👤', total: 890, coTaught: 578, pct: 65, goal: 70, status: 'yellow' },
  { group: 'Latino/Hispanic', icon: '👥', total: 4280, coTaught: 2568, pct: 60, goal: 65, status: 'green' },
  { group: 'Foster Youth', icon: '🏠', total: 156, coTaught: 124, pct: 79, goal: 80, status: 'green' },
  { group: 'Homeless', icon: '🛖', total: 234, coTaught: 187, pct: 80, goal: 80, status: 'green' },
]

// Outcomes by subgroup
const outcomeData = [
  { group: 'All Students', icon: '🎯', trad: 52, coTaught: 64, diff: +12 },
  { group: 'English Learners', icon: '🌐', trad: 38, coTaught: 52, diff: +14 },
  { group: 'Students with Disabilities', icon: '♿', trad: 32, coTaught: 48, diff: +16 },
  { group: 'Socioeconomically Disadvantaged', icon: '📉', trad: 45, coTaught: 58, diff: +13 },
  { group: 'African American', icon: '👤', trad: 44, coTaught: 56, diff: +12 },
  { group: 'Latino/Hispanic', icon: '👥', trad: 46, coTaught: 58, diff: +12 },
]

// Professional development
const pdOfferings = [
  { topic: 'Co-Teaching Models 101', sessions: 12, attendees: 180, rating: 4.6 },
  { topic: 'Differentiated Instruction', sessions: 8, attendees: 145, rating: 4.8 },
  { topic: 'Universal Design for Learning', sessions: 6, attendees: 98, rating: 4.5 },
  { topic: 'IEP Integration', sessions: 10, attendees: 165, rating: 4.4 },
  { topic: 'Behavior Strategies in Co-Taught', sessions: 7, attendees: 112, rating: 4.7 },
]

export default function CoTeachingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Co-Teaching & Inclusion Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="text-sm text-slate-400">Total Sections</div>
          <div className="text-3xl font-bold">{coTeachingData.totalSections}</div>
          <div className="text-xs text-slate-400">All grade levels</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-sm text-slate-400">Co-Taught Sections</div>
          <div className="text-3xl font-bold text-green-400">{coTeachingData.coTeachPercent}%</div>
          <div className="text-xs text-slate-400">{coTeachingData.coTaught} sections</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500">
          <div className="text-sm text-slate-400">Gen Ed Only</div>
          <div className="text-3xl font-bold">{coTeachingData.generalEd}</div>
          <div className="text-xs text-slate-400">{Math.round(coTeachingData.generalEd/coTeachingData.totalSections*100)}%</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-yellow-500">
          <div className="text-sm text-slate-400">SPED Only</div>
          <div className="text-3xl font-bold">{coTeachingData.specialEdOnly}</div>
          <div className="text-xs text-slate-400">{Math.round(coTeachingData.specialEdOnly/coTeachingData.totalSections*100)}%</div>
        </div>
      </div>

      {/* Co-Teaching Models - Funnel/Visual */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Model Distribution */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Co-Teaching Models</h2>
          <div className="space-y-3">
            {coTeachingModels.map((model) => (
              <div key={model.model} className="flex items-center gap-3">
                <div className="w-24 text-sm text-slate-400">{model.model}</div>
                <div className="flex-1 bg-slate-700 rounded-full h-4">
                  <div 
                    className={`bg-${model.color}-500 h-4 rounded-full`} 
                    style={{ width: `${model.percent}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right text-sm font-medium">{model.percent}%</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-400">
              <span className="text-yellow-400 font-medium">Target:</span> Increase Teaming to 15% by next year
            </p>
          </div>
        </div>

        {/* IEP Level Distribution */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">IEP Time in General Education</h2>
          <div className="space-y-3">
            {iepLevels.map((level) => (
              <div key={level.level} className="flex items-center gap-3">
                <div className="w-28 text-sm text-slate-400">{level.level}</div>
                <div className="flex-1 bg-slate-700 rounded-full h-4">
                  <div 
                    className={`${
                      level.percent >= 40 ? 'bg-green-500' : 'bg-yellow-500'
                    } h-4 rounded-full`} 
                    style={{ width: `${level.percent}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right text-sm">
                  <span className="font-medium">{level.percent}%</span>
                  <span className="text-slate-500 text-xs"> ({level.count})</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-400">
              <span className="text-green-400 font-medium">Goal:</span> 70% of IEP students in Gen Ed 80%+
            </p>
          </div>
        </div>

        {/* Subject Area Performance */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Co-Teaching by Subject</h2>
          <div className="space-y-3">
            {subjectAreas.map((subject) => (
              <div key={subject.subject} className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <span>{subject.icon}</span>
                    <span className="font-medium">{subject.subject}</span>
                  </span>
                  <span className="text-green-400 text-sm font-medium">+{subject.growth}% growth</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <div className="flex-1 bg-slate-600 rounded h-2">
                    <div className="bg-blue-500 h-2 rounded" style={{ width: `${subject.coTeach}%` }}></div>
                  </div>
                  <span className="text-slate-400">{subject.coTeach}% co-taught</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demographic Breakdown - Co-Teaching Access */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">👥</span> Co-Teaching Access by Demographic Group
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">Group</th>
                <th className="text-right py-3 px-4">Total Students</th>
                <th className="text-right py-3 px-4">Co-Taught</th>
                <th className="text-center py-3 px-4">Access Rate</th>
                <th className="text-center py-3 px-4">Goal</th>
                <th className="text-center py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {demographicBreakdown.map((demo) => {
                const isOnTrack = demo.pct >= demo.goal
                
                return (
                  <tr key={demo.group} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <span>{demo.icon}</span>
                      <span>{demo.group}</span>
                    </td>
                    <td className="text-right py-3 px-4">{demo.total.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">{demo.coTaught.toLocaleString()}</td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-20 bg-slate-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${demo.pct}%` }}></div>
                        </div>
                        <span className="font-medium">{demo.pct}%</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">{demo.goal}%</td>
                    <td className="text-center py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        demo.status === 'green' ? 'bg-green-900 text-green-300' :
                        demo.status === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {demo.status === 'green' ? 'On Track' : demo.status === 'yellow' ? 'Monitor' : 'Below'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Outcomes - Traditional vs Co-Taught */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span> Outcomes: Traditional vs Co-Taught Classes
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">Subgroup</th>
                <th className="text-right py-3 px-4">Traditional</th>
                <th className="text-right py-3 px-4">Co-Taught</th>
                <th className="text-right py-3 px-4">Difference</th>
                <th className="text-center py-3 px-4">Impact</th>
              </tr>
            </thead>
            <tbody>
              {outcomeData.map((outcome) => (
                <tr key={outcome.group} className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span>{outcome.icon}</span>
                    <span>{outcome.group}</span>
                  </td>
                  <td className="text-right py-3 px-4">{outcome.trad}%</td>
                  <td className="text-right py-3 px-4 font-medium">{outcome.coTaught}%</td>
                  <td className="text-right py-3 px-4">
                    <span className={`font-bold ${outcome.diff > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {outcome.diff > 0 ? '+' : ''}{outcome.diff}%
                    </span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3 h-3 rounded-full ${
                            i < Math.ceil(outcome.diff / 4) ? 'bg-green-500' : 'bg-slate-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
          <p className="text-sm text-green-300">
            <span className="font-semibold">Key Finding:</span> Co-taught classes show +12-16% higher proficiency across all subgroups. SPED students show highest gains (+16%).
          </p>
        </div>
      </section>

      {/* Action Items & Recommendations */}
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
                <span>EL co-teaching at 64% - below 70% goal. Add 3 more EL co-teach teams.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">2.</span>
                <span>SWD at 70% - need 3 more teams to reach 75% goal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">3.</span>
                <span>Science & SS co-teaching below 50% - prioritize these subjects.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">4.</span>
                <span>Only 8% using Teaming model - most effective for inclusion.</span>
              </li>
            </ul>
          </div>
          
          {/* Monitor */}
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-3">👀 Monitor</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">1.</span>
                <span>African American access at 65% - track quarterly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">2.</span>
                <span>IEP 0-39% Gen Ed (12%) - ensure LRE is appropriate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">3.</span>
                <span>Electives only 15% co-taught - explore co-teach models.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">4.</span>
                <span>Alternative Teaching at 12% - ensure used for intervention, not isolation.</span>
              </li>
            </ul>
          </div>
          
          {/* Wins */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-3">✅ Current Wins</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Homeless/Foster at 80% co-teach access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Math leads with 72% co-teaching, +18% growth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>SPED students +16% proficiency in co-taught classes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>42% overall co-teach rate (above 40% target)</span>
              </li>
            </ul>
          </div>
          
          {/* PD Needs */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-3">📚 PD Recommendations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>Advanced Teaming workshop (for 8% → 15% goal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>Science co-teaching strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>UDL for co-teaching environments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">+</span>
                <span>Data-driven co-teaching partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
