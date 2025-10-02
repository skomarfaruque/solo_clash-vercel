import React from "react";
import Image from "next/image";

interface SvgButton2Props {
  readonly label?: string;
  readonly textStyle?: string;
  readonly fullWidth?: boolean;
}

export default function SvgButton2({
  label = "Submit →",
  textStyle = "",
  fullWidth = false,
}: SvgButton2Props) {
  const width = fullWidth ? "100%" : "fit-content";
  return (
    <button
      className={`relative h-[60px] flex items-center justify-center text-black font-semibold text-xl focus:outline-none transition-transform duration-200 hover:scale-105 overflow-hidden cursor-pointer px-[70px]`}
      style={{
        background: "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: 12,
        width: width,
      }}
    >
      <span className={`z-10 ${textStyle}`}>{label}</span>
      <Image
        src="/faltu.png"
        alt="icon"
        className="absolute left-1/2 bottom-[-20px] w-full max-w-[200px] object-contain z-0"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
        width={200}
        height={60}
      />
    </button>
  );
}
