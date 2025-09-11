interface BannerButtonProps {
  text: string;
}

export default function BannerButton({ text }: BannerButtonProps) {
  return (
    <button className="relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150">
      <svg
        width="339"
        height="117"
        viewBox="0 0 339 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="27"
          width="284"
          height="60"
          rx="30"
          fill="url(#paint0_linear_2143_2727)"
        />
        <rect
          x="27.5"
          y="0.5"
          width="283"
          height="59"
          rx="29.5"
          stroke="#E1E1E1"
          strokeOpacity="0.3"
        />

        {/* Dynamic text */}
        <text
          x="169"
          y="32"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize="16"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {text}
        </text>

        {/* Arrow - keeping as is */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M269.47 23.4698C269.611 23.3294 269.801 23.2505 270 23.2505C270.199 23.2505 270.389 23.3294 270.53 23.4698L276.53 29.4698C276.67 29.6105 276.749 29.8011 276.749 29.9998C276.749 30.1986 276.67 30.3892 276.53 30.5298L270.53 36.5298C270.461 36.6035 270.379 36.6626 270.287 36.7036C270.195 36.7446 270.095 36.7666 269.995 36.7684C269.894 36.7702 269.794 36.7517 269.7 36.714C269.607 36.6762 269.522 36.6201 269.451 36.5489C269.38 36.4776 269.324 36.3928 269.286 36.2994C269.248 36.206 269.23 36.106 269.231 36.0053C269.233 35.9046 269.255 35.8053 269.296 35.7133C269.337 35.6213 269.396 35.5385 269.47 35.4698L274.19 30.7498H260C259.801 30.7498 259.61 30.6708 259.47 30.5302C259.329 30.3895 259.25 30.1987 259.25 29.9998C259.25 29.8009 259.329 29.6102 259.47 29.4695C259.61 29.3288 259.801 29.2498 260 29.2498H274.19L269.47 24.5298C269.33 24.3892 269.251 24.1986 269.251 23.9998C269.251 23.8011 269.33 23.6105 269.47 23.4698Z"
          fill="black"
        />

        {/* Light effects - keeping as is */}
        <g opacity="0.5" filter="url(#filter0_f_2143_2727)">
          <ellipse
            cx="168.922"
            cy="59.0526"
            rx="106.813"
            ry="6.67026"
            fill="#FFA362"
          />
        </g>
        <g
          style={{ mixBlendMode: "hard-light" }}
          opacity="0.5"
          filter="url(#filter1_f_2143_2727)"
        >
          <ellipse
            cx="169.369"
            cy="60.2654"
            rx="125.369"
            ry="12.7341"
            fill="#FFA362"
          />
        </g>
        <g
          style={{ mixBlendMode: "plus-lighter" }}
          opacity="0.5"
          filter="url(#filter2_f_2143_2727)"
        >
          <path
            d="M248.866 57.6412C248.866 58.7557 247.652 55.6233 162.42 57.6412C90.1572 55.6233 91.3707 58.7557 91.3707 57.6412C91.3707 56.5268 89.1878 53.8806 153.42 48.7441C209.822 50.6703 248.866 56.5268 248.866 57.6412Z"
            fill="#FFA362"
          />
        </g>

        {/* SVG definitions */}
        <defs>
          <filter
            id="filter0_f_2143_2727"
            x="38.1091"
            y="28.3823"
            width="261.626"
            height="61.3403"
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
              result="effect1_foregroundBlur_2143_2727"
            />
          </filter>
          <filter
            id="filter1_f_2143_2727"
            x="0.00012207"
            y="3.53125"
            width="338.739"
            height="113.468"
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
              result="effect1_foregroundBlur_2143_2727"
            />
          </filter>
          <filter
            id="filter2_f_2143_2727"
            x="84.3618"
            y="41.7441"
            width="171.504"
            height="23.1445"
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
              result="effect1_foregroundBlur_2143_2727"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2143_2727"
            x1="27.7474"
            y1="6.98492e-08"
            x2="293.706"
            y2="105.487"
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
