// create a new wheel component for affiliates page

"use client";
import { useState } from "react";
import Image from "next/image";

export default function NewWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 1440; // At least 4 full rotations
    setRotation(rotation + randomRotation);

    setTimeout(() => {
      setIsSpinning(false);
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
        <Image
          src="/wheel_main.png"
          alt="Wheel"
          width={355}
          height={355}
          className="absolute"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
          }}
        />
      </div>

      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="px-8 py-3 bg-gradient-to-r from-[#F37E2C] to-[#FFA362] text-black font-semibold text-lg rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
}
