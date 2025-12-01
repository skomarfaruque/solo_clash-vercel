export default function Header() {
  return (
    <nav className="w-[1320px] mx-auto px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            SoloClash
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
              Challenges
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
              Leaderboard
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
              Account Types
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
              Support
            </button>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-black font-semibold text-sm hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
