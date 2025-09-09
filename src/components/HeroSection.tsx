import StartNowButton from "./StartNowButton";

export default function HeroSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20"
      style={{
        backgroundImage: "url('/hero_bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto pt-[307px] pb-[343px]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/80 text-sm mb-6">
          <span className="text-orange-400">⚡</span>
          <span>90/10 Profit Split • Weekly Payouts</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
          Compete. Win. <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-orange-500 bg-clip-text text-transparent">
            Trade funded capital.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8">
          We give ambitious traders the opportunity of a lifetime. Weekly
          tournaments, leaderboards and daily spins that turn performance into
          prizes – all backed by pro-grade execution tools and fair, concise
          rules.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <StartNowButton>Start Now</StartNowButton>
          <span className="text-gray-300 hover:text-white transition cursor-pointer">
            See Account Types
          </span>
        </div>
      </div>
    </section>
  );
}
