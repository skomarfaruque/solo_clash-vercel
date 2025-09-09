// components/StartNowButton.jsx
export default function StartNowButton({ children }) {
  return (
    <button className="relative inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
      <svg
        width="268"
        height="111"
        viewBox="0 0 268 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="38.5"
          width="190"
          height="55"
          rx="27.5"
          fill="url(#paint0_linear_2143_863)"
        />
        <rect
          x="39"
          y="0.5"
          width="189"
          height="54"
          rx="27"
          stroke="#E1E1E1"
          strokeOpacity="0.3"
        />
        <text
          x="134"
          y="32"
          textAnchor="middle"
          className="fill-black text-lg font-semibold"
        >
          {children}
        </text>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M186.47 20.97C186.611 20.8296 186.801 20.7507 187 20.7507C187.199 20.7507 187.389 20.8296 187.53 20.97L193.53 26.97C193.67 27.1106 193.749 27.3013 193.749 27.5C193.749 27.6988 193.67 27.8894 193.53 28.03L187.53 34.03C187.461 34.1037 187.379 34.1628 187.287 34.2038C187.195 34.2448 187.095 34.2668 186.995 34.2686C186.894 34.2704 186.794 34.2519 186.7 34.2141C186.607 34.1764 186.522 34.1203 186.451 34.049C186.38 33.9778 186.324 33.893 186.286 33.7996C186.248 33.7062 186.23 33.6062 186.231 33.5055C186.233 33.4048 186.255 33.3055 186.296 33.2135C186.337 33.1215 186.396 33.0387 186.47 32.97L191.19 28.25H177C176.801 28.25 176.61 28.171 176.47 28.0303C176.329 27.8897 176.25 27.6989 176.25 27.5C176.25 27.3011 176.329 27.1103 176.47 26.9697C176.61 26.829 176.801 26.75 177 26.75H191.19L186.47 22.03C186.33 21.8894 186.251 21.6988 186.251 21.5C186.251 21.3013 186.33 21.1106 186.47 20.97Z"
          fill="black"
        />
        <g opacity="0.5" filter="url(#filter0_f_2143_863)">
          <ellipse
            cx="127.177"
            cy="55.5"
            rx="76.6787"
            ry="5.5"
            fill="#FFA362"
          />
        </g>
        <g
          style={{ mixBlendMode: "hard-light" }}
          opacity="0.5"
          filter="url(#filter1_f_2143_863)"
        >
          <ellipse cx="134" cy="56.5" rx="90" ry="10.5" fill="#FFA362" />
        </g>
        <g
          style={{ mixBlendMode: "plus-lighter" }}
          opacity="0.5"
          filter="url(#filter2_f_2143_863)"
        >
          <path
            d="M190.069 54.3361C190.069 55.2551 189.197 52.6723 128.011 54.3361C76.1352 52.6723 77.0063 55.2551 77.0063 54.3361C77.0063 53.4172 75.4393 51.2353 121.55 47C162.04 48.5882 190.069 53.4172 190.069 54.3361Z"
            fill="#FFA362"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2143_863"
            x="26.4982"
            y="26"
            width="201.357"
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
              result="effect1_foregroundBlur_2143_863"
            />
          </filter>
          <filter
            id="filter1_f_2143_863"
            x="0"
            y="2"
            width="268"
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
              result="effect1_foregroundBlur_2143_863"
            />
          </filter>
          <filter
            id="filter2_f_2143_863"
            x="70"
            y="40"
            width="127.069"
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
              result="effect1_foregroundBlur_2143_863"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2143_863"
            x1="39"
            y1="6.40284e-08"
            x2="229"
            y2="55"
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
