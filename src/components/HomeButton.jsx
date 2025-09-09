// components/HomeButton.jsx
import PropTypes from "prop-types";

export default function HomeButton({ children }) {
  return (
    <button className="relative inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
      <svg
        width="194"
        height="43"
        viewBox="0 0 194 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="192" height="41" rx="20.5" fill="#060301" />
        <rect x="1" y="1" width="192" height="41" rx="20.5" stroke="#23130C" />
        <rect
          x="1"
          y="1"
          width="192"
          height="41"
          rx="20.5"
          stroke="url(#paint0_radial_2143_897)"
        />
        <text
          x="97"
          y="28"
          textAnchor="middle"
          className="fill-[#FB782D] text-sm font-normal"
        >
          {children}
        </text>
        <path
          d="M161.502 21.5001H173.502M173.502 21.5001L169.002 17.0001M173.502 21.5001L169.002 26.0001"
          stroke="#FB782D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2143_897"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(161.776 40 -19.4665 84.4685 31.2459 1.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB782D" />
            <stop offset="0.199872" stopColor="#EB5515" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
}

HomeButton.propTypes = {
  children: PropTypes.node.isRequired,
};
