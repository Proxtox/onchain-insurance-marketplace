"use client";

import { useState } from 'react';

export default function InsuranceMarketplace() {
  const [coverage, setCoverage] = useState('');

  const handleBuy = () => {
    alert(`Buying insurance for ${coverage} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">On-Chain Insurance Marketplace</h1>

      <div className="space-y-4">
        <input type="text" value={coverage} onChange={(e) => setCoverage(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Coverage Amount" />
        <button onClick={handleBuy} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Buy Parametric Insurance
        </button>
      </div>
    </div>
  );
}