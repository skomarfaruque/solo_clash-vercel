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
  readonly isDisabled?: boolean;
}

export default function SvgButton2({
  label = "Submit →",
  textStyle = "",
  onClick,
  fullWidth = false,
  iconSrc = "",
  radius = 12,
  padding = "",
  isDisabled = false,
}: SvgButton2Props) {
  const width = fullWidth ? "100%" : "fit-content";
  const paddingValue = padding || "70px";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`relative h-[50px] flex items-center justify-center text-black font-semibold text-xl focus:outline-none transition-transform duration-200 ${
        isDisabled
          ? "cursor-not-allowed opacity-50"
          : "hover:scale-105 cursor-pointer"
      } overflow-hidden`}
      style={{
        background: isDisabled
          ? "linear-gradient(94.79deg, #888888 0.24%, #999999 100.24%)"
          : "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: radius,
        width: width,
        padding: `0 ${paddingValue}`,
        boxShadow: isDisabled
          ? "none"
          : "-1px 3px 21px 0px rgba(255, 163, 98, 0.5)",
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
