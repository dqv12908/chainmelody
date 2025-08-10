"use client";
import { useMemo, useState } from "react";

type Split = {
  name: string;
  percent: number;
};

const DEFAULT_SPLITS: Split[] = [
  { name: "Artist", percent: 60 },
  { name: "Producer", percent: 25 },
  { name: "Label", percent: 15 },
];

export default function MiniRoyalties() {
  const [streams, setStreams] = useState(1200);
  const [tip, setTip] = useState<number>(0);
  const tokenPerStream = 0.01; // MELO per stream (demo)

  const basePayout = useMemo(() => streams * tokenPerStream, [streams]);

  const rows = useMemo(() => {
    return DEFAULT_SPLITS.map((s) => {
      const share = s.percent / 100;
      const amount = basePayout * share + tip * share;
      return { ...s, amount };
    });
  }, [basePayout, tip]);

  const totalWithTip = useMemo(() => basePayout + tip, [basePayout, tip]);

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Royalties</h4>
        <span className="text-xs text-blue-700/70">Real-time split</span>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-900/80">Streams:</span>
          <div className="inline-flex overflow-hidden rounded-md border border-blue-200">
            <button
              onClick={() => setStreams((s) => Math.max(0, s - 100))}
              className="px-3 py-1.5 text-blue-700 hover:bg-blue-50"
            >
              -100
            </button>
            <div className="px-3 py-1.5 border-x border-blue-200 bg-blue-50/60 text-blue-900 min-w-16 text-center">
              {streams}
            </div>
            <button
              onClick={() => setStreams((s) => s + 100)}
              className="px-3 py-1.5 text-blue-700 hover:bg-blue-50"
            >
              +100
            </button>
          </div>
          <button
            onClick={() => setStreams((s) => s + 1000)}
            className="ml-2 rounded-md border border-blue-200 px-3 py-1.5 text-blue-800 hover:bg-blue-50"
          >
            +1000
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-900/80">Tip (MELO):</span>
          <input
            value={tip}
            onChange={(e) => setTip(Number(e.target.value) || 0)}
            type="number"
            min="0"
            step="0.1"
            className="w-28 rounded-md border border-blue-200 px-3 py-1.5 outline-none focus:border-blue-400"
          />
        </div>
      </div>

      <div className="mt-5 text-sm text-blue-900/90">
        <div className="flex items-center justify-between">
          <span>Base payout</span>
          <span>{basePayout.toFixed(2)} MELO</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total with tip</span>
          <span>{totalWithTip.toFixed(2)} MELO</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs font-medium text-blue-900/80">Distribution</div>
        <ul className="mt-2 space-y-2">
          {rows.map((r) => (
            <li key={r.name} className="rounded-md border border-blue-100 bg-blue-50/40 p-3">
              <div className="flex items-center justify-between text-sm text-blue-900">
                <span className="font-medium">{r.name}</span>
                <span>
                  {r.percent}% · {r.amount.toFixed(2)} MELO
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded bg-blue-100">
                <div
                  className="h-2 bg-blue-600"
                  style={{ width: `${r.percent}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


