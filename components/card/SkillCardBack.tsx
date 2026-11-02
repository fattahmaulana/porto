"use client";

import React from "react";

interface SkillCardBackProps {
  id: number;
}

const skillItems: Record<
  number,
  {
    line1: string;
    line2: string;
    size1: string;
    size2: string;
  }
> = {
  1: {
    line1: "WEB",
    line2: "DEVELOPMENT",
    size1: "text-[clamp(2.4rem,7.5vw,3.2rem)]",
    size2: "text-[clamp(1.45rem,4.6vw,1.95rem)]",
  },
  2: {
    line1: "3D",
    line2: "DESIGN",
    size1: "text-[clamp(2.8rem,9vw,3.8rem)]",
    size2: "text-[clamp(2.2rem,7vw,3.0rem)]",
  },
  3: {
    line1: "UI/UX",
    line2: "DESIGN",
    size1: "text-[clamp(2.4rem,7.5vw,3.2rem)]",
    size2: "text-[clamp(2.2rem,7vw,3.0rem)]",
  },
  4: {
    line1: "GRAPHIC",
    line2: "DESIGN",
    size1: "text-[clamp(2.0rem,6.2vw,2.7rem)]",
    size2: "text-[clamp(2.2rem,7vw,3.0rem)]",
  },
};

export const SkillCardBack: React.FC<SkillCardBackProps> = ({ id }) => {
  const item = skillItems[id] || {
    line1: "SKILL",
    line2: "DESIGN",
    size1: "text-[2.5rem]",
    size2: "text-[2.2rem]",
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#0d0d0f] overflow-hidden select-none">
      {/* Background Radial Gradient - Analog Vignette */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #222226 0%, #101013 65%, #050507 100%)",
        }}
      />

      {/* SVG Analog Film Grain Noise */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Vignette Shadow di sekeliling tepi kartu */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.92)] z-10" />

      {/* Konten Teks Skill: Font Upheaval dengan Cahaya Glow Berpendar */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-5 text-center leading-[1.05] tracking-wider">
        <span
          className={`font-skill ${item.size1} text-[#f0f0f2] uppercase tracking-[0.06em] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.75)] drop-shadow-[0_0_24px_rgba(255,255,255,0.35)] animate-glow`}
        >
          {item.line1}
        </span>
        <span
          className={`font-skill ${item.size2} text-[#f0f0f2] uppercase tracking-[0.05em] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.75)] drop-shadow-[0_0_24px_rgba(255,255,255,0.35)] animate-glow mt-1`}
        >
          {item.line2}
        </span>
      </div>
    </div>
  );
};
