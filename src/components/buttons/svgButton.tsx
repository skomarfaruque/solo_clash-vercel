import React from "react";

interface SvgButtonProps {
  label?: string;
}

export default function SvgButton({ label = "Submit →" }: SvgButtonProps) {
  return (
    <button className="focus:outline-none w-full max-w-[546px]">
      <svg
        viewBox="0 0 546 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto hover:scale-105 transition-transform duration-200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Base rectangle */}
        <rect
          y="0.837891"
          width="546"
          height="60"
          rx="12"
          fill="url(#paint0_linear_2318_20357)"
        />
        <rect
          x="0.5"
          y="1.33789"
          width="545"
          height="59"
          rx="11.5"
          stroke="#E1E1E1"
          strokeOpacity="0.3"
        />

        {/* Dynamic text centered */}
        <text
          x="50%"
          y="33" // roughly same as original path text y-position
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize="18"
          fontFamily="Arial, sans-serif"
          fontWeight="600"
        >
          {label}
        </text>

        {/* Glow effects */}
        <g opacity="0.5" filter="url(#filter0_f_2318_20357)">
          <ellipse
            cx="207.85"
            cy="57.3379"
            rx="127.85"
            ry="5.5"
            fill="#FFA362"
          />
        </g>
        <g
          style={{ mixBlendMode: "hard-light" }}
          opacity="0.5"
          filter="url(#filter1_f_2318_20357)"
        >
          <ellipse
            cx="281.031"
            cy="55.8379"
            rx="149.97"
            ry="6"
            fill="#FFA362"
          />
        </g>
        <g
          style={{ mixBlendMode: "plus-lighter" }}
          opacity="0.5"
          filter="url(#filter2_f_2318_20357)"
        >
          <path
            d="M430.999 57.6216C430.999 58.5965 428.862 55.8562 278.775 57.6216C151.527 55.8562 153.664 58.5965 153.664 57.6216C153.664 56.6466 149.82 54.3316 262.928 49.8379C362.247 51.523 430.999 56.6466 430.999 57.6216Z"
            fill="#FFA362"
          />
        </g>

        {/* Definitions */}
        <defs>
          <filter
            id="filter0_f_2318_20357"
            x="56"
            y="27.8379"
            width="303.7"
            height="59"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter
            id="filter1_f_2318_20357"
            x="87.0605"
            y="5.83789"
            width="387.94"
            height="100"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter
            id="filter2_f_2318_20357"
            x="146.648"
            y="42.8379"
            width="291.351"
            height="22"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <linearGradient
            id="paint0_linear_2318_20357"
            x1="1.43684"
            y1="0.837891"
            x2="375.618"
            y2="286.164"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F37E2C" />
            <stop offset="1" stopColor="#FFA362" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
