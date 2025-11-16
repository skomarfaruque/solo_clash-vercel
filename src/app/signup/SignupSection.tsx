"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignupSection.css";

interface Country {
  id: number;
  name: string;
  code: string;
}

export default function SignupSection() {
  const t = useTranslations("signupSection");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [confirmName, setConfirmName] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "error" | "success";
  }>({ show: false, message: "", type: "success" });
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";
  const [formData, setFormData] = useState({
    // Step 1
    email: "",
    user_name: "",
    password: "",
    confirmPassword: "",
    is_news_letter: false,
    // Step 2
    first_name: "",
    last_name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    post_code: "",
    country_id: "",
    state: "",
    date_of_birth: "",
  });

  // Restore form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem("signupFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await fetch(
          "https://solo-clash-backend.vercel.app/api/v1/country",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
          }
        );

        const data = await response.json();

        if (data.success && data.data?.items) {
          setCountries(data.data.items);
        } else {
          console.error("Failed to fetch countries:", data.message);
        }
      } catch (err) {
        console.error("Error fetching countries:", err);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      setFormData((prev) => ({
        ...prev,
        date_of_birth: date.toISOString(),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === "1") {
      // Validate privacy policy is checked
      if (!agreedToPrivacy) {
        setToast({
          show: true,
          message: "You must agree to the privacy policy to continue.",
          type: "error",
        });
        setTimeout(() => {
          setToast({ show: false, message: "", type: "success" });
        }, 5000);
        return;
      }
      // Save form data to localStorage before navigating to step 2
      localStorage.setItem("signupFormData", JSON.stringify(formData));
      window.location.href = "/signup?step=2";
      return;
    }

    // Step 2: Submit registration
    setRegistering(true);

    try {
      const payload = {
        email: formData.email,
        user_name: formData.user_name,
        password: formData.password,
        is_news_letter: formData.is_news_letter,
        first_name: formData.first_name,
        last_name: formData.last_name,
        address_line_1: formData.address_line_1,
        address_line_2: formData.address_line_2,
        city: formData.city,
        post_code: formData.post_code,
        country_id: formData.country_id ? parseInt(formData.country_id) : null,
        state: formData.state,
        date_of_birth: formData.date_of_birth,
        roleId: null,
        status: "active",
      };

      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Clear localStorage and navigate to step 3
        localStorage.removeItem("signupFormData");
        window.location.href = "/signup?step=3";
      } else {
        // Show error toast
        setToast({
          show: true,
          message: data.message || "Registration failed. Please try again.",
          type: "error",
        });
        setTimeout(() => {
          setToast({ show: false, message: "", type: "success" });
        }, 5000);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setToast({
        show: true,
        message: "An error occurred during registration. Please try again.",
        type: "error",
      });
      setTimeout(() => {
        setToast({ show: false, message: "", type: "success" });
      }, 5000);
    } finally {
      setRegistering(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      user_name: "",
      password: "",
      confirmPassword: "",
      is_news_letter: false,
      first_name: "",
      last_name: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      post_code: "",
      country_id: "",
      state: "",
      date_of_birth: "",
    });
    setSelectedDate(null);
    localStorage.removeItem("signupFormData");
  };

  // Reset form when reaching step 3
  useEffect(() => {
    if (step === "3") {
      resetForm();
    }
  }, [step]);

  return (
    <section
      className="justify-center text-center min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/login_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500 custom-input"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                {t("usernameLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500 custom-input"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500 custom-input"
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500 custom-input"
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
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="mt-1 rounded border-neutral-700 bg-neutral-800"
                />
                <span>
                  {t("privacyPolicy")} <span className="text-red-500">*</span>
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_news_letter"
                  checked={formData.is_news_letter}
                  onChange={handleChange}
                  className="mt-1 rounded border-neutral-700 bg-neutral-800"
                />
                <span>{t("newsletter")}</span>
              </label>
            </div>

            {/* Submit */}
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="w-full relative rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 py-3 font-semibold text-black shadow-md hover:opacity-90 transition overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">{t("signUpButton")}</span>
                {/* glowing orange light effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-orange-300 blur-2xl opacity-70" />
              </button>
            </form>

            {/* Already have account */}
            <p className="mt-6 text-center text-sm text-neutral-400">
              {t("alreadyHaveAccount")}{" "}
              <button className="text-orange-400 hover:underline cursor-pointer">
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
                    name="first_name"
                    value={formData.first_name}
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
                    name="last_name"
                    value={formData.last_name}
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
                  name="address_line_1"
                  value={formData.address_line_1}
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
                  name="address_line_2"
                  value={formData.address_line_2}
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
                    name="post_code"
                    value={formData.post_code}
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
                    name="country_id"
                    value={formData.country_id}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-input"
                    disabled={loadingCountries}
                  >
                    <option value="">
                      {loadingCountries
                        ? "Loading countries..."
                        : "--Please Select--"}
                    </option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
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
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white custom-input"
                  placeholderText="Select your date of birth"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="confirm"
                  checked={confirmName}
                  onChange={(e) => setConfirmName(e.target.checked)}
                  className="h-4 w-4 text-orange-500 rounded focus:ring-2 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-300">
                  {t("confirmName")}
                </label>
              </div>

              <button
                type="submit"
                disabled={registering || !confirmName}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
              >
                {registering ? "Registering..." : t("submitButton")}
              </button>
            </form>
          </div>
        )}
        {step === "3" && (
          <div className="w-full max-w-md ">
            <Image
              src="/icons/signup_login/envelope.png"
              alt="Envelope Icon"
              width={100}
              height={100}
              className="mx-auto mb-6"
            />
            <h1 className="text-2xl font-bold text-white text-center mb-4">
              Verify your email address
            </h1>
            <p className="text-gray-400 text-sm text-center">
              We&apos;ve sent an email to{" "}
              <span className="text-orange-400 font-semibold">
                {formData.email}
              </span>{" "}
              containing instructions on how to verify your email address.
            </p>
            <p className="text-gray-400 text-sm text-center mt-4">
              Not received the email we can sent?{" "}
              <a href="#" className="text-[#2BB6DD] hover:underline">
                Resend it
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
