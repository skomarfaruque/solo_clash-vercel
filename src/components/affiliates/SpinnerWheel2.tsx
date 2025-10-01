"use client";
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

// RouletteComponent.jsx
// Single-file React component (Tailwind CSS required in host app)
// - Drop into a Next.js / CRA project and import where needed.

export default function SpinningWheel2() {
  const SOFT_COLORS = [
    "#f87b8c",
    "#ffb366",
    "#ffe066",
    "#7ee6c8",
    "#7ecbff",
    "#6fa8ff",
    "#a68cff",
    "#ffb3c6",
    "#ffd6a5",
    "#b7e4c7",
  ];

  // Casino-style dollar values for wheel
  const DEFAULT_VALUES = [
    "ZERO",
    "$1",
    "$2",
    "$5",
    "$10",
    "$20",
    "$50",
    "$100",
    "JACKPOT",
  ];

  // Set winning values as a range among them (e.g., $10 and above)
  const WINNING_VALUES = ["$1", "$20"];

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [items, setItems] = useState(() =>
    DEFAULT_VALUES.map((val, i) => ({
      text: val,
      color: SOFT_COLORS[i % SOFT_COLORS.length],
    }))
  );
  const [spinning, setSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [result, setResult] = useState("");
  const [newItemText, setNewItemText] = useState("");

  function generateRandomColor(existingColors: string[] = []) {
    for (let attempt = 0; attempt < 24; attempt++) {
      const h = Math.floor(Math.random() * 360);
      const s = Math.floor(Math.random() * 18) + 72;
      const l = Math.floor(Math.random() * 16) + 60;
      const color = `hsl(${h},${s}%,${l}%)`;
      if (!existingColors.includes(color)) return color;
    }
    return `hsl(${Math.floor(Math.random() * 360)},78%,68%)`;
  }

  function getFittedFontSize(
    text: string,
    maxWidth: number,
    baseFontSize: number = 16
  ): number {
    if (!text) return baseFontSize;
    const span: HTMLSpanElement = document.createElement("span");
    span.style.position = "absolute";
    span.style.visibility = "hidden";
    span.style.fontFamily = "'Outfit', system-ui, sans-serif";
    span.style.fontWeight = "700";
    span.style.fontSize = baseFontSize + "px";
    span.textContent = text;
    document.body.appendChild(span);
    let width: number = span.offsetWidth;
    let fontSize: number = baseFontSize;
    while (width > maxWidth && fontSize > 9) {
      fontSize -= 1;
      span.style.fontSize = fontSize + "px";
      width = span.offsetWidth;
    }
    document.body.removeChild(span);
    return fontSize;
  }

  function drawRoulette(rotation = currentRotation) {
    const svg = svgRef.current;
    if (!svg) return;
    const width = 320,
      height = 320,
      cx = width / 2,
      cy = height / 2,
      r = 140;
    const n = items.length;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (n === 0) return;

    for (let i = 0; i < n; i++) {
      const startAngle = (2 * Math.PI * i) / n - Math.PI / 2;
      const endAngle = (2 * Math.PI * (i + 1)) / n - Math.PI / 2;
      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      const x2 = cx + r * Math.cos(endAngle);
      const y2 = cy + r * Math.sin(endAngle);
      const largeArc =
        (endAngle - startAngle + 2 * Math.PI) % (2 * Math.PI) > Math.PI ? 1 : 0;
      const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", pathData);
      path.setAttribute(
        "fill",
        items[i].color || SOFT_COLORS[i % SOFT_COLORS.length]
      );
      path.setAttribute("stroke", "#fff");
      path.setAttribute("stroke-width", "0.8");
      svg.appendChild(path);

      const angle = (startAngle + endAngle) / 2;
      const tx = cx + r * 0.65 * Math.cos(angle);
      const ty = cy + r * 0.65 * Math.sin(angle);
      const arcLen = 2 * Math.PI * r * (1 / n) * 0.65 * 0.85;
      const textVal = items[i].text || "";
      const fontSize = getFittedFontSize(textVal, arcLen, 16);

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", String(tx));
      text.setAttribute("y", String(ty));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("font-size", String(fontSize));
      text.setAttribute("fill", "#fff");
      text.setAttribute("pointer-events", "none");
      text.setAttribute("font-family", "'Outfit', system-ui, sans-serif");
      text.setAttribute("font-weight", "700");
      text.setAttribute(
        "transform",
        `rotate(${(angle * 180) / Math.PI},${tx},${ty})`
      );
      text.textContent = textVal;
      svg.appendChild(text);
    }

    svg.style.transform = `rotate(${rotation}deg)`;
  }

  useEffect(() => {
    drawRoulette();
    const onResize = () => drawRoulette();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) svg.style.transform = `rotate(${currentRotation}deg)`;
  }, [currentRotation]);

  function addItem() {
    const val = newItemText.trim();
    if (!val) return;
    const existingColors = items.map((it) => it.color);
    const color = generateRandomColor(existingColors);
    setItems((prev) => [...prev, { text: val, color }]);
    setNewItemText("");
    setResult("");
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
    setResult("");
  }

  function easeOutQuint(t: number) {
    return 1 - Math.pow(1 - t, 5);
  }

  function spinRoulette() {
    if (spinning || items.length === 0) return;
    setSpinning(true);
    setResult("");
    const n = items.length;
    const degPerItem = 360 / n;
    const fullSpins = Math.floor(Math.random() * 2) + 6;

    // Force final result to be one of the winning values
    const winningText =
      WINNING_VALUES[Math.floor(Math.random() * WINNING_VALUES.length)];
    const winningIndex = items.findIndex((it) => it.text === winningText);
    const targetDeg = (n - winningIndex) * degPerItem - degPerItem / 2;

    const finalDeg = fullSpins * 360 + targetDeg;
    const duration = 4200;
    const startTime = performance.now();
    const initialRotation = currentRotation % 360;
    const totalChange = finalDeg - initialRotation;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuint(progress);
      const angle = initialRotation + totalChange * eased;
      setCurrentRotation(angle);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        setCurrentRotation(finalDeg % 360);
        setResult(winningText);

        drawRoulette(finalDeg);
      }
    }
    requestAnimationFrame(animate);
  }

  return (
    <section
      className="shadow-md p-6 flex-1 flex flex-col items-center mt-6"
      style={{
        backgroundImage: "url(/wheel_bg.svg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative" style={{ width: 320, height: 320 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-80 h-80 rounded-full bg-white shadow-lg"
            style={{ width: 320, height: 320 }}
          ></div>
        </div>

        <svg
          ref={svgRef}
          width={320}
          height={320}
          viewBox="0 0 320 320"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            transform: `rotate(${currentRotation}deg)`,
            transition: spinning ? "transform 0ms" : undefined,
          }}
        />

        <div
          className="absolute left-1/2 -top-3 transform -translate-x-1/2 z-20"
          style={{ width: 44, height: 36 }}
        >
          <svg width="44" height="36" viewBox="0 0 44 36">
            <polygon points="0,0 44,0 22,36" fill="#ffb366" />
          </svg>
        </div>
      </div>

      <button
        className="mt-4 px-10 py-3 rounded-lg font-bold text-white shadow-md bg-gradient-to-r from-blue-500 to-sky-400 hover:scale-105 transition-transform disabled:opacity-60 hover:cursor-pointer"
        onClick={spinRoulette}
        disabled={spinning || items.length === 0}
      >
        Spin
      </button>

      {/* <div className="result mt-4 inline-block rounded-lg px-6 py-3 bg-white shadow-lg text-green-600 font-bold">
        {result || "\u00A0"}
      </div> */}
    </section>
  );
}
