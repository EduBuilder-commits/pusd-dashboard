import React from 'react';
import Link from 'next/link';

export const Sidebar: React.FC = () => {
  const items = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/executive', label: 'Executive Summary', highlight: true },
    { href: '/dashboard/state', label: 'State Accountability' },
    { href: '/dashboard/mtss', label: 'MTSS Tracker' },
    { href: '/dashboard/assessment', label: 'Assessment Hub' },
    { href: '/dashboard/coaching', label: 'Coaching Impact' },
    { href: '/dashboard/co-teaching', label: 'Co-Teaching' }
  ];
  return (
    <aside className="w-64 bg-sky-700 text-white p-4 hidden lg:block">
      <nav className="space-y-2">
        {items.map(i => (
          <Link key={i.href} href={i.href} className={`block px-3 py-2 rounded hover:bg-sky-600 ${i.highlight ? 'bg-yellow-500 hover:bg-yellow-600 text-black font-semibold' : ''}`}>{i.label}</Link>
        ))}
      </nav>
    </aside>
  );
};
