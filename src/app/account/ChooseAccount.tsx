"use client";

import SvgButton2 from "@/components/buttons/svgButton2";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginSection() {
  const t = useTranslations("chooseAccount");
  const router = useRouter();
  const [platform, setPlatform] = useState("VolSys");
  const [accountSize, setAccountSize] = useState("$100,000");
  const [profitSplit, setProfitSplit] = useState("90/10");

  return (
    <section
      className="justify-center text-center min-h-screen px-4 sm:px-0"
      style={{
        backgroundImage: "url('/payment_page_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Content container */}
      <div
        className="z-10 max-w-4xl mx-auto mt-[200px] shadow-2xl p-8 w-[810px] h-[706px]"
        style={{
          background:
            "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
          backdropFilter: "blur(17px)",
          borderRadius: "24px",
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-center text-2xl font-semibold mb-8">
              {t("chooseYourAccount")}
            </h2>

            {/* Platforms */}
            <div className="flex flex-col mb-8 text-left gap-6">
              <h3 className="font-medium">{t("platforms")}</h3>
              <div className="flex gap-3">
                {["VolSys", "VolBook"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPlatform(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer ${
                      platform === item
                        ? "bg-white text-black"
                        : "bg-neutral-800 text-gray-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Size */}
            <div className="flex flex-col mb-8 text-left gap-6">
              <h3 className="font-medium">{t("accountSize")}</h3>
              <div className="flex gap-3">
                {["$50,000", "$100,000", "$150,000"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setAccountSize(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer ${
                      accountSize === item
                        ? "bg-white text-black"
                        : "bg-neutral-800 text-gray-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Profit Split */}
            <div className="flex flex-col mb-8 text-left gap-6">
              <h3 className="font-medium">{t("profitSplit")}</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setProfitSplit("90/10")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    profitSplit === "90/10"
                      ? "bg-white text-black"
                      : "bg-neutral-800 text-gray-400"
                  }`}
                >
                  90/10
                </button>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <SvgButton2
              label={t("continue")}
              textStyle="font-medium text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
