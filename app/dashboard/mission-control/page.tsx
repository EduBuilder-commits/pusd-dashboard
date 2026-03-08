'use client';

import React, { useState } from 'react'
import dataset from '../../../dataset.json'

function average(arr: number[]){ if(!arr.length) return 0; return arr.reduce((a,b)=>a+b,0)/arr.length }

export default function MissionControl(){
  const schools = dataset as any
  
  const avgAttendance = average(schools.map((s: any) => s.attendance || 0))
  const avgCAASPPEla = average(schools.map((s: any) => s.assessment?.CAASPP?.ELA || 0))
  const avgCAASPPMath = average(schools.map((s: any) => s.assessment?.CAASPP?.Math || 0))
  
  const alertSchools = schools.filter((s: any) => {
    const a = s.attendance || 0
    const ca = ((s.assessment?.CAASPP?.ELA || 0) + (s.assessment?.CAASPP?.Math || 0)) / 2
    // Exclude alternative schools from alerts
    if (s.level === 'Alternative') return false
    return a < 94.5 || ca < 50
  })

  // California Dashboard High-Risk Groups (synthetic data)
  const highRiskGroups = [
    { 
      id: 'el', 
      name: 'English Learners', 
      acronym: 'EL', 
      population: 2840, 
      avgCAASPP: 42, 
      avgAttendance: 91.2,
      status: 'red',
      icon: '🌐',
      priority: 1
    },
    { 
      id: 'sed', 
      name: 'Socioeconomically Disadvantaged', 
      acronym: 'SED', 
      population: 5120, 
      avgCAASPP: 48, 
      avgAttendance: 92.8,
      status: 'yellow',
      icon: '📉',
      priority: 2
    },
    { 
      id: 'swd', 
      name: 'Students with Disabilities', 
      acronym: 'SWD', 
      population: 1890, 
      avgCAASPP: 38, 
      avgAttendance: 89.5,
      status: 'red',
      icon: '♿',
      priority: 3
    },
    { 
      id: 'foster', 
      name: 'Foster Youth', 
      acronym: 'FY', 
      population: 156, 
      avgCAASPP: 32, 
      avgAttendance: 84.2,
      status: 'red',
      icon: '🏠',
      priority: 4
    },
    { 
      id: 'homeless', 
      name: 'Homeless (McKinney-Vento)', 
      acronym: 'HV', 
      population: 234, 
      avgCAASPP: 35, 
      avgAttendance: 85.8,
      status: 'red',
      icon: '🛖',
      priority: 5
    },
    { 
      id: 'african-am', 
      name: 'African American Students', 
      acronym: 'AA', 
      population: 890, 
      avgCAASPP: 45, 
      avgAttendance: 91.5,
      status: 'yellow',
      icon: '👤',
      priority: 6
    },
    { 
      id: 'latino', 
      name: 'Latino/Hispanic Students', 
      acronym: 'Latino', 
      population: 4280, 
      avgCAASPP: 47, 
      avgAttendance: 92.4,
      status: 'yellow',
      icon: '👥',
      priority: 7
    },
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'red': return 'bg-red-900/40 border-red-500 text-red-300'
      case 'yellow': return 'bg-yellow-900/40 border-yellow-500 text-yellow-300'
      default: return 'bg-green-900/40 border-green-500 text-green-300'
    }
  }

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'red': return 'High Priority'
      case 'yellow': return 'Monitor'
      default: return 'On Track'
    }
  }

  const priorityGroups = highRiskGroups.filter(g => g.status === 'red')

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-2">Instructional Mission Control</h1>
      <p className="text-sm text-slate-300 mb-6">Real-time district health with actionable insights</p>
      
      {/* District Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <section className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <h2 className="text-sm text-slate-400">Avg Attendance</h2>
          <p className="text-3xl font-bold">{avgAttendance.toFixed(1)}%</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h2 className="text-sm text-slate-400">CAASPP ELA Avg</h2>
          <p className="text-3xl font-bold">{avgCAASPPEla.toFixed(1)}</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500">
          <h2 className="text-sm text-slate-400">CAASPP Math Avg</h2>
          <p className="text-3xl font-bold">{avgCAASPPMath.toFixed(1)}</p>
        </section>
        
        <section className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
          <h2 className="text-sm text-slate-400">Schools Needing Support</h2>
          <p className="text-3xl font-bold">{alertSchools.length}</p>
        </section>
      </div>
      
      {/* High-Risk Student Groups - California Dashboard Indicators */}
      <section className="bg-slate-800 rounded-lg p-4 mb-6">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <span className="text-xl">🚨</span> High-Risk Student Groups (CA Dashboard Indicators)
        </h2>
        <p className="text-sm text-slate-400 mb-4">
          Student populations requiring priority attention based on California Dashboard indicators
        </p>
        
        {/* Priority Groups */}
        {priorityGroups.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-red-400 mb-2">⚠️ Priority Groups (Red Status)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {priorityGroups.map(group => (
                <div key={group.id} className={`rounded-lg p-3 border ${getStatusColor(group.status)}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{group.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{group.name}</p>
                      <p className="text-xs opacity-75">{group.population.toLocaleString()} students</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-slate-400">CAASPP Avg</p>
                      <p className="font-bold">{group.avgCAASPP}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Attendance</p>
                      <p className="font-bold">{group.avgAttendance}%</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-current/20">
                    <p className="text-xs font-medium">{getStatusLabel(group.status)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Groups */}
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-2">All High-Risk Groups</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 px-3">Group</th>
                  <th className="text-right py-2 px-3">Students</th>
                  <th className="text-right py-2 px-3">CAASPP</th>
                  <th className="text-right py-2 px-3">Attendance</th>
                  <th className="text-center py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {highRiskGroups.map(group => (
                  <tr key={group.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-2 px-3 flex items-center gap-2">
                      <span>{group.icon}</span>
                      <span>{group.name}</span>
                    </td>
                    <td className="text-right py-2 px-3">{group.population.toLocaleString()}</td>
                    <td className="text-right py-2 px-3 font-medium">{group.avgCAASPP}</td>
                    <td className="text-right py-2 px-3">{group.avgAttendance}%</td>
                    <td className="text-center py-2 px-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        group.status === 'red' ? 'bg-red-900 text-red-300' :
                        group.status === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-green-900 text-green-300'
                      }`}>
                        {getStatusLabel(group.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Schools Requiring Attention */}
      <section className="bg-slate-800 rounded-lg p-4">
        <h2 className="font-semibold mb-3">Schools Requiring Attention</h2>
        {alertSchools.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-2">
            {alertSchools.slice(0, 8).map((s: any) => (
              <div key={s.id} className="bg-red-900/30 border border-red-700 rounded p-2">
                <p className="font-medium text-sm">{s.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-400">All schools meeting performance targets</p>
        )}
      </section>
    </div>
  )
}
