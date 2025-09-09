import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full border border-orange-500 text-orange-400">
          WHY CHOOSE US →
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Built for serious <br className="hidden md:block" />
          traders - simple, fair, fast.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 17l6-6 4 4 8-8"
                />
              </svg>
            }
            title="90/10 Profit split"
            description="Industry-leading payouts that reward performance."
          />

          {/* Card 2 */}
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 2 2 2 2 2-.895 2-2z M12 5v2m0 10v2m7-9h2m-2 0H5m14 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Clear risk rules with no hidden fees"
            description="Transparent by design."
          />

          {/* Card 3 */}
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a9 9 0 100 15.292 9 9 0 000-15.292zM12 7v5l3 3"
                />
              </svg>
            }
            title="Multi-language support"
            description="Content & customer care in 6 languages."
          />
        </div>
      </div>
    </section>
  );
}
