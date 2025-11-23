"use client";

import { useTranslations } from "next-intl";
import SvgButton2 from "../buttons/svgButton2";

export default function ChallengeSection() {
  const t = useTranslations("accountPage.challengeSection");

  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto">
        <h2
          className="font-inter font-bold text-white"
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "110%",
            textAlign: "center",
            letterSpacing: "0.005em",
          }}
        >
          {t("heading")}
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl">{t("description")}</p>
        <div>
          <SvgButton2
            label={t("button")}
            fullWidth
            textStyle="font-normal"
            radius={50}
            iconSrc="/arrow_right.png"
          />
        </div>
      </div>
    </section>
  );
}
