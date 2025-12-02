"use client";

import { useState } from "react";
import SvgButton2 from "@/components/buttons/svgButton2";
import HomeButton from "@/components/HomeButton";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    account_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setToast({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          account_number: "",
          message: "",
        });
      } else {
        setToast({
          show: true,
          message: data.message || "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setToast({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast({ show: false, message: "", type: "success" });
      }, 5000);
    }
  };

  return (
    <section className="justify-center text-center px-4 sm:px-6 lg:px-20">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-fadeIn ${
            toast.type === "error"
              ? "bg-red-900 border border-red-700 text-red-100"
              : "bg-green-900 border border-green-700 text-green-100"
          }`}
        >
          {toast.type === "error" ? (
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

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

            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-left w-full"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("contactSection.form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contactSection.form.namePlaceholder")}
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("contactSection.form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contactSection.form.emailPlaceholder")}
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Account Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm">
                  {t("contactSection.form.numberLabel")}
                </label>
                <input
                  type="text"
                  name="account_number"
                  value={formData.account_number}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactSection.form.messagePlaceholder")}
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>

              {/* Button */}
              <div className="mt-8 md:mt-[52px]">
                <SvgButton2
                  label={
                    isSubmitting
                      ? "Sending..."
                      : t("contactSection.form.submit")
                  }
                  fullWidth
                  isDisabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
