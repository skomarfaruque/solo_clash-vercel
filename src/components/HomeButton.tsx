"use client";

import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function GradientButton({
  children,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center px-6 py-2 rounded-full text-[#FB782D] font-inter uppercase tracking-wide hover:cursor-pointer"
      style={{ backgroundColor: "#060301" }}
    >
      {/* Background with gradient border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 178 42"
        fill="none"
        preserveAspectRatio="none"
      >
        <rect x="1" y="0.5" width="176" height="41" rx="20.5" fill="#060301" />
        <rect
          x="1"
          y="0.5"
          width="176"
          height="41"
          rx="20.5"
          stroke="#23130C"
        />
        <rect
          x="1"
          y="0.5"
          width="176"
          height="41"
          rx="20.5"
          stroke="url(#paint0_radial_2174_998)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2174_998"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(266.246 98 -46.7197 152.541 28.7541 1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB782D" />
            <stop offset="0.2" stopColor="#EB5515" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Right arrow icon */}
      <svg
        className="ml-2 relative z-10"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FB782D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
