import HowItWorksCard from "./HowItWorksCard";
import HomeButton from "./HomeButton";
export default function HowItWorks() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Top Badge */}
        <HomeButton>How it works</HomeButton>
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white max-w-full sm:max-w-2xl">
          From evaluation to funded account in three steps.
        </h2>
        {/* How It Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <HowItWorksCard
            backgroundImage="how_works_bg_one.svg"
            step="Step 1"
            title="Choose how much funding you want."
            description="Pick an account size and start trading."
          />
          {/* Card 2 */}
          <HowItWorksCard
            backgroundImage="how_works_bg_two.svg"
            step="Step 2"
            title="Prove that you are worthy of it"
            description="Meet the profit target while respecting drawdown and daily loss rules."
          />
          {/* Card 3 */}
          <HowItWorksCard
            backgroundImage="how_works_bg_three.svg"
            step="Step 3"
            title="Get funded"
            description="Withdraw weekly and scale your trading."
          />
        </div>
      </div>
    </section>
  );
}
