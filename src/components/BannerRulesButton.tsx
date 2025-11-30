import React from "react";

interface BannerRulesButtonProps {
  text: string;
  onClick?: () => void;
}

const BannerRulesButton: React.FC<BannerRulesButtonProps> = ({ text,  onClick }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 px-0 py-0 border-none bg-transparent cursor-pointer"
      style={{ width: 205, height: 52 }}
      onClick={onClick}
    >
      <span className="relative flex items-center justify-center w-full h-full">
        <svg
          width="205"
          height="52"
          viewBox="0 0 205 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="205" height="52" rx="26" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="204"
            height="51"
            rx="25.5"
            stroke="white"
            strokeOpacity="0.06"
          />
          {/* CSV Arrow SVG Path */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M169.47 19.4701C169.611 19.3296 169.801 19.2507 170 19.2507C170.199 19.2507 170.389 19.3296 170.53 19.4701L176.53 25.4701C176.67 25.6107 176.749 25.8013 176.749 26.0001C176.749 26.1988 176.67 26.3894 176.53 26.5301L170.53 32.5301C170.461 32.6038 170.379 32.6629 170.287 32.7039C170.195 32.7448 170.095 32.7669 169.995 32.7687C169.894 32.7704 169.794 32.7519 169.7 32.7142C169.607 32.6765 169.522 32.6203 169.451 32.5491C169.38 32.4779 169.324 32.3931 169.286 32.2997C169.248 32.2063 169.23 32.1063 169.231 32.0056C169.233 31.9048 169.255 31.8055 169.296 31.7135C169.337 31.6215 169.396 31.5387 169.47 31.4701L174.19 26.7501H160C159.801 26.7501 159.61 26.6711 159.47 26.5304C159.329 26.3898 159.25 26.199 159.25 26.0001C159.25 25.8012 159.329 25.6104 159.47 25.4697C159.61 25.3291 159.801 25.2501 160 25.2501H174.19L169.47 20.5301C169.33 20.3894 169.251 20.1988 169.251 20.0001C169.251 19.8013 169.33 19.6107 169.47 19.4701Z"
            fill="#030303"
          />
        </svg>
        <span
          className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center"
          style={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#030303",
          }}
        >
          {text}
        </span>
      </span>
    </button>
  );
};

export default BannerRulesButton;
