// app/page.js (Next.js 13+ App Router)
// or pages/index.js (Pages Router)

export default function Home() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      {/* Hero Content */}
      <section
        className="justify-center text-center px-6 lg:px-20"
        style={{
          backgroundImage: "url('/hero_bg.svg')",
          backgroundSize: "cover",
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

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
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
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-black font-semibold shadow-lg hover:scale-105 transition">
              Start Now →
            </button>
            <button className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition">
              See Account Types
            </button>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Top Badge */}
          <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full border border-orange-500 text-orange-400">
            WHY CHOOSE US →
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Built for serious <br className="hidden md:block" />
            traders - simple, fair, fast.
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-black to-[#1a1a1a] border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500/20 to-orange-400/10">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">90/10 Profit split</h3>
              <p className="text-gray-400 text-sm">
                Industry-leading payouts that reward performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-black to-[#1a1a1a] border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500/20 to-orange-400/10">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Clear risk rules with no hidden fees
              </h3>
              <p className="text-gray-400 text-sm">Transparent by design.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-black to-[#1a1a1a] border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500/20 to-orange-400/10">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Multi-language support
              </h3>
              <p className="text-gray-400 text-sm">
                Content & customer care in 6 languages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
