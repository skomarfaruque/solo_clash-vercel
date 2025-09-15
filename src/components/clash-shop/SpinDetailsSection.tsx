import HomeButton from "../HomeButton";
import SpinDetailsCard from "./SpinDetailsCard";

const spinDetailsCards = [
  {
    iconPath: "/icons/spins/spin_details_1.png",
    title: "Evaluation Period",
    description:
      "A minimum of three (3) trading days is required to complete the challenge. There is no maximum time limit to finish the evaluation.",
  },
  {
    iconPath: "/icons/spins/spin_details_2.png",
    title: "End-of-Day-Drawdown",
    description:
      "The account is subject to an end-of-day drawdown, not a trailing drawdown.",
  },
  {
    iconPath: "/icons/spins/spin_details_3.png",
    title: "Profit Consistency",
    description:
      "A 30% consistency rule applies only during the evaluation phase. Traders must follow 30% of consistency to reach the profit target without breaching the maximum drawdown.",
  },
  {
    iconPath: "/icons/spins/spin_details_4.png",
    title: "Daily Loss Limit",
    description:
      "Exceeding the daily loss limit results in an immediate hard breach",
  },
  {
    iconPath: "/icons/spins/spin_details_5.png",
    title: "Reset Policy",
    description:
      "A reset fee of $139 applies after a breach during the evaluation phase.",
  },
  {
    iconPath: "/icons/spins/spin_details_6.png",
    title: "Payout Limit",
    description: "8% payout cap per withdrawal request.",
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
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
