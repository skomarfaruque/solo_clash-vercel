// app/page.js (Next.js 13+ App Router)
// or pages/index.js (Pages Router)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Content */}
      <section
        className="relative flex flex-col items-center text-center"
        style={{
          backgroundImage: "url('/hero_bg.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          height: "1080px",
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/80 text-sm">
            <span className="text-orange-400">⚡</span>
            <span>90/10 Profit Split • Weekly Payouts</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Compete. Win. <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-orange-500 bg-clip-text text-transparent">
              Trade funded capital.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-400 text-lg">
            We give ambitious traders the opportunity of a lifetime. Weekly
            tournaments, leaderboards and daily spins that turn performance into
            prizes – all backed by pro-grade execution tools and fair, concise
            rules.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-black font-semibold shadow-lg hover:scale-105 transition">
              Start Now →
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition">
              See Account Types
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
