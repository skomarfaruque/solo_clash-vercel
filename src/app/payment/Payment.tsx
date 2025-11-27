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
  const [subscriptionId, setSubscriptionId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
    finalAmount: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const vat = 5;

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
      setSubscriptionId(parsedSubscription.id || "");
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
    const amountInCents = Math.round(
      Number(appliedCoupon ? appliedCoupon.finalAmount : totalPayablePrice) *
        100
    );
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: subscriptionName,
        amount: amountInCents,
        userId: userId,
        userEmail: userEmail,
        subscriptionId: subscriptionId,
      }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  const totalPayablePrice = (
    Number(monthlyPrice) +
    (Number(monthlyPrice) * vat) / 100
  ).toFixed(2);

  const handleApplyCoupon = async () => {
    if (!promoCode.trim()) {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
      return;
    }

    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      const params = new URLSearchParams({
        couponCode: promoCode,
        orderAmount: monthlyPrice,
      });

      const response = await fetch(
        `${baseUrl}/stripe-payment-public/coupons-validation?${params}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.valid) {
        // Coupon is valid
        const discountAmount = Number(monthlyPrice) - Number(data.finalAmount);
        setAppliedCoupon({
          code: data.couponCodeApplied || promoCode,
          discount: discountAmount,
          finalAmount: Number(data.finalAmount),
        });
        setPromoCode("");
      } else {
        // Coupon is invalid
        setShowErrorToast(true);
        setTimeout(() => setShowErrorToast(false), 3000);
      }
    } catch (error) {
      console.error("Error validating coupon:", error);
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
    } finally {
      setLoading(false);
    }
  };
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
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
                className="mt-1 w-5 h-5 accent-orange-500 rounded cursor-pointer bg-neutral-700 border border-orange-500 transition hover:bg-neutral-600"
              />
              <span className="text-left">{t("rebillAgreementCheckbox1")}</span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                className="mt-1 w-5 h-5 accent-orange-500 rounded cursor-pointer bg-neutral-700 border border-orange-500 transition hover:bg-neutral-600"
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
            {appliedCoupon && (
              <div className="flex justify-between text-green-400">
                <span>Coupon ({appliedCoupon.code})</span>
                <span>-${appliedCoupon.discount.toFixed(2)}</span>
              </div>
            )}
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
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={loading}
                  className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,250,250,0.06)] rounded-[12px] px-3 py-2 text-sm text-white placeholder-gray-500 disabled:opacity-50"
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={loading || !!appliedCoupon}
                  className="bg-[rgba(251,120,45,0.1)] rounded-[12px] hover:bg-orange-500 px-4 py-2 text-sm font-medium text-[#FB782D] hover:text-white hover:opacity-80 transition hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Validating..."
                    : appliedCoupon
                    ? "Applied ✓"
                    : t("applyButton")}
                </button>
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
              className="mt-1 w-5 h-5 accent-orange-500 rounded cursor-pointer bg-neutral-700 border border-orange-500 transition hover:bg-neutral-600"
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
              label={`Pay USD $${
                appliedCoupon
                  ? appliedCoupon.finalAmount.toFixed(2)
                  : totalPayablePrice
              }`}
              textStyle="font-medium text-base"
              onClick={handleCheckout}
              isDisabled={!(checked1 && checked2 && checked3) || !userId}
            />
          </div>
        </div>
      </div>

      {/* Error Toast Notification */}
      {showErrorToast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#ef4444",
            border: "2px solid #dc2626",
            borderRadius: "8px",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 99999,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "white" }}>
            Invalid coupon
          </span>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
