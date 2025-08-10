"use client";
import { useState } from "react";

type Proposal = { id: string; title: string; yes: number; no: number };

export default function MiniGovernance() {
  const [proposals, setProposals] = useState<Proposal[]>([
    { id: "p1", title: "Fund Rising Artist Grant #3", yes: 32, no: 4 },
  ]);

  function vote(id: string, dir: "yes" | "no") {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, yes: p.yes + (dir === "yes" ? 1 : 0), no: p.no + (dir === "no" ? 1 : 0) }
          : p
      )
    );
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Governance</h4>
        <span className="text-xs text-blue-700/70">Listener DAO</span>
      </div>
      <ul className="mt-4 space-y-2">
        {proposals.map((p) => (
          <li key={p.id} className="rounded-md border border-blue-100 bg-blue-50/40 p-3">
            <div className="text-sm font-medium text-blue-900">{p.title}</div>
            <div className="mt-2 flex items-center justify-between text-xs text-blue-900/80">
              <div className="flex gap-2">
                <button onClick={() => vote(p.id, "yes")} className="rounded-md border border-blue-200 bg-white px-2 py-1 text-blue-800 hover:bg-blue-50">Yes</button>
                <button onClick={() => vote(p.id, "no")} className="rounded-md border border-blue-200 bg-white px-2 py-1 text-blue-800 hover:bg-blue-50">No</button>
              </div>
              <div>
                Yes: {p.yes} · No: {p.no}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


