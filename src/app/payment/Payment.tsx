"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function PaymentSection() {
  const t = useTranslations("chooseAccount");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <section className="justify-center text-center min-h-screen px-4 sm:px-0 items-center flex py-20">
      {/* Content container */}

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-8">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-left">
            Trading Combine
          </h2>

          <div className="space-y-8 text-sm text-gray-300 mb-6 border-b border-t border-[rgba(255,255,255,0.1)] pt-8 pb-8">
            <div className="flex justify-between">
              <span>Account Type</span>
              <span className="font-medium text-white">Elite Challenge</span>
            </div>
            <div className="flex justify-between">
              <span>Account Size</span>
              <span className="font-medium text-white">$100,000</span>
            </div>
            <div className="flex justify-between">
              <span>Platform</span>
              <span className="font-medium text-white">Volumetrica</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-8 mt-8 text-left">
            Trading Combine Account Rebill Agreement
          </h3>

          <div className="bg-neutral-800 rounded-xl p-4 text-sm text-gray-300 mb-5 max-h-[187px] overflow-y-auto">
            <p className="text-white font-medium mb-2 text-left">
              Membership Rebilling:
            </p>
            <p className="text-left">
              Your Solo Clash Trading Combine® membership operates on a 30-day
              cycle. Due to this, Rebill dates may vary each month. Your account
              will remain active with the membership renewing each month, until
              you earn funding or cancel the account. If you exceed our 1 Rule,
              the Maximum Loss Limit, your account will remain active but
              ineligible for funding and will still be subject to rebilling
              after the 30-day cycle.
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
              <span className="text-left">
                I’ve read the Rebill Agreement and understand my membership
                starts immediately and renews every 30 days until I cancel or
                earn funding.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                className="mt-1 w-4 h-4 accent-orange-500"
              />
              <span className="text-left">
                I acknowledge that unwarranted or excessive chargebacks or
                disputes may prompt a compliance review, potentially leading to
                account restrictions, including the loss of trading privileges.
              </span>
            </label>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-left">
            Coupons and Payment
          </h2>

          <div className="space-y-8 text-sm border-t border-[rgba(255,255,255,0.1)] pt-8">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>USD $45</span>
            </div>
            <div className="flex justify-between">
              <span>VAT:</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>USD $60.22</span>
            </div>
          </div>

          <div className="flex gap-2 mb-6 text-left">
            <div>
              <label className="text-sm block mb-1 text-[#B7B7B7]">
                Have a promo code?
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                />
                <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-lg text-sm font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm block mb-1">Card Number</label>
              <input
                id="card-number"
                type="text"
                placeholder="00 00 00 00 00 00 00 00"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm block mb-1">Expiration Date</label>
                <input
                  id="expiration-date"
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="text-sm block mb-1">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3">Billing Address</h3>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Street Address"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="City"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
              />
              <select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-gray-400">
                <option>Choose a country</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="State / Region"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Area Code"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm mb-6">
            <input
              type="checkbox"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
              className="mt-1 w-4 h-4 accent-orange-500"
            />
            <span>
              I understand this is a monthly recurring membership and that I
              will be billed automatically each month using the method selected
              above, regardless of if I reset this account & until I cancel the
              membership.
            </span>
          </label>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-black font-semibold shadow-lg hover:brightness-110 transition-all">
            PAY $60.00
          </button>
        </div>
      </div>
    </section>
  );
}
