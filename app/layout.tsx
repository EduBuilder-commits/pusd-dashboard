import React from 'react';
import Link from 'next/link';
import './globals.css';

const nav = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/state', label: 'State Accountability' },
  { href: '/dashboard/mtss', label: 'MTSS Tracker' },
  { href: '/dashboard/assessment', label: 'Assessment Hub' },
  { href: '/dashboard/coaching', label: 'Coaching Impact' },
  { href: '/dashboard/co-teaching', label: 'Co-Teaching' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-blue-700 text-white p-4 shadow-lg">
            <div className="text-xl font-bold mb-4">Poway Dashboard</div>
            <nav className="space-y-2">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="block px-3 py-2 rounded hover:bg-blue-600">{n.label}</Link>
              ))}
            </nav>
          </aside>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
