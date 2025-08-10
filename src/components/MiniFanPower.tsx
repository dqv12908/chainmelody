"use client";
import { useState } from "react";

type Artist = { id: string; name: string; stakes: number };

export default function MiniFanPower() {
  const [artists, setArtists] = useState<Artist[]>([
    { id: "1", name: "Nova", stakes: 120 },
    { id: "2", name: "IndieWave", stakes: 80 },
  ]);

  function stake(id: string, delta: number) {
    setArtists((prev) => prev.map((a) => (a.id === id ? { ...a, stakes: Math.max(0, a.stakes + delta) } : a)));
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Fan Power</h4>
        <span className="text-xs text-blue-700/70">Stake to support</span>
      </div>
      <ul className="mt-4 space-y-2">
        {artists.map((a) => (
          <li key={a.id} className="flex items-center justify-between rounded-md border border-blue-100 bg-blue-50/40 px-3 py-2">
            <div>
              <div className="text-sm font-medium text-blue-900">{a.name}</div>
              <div className="text-xs text-blue-700/70">Stake: {a.stakes} MELO</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => stake(a.id, 10)} className="rounded-md border border-blue-200 bg-white px-2 py-1 text-xs text-blue-800 hover:bg-blue-50">+10</button>
              <button onClick={() => stake(a.id, -10)} className="rounded-md border border-blue-200 bg-white px-2 py-1 text-xs text-blue-800 hover:bg-blue-50">-10</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


