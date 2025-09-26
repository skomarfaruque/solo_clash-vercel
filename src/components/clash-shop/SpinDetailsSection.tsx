import SpinDetailsCard from "./SpinDetailsCard";
import { useTranslations } from "next-intl";

export default function SpinDetailsSection() {
  const t = useTranslations();
  type SpinDetailsCardType = {
    title: string;
    tags: string[];
  };

  const cards = t.raw("spinDetailsSection.cards") as SpinDetailsCardType[];
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
      <div>
        <div>
          {cards.map((card, idx: number) => (
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
