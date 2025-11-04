// create a new wheel component for affiliates page

"use client";
import { useState } from "react";
import Image from "next/image";

export default function NewWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  // Define 6 wheel segments with dummy values
  const segments = [
    "50 Clash Coins",
    "Free Tournament Entry",
    "10% Discount Code",
    "100 Bonus Coins",
    "50k Account",
    "Try Again",
  ];

  const segmentAngle = 360 / segments.length; // 60 degrees per segment

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 1440; // At least 4 full rotations
    const newRotation = rotation + randomRotation;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);

      // Calculate which segment the arrow is pointing at
      // The arrow points at the top (0 degrees, 12 o'clock position)
      // Normalize the total rotation to 0-360 range
      const normalizedRotation = newRotation % 360;

      // The wheel rotates, so we need to find what's at the top position
      // Each segment is 60 degrees (360 / 6)
      // Segment 0 spans from 270 to 330 degrees (top-left)
      // Segment 1 spans from 330 to 30 degrees (top and right)
      // Segment 2 spans from 30 to 90 degrees (right)
      // Segment 3 spans from 90 to 150 degrees (bottom-right)
      // Segment 4 spans from 150 to 210 degrees (bottom)
      // Segment 5 spans from 210 to 270 degrees (left)

      // The arrow points at 0 degrees (top), so we calculate which segment is at that position
      const adjustedRotation = (360 - normalizedRotation) % 360;
      const segmentIndex =
        Math.floor(adjustedRotation / segmentAngle) % segments.length;
      const winnerValue = segments[segmentIndex];

      setWinner(winnerValue);
      console.log("🎯 Winner:", winnerValue);
      console.log("Segment Index:", segmentIndex);
      console.log("Final Rotation:", normalizedRotation.toFixed(2), "degrees");
      console.log("Adjusted Angle:", adjustedRotation.toFixed(2), "degrees");
    }, 4000); // 4 seconds for the spin animation
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Arrow indicator */}
      <Image
        src="/new_wheel_arrow.png"
        alt="Arrow"
        width={58}
        height={58}
        className="mb-[-87px] z-10"
      />

      <div
        className="relative flex items-center justify-center"
        style={{
          width: "407px",
          height: "407px",
          backgroundImage: "url(/wheel_bg_2.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Wheel with SVG segments */}
        <svg
          width="355"
          height="355"
          viewBox="0 0 355 355"
          className="absolute"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
          }}
        >
          {segments.map((segment, index) => {
            const colors = [
              "#2E9CFF",
              "#960095",
              "#FFE62E",
              "#E74C49",
              "#FF82B9",
              "#72F775",
            ];
            const icons = [
              "/icons/spins/medium/dollar.png",
              "/icons/spins/medium/cup.png",
              "/icons/spins/medium/ticket.png",
              "/icons/spins/medium/king.png",
              "/icons/spins/medium/percentage.png",
              "/icons/spins/medium/gift.png",
            ];
            const startAngle =
              ((index * 360) / segments.length - 90) * (Math.PI / 180);
            const endAngle =
              (((index + 1) * 360) / segments.length - 90) * (Math.PI / 180);
            const radius = 177.5;
            const centerX = 177.5;
            const centerY = 177.5;

            const x1 = centerX + radius * Math.cos(startAngle);
            const y1 = centerY + radius * Math.sin(startAngle);
            const x2 = centerX + radius * Math.cos(endAngle);
            const y2 = centerY + radius * Math.sin(endAngle);

            const largeArcFlag = 0;

            const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            // Calculate icon position
            const iconAngle =
              (((index + 0.5) * 360) / segments.length - 90) * (Math.PI / 180);
            const iconRadius = radius * 0.65;
            const iconX = centerX + iconRadius * Math.cos(iconAngle);
            const iconY = centerY + iconRadius * Math.sin(iconAngle);
            const iconRotation = ((index + 0.5) * 360) / segments.length;

            return (
              <g key={index}>
                <path
                  d={pathData}
                  fill={colors[index]}
                  stroke="#ffffff"
                  strokeWidth="4"
                />
                <image
                  href={icons[index]}
                  x={iconX - 25}
                  y={iconY - 25}
                  width="50"
                  height="50"
                  transform={`rotate(${iconRotation}, ${iconX}, ${iconY})`}
                />
              </g>
            );
          })}

          {/* Center circle */}
          <circle cx="177.5" cy="177.5" r="40" fill="#1E90FF" />
          <circle
            cx="177.5"
            cy="177.5"
            r="40"
            fill="none"
            stroke="#FFF"
            strokeWidth="3"
          />
          <text
            x="177.5"
            y="177.5"
            fill="#FFF"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          ></text>
        </svg>
      </div>

      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="px-8 py-3 bg-gradient-to-r from-[#F37E2C] to-[#FFA362] text-black font-semibold text-lg rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {/* Display winner */}
      {winner && (
        <div className="text-center p-4 bg-[#0B0B0C] rounded-lg border border-[#F37E2C]">
          <p className="text-sm text-gray-400">You Won:</p>
          <p className="text-xl font-bold text-[#F37E2C]">{winner}</p>
        </div>
      )}
    </div>
  );
}
