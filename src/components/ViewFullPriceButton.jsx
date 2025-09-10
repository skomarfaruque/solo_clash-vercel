import PropTypes from "prop-types";

export default function ViewFullPriceButton({ text = "View full pricing" }) {
  return (
    <button className="relative inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
      <svg
        width="206"
        height="52"
        viewBox="0 0 206 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto"
      >
        <foreignObject
          x="-22.0986"
          y="-22.5986"
          width="250.197"
          height="97.1973"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(11.3px)",
              clipPath: "url(#bgblur_0_2143_1237_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g data-figma-bg-blur-radius="22.5986">
          <rect
            x="0.5"
            width="205"
            height="52"
            rx="26"
            fill="white"
            fillOpacity="0.1"
          />
          <rect
            x="1"
            y="0.5"
            width="204"
            height="51"
            rx="25.5"
            stroke="white"
            strokeOpacity="0.06"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            className="fill-white text-sm font-normal"
          >
            {text}
          </text>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M171.97 19.4701C172.111 19.3296 172.301 19.2507 172.5 19.2507C172.699 19.2507 172.889 19.3296 173.03 19.4701L179.03 25.4701C179.17 25.6107 179.249 25.8013 179.249 26.0001C179.249 26.1988 179.17 26.3894 179.03 26.5301L173.03 32.5301C172.961 32.6038 172.879 32.6629 172.787 32.7039C172.695 32.7448 172.595 32.7669 172.495 32.7687C172.394 32.7704 172.294 32.7519 172.2 32.7142C172.107 32.6765 172.022 32.6203 171.951 32.5491C171.88 32.4779 171.824 32.3931 171.786 32.2997C171.748 32.2063 171.73 32.1063 171.731 32.0056C171.733 31.9048 171.755 31.8055 171.796 31.7135C171.837 31.6215 171.896 31.5387 171.97 31.4701L176.69 26.7501H162.5C162.301 26.7501 162.11 26.6711 161.97 26.5304C161.829 26.3898 161.75 26.199 161.75 26.0001C161.75 25.8012 161.829 25.6104 161.97 25.4697C162.11 25.3291 162.301 25.2501 162.5 25.2501H176.69L171.97 20.5301C171.83 20.3894 171.751 20.1988 171.751 20.0001C171.751 19.8013 171.83 19.6107 171.97 19.4701Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath
            id="bgblur_0_2143_1237_clip_path"
            transform="translate(22.0986 22.5986)"
          >
            <rect x="0.5" width="205" height="52" rx="26" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

ViewFullPriceButton.propTypes = {
  text: PropTypes.string,
};
