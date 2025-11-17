// create a new wheel component for affiliates page

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface WheelItem {
  id: number;
  item_name: string;
  value: string;
  Image_Icon_url: string;
  will_select: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Fetch base URL from environment variables

export default function NewWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [wheelItems, setWheelItems] = useState<WheelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [segments, setSegments] = useState<string[]>([]);
  const [allowedWinners, setAllowedWinners] = useState<number[]>([]);

  const segmentAngle = segments.length > 0 ? 360 / segments.length : 60;

  // Method to save wheel history to API
  const saveWheelHistory = async (
    wheelItemId: number,
    wheelItemValue: string
  ) => {
    try {
      const token = localStorage.getItem("adminToken");
      const user = localStorage.getItem("adminUser");
      const userId = user ? JSON.parse(user).id : null;

      const payload = {
        environment: navigator.userAgent,
        user_id: userId,
        wheel_item_id: wheelItemId,
        wheel_item_value: wheelItemValue,
        spining_datetime: new Date().toISOString(),
      };

      const response = await fetch(`${BASE_URL}/wheel-history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save wheel history");
      }

      const data = await response.json();
      console.log("Wheel history saved:", data);
    } catch (error) {
      console.error("Error saving wheel history:", error);
    }
  };

  // Method to calculate rotation to land on a specific segment
  const getRotationForSegment = (
    targetSegmentIndex: number,
    currentRotation: number
  ) => {
    // The detection logic:
    // adjustedRotation = (360 - normalizedRotation) % 360
    // segmentIndex = floor(adjustedRotation / 60)
    //
    // For segment 0: adjustedRotation should be 0-60
    // For segment 1: adjustedRotation should be 60-120
    // For segment 2: adjustedRotation should be 120-180
    // etc.

    // We want adjustedRotation to be in the middle of the segment range
    const targetAdjustedRotation =
      targetSegmentIndex * segmentAngle + segmentAngle / 2;

    // Since: adjustedRotation = (360 - normalizedRotation) % 360
    // Therefore: normalizedRotation = (360 - adjustedRotation) % 360
    let targetNormalizedRotation = (360 - targetAdjustedRotation) % 360;
    if (targetNormalizedRotation === 0) targetNormalizedRotation = 360;

    // Calculate how much we need to rotate from current position
    const currentNormalized = currentRotation % 360;

    // Add multiple full rotations for visual effect (at least 4 full spins = 1440 degrees)
    const baseRotations = 1440; // 4 full rotations

    // Calculate the rotation needed: we want to end at targetNormalizedRotation
    const rotationNeeded =
      baseRotations +
      ((targetNormalizedRotation - currentNormalized + 360) % 360);

    return rotationNeeded;
  };

  const spinWheel = (predefinedWinner?: number) => {
    if (isSpinning) return;

    setIsSpinning(true);

    let randomRotation;
    if (
      predefinedWinner !== undefined &&
      predefinedWinner >= 0 &&
      predefinedWinner < segments.length
    ) {
      // Use predefined winner
      randomRotation = getRotationForSegment(predefinedWinner, rotation);
    } else {
      // Randomly select a winner from the allowedWinners array
      const randomIndex = Math.floor(Math.random() * allowedWinners.length);
      const randomWinner = allowedWinners[randomIndex];

      randomRotation = getRotationForSegment(randomWinner, rotation);
    }

    const newRotation = rotation + randomRotation;
    console.log(
      "🔄 Total rotation:",
      newRotation,
      "Additional rotation:",
      randomRotation
    );
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

      // Call API to save wheel history
      if (wheelItems.length > 0 && wheelItems[segmentIndex]) {
        const winnerItem = wheelItems[segmentIndex];
        // Use the wheel item's value
        saveWheelHistory(winnerItem.id, winnerItem.value);
      }
    }, 4000); // 4 seconds for the spin animation
  };

  useEffect(() => {
    const fetchWheelItems = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("adminToken");
        const response = await fetch(`${BASE_URL}/wheel-items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wheel items");
        }

        const { data } = await response.json();
        setWheelItems(data.items);

        // Extract segments from API response
        const segmentsArray = data.items.map((item: WheelItem) => item.value);
        setSegments(segmentsArray);

        // Extract allowed winners based on will_select
        const allowedWinnerIndices = data.items
          .map((item: WheelItem, index: number) =>
            item.will_select ? index : -1
          )
          .filter((index: number) => index !== -1);
        setAllowedWinners(allowedWinnerIndices);
      } catch (error) {
        console.error("Error fetching wheel items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWheelItems();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Arrow indicator */}
      {!loading && (
        <Image
          src="/new_wheel_arrow.png"
          alt="Arrow"
          width={58}
          height={58}
          className="mb-[-87px] z-10"
        />
      )}

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
        {loading ? (
          // Skeleton loader
          <div
            className="absolute animate-pulse"
            style={{
              width: "355px",
              height: "355px",
              backgroundColor: "#2a2a2a",
              borderRadius: "50%",
              border: "4px solid #3a3a3a",
            }}
          />
        ) : (
          // Wheel with SVG segments
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
                (((index + 0.5) * 360) / segments.length - 90) *
                (Math.PI / 180);
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
        )}
      </div>

      <button
        onClick={() => spinWheel()} // Random winner
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

      {/* Wheel Items List - Fetched from /wheel-items API */}
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Wheel Items</h2>
        <ul className="bg-[#1E1E2E] rounded-lg shadow-md divide-y divide-[#2C2C3E]">
          {wheelItems.length === 0 ? (
            <li className="p-4 text-center text-gray-400">
              No items found or still loading...
            </li>
          ) : (
            wheelItems.map((item, index) => (
              <li key={index} className="p-4 flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.item_name}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
