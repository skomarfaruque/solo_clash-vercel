"use client";

import { useState } from "react";

interface WheelSegment {
  id: number;
  label: string;
  color: string;
  textColor: string;
}

const wheelSegments: WheelSegment[] = [
  { id: 1, label: "$100", color: "#DC2626", textColor: "#FEF3C7" }, // Red
  { id: 2, label: "$0", color: "#EA580C", textColor: "#FEF3C7" }, // Orange
  { id: 3, label: "ZERO", color: "#F59E0B", textColor: "#7C2D12" }, // Yellow
  { id: 4, label: "2$", color: "#DC2626", textColor: "#FEF3C7" }, // Red
  { id: 5, label: "50$", color: "#EA580C", textColor: "#FEF3C7" }, // Orange
  { id: 6, label: "$1", color: "#7C2D12", textColor: "#FEF3C7" }, // Dark brown
  { id: 7, label: "JACKPOT", color: "#1E3A8A", textColor: "#FEF3C7" }, // Navy blue
  { id: 8, label: "20$", color: "#7C2D12", textColor: "#FEF3C7" }, // Dark brown
  { id: 9, label: "$5", color: "#DC2626", textColor: "#FEF3C7" }, // Red
  { id: 10, label: "15$", color: "#1E3A8A", textColor: "#FEF3C7" }, // Navy blue
];

export default function SpinningWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<WheelSegment | null>(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWinner(null);

    // Generate random rotation (multiple full rotations + random angle)
    const spins = 5 + Math.random() * 5; // 5-10 full rotations
    const finalAngle = Math.random() * 360;
    const totalRotation = rotation + spins * 360 + finalAngle;

    setRotation(totalRotation);

    // Calculate winner based on final angle
    const segmentAngle = 360 / wheelSegments.length;
    const normalizedAngle = (360 - (finalAngle % 360)) % 360;
    const winnerIndex = Math.floor(normalizedAngle / segmentAngle);

    setTimeout(() => {
      setWinner(wheelSegments[winnerIndex]);
      setIsSpinning(false);
    }, 4000);
  };

  const resetWheel = () => {
    setRotation(0);
    setWinner(null);
    setIsSpinning(false);
  };
  console.log("winner", winner);
  return (
    <div className="flex">
      <div className="relative mb-8">
        {/* Wheel Container */}
        <div className="relative">
          {/* Outer Golden Ring with Diamonds */}
          <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 p-4 shadow-2xl">
            {/* Diamond decorations around the rim */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (360 / 24) * i;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-red-600 transform rotate-45"
                  style={{
                    top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: `translate(-50%, -50%) rotate(45deg)`,
                  }}
                />
              );
            })}

            {/* Inner Wheel */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-gradient-to-br from-amber-200 to-yellow-300"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning
                  ? "transform 4s cubic-bezier(0.23, 1, 0.32, 1)"
                  : "none",
              }}
            >
              {wheelSegments.map((segment, index) => {
                const angle = (360 / wheelSegments.length) * index;
                const nextAngle = (360 / wheelSegments.length) * (index + 1);

                return (
                  <div
                    key={segment.id}
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${segment.color}, ${segment.color}dd)`,
                      clipPath: `polygon(50% 50%, ${
                        50 + 50 * Math.cos(((angle - 90) * Math.PI) / 180)
                      }% ${
                        50 + 50 * Math.sin(((angle - 90) * Math.PI) / 180)
                      }%, ${
                        50 + 50 * Math.cos(((nextAngle - 90) * Math.PI) / 180)
                      }% ${
                        50 + 50 * Math.sin(((nextAngle - 90) * Math.PI) / 180)
                      }%)`,
                    }}
                  >
                    {/* Segment Content */}
                    <div
                      className="absolute flex items-center justify-center text-center font-bold"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${
                          angle + 360 / wheelSegments.length / 2
                        }deg) translateY(-80px)`,
                        width: "80px",
                        height: "40px",
                        color: segment.textColor,
                        fontSize: segment.label.length > 3 ? "14px" : "18px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {segment.label}
                    </div>
                  </div>
                );
              })}

              {/* Center Golden Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center border-4 border-amber-700">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-800 to-yellow-900 rounded-full shadow-inner"></div>
              </div>
            </div>
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-20">
              <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-amber-600 drop-shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-lg"
        >
          {isSpinning ? "Spinning..." : "Spin the Wheel!"}
        </button>
      </div>

      {/* Instructions */}
    </div>
  );
}
