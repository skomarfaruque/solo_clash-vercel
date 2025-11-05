import SpinningWheel2 from "../affiliates/SpinnerWheel2";
import { useTranslations } from "next-intl";
import Heading from "../common/Heading";
import NewWheel from "../affiliates/newwheel";
export default function HeroSection() {
  const t = useTranslations();
  return (
    <section className="justify-center text-center px-6 lg:px-20">
      <div className="relative z-10 max-w-4xl mx-auto pt-[217px]">
        <Heading className="mb-4">{t("clashShopHero.heading")}</Heading>

        <p
          className="text-center font-playfair"
          style={{
            fontWeight: 700,
            fontSize: "55px",
            lineHeight: "110%",
            textAlign: "center",
            letterSpacing: "0.005em",
            background:
              "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("clashShopHero.subheading")}
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
          {t("clashShopHero.description")}
        </p>
        {/* <SpinningWheel2 /> */}
        <div className="mt-[79px]">
          <NewWheel />
        </div>
      </div>
    </section>
  );
}
