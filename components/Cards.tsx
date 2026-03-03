import React from 'react';

export const StatCard: React.FC<{ title: string; value: string | number }>=({ title, value })=>{
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
};
