"use client";
import { useState } from "react";

type Artist = { id: string; name: string; genre: string; status: "Independent" | "Label" };

export default function MiniEmpower() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [artists, setArtists] = useState<Artist[]>([
    { id: "a1", name: "Luna Drift", genre: "Indie Pop", status: "Independent" },
  ]);

  function addArtist() {
    if (!name.trim() || !genre.trim()) return;
    setArtists((prev) => [
      { id: String(Date.now()), name: name.trim(), genre: genre.trim(), status: "Independent" },
      ...prev,
    ]);
    setName("");
    setGenre("");
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Empower Artists</h4>
        <span className="text-xs text-blue-700/70">No gatekeepers</span>
      </div>
      <div className="mt-4 grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Artist name"
            className="rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            className="rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        </div>
        <button
          onClick={addArtist}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Create Profile (demo)
        </button>
      </div>
      <ul className="mt-5 space-y-2">
        {artists.map((a) => (
          <li key={a.id} className="flex items-center justify-between rounded-md border border-blue-100 bg-blue-50/40 px-3 py-2">
            <div>
              <div className="text-sm font-medium text-blue-900">{a.name}</div>
              <div className="text-xs text-blue-700/70">{a.genre}</div>
            </div>
            <span className="text-xs rounded border border-blue-200 bg-white px-2 py-1 text-blue-700">{a.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


