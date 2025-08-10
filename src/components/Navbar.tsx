"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white border-b border-blue-100">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 md:px-6"
        aria-label="Global"
      >
        <a href="#" className="flex items-center gap-2 text-blue-900 font-semibold tracking-tight">
          <Image src="/logo.png" alt="ChainMelody" width={24} height={24} className="w-6 h-6" />
          ChainMelody
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-blue-900/80">
          <a href="#what-is" className="hover:text-blue-900">What</a>
          <a href="#features" className="hover:text-blue-900">Features</a>
          <a href="#tokenomics" className="hover:text-blue-900">Tokenomics</a>
          <a href="#" className="hover:text-blue-900">Docs</a>
        </div>
        <div className="hidden md:inline-flex">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition text-sm"
          >
            Launch App
          </a>
        </div>
      </nav>
    </div>
  );
}


