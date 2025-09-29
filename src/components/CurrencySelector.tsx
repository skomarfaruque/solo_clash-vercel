"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CurrencySelectorProps {
  readonly className?: string;
  readonly selectedCurrency: string;
  readonly onCurrencySelect: (currencyCode: string) => void;
}

export default function CurrencySelector({
  className,
  selectedCurrency,
  onCurrencySelect,
}: Readonly<CurrencySelectorProps>) {
  const t = useTranslations();

  const currencies = [
    { title: "EUR", code: "eur" },
    { title: "USD", code: "usd" },
    { title: "AUD", code: "aud" },
    { title: "GBP", code: "gbp" },
    { title: "XCD", code: "xcd" },
    { title: "XOF", code: "xof" },
    { title: "NZD", code: "nzd" },
    { title: "NOK", code: "nok" },
    { title: "XAF", code: "xaf" },
    { title: "ZAR", code: "zar" },
    { title: "XPF", code: "xpf" },
    { title: "CLP", code: "clp" },
    { title: "DKK", code: "dkk" },
    { title: "INR", code: "inr" },
    { title: "RUB", code: "rub" },
    { title: "TRY", code: "try" },
    { title: "DZD", code: "dzd" },
    { title: "MRU", code: "mru" },
    { title: "MAD", code: "mad" },
    { title: "ILS", code: "ils" },
    { title: "JOD", code: "jod" },
    { title: "BND", code: "bnd" },
    { title: "SGD", code: "sgd" },
    { title: "HKD", code: "hkd" },
    { title: "CHF", code: "chf" },
    { title: "ANG", code: "ang" },
    { title: "SHP", code: "shp" },
    { title: "FKP", code: "fkp" },
    { title: "CAD", code: "cad" },
    { title: "BRL", code: "brl" },
    { title: "CZK", code: "czk" },
    { title: "USDT", code: "usdt" },
    { title: "USDC", code: "usdc" },
    { title: "BTC", code: "btc" },
    { title: "ETH", code: "eth" },
    { title: "JPY", code: "jpy" },
    { title: "SEK", code: "sek" },
    { title: "CNH", code: "cnh" },
    { title: "COP", code: "cop" },
    { title: "HUF", code: "huf" },
    { title: "KRW", code: "krw" },
    { title: "MXN", code: "mxn" },
    { title: "TWD", code: "twd" },
  ];

  const [currOpen, setCurrOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCurrOpen(false);
      }
    };
    if (currOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [currOpen]);

  const selectedCurrObj =
    currencies.find((c) => c.code === selectedCurrency) || currencies[0];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setCurrOpen(!currOpen)}
        className="flex items-center gap-2 bg-neutral-900 h-[52px] px-4 py-1.5 rounded-full"
      >
        <Image
          src={`/flags/en.png`}
          alt={selectedCurrObj.title}
          width={26}
          height={26}
          className="rounded"
        />
        {selectedCurrObj.title}
        <span className="ml-1">
          <svg
            className="ml-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {currOpen && (
        <div className="absolute mt-2 w-32 bg-neutral-800 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                onCurrencySelect(curr.code);
                setCurrOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-neutral-700 ${
                selectedCurrency === curr.code ? "bg-neutral-700 font-bold" : ""
              }`}
            >
              {curr.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
