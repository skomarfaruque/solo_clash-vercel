"use client";

import { useTranslations } from "next-intl";

import Heading from "../common/Heading";
import CurrencySelector from "../CurrencySelector";
import { useEffect, useState } from "react";
import SubscriptionSectionCardNew from "./SubscriptionSectionCardNew";

interface Subscription {
  id: number;
  program_id: number;
  program_name: string;
  subscription_name: string;
  subscription_value: number;
  monthly_price: number;
  profit_target: number;
  maximum_position: number;
  maximum_loss_limit: number;
  amount: number;
}

interface SubscriptionsSectionNewProps {
  subscriptions?: Subscription[];
}

export default function SubscriptionsSectionNew({
  subscriptions: initialSubscriptions = [],
}: SubscriptionsSectionNewProps = {}) {
  const t = useTranslations("accountPage.subscriptionsSection");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [subscriptions, setSubscriptions] =
    useState<Subscription[]>(initialSubscriptions);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        console.log("Fetching subscriptions from client...");

        const response = await fetch(
          "https://solo-clash-backend.vercel.app/api/v1/subscriptions",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
          }
        );

        console.log("Response status:", response.status);

        const data = await response.json();

        console.log("Response data:", data);

        if (data.success && data.data?.items) {
          console.log("Subscriptions found:", data.data.items.length);
          setSubscriptions(data.data.items);
        } else {
          console.log("No subscriptions in response");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  useEffect(() => {
    console.log("Current subscriptions:", subscriptions);
    // Check if a currency is already set in cookies
    const match = document.cookie.match(new RegExp("(^| )currency=([^;]+)"));
    if (match) {
      setSelectedCurrency(match[2]);
    }
  }, [subscriptions]);
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
          {/* Label Buttons - Left Side (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col gap-4 justify-start flex-shrink-0 mt-[130px]">
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
            {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
              subscriptions.map((subscription) => (
                <SubscriptionSectionCardNew
                  key={subscription.id}
                  selectedCurrency={selectedCurrency}
                  subscription={subscription}
                />
              ))
            ) : (
              <p className="text-gray-400 col-span-full">
                No subscriptions available
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
