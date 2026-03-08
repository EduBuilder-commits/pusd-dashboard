import React from 'react';
import Link from 'next/link';
import './globals.css';

const nav = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/schools', label: 'All Schools' },
  { href: '/dashboard/mission-control', label: 'Mission Control' },
  { href: '/dashboard/state', label: 'Accountability' },
  { href: '/dashboard/mtss', label: 'MTSS' },
  { href: '/dashboard/assessment', label: 'Assessment' },
  { href: '/dashboard/coaching', label: 'Coaching' },
  { href: '/dashboard/co-teaching', label: 'Co-Teaching' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-slate-800 p-4 shadow-lg border-r border-slate-700">
            <div className="text-xl font-bold mb-4 text-green-400">PUSD 🐙</div>
            <nav className="space-y-1">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="block px-3 py-2 rounded hover:bg-slate-700 text-sm">{n.label}</Link>
              ))}
            </nav>
          </aside>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
