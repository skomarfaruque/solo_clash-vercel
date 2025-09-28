import { useTranslations } from "next-intl";

import HowItWorksCard from "./HowItWorksCard";
import HomeButton from "../HomeButton";
import Heading from "../common/Heading";

export default function HowItWorksSection() {
  const t = useTranslations("accountPage.howItWorksSection");
  const steps = t.raw("steps");
  const images = [
    "how_works_bg_one.svg",
    "how_works_bg_two.svg",
    "how_works_bg_three.svg",
  ];
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Top Badge */}
        <HomeButton>{t("badge")}</HomeButton>
        {/* Heading */}
        <Heading>{t("heading")}</Heading>
        {/* How It Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl mt-[56px]">
          {Array.isArray(steps) &&
            steps.map((step, idx) => (
              <HowItWorksCard
                key={idx}
                backgroundImage={images[idx]}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
