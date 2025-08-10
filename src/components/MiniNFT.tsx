"use client";
import { useState } from "react";

type Collectible = { id: string; title: string; price: number; owned: boolean };

export default function MiniNFT() {
  const [items, setItems] = useState<Collectible[]>([
    { id: "c1", title: "Limited Track #01", price: 25, owned: false },
    { id: "c2", title: "Backstage Pass", price: 100, owned: false },
  ]);

  function buy(id: string) {
    setItems((prev) => prev.map((c) => (c.id === id ? { ...c, owned: true } : c)));
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Collectibles</h4>
        <span className="text-xs text-blue-700/70">NFT Drops</span>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((c) => (
          <li key={c.id} className="flex items-center justify-between rounded-md border border-blue-100 bg-blue-50/40 px-3 py-2">
            <div>
              <div className="text-sm font-medium text-blue-900">{c.title}</div>
              <div className="text-xs text-blue-700/70">{c.price} MELO</div>
            </div>
            <button
              onClick={() => buy(c.id)}
              disabled={c.owned}
              className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-800 hover:bg-blue-50 disabled:opacity-60"
            >
              {c.owned ? "Owned" : "Buy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


