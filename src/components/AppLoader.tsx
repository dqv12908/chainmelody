"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AppLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    // Lock scroll while the loader is active
    if (typeof document !== "undefined") {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = previous;
      };
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRemoved && typeof document !== "undefined") {
      // Ensure scrolling is restored after fade out completes
      document.body.style.overflow = "";
    }
  }, [isRemoved]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onTransitionEnd={() => !isVisible && setIsRemoved(true)}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="ChainMelody" width={32} height={32} className="w-8 h-8" />
          <span className="text-blue-900 text-xl font-semibold tracking-tight">ChainMelody</span>
        </div>
        <div className="flex items-end gap-2 h-14">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className={`bar bg-blue-600/90`} style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
        <p className="text-blue-800/70 text-sm">Loading your beats…</p>
      </div>

      <style jsx>{`
        .bar {
          width: 8px;
          height: 10px;
          border-radius: 4px;
          animation: equalize 1.2s ease-in-out infinite;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
        }
        @keyframes equalize {
          0% { height: 10px; }
          25% { height: 44px; }
          50% { height: 22px; }
          75% { height: 54px; }
          100% { height: 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bar { animation: none; }
        }
      `}</style>
    </div>
  );
}


