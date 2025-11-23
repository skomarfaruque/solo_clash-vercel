"use client";

import SvgButton2 from "@/components/buttons/svgButton2";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSection() {
  const t = useTranslations("payment");
  const router = useRouter();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [subscriptionName, setSubscriptionName] = useState("N/A");
  const [subscriptionValue, setSubscriptionValue] = useState("N/A");
  const [monthlyPrice, setMonthlyPrice] = useState("N/A");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const vat = 25;

  useEffect(() => {
    const savedSubscription = localStorage.getItem("selectedSubscription");
    if (savedSubscription) {
      const parsedSubscription = JSON.parse(savedSubscription);
      setSubscriptionName(parsedSubscription.subscription_name || "N/A");
      setSubscriptionValue(
        parsedSubscription.subscription_value
          ? `$${parsedSubscription.subscription_value.toLocaleString()}`
          : "N/A"
      );
      setMonthlyPrice(parsedSubscription?.monthly_price || "N/A");
    }

    // Get logged in user info
    const adminUserData = localStorage.getItem("adminUser");
    if (adminUserData) {
      try {
        const adminUser = JSON.parse(adminUserData);
        if (adminUser.email) setUserEmail(adminUser.email);
        if (adminUser.id) setUserId(adminUser.id);
      } catch (e) {
        console.error("Failed to parse adminUser:", e);
      }
    } else {
      // Redirect to login if not authenticated
      router.push("/login?redirect=/payment");
    }
  }, [router]);
  const handleCheckout = async () => {
    const amountInCents = Math.round(Number(totalPayablePrice) * 100);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: subscriptionName,
        amount: amountInCents,
        userId: userId,
        userEmail: userEmail,
      }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  const totalPayablePrice = (
    Number(monthlyPrice) +
    (Number(monthlyPrice) * vat) / 100
  ).toFixed(2);
  return (
    <section className="justify-center text-center min-h-screen px-4 sm:px-0 items-center flex py-30">
      {/* Content container */}

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-8">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-left">
            {t("tradingCombine")}
          </h2>

          <div className="space-y-8 text-gray-300 mb-6 border-b border-t border-[rgba(255,255,255,0.1)] pt-8 pb-8 text-lg">
            <div className="flex justify-between">
              <span className="text-[#B7B7B7]">{t("accountType")}</span>
              <span className="font-medium text-white">{subscriptionName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#B7B7B7]">{t("accountSize")}</span>
              <span className="font-medium text-white">
                ${Number(subscriptionValue.replace(/[^0-9.-]+/g, ""))}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#B7B7B7]">{t("platform")}</span>
              <span className="font-medium text-white">Volumetrica</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-8 mt-8 text-left">
            {t("rebillAgreementTitle")}
          </h3>

          <div className="bg-neutral-800 rounded-xl p-4 text-sm text-gray-300 mb-5 max-h-[187px] overflow-y-auto">
            <p className="text-white font-medium mb-2 text-left">
              {t("membershipRebilling")}
            </p>
            <p className="text-left text-[#B7B7B7]">
              {t("membershipRebillingDetails")}
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
                className="mt-1 w-4 h-4 accent-orange-500"
              />
              <span className="text-left">{t("rebillAgreementCheckbox1")}</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                className="mt-1 w-4 h-4 accent-orange-500"
              />
              <span className="text-left">{t("rebillAgreementCheckbox2")}</span>
            </label>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-left">
            {t("couponsAndPayment")}
          </h2>

          <div className="space-y-8 text-lg border-t border-[rgba(255,255,255,0.1)] pt-8">
            <div className="flex justify-between">
              <span>{t("subtotal")}</span>
              <span>${monthlyPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("vat")}</span>
              <span>{vat}%</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>{t("total")}</span>
              <span>${totalPayablePrice}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-6 text-left">
            <div className="flex flex-col w-full">
              <label className="text-sm block mb-1 text-[#B7B7B7]">
                {t("promoCodeLabel")}
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={t("promoCodePlaceholder")}
                  className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
                />
                <button className="bg-[rgba(251,120,45,0.1)] rounded-[12px] hover:bg-orange-500 px-4 py-2 text-sm font-medium text-[#FB782D] hover:text-white hover:opacity-80 transition hover:cursor-pointer">
                  {t("applyButton")}
                </button>
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
              className="mt-1 w-4 h-4 accent-orange-500"
            />
            <span className="text-left">{t("rebillAgreementCheckbox3")}</span>
          </label>

          {/* <div className="space-y-4 mb-6 text-left text-[16px]">
            <div>
              <label className="text-sm block mb-1">
                {t("cardNumberLabel")}
              </label>
              <input
                id="card-number"
                type="text"
                placeholder={t("cardNumberPlaceholder")}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm block mb-1">
                  {t("expirationDateLabel")}
                </label>
                <input
                  id="expiration-date"
                  type="text"
                  placeholder={t("expirationDatePlaceholder")}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="text-sm block mb-1">{t("cvvLabel")}</label>
                <input
                  id="cvv"
                  type="text"
                  placeholder={t("cvvPlaceholder")}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3 text-left">
            {t("billingAddress")}
          </h3>

          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder={t("streetAddressPlaceholder")}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={t("cityPlaceholder")}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
              />
              <select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-gray-400">
                <option>{t("countryPlaceholder")}</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={t("statePlaceholder")}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
              />
              <input
                type="text"
                placeholder={t("areaCodePlaceholder")}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
              className="mt-1 w-4 h-4 accent-orange-500"
            />
            <span className="text-left">
              {t("recurringMembershipCheckbox")}
            </span>
          </label> */}
          <div className="flex items-center mt-[88px]">
            <SvgButton2
              label={`Pay USD $${totalPayablePrice}`}
              textStyle="font-medium text-base"
              onClick={handleCheckout}
              isDisabled={!(checked1 && checked2 && checked3) || !userId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
