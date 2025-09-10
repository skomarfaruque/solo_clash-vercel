import PropTypes from "prop-types";

export default function SubscriptionActiveButton({ text = "Start challenge" }) {
  return (
    <button className="relative inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 w-full">
      <svg
        width="404"
        height="113"
        viewBox="0 0 404 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <rect
          x="20"
          width="360"
          height="60"
          rx="30"
          fill="url(#paint0_linear_2143_1203)"
        />
        <rect
          x="20.5"
          y="0.5"
          width="359"
          height="59"
          rx="29.5"
          stroke="#E1E1E1"
          strokeOpacity="0.3"
        />
        <text
          x="200"
          y="36"
          textAnchor="middle"
          className="fill-black text-base font-semibold"
        >
          {text}
        </text>
        <g opacity="0.5" filter="url(#filter0_f_2143_1203)">
          <ellipse cx="198.425" cy="57.5" rx="137.17" ry="5.5" fill="#FFA362" />
        </g>
        <g
          style={{ mixBlendMode: "hard-light" }}
          opacity="0.5"
          filter="url(#filter1_f_2143_1203)"
        >
          <ellipse cx="199" cy="58.5" rx="161" ry="10.5" fill="#FFA362" />
        </g>
        <g
          style={{ mixBlendMode: "plus-lighter" }}
          opacity="0.5"
          filter="url(#filter2_f_2143_1203)"
        >
          <path
            d="M301.089 56.3361C301.089 57.2551 299.531 54.6723 190.075 56.3361C97.2753 54.6723 98.8336 57.2551 98.8336 56.3361C98.8336 55.4172 96.0304 53.2353 178.518 49C250.95 50.5882 301.089 55.4172 301.089 56.3361Z"
            fill="#FFA362"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2143_1203"
            x="37.2554"
            y="28"
            width="322.339"
            height="59"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_2143_1203"
            />
          </filter>
          <filter
            id="filter1_f_2143_1203"
            x="-6"
            y="4"
            width="410"
            height="109"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="22"
              result="effect1_foregroundBlur_2143_1203"
            />
          </filter>
          <filter
            id="filter2_f_2143_1203"
            x="91.8223"
            y="42"
            width="216.267"
            height="21.54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.5"
              result="effect1_foregroundBlur_2143_1203"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2143_1203"
            x1="20.9474"
            y1="6.98492e-08"
            x2="332.388"
            y2="156.583"
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

SubscriptionActiveButton.propTypes = {
  text: PropTypes.string,
};
