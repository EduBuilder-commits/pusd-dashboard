'use client';

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import dataset from '../../../../dataset.json'

type School = typeof dataset[number]

export default function SchoolDetailPage(){
  const params = useParams()
  const schoolId = params?.id as string
  const school: School | undefined = (dataset as any).find((s: any) => s.id === schoolId)
  
  if (!school) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-semibold">School not found</h1>
        <Link href="/dashboard" className="text-blue-400 hover:underline mt-4 block">
          ← Back to Dashboard
        </Link>
      </div>
    )
  }

  const caasppAvg = ((school.assessment?.CAASPP?.ELA ?? 0) + (school.assessment?.CAASPP?.Math ?? 0)) / 2
  const ireadyAvg = ((school.assessment?.iReady?.Math ?? 0) + (school.assessment?.iReady?.Reading ?? 0)) / 2

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link href="/dashboard" className="text-blue-400 hover:underline text-sm mb-4 block">
        ← Back to Dashboard
      </Link>
      
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">{school.name}</h1>
        <p className="text-slate-300">{school.level} • {school.enrollment} students</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Card */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Performance</h2>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-slate-400">CAASPP Average</div>
              <div className="text-2xl font-bold">{caasppAvg.toFixed(1)}</div>
              <div className="text-xs text-slate-500">ELA: {school.assessment?.CAASPP?.ELA ?? 'N/A'} • Math: {school.assessment?.CAASPP?.Math ?? 'N/A'}</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">iReady Average</div>
              <div className="text-2xl font-bold">{ireadyAvg.toFixed(1)}</div>
              <div className="text-xs text-slate-500">Math: {school.assessment?.iReady?.Math ?? 'N/A'} • Reading: {school.assessment?.iReady?.Reading ?? 'N/A'}</div>
            </div>
          </div>
        </div>

        {/* Demographics Card */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Demographics</h2>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-slate-400">Socioeconomically Disadvantaged</div>
              <div className="text-2xl font-bold">{school.demographics.SED}%</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">English Learners</div>
              <div className="text-2xl font-bold">{school.demographics.EL}%</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Special Education</div>
              <div className="text-2xl font-bold">{school.demographics.SPED}%</div>
            </div>
          </div>
        </div>

        {/* Attendance & Climate Card */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Attendance & Climate</h2>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-slate-400">Attendance Rate</div>
              <div className={`text-2xl font-bold ${school.attendance >= 95 ? 'text-green-400' : school.attendance >= 93 ? 'text-yellow-400' : 'text-red-400'}`}>
                {school.attendance}%
              </div>
              <div className="text-xs text-slate-500">Target: 95%+</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Climate Score</div>
              <div className="text-2xl font-bold">{school.climate}/5</div>
            </div>
          </div>
        </div>
      </div>

      {/* So What? Section */}
      <div className="mt-6 bg-slate-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">So What?</h2>
        <ul className="text-sm text-slate-300 space-y-2">
          {school.level === 'Elementary' && (
            <>
              <li>• Every 1% attendance gain in elementary predicts 0.5% higher reading proficiency in middle school.</li>
              <li>• Schools with 60%+ SED students need targeted intervention strategies - consider AI-powered tutoring.</li>
            </>
          )}
          {school.level === 'Middle' && (
            <>
              <li>• Middle school math performance is the strongest predictor of high school graduation.</li>
              <li>• Climate scores below 4.0 correlate with 15% higher chronic absenteeism.</li>
            </>
          )}
          {school.level === 'High' && (
            <>
              <li>• CAASPP scores of 60+ indicate college readiness for CSU/UC placement.</li>
              <li>• Each 1% increase in attendance predicts 2% higher graduation rates.</li>
            </>
          )}
          {school.level === 'Alternative' && (
            <>
              <li>• Alternative schools need wraparound services - coordinate with counseling.</li>
              <li>• Focus on credit recovery and competency-based pathways.</li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
