import React from "react";
import Image from "next/image";

interface SvgButton2Props {
  readonly label?: string;
  readonly textStyle?: string;
  readonly onClick?: () => void;
  readonly fullWidth?: boolean;
  readonly iconSrc?: string; // New prop for icon source
  readonly radius?: number;
  readonly padding?: string; // New prop for padding
}

export default function SvgButton2({
  label = "Submit →",
  textStyle = "",
  onClick,
  fullWidth = false,
  iconSrc = "",
  radius = 12,
  padding = "",
}: SvgButton2Props) {
  const width = fullWidth ? "100%" : "fit-content";
  const paddingValue = padding || "70px";

  return (
    <button
      onClick={onClick}
      className={`relative h-[50px] flex items-center justify-center text-black font-semibold text-xl focus:outline-none transition-transform duration-200 hover:scale-105 overflow-hidden cursor-pointer`}
      style={{
        background: "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: radius,
        width: width,
        padding: `0 ${paddingValue}`,
        boxShadow: "-1px 3px 21px 0px rgba(255, 163, 98, 0.5)", // <-- added shadow here
      }}
    >
      <span className={`z-10 ${textStyle} flex items-center gap-2`}>
        {label}
        {iconSrc && <Image src={iconSrc} alt="icon" width={20} height={20} />}
      </span>
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
