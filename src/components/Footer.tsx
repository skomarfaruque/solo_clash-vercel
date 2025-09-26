import LanguageSupport from "./LanguageSupport";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Accounts" },
  { href: "/rules", label: "Rules" },
  { href: "/faq", label: "FAQ" },
  { href: "/", label: "Get Started" },
];

const featuresLinks = [
  { href: "/clash-shop", label: "Clash Shop" },
  { href: "/clash-shop", label: "Daily Spins" },
];

const partnersLinks = [
  { href: "/affiliates", label: "Affiliates" },
  { href: "/affiliates", label: "Referral Program" },
];

const supportLinks = [{ href: "/support/contact", label: "Contact Us" }];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/#", label: "Risk Disclosure" },
  { href: "/#", label: "Cookies Policy" },
];

const socialLinks = [
  {
    href: "https://www.youtube.com/@SoloClashOfficial",
    label: "YouTube",
    icon: "/footer/tv.png",
  },
  {
    href: "https://www.twitch.tv/soloclashofficial",
    label: "Twitch",
    icon: "/footer/chat.png",
  },
  {
    href: "https://www.instagram.com/soloclashofficial/",
    label: "Instagram",
    icon: "/footer/instagram.png",
  },
  {
    href: "https://www.tiktok.com/@soloclashofficial",
    label: "TikTok",
    icon: "/footer/tiktok.png",
  },
];

export default function Footer() {
  return (
    <footer
      className="text-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-20 !pb-0"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-16 lg:gap-32">
          {/* Company Info */}
          <div className="space-y-4 w-full md:w-[320px] lg:w-[362px]">
            <Image
              src="/logo_footer.svg"
              alt="Solo Clash"
              width={128}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              We give ambitious traders the opportunity of a lifetime. Weekly
              tournaments, leaderboards and daily spins that turn performance
              into prizes
            </p>
          </div>

          {/* Footer Links as Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 flex-1 w-full mt-8 md:mt-0">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Platform</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Features</h4>
              <ul className="space-y-2">
                {featuresLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Partners</h4>
              <ul className="space-y-2">
                {partnersLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Support Contact Info */}
        <div className="space-y-3 pb-10 border-b border-gray-800 mt-4">
          <div className="flex items-center space-x-3">
            {/* Email Icon */}
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-400 text-sm">support@soloclash.com</span>
          </div>
          <div className="flex items-center space-x-3">
            {/* Globe Icon */}
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-gray-400 text-sm">
              24/7 Support in 6 Languages
            </span>
          </div>
        </div>
        <LanguageSupport />

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8">
          {/* First Row */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FB782D] transition-colors"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 w-full my-6"></div>

          {/* Second Row */}
          <div className="mt-4 pb-9">
            {/* Added padding-bottom of 35px (9 in Tailwind spacing) */}
            <p className="text-gray-400 text-sm text-center">
              © 2024 Solo Clash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
