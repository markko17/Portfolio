"use client";

import { useEffect, useState } from "react";

export default function DinoClip() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden bg-transparent pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-300 z-20">
      <style>{`
        @keyframes run-ground {
          from { background-position: 0 0; }
          to { background-position: -1000px 0; }
        }
        @keyframes jump {
          0%, 75%, 100% { transform: translateY(0); }
          87.5% { transform: translateY(-45px); }
        }
        @keyframes slide-cactus {
          0%, 50% { transform: translateX(100vw); }
          100% { transform: translateX(-20vw); }
        }
        @keyframes slide-bird {
          0%, 20% { transform: translateX(100vw); }
          50% { transform: translateX(-20vw); }
          100% { transform: translateX(-20vw); }
        }
        .dino-anim {
          animation: jump 4s infinite linear;
        }
        .cactus-anim {
          animation: slide-cactus 4s infinite linear;
        }
        .bird-anim {
          animation: slide-bird 4s infinite linear;
        }
        .ground-anim {
          animation: run-ground 20s infinite linear;
          background-image: radial-gradient(circle, rgba(0, 240, 255, 0.4) 1px, transparent 1px);
          background-size: 20px 2px;
        }
      `}</style>

      {/* Ground line */}
      <div className="absolute bottom-2 left-0 w-full h-[2px] ground-anim"></div>

      {/* Dino */}
      <div className="absolute bottom-2 left-[10%] dino-anim">
        <svg width="32" height="34" viewBox="0 0 24 26" fill="currentColor" className="text-neon-teal">
          <rect x="12" y="0" width="10" height="9" />
          <rect x="14" y="2" width="2" height="2" fill="#000" />
          <rect x="12" y="9" width="6" height="2" />
          <rect x="10" y="11" width="6" height="2" />
          <rect x="8" y="13" width="8" height="2" />
          <rect x="6" y="15" width="10" height="2" />
          <rect x="4" y="17" width="12" height="2" />
          <rect x="2" y="19" width="14" height="2" />
          <rect x="0" y="21" width="16" height="2" />
          <rect x="4" y="23" width="2" height="3" />
          <rect x="10" y="23" width="2" height="3" />
          {/* tail */}
          <rect x="0" y="15" width="2" height="6" />
          <rect x="2" y="13" width="2" height="6" />
          <rect x="4" y="11" width="2" height="6" />
          {/* arms */}
          <rect x="16" y="11" width="3" height="2" />
          <rect x="17" y="13" width="2" height="2" />
        </svg>
      </div>

      {/* Cactus */}
      <div className="absolute bottom-2 left-0 cactus-anim">
        <svg width="20" height="32" viewBox="0 0 14 24" fill="currentColor" className="text-neon-teal">
          <rect x="5" y="0" width="4" height="24" />
          <rect x="0" y="6" width="3" height="10" />
          <rect x="1" y="14" width="4" height="2" />
          <rect x="11" y="4" width="3" height="10" />
          <rect x="9" y="12" width="4" height="2" />
        </svg>
      </div>

      {/* Bird */}
      <div className="absolute bottom-12 left-0 bird-anim">
        <svg width="28" height="22" viewBox="0 0 20 16" fill="currentColor" className="text-neon-teal">
          <rect x="8" y="6" width="6" height="4" />
          <rect x="14" y="4" width="6" height="2" />
          <rect x="18" y="6" width="2" height="2" />
          <rect x="4" y="8" width="4" height="2" />
          <rect x="0" y="10" width="4" height="2" />
          <rect x="10" y="0" width="2" height="6" />
          <rect x="12" y="2" width="2" height="6" />
        </svg>
      </div>
    </div>
  );
}
