import PropTypes from "prop-types";

export default function SubscriptionButton({ text = "Get Started" }) {
  return (
    <button className="relative inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 w-full">
      <svg
        width="360"
        height="60"
        viewBox="0 0 360 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <foreignObject
          x="-22.5986"
          y="-22.5986"
          width="405.197"
          height="105.197"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(11.3px)",
              clipPath: "url(#bgblur_0_2143_1124_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g data-figma-bg-blur-radius="22.5986">
          <rect
            width="360"
            height="60"
            rx="30"
            fill="white"
            fillOpacity="0.04"
          />
          <rect
            x="0.5"
            y="0.5"
            width="359"
            height="59"
            rx="29.5"
            stroke="white"
            strokeOpacity="0.06"
          />
        </g>
        <text
          x="180"
          y="36"
          textAnchor="middle"
          className="fill-white text-base font-semibold"
        >
          {text}
        </text>
        <defs>
          <clipPath
            id="bgblur_0_2143_1124_clip_path"
            transform="translate(22.5986 22.5986)"
          >
            <rect width="360" height="60" rx="30" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

SubscriptionButton.propTypes = {
  text: PropTypes.string,
};
