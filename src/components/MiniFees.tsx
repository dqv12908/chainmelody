"use client";
import { useMemo, useState } from "react";

export default function MiniFees() {
  const [amount, setAmount] = useState(100);
  const feePercent = 1.5; // demo
  const burnPercent = 60; // demo: 60% burn of fee

  const fee = useMemo(() => (amount * feePercent) / 100, [amount]);
  const burn = useMemo(() => (fee * burnPercent) / 100, [fee]);
  const growthPool = useMemo(() => fee - burn, [fee, burn]);

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Fees</h4>
        <span className="text-xs text-blue-700/70">Burn & Growth Pool</span>
      </div>
      <div className="mt-4 grid gap-3 text-sm">
        <label className="text-blue-900/80">Transaction Amount (MELO)</label>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          className="w-40 rounded-md border border-blue-200 px-3 py-2 outline-none focus:border-blue-400"
        />
        <div className="mt-2 space-y-1 text-blue-900/90">
          <div>Fee ({feePercent}%): {fee.toFixed(2)} MELO</div>
          <div>Burn (≈{burnPercent}% of fee): {burn.toFixed(2)} MELO</div>
          <div>Artist Growth Pool: {growthPool.toFixed(2)} MELO</div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded bg-blue-100">
          <div className="h-2 bg-blue-600" style={{ width: `${(fee / Math.max(1, amount)) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}


