import SpinDetailsCard from "./SpinDetailsCard";
import { useTranslations } from "next-intl";

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
      <div className="max-w-[1320px] mx-auto">
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
      </div>
    </section>
  );
}
