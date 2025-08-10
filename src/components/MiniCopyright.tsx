"use client";
import { useMemo, useState } from "react";

export default function MiniCopyright() {
  const [title, setTitle] = useState("Blue Skyline");
  const [hash, setHash] = useState<string>(() => Math.random().toString(16).slice(2));
  const [registered, setRegistered] = useState(false);

  const checksum = useMemo(() => hash.slice(0, 8).toUpperCase(), [hash]);

  function register() {
    setRegistered(true);
  }

  function mutateHash() {
    setHash(Math.random().toString(16).slice(2));
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-blue-900">Mini App · Copyright</h4>
        <span className="text-xs text-blue-700/70">On-chain proof</span>
      </div>
      <div className="mt-4 grid gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
        <div className="text-xs text-blue-900/80">Content hash: {checksum}…</div>
        <div className="flex gap-2">
          <button onClick={mutateHash} className="rounded-md border border-blue-200 bg-white px-3 py-2 text-sm text-blue-800 hover:bg-blue-50">Rehash</button>
          <button onClick={register} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">Register (demo)</button>
        </div>
      </div>
      <div className="mt-4 text-sm text-blue-900/90">
        Status: {registered ? <span className="text-blue-700">Registered</span> : <span className="text-blue-700/70">Draft</span>}
      </div>
    </div>
  );
}


