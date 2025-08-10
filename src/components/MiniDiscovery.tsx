"use client";
import { useMemo, useState } from "react";

type Track = {
  id: string;
  title: string;
  artist: string;
  votes: number;
};

export default function MiniDiscovery() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<Track[]>([
    { id: "1", title: "Chain Reaction", artist: "SynthKid", votes: 42 },
    { id: "2", title: "Decentralized Dreams", artist: "IndieWave", votes: 35 },
    { id: "3", title: "Blue Skyline", artist: "NightTaxi", votes: 28 },
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tracks;
    return tracks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q)
    );
  }, [query, tracks]);

  function upvote(id: string) {
    setTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, votes: t.votes + 1 } : t))
    );
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Discovery</h4>
        <span className="text-xs text-blue-700/70">Listener DAO</span>
      </div>
      <div className="mt-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tracks or artists"
          className="w-full rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
      </div>
      <ul className="mt-4 space-y-2">
        {filtered.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between rounded-md border border-blue-100 bg-blue-50/40 px-3 py-2"
          >
            <div>
              <div className="text-sm font-medium text-blue-900">{t.title}</div>
              <div className="text-xs text-blue-700/70">{t.artist}</div>
            </div>
            <button
              onClick={() => upvote(t.id)}
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-800 hover:bg-blue-50"
            >
              <span>Vote</span>
              <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] text-blue-800">{t.votes}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


