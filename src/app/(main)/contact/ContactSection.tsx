import SvgButton2 from "@/components/buttons/svgButton2";
import HomeButton from "@/components/HomeButton";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function ContactSection() {
  const t = useTranslations();
  return (
    <section className="justify-center text-center px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row z-10 max-w-4xl mx-auto pt-[150px] lg:pt-[217px] gap-10 lg:gap-[52px]">
        <div className="flex flex-1 flex-col items-center text-left">
          <HomeButton>{t("contactSection.badge")}</HomeButton>
          <h3
            className="pt-6 font-bold leading-[110%]"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2rem, 6vw, 55px)",
              lineHeight: "110%",
              letterSpacing: "0.005em",
              background:
                "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("contactSection.heading")}
          </h3>
          <p className="font-normal text-[18px] leading-[150%] text-gray-300">
            {t("contactSection.description")}
          </p>
          <div className="flex flex-col gap-8 w-full max-w-md text-[#B7B7B7] mt-10 md:mt-[80px]">           

            {/* Email */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_3.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>{t("contactSection.email.label")}</span>
                <span>{t("contactSection.email.value")}</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_2.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>{t("contactSection.hours.label")}</span>
                <span>{t("contactSection.hours.value")}</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_1.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>{t("contactSection.address.line1")}</span>
                <span>{t("contactSection.address.line2")}</span>
              </div>
            </div>

          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-10 md:mt-[80px] justify-center md:justify-start">
            <a
              href="https://discord.gg/soloclash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_discord.png"
                alt={t("contactSection.social.discord")}
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.twitch.tv/soloclashofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_twitch.png"
                alt={t("contactSection.social.twitch")}
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/soloclashofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_ig.png"
                alt={t("contactSection.social.instagram")}
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.tiktok.com/@soloclash_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_tiktok.png"
                alt={t("contactSection.social.tiktok")}
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-1 w-full mt-10 lg:mt-0">
          <div
            className="w-full max-w-lg mx-auto text-white px-2 sm:px-6 pt-8 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-[50px]">
              {t("contactSection.form.title")}
            </h2>

            <form className="space-y-6 text-left w-full">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("contactSection.form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contactSection.form.namePlaceholder")}
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("contactSection.form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contactSection.form.emailPlaceholder")}
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm">
                  {t("contactSection.form.numberLabel")}
                </label>
                <input
                  type="text"
                  placeholder={t("contactSection.form.numberPlaceholder")}
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm">
                  {t("contactSection.form.messageLabel")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("contactSection.form.messagePlaceholder")}
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <div className="mt-8 md:mt-[52px]">
                <SvgButton2 label={t("contactSection.form.submit")} fullWidth />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
