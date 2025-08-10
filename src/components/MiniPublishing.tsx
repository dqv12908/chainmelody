"use client";
import { useState } from "react";

type Track = {
  id: string;
  title: string;
  artist: string;
  minted: boolean;
};

export default function MiniPublishing() {
  const [tracks, setTracks] = useState<Track[]>([
    { id: "1", title: "Midnight Echoes", artist: "Nova", minted: true },
    { id: "2", title: "Blue Horizon", artist: "Waveform", minted: false },
  ]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function addTrack() {
    if (!title.trim() || !artist.trim()) return;
    setTracks((prev) => [
      { id: String(Date.now()), title: title.trim(), artist: artist.trim(), minted: false },
      ...prev,
    ]);
    setTitle("");
    setArtist("");
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Publishing</h4>
        <span className="text-xs text-blue-700/70">Polygon • $MELO</span>
      </div>
      <div className="mt-4 grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Track title"
            className="rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist name"
            className="rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        </div>
        <button
          onClick={addTrack}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Upload & Mint (demo)
        </button>
      </div>

      <div className="mt-5">
        <div className="text-xs font-medium text-blue-900/80">Your Tracks</div>
        <ul className="mt-2 space-y-2">
          {tracks.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between rounded-md border border-blue-100 bg-blue-50/40 px-3 py-2"
            >
              <div>
                <div className="text-sm font-medium text-blue-900">{t.title}</div>
                <div className="text-xs text-blue-700/70">{t.artist}</div>
              </div>
              <span
                className={
                  "text-xs rounded px-2 py-1 " +
                  (t.minted
                    ? "bg-blue-100 text-blue-800 border border-blue-200"
                    : "bg-white text-blue-700 border border-blue-200")
                }
              >
                {t.minted ? "NFT Minted" : "Draft"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


