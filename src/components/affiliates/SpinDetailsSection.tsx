import HomeButton from "../HomeButton";
import SpinDetailsCard from "./SpinDetailsCard";

const spinDetailsCards = [
  {
    iconPath: "/icons/spins/spin_details_1.png",
    title: "Evaluation Period",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_2.png",
    title: "End-of-Day-Drawdown",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_3.png",
    title: "Profit Consistency",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_4.png",
    title: "Daily Loss Limit",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_5.png",
    title: "Reset Policy",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_6.png",
    title: "Payout Limit",
    tags: ["Legendary"],
  },
];

export default function SpinDetailsSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spinDetailsCards.map((card, idx) => (
            <SpinDetailsCard
              key={idx}
              iconPath={card.iconPath}
              title={card.title}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
