'use client';

import React from 'react'
import Link from 'next/link'
import dataset from '../../../dataset.json'

type School = typeof dataset[number]

export default function SchoolsPage(){
  const schools = dataset as any
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">All 32 PUSD Schools</h1>
      <p className="text-sm text-slate-300 mb-4">Click any school to view detailed profile</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {schools.map((s: any) => {
          const perf = ((s.assessment?.CAASPP?.ELA ?? 0) + (s.assessment?.CAASPP?.Math ?? 0))/2
          const level = s.level
          const correctColor = level === 'Elementary' ? 'bg-green-600 hover:bg-green-500' 
            : level === 'Middle' ? 'bg-yellow-600 hover:bg-yellow-500' 
            : level === 'High' ? 'bg-red-600 hover:bg-red-500' 
            : 'bg-purple-600 hover:bg-purple-500'
          
          return (
            <Link key={s.id} href={`/dashboard/schools/${s.id}`} 
                  className={`rounded-lg p-3 ${correctColor} shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}
                  title={`${s.name} - ${s.level} - Avg CAASPP ${perf.toFixed(0)}`}>
              <div className="font-semibold text-sm">{s.name}</div>
              <div className="text-xs opacity-90">{s.level}</div>
              <div className="text-xs mt-1">Enrolled: {s.enrollment.toLocaleString()}</div>
              <div className="text-xs">Attendance: {s.attendance}%</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
