'use client';

import React from 'react'
import Link from 'next/link'
import dataset from '../../dataset.json'

type School = typeof dataset[number]

function perfLevel(s: any){
  const a = (s.assessment?.CAASPP?.ELA ?? 0) + (s.assessment?.CAASPP?.Math ?? 0)
  const avg = a/2
  if(avg >= 58) return 'High'
  if(avg >= 52) return 'Medium'
  return 'Low'
}

function colorFor(p: string){
  switch(p){
    case 'High': return 'bg-green-500 hover:bg-green-400'
    case 'Medium': return 'bg-yellow-500 hover:bg-yellow-400'
    default: return 'bg-red-500 hover:bg-red-400'
  }
}

function average(arr: number[]){ if(!arr.length) return 0; return arr.reduce((a,b)=>a+b,0)/arr.length }

// LCAP Goals (2025-26) - using strings for all target/current values
const lcapGoals = [
  {
    goal: 1,
    name: 'Student Achievement',
    metrics: [
      { metric: 'CAASPP ELA', target: '65', current: '62', status: 'yellow' },
      { metric: 'CAASPP Math', target: '60', current: '58', status: 'green' },
      { metric: 'iReady Reading', target: '60', current: '56', status: 'yellow' },
      { metric: 'iReady Math', target: '60', current: '58', status: 'green' },
    ]
  },
  {
    goal: 2,
    name: 'Student Engagement',
    metrics: [
      { metric: 'Attendance Rate', target: '96', current: '95.8', status: 'green' },
      { metric: 'Chronic Absenteeism', target: '<5', current: '4.2', status: 'green' },
      { metric: 'Graduation Rate', target: '95', current: '94.2', status: 'yellow' },
      { metric: 'Dropout Rate', target: '<3', current: '2.8', status: 'green' },
    ]
  },
  {
    goal: 3,
    name: 'English Learner Progress',
    metrics: [
      { metric: 'EL Reclassification', target: '15', current: '12.8', status: 'yellow' },
      { metric: 'ELPAC Level 3+', target: '55', current: '52', status: 'yellow' },
      { metric: 'RFEP Monitoring', target: '90', current: '88', status: 'yellow' },
    ]
  },
  {
    goal: 4,
    name: 'School Climate',
    metrics: [
      { metric: 'Suspension Rate', target: '<2', current: '1.8', status: 'green' },
      { metric: 'Expulsion Rate', target: '<0.5', current: '0.3', status: 'green' },
      { metric: 'Climate Survey', target: '80', current: '76', status: 'yellow' },
      { metric: 'Chronic Discipline', target: '<3', current: '2.4', status: 'green' },
    ]
  },
  {
    goal: 5,
    name: 'Equity and Access',
    metrics: [
      { metric: 'A-G Completion', target: '75', current: '72', status: 'yellow' },
      { metric: 'AP Pass Rate', target: '80', current: '78', status: 'yellow' },
      { metric: 'CTE Pathway Completers', target: '30', current: '28', status: 'yellow' },
      { metric: 'Co-Teaching Rate', target: '45', current: '42', status: 'green' },
    ]
  },
  {
    goal: 6,
    name: 'Parent and Community',
    metrics: [
      { metric: 'Parent Engagement', target: '75', current: '68', status: 'red' },
      { metric: 'Community Partnerships', target: '50', current: '45', status: 'yellow' },
      { metric: 'Volunteer Hours', target: '10000', current: '9200', status: 'yellow' },
    ]
  },
]

export default function Dashboard(){
  const schools: School[] = dataset as any
  const filtered = schools
  
  const avgAttendance = average(filtered.map(s=>s.attendance))
  const districtPerf = average(filtered.map(s=>{
    const a = s.assessment?.CAASPP
    const v = ((a?.ELA ?? 0) + (a?.Math ?? 0))/2
    return v
  }))

  const alerts = filtered.filter(s => {
    const a = s.attendance
    const ca = ((s.assessment?.CAASPP?.ELA ?? 0) + (s.assessment?.CAASPP?.Math ?? 0))/2
    return (a < 94.5) || (ca < 50)
  }).length

  const levels = ['All', 'Elementary', 'Middle', 'High', 'Alternative'] as const
  const [levelFilter, setLevelFilter] = React.useState<typeof levels[number]>('All')
  const visible = filtered.filter(s => levelFilter === 'All' || s.level === levelFilter)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-700 bg-gradient-to-r from-slate-800 to-slate-900">
        <h1 className="text-2xl font-semibold">PUSD Instructional Mission Control</h1>
        <p className="text-sm text-slate-300 mt-1">District overview with actionable context</p>
      </header>
      
      <main className="p-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <section className="md:col-span-1 bg-slate-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">District Overview</h2>
          <p className="text-sm">Average Attendance: {avgAttendance.toFixed(1)}% <span className="text-green-400">So What?</span> Every 1% attendance gain = 0.5% higher graduation rate.</p>
          <p className="text-sm mt-2">CAASPP Average: {districtPerf.toFixed(1)} <span className="text-green-400">So What?</span> PUSD outperforms state average by 8+ points.</p>
          <p className="text-sm mt-2">Alerts: {alerts} schools <span className="text-yellow-400">So What?</span> Prioritize coaching cycles to these sites.</p>
        </section>
        
        <section className="md:col-span-2 bg-slate-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">School Performance Heatmap (Click to View)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {visible.map((s,i)=>{
              const p = s.assessment?.CAASPP
              const avg = (((p?.ELA ?? 0) + (p?.Math ?? 0))/2)
              const lvl = perfLevel(s)
              const color = colorFor(lvl as any)
              return (
                <Link key={s.id} href={`/dashboard/schools/${s.id}`} className={`h-20 rounded ${color} flex items-center justify-center transition-transform hover:scale-105`} title={`${s.name} - ${lvl} (${avg.toFixed(0)})`}>
                  <span className="text-xs font-semibold text-center px-1">{s.name}</span>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      
      {/* LCAP Goals Section */}
      <section className="p-6 pt-0">
        <div className="bg-slate-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-xl">📋</span> LCAP Goals Progress (2025-26)
          </h2>
          <p className="text-sm text-slate-400 mb-4">Local Control Accountability Plan - Annual Goals</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lcapGoals.map((goal) => (
              <div key={goal.goal} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded">Goal {goal.goal}</span>
                  <span className="font-semibold text-sm">{goal.name}</span>
                </div>
                <div className="space-y-2">
                  {goal.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{metric.current}</span>
                        <span className="text-xs text-slate-500">/ {metric.target}</span>
                        <span className={`w-2 h-2 rounded-full ${
                          metric.status === 'green' ? 'bg-green-500' :
                          metric.status === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Bar */}
          <div className="mt-4 pt-4 border-t border-slate-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Overall LCAP Status</span>
              <span className="text-sm text-slate-400">20 metrics tracked</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-slate-600 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <div className="text-xs text-slate-400">50% On Track</div>
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> 10 On Track</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> 9 Monitor</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> 1 Below</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="p-6 grid grid-cols-1 gap-6">
        <div className="bg-slate-800 rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map(l => (
              <button key={l} onClick={()=>setLevelFilter(l)} className={`px-3 py-1 rounded-full border ${levelFilter===l?'border-white bg-blue-600':'border-gray-600 bg-gray-700'} text-sm`}>{l}</button>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="p-4 text-xs text-slate-400">Data: PUSD 2025-26 | Click any school for detailed profile</footer>
    </div>
  )
}
