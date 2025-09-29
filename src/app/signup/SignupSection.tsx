"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignupSection.css";

export default function SignupSection() {
  const t = useTranslations("signupSection");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "",
    state: "",
    dob: "",
    confirm: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can integrate API call here
  };

  return (
    <section
      className="justify-center text-center min-h-screen"
      style={{
        backgroundImage: "url('/login_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {/* Content container */}
      <div className="z-10 max-w-4xl mx-auto pt-[152px] justify-center flex">
        {step === "1" && (
          <div
            className="w-[610px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black p-8 shadow-xl text-left pb-4"
            style={{
              backgroundImage: "url('/login_form_bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center">
              {t("welcomeTitle")}
            </h1>
            <p className="text-neutral-400 text-center mb-6">
              {t("welcomeSubtitle")}
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                {t("emailLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                {t("usernameLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                {t("passwordLabel")} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-white"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                {t("confirmPasswordLabel")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-white"
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mb-6 text-sm text-neutral-400">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-neutral-700 bg-neutral-800"
                />
                <span>{t("privacyPolicy")}</span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-neutral-700 bg-neutral-800"
                />
                <span>{t("newsletter")}</span>
              </label>
            </div>

            {/* Submit */}
            <button className="w-full relative rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 py-3 font-semibold text-black shadow-md hover:opacity-90 transition overflow-hidden">
              <span className="relative z-10">{t("signUpButton")}</span>
              {/* glowing orange light effect */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-orange-300 blur-2xl opacity-70" />
            </button>

            {/* Already have account */}
            <p className="mt-6 text-center text-sm text-neutral-400">
              {t("alreadyHaveAccount")}{" "}
              <button className="text-orange-400 hover:underline">
                {t("signIn")}
              </button>
            </p>
          </div>
        )}
        {step === "2" && (
          <div
            className="w-[610px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black p-8 shadow-xl"
            style={{
              backgroundImage: "url('/login_form_bg_2.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center">
              {t("beforeStartTitle")}
            </h1>
            <p className="text-neutral-400 text-center mb-6">
              {t("beforeStartSubtitle")}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    {t("firstNameLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("lastNameLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  {t("address1Label")}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  {t("address2Label")}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    {t("cityLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("postcodeLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    {t("countryLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  >
                    <option value="">--Please Select--</option>
                    <option value="US">USA</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("stateLabel")}
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  {t("dobLabel")}
                  <span className="text-red-500">*</span>
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white custom-input"
                  placeholderText="Select your date of birth"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="confirm"
                  checked={formData.confirm}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-500 rounded focus:ring-2 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-300">
                  {t("confirmID")}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
              >
                {t("submitButton")}
              </button>
            </form>
          </div>
        )}
        {step !== "1" && step !== "2" && (
          <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-neutral-900 to-black p-8 shadow-xl">
            Verify your email
          </div>
        )}
      </div>
    </section>
  );
}
