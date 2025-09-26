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
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
            <div className="flex space-x-4">
              {/* YouTube Icon */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FB782D] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25003 8.07019C9.32633 8.02642 9.41283 8.00356 9.50079 8.00391C9.58876 8.00426 9.67507 8.02781 9.75103 8.07219L15.751 11.5722C15.8266 11.6162 15.8892 11.6793 15.9328 11.7551C15.9764 11.8309 15.9993 11.9168 15.9993 12.0042C15.9993 12.0916 15.9764 12.1775 15.9328 12.2533C15.8892 12.3291 15.8266 12.3922 15.751 12.4362L9.75103 15.9362C9.67497 15.9806 9.58853 16.0041 9.50047 16.0043C9.41241 16.0046 9.32584 15.9816 9.24953 15.9376C9.17321 15.8937 9.10986 15.8304 9.06587 15.7541C9.02188 15.6778 8.99882 15.5912 8.99902 15.5032V8.50319C8.99902 8.32419 9.09503 8.16019 9.25003 8.07019Z"
                    fill="#B7B7B7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7 3H11.697C11.02 3.005 9.30699 3.024 7.57699 3.094C6.71199 3.13 5.83699 3.178 5.06699 3.246C4.32799 3.312 3.62699 3.4 3.14699 3.534C2.50699 3.714 1.92699 4.064 1.46699 4.544C1.004 5.02494 0.673283 5.61746 0.506991 6.264L0.493991 6.309L0.486991 6.355C-0.0390092 9.565 -0.260009 14.515 0.515991 17.755L0.517991 17.763L0.519991 17.772C0.687835 18.4181 1.01873 19.0104 1.48099 19.492C1.94299 19.972 2.52099 20.322 3.16099 20.502C3.59399 20.625 4.21099 20.708 4.86099 20.769C5.60306 20.8353 6.34661 20.884 7.09099 20.915L7.93399 20.949C9.28399 20.996 10.584 21.013 11.334 21.019L12.077 21.023H12.084C12.455 21.022 14.194 21.015 16.044 20.95C16.968 20.918 17.934 20.871 18.764 20.803C19.574 20.737 20.354 20.645 20.854 20.503C21.494 20.323 22.074 19.973 22.534 19.493C22.997 19.013 23.327 18.423 23.495 17.773L23.505 17.732L23.513 17.69C24.07 14.46 24.256 9.52 23.486 6.29L23.484 6.28L23.481 6.27C23.3131 5.62387 22.9823 5.03164 22.52 4.55C22.0597 4.06996 21.4798 3.72131 20.84 3.54C20.383 3.412 19.71 3.326 19.01 3.262C18.2146 3.1943 17.4177 3.14529 16.62 3.115L16.383 3.105C15.1335 3.05921 13.8823 3.03187 12.632 3.023L12.031 3.019L11.687 3.021L11.7 3ZM2.19999 5.24C2.53713 4.88843 2.9616 4.63271 3.42999 4.499C4.91999 4.076 10.36 4.012 11.71 4.002L12.044 4.001L12.642 4.004C13.441 4.01 14.892 4.029 16.362 4.086L16.597 4.095C18.247 4.163 19.877 4.281 20.587 4.484C21.053 4.614 21.479 4.871 21.817 5.224C22.155 5.577 22.405 6.021 22.531 6.504C23.258 9.544 23.09 14.334 22.545 17.504C22.4205 17.9848 22.1747 18.4255 21.831 18.784C21.494 19.1359 21.0695 19.392 20.601 19.526C19.001 19.98 12.831 20.008 12.091 20.01L11.352 20.007C10.603 20.001 9.31199 19.984 7.97199 19.937L7.54599 19.92L7.13899 19.903C5.58899 19.833 4.10899 19.717 3.43899 19.526C2.96973 19.3948 2.54471 19.1391 2.20899 18.786C1.86532 18.4275 1.61947 17.9868 1.49499 17.506C0.764991 14.486 0.964991 9.686 1.48099 6.506C1.60547 6.02524 1.85132 5.58449 2.19499 5.226L2.19999 5.24Z"
                    fill="#B7B7B7"
                  />
                </svg>
              </a>

              {/* Twitter Icon */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FB782D] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.664 1.561-.664 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FB782D] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.07-1.281.059-2.563.343-3.535 1.316-.972.972-1.256 2.254-1.316 3.535-.058 1.28-.07 1.69-.07 4.947s.012 3.667.07 4.947c.059 1.281.343 2.563 1.316 3.535.972.972 2.254 1.256 3.535 1.316 1.28.058 1.69.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.563-.343 3.535-1.316.972-.972 1.256-2.254 1.316-3.535.058-1.28.07-1.69.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.343-2.563-1.316-3.535-.972-.972-2.254-1.256-3.535-1.316-1.28-.058-1.69-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FB782D] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.968v5.699h-3v-11h2.881v1.501h.041c.401-.756 1.379-1.554 2.841-1.554 3.038 0 3.6 2.001 3.6 4.604v6.449z" />
                </svg>
              </a>
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
