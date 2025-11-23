import LanguageSupport from "./LanguageSupport";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import "./Footer.css";

export default function Footer() {
  const t = useTranslations("footer");

  const links = [
    { href: "/#subscriptions", label: t("links.accounts") },
    { href: "/rules", label: t("links.rules") },
    { href: "/faq", label: t("links.faq") },
    { href: "/", label: t("links.getStarted") },
  ];

  const featuresLinks = [
    { href: "/clash-shop", label: t("features.clashShop") },
    { href: "/clash-shop", label: t("features.dailySpins") },
  ];

  const partnersLinks = [
    { href: "/affiliates", label: t("partners.affiliates") },
    { href: "/affiliates", label: t("partners.referralProgram") },
  ];

  const supportLinks = [
    { href: "/support/contact", label: t("support.contactUs") },
  ];

  const legalLinks = [
    { href: "/privacy", label: t("legal.privacyPolicy") },
    { href: "/terms-conditions", label: t("legal.termsOfService") },
    { href: "/risk-disclosure", label: t("legal.riskDisclosure") },
    { href: "/#", label: t("legal.cookiesPolicy") },
  ];

  const socialLinks = [
    {
      href: "https://www.youtube.com/@SoloClashOfficial",
      label: t("social.youtube"),
      icon: "/footer/tv.png",
    },
    {
      href: "https://www.twitch.tv/soloclashofficial",
      label: t("social.twitch"),
      icon: "/footer/twitch.png",
    },
    {
      href: "https://www.instagram.com/soloclashofficial/",
      label: t("social.instagram"),
      icon: "/footer/instagram.png",
    },
    {
      href: "https://www.tiktok.com/@soloclashofficial",
      label: t("social.tiktok"),
      icon: "/footer/tiktok.png",
    },
  ];

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
              {t("company.description")}
            </p>
          </div>

          {/* Footer Links as Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 flex-1 w-full mt-8 md:mt-0">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                {t("sections.platform")}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                {t("sections.features")}
              </h4>
              <ul className="space-y-2">
                {featuresLinks.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                {t("sections.partners")}
              </h4>
              <ul className="space-y-2">
                {partnersLinks.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t("sections.support")}</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-colors text-sm"
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
            <span className="text-gray-400 text-sm">{t("support.email")}</span>
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
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-gray-400 text-sm">
              {t("support.languages")}
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
                  className="footer-link text-gray-400 hover:text-white transition-colors text-sm"
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
                  className="social-link text-gray-400 hover:text-[#FB782D] transition-colors"
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
              {t("company.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
