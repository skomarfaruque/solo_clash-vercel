"use client";

import SvgButton2 from "@/components/buttons/svgButton2";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChooseAccount() {
  const t = useTranslations("chooseAccount");
  const router = useRouter();
  const [platform, setPlatform] = useState("VolSys");
  const [accountSize, setAccountSize] = useState("$100,000");
  const [profitSplit, setProfitSplit] = useState("90/10");

  return (
    <section
      className="justify-center text-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 items-center flex py-20"
      style={{
        backgroundImage: "url('/payment_page_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Content container */}
      <div
        className="z-10 mx-auto mt-20 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto"
        style={{
          background:
            "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
          backdropFilter: "blur(17px)",
          borderRadius: "24px",
        }}
      >
        <div className="flex flex-col justify-between h-full gap-8">
          <div>
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              {t("chooseYourAccount")}
            </h2>

            {/* Platforms */}
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("platforms")}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {["VolSys", "VolBook"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPlatform(item)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:cursor-pointer ${
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
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("accountSize")}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {["$50,000", "$100,000", "$150,000"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setAccountSize(item)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:cursor-pointer ${
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
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("profitSplit")}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setProfitSplit("90/10")}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium ${
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
              textStyle="font-medium text-sm sm:text-base"
              onClick={() => {
                router.push("/payment");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
