"use client";

import { useTranslations } from "next-intl";

import Heading from "../common/Heading";
import CurrencySelector from "../CurrencySelector";
import { useEffect, useState } from "react";
import SubscriptionSectionCardNew from "./SubscriptionSectionCardNew";

export default function SubscriptionsSectionNew() {
  const t = useTranslations("accountPage.subscriptionsSection");
  const plans = t.raw("plans");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  useEffect(() => {
    // Check if a currency is already set in cookies
    const match = document.cookie.match(new RegExp("(^| )currency=([^;]+)"));
    if (match) {
      setSelectedCurrency(match[2]);
    }
  }, []);
  const handleCurrencyChange = (currency: string) => {
    console.log(`Currency changed to: ${currency}`);
    // Implement any additional logic needed when currency changes
    document.cookie = `currency=${currency}; path=/; max-age=31536000`;
    setSelectedCurrency(currency);
  };

  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <Heading>{t("heading")}</Heading>

        {/* Description */}
        <p className="font-normal text-base sm:text-lg leading-6 text-center mb-8 text-[#B7B7B7] max-w-full sm:max-w-2xl">
          {t("description")}
        </p>
        {/* Currency Selector */}
        <CurrencySelector
          className="mb-8"
          selectedCurrency={selectedCurrency}
          onCurrencySelect={(currency) => handleCurrencyChange(currency)}
        />

        {/* Labels and Subscriptions Container */}
        <div className="flex gap-8 w-full max-w-7xl">
          {/* Label Buttons - Left Side */}
          <div className="flex flex-col gap-4 justify-start flex-shrink-0 mt-[130px]">
            {[
              "Monthly Price:",
              "Profit Target:",
              "Maximum Position Size:",
              "Maximum Loss Limit:",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center rounded-[12px] h-[48px] px-3 py-3"
                style={{
                  background:
                    "linear-gradient(306.21deg, #01090B 39.33%, #07252D 99.95%)",
                  backdropFilter: "blur(17px)",
                  boxSizing: "border-box",
                }}
              >
                <span className="text-sm font-medium text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Subscriptions Grid - Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {Array.isArray(plans) &&
              plans.map((plan) => (
                <SubscriptionSectionCardNew
                  key={plan.title}
                  selectedCurrency={selectedCurrency}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
