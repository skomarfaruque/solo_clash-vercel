import SpinDetailsCard from "./SpinDetailsCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SpinDetailsSection() {
  const t = useTranslations();
  interface SpinDetailsCardData {
    title: string;
    tags: string[];
  }
  const cards: SpinDetailsCardData[] = t.raw("spinDetailsSection.cards");
  const iconPaths = [
    "/icons/spins/spin_details_1.png",
    "/icons/spins/spin_details_2.png",
    "/icons/spins/spin_details_3.png",
    "/icons/spins/spin_details_4.png",
    "/icons/spins/spin_details_5.png",
    "/icons/spins/spin_details_6.png",
  ];

  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div
        className="max-w-[780px] mx-auto p-6"
        style={{
          background: "#2BB6DD",
          border: "1px solid rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/icons/clash_shop/dollar.png"
              alt="Coins Icon"
              className="w-12 h-12 mr-4"
              width={50}
              height={50}
            />
            <div className="text-left">
              <h3
                className="text-white text-lg font-semibold"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "150%",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Total coins
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  fontWeight: 800,
                  fontSize: "23px",
                  lineHeight: "130%",
                  color: "#FFFFFF",
                }}
              >
                1250
              </p>
            </div>
          </div>
          <div
            className="text-white font-bold text-2xl"
            style={{
              padding: "14px 28px",
              gap: "8px",
              width: "156px",
              height: "45px",
              left: "601px",
              top: "calc(50% - 45px/2 + 0.5px)",
              background: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "100px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#030303",
            }}
          >
            1250
          </div>
        </div>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {}
        {cards.map((card: SpinDetailsCardData, idx: number) => (
          <SpinDetailsCard
            key={idx}
            iconPath={iconPaths[idx]}
            title={card.title}
            tags={card.tags}
          />
        ))}
      </div>
    </section>
  );
}
