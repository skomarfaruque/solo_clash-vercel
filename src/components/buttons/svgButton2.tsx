import React from "react";

interface SvgButton2Props {
  readonly label?: string;
}

export default function SvgButton2({ label = "Submit →" }: SvgButton2Props) {
  return (
    <button
      className="relative w-full max-w-[546px] h-[60px] flex items-center justify-center text-black font-semibold text-xl focus:outline-none transition-transform duration-200 hover:scale-105 overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: 32,
      }}
    >
      <span className="z-10">{label}</span>
      <img
        src="/faltu.png"
        alt="icon"
        className="absolute left-1/2 bottom-[-39px] object-contain z-0"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}
