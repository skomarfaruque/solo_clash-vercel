import RulesCard from "./RulesCard";

const rulesCards = [
  {
    iconPath: "/icons/rules/rules_1.png",
    title: "Evaluation Period",
    description:
      "A minimum of two (2) trading days is required to complete the challenge. There is no maximum time limit to finish the evaluation.",
  },
  {
    iconPath: "/icons/rules/rules_2.png",
    title: "End-of-Day-Drawdown",
    description:
      "The account is subject to an end-of-day drawdown, not a trailing drawdown.",
  },
  {
    iconPath: "/icons/rules/rules_3.png",
    title: "Profit Consistency",
    description:
      "A 50% consistency rule applies only during the evaluation phase. Traders must follow 50% of consistency to reach the profit target without breaching the maximum drawdown.",
  },
  {
    iconPath: "/icons/rules/rules_4.png",
    title: "Daily Loss Limit",
    description:
      "Exceeding the daily loss limit results in an immediate hard breach",
  },
  {
    iconPath: "/icons/rules/rules_5.png",
    title: "Reset Policy",
    description:
      "A reset fee of $139 applies after a breach during the evaluation phase.",
  },
  {
    iconPath: "/icons/rules/rules_6.png",
    title: "Payout Limit",
    description: "8% payout cap per withdrawal request.",
  },
  {
    iconPath: "/icons/rules/rules_7.png",
    title: "Trader keeps 90%",
    description: "90/10 profit split",
  },
  {
    iconPath: "/icons/rules/rules_8.png",
    title: "Payout Frequency",
    description: "Payouts are available weekly upon request.",
  },
  {
    iconPath: "/icons/rules/rules_9.png",
    title: "News Trading Restrictions",
    description:
      "Trading is allowed during news events, except within two (2) minutes before and after major scheduled announcements.",
  },
  {
    iconPath: "/icons/rules/rules_10.png",
    title: "Contract Limits",
    description:
      "The maximum number of contracts per account size must be adhered to (see account table).",
  },
  {
    iconPath: "/icons/rules/rules_11.png",
    title: "Trading Hours",
    description:
      "Trading is permitted during most market hours, excluding periods of major illiquidity (we will publish specific market hour exceptions by instrument).",
  },
  {
    iconPath: "/icons/rules/rules_12.png",
    title: "Account Limit",
    description:
      "Traders may operate up to ten (10) active accounts simultaneously.",
  },
];

export default function RulesSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rulesCards.map((card, idx) => (
            <RulesCard
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
