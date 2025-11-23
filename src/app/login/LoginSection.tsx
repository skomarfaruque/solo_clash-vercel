"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginSection() {
  const t = useTranslations("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("sohag2847@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success", // "success" or "error"
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect");

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const { data } = await response.json();

      if (response.ok) {
        const {
          access_token: accessToken,
          refresh_token: refreshToken,
          user,
        } = data;

        // Store tokens in localStorage
        localStorage.setItem("adminToken", accessToken);
        localStorage.setItem("adminRefreshToken", refreshToken);
        console.log("Tokens stored in localStorage");

        // Store tokens in cookies with proper formatting
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
        document.cookie = `adminToken=${accessToken}; expires=${expiryDate.toUTCString()}; path=/`;
        document.cookie = `adminRefreshToken=${refreshToken}; expires=${expiryDate.toUTCString()}; path=/`;
        console.log("Tokens stored in cookies");

        // Store user data
        if (user) {
          localStorage.setItem("adminUser", JSON.stringify(user));
          console.log("User data stored:", user);
        }

        // Small delay to ensure cookies are set before redirect
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Redirect to the page the user came from, or default to payment page
        const destination = redirectUrl || "/payment";
        router.push(destination);
      } else {
        setToast({
          show: true,
          message: data.message || "Login failed.",
          type: "error",
        });
        setTimeout(
          () => setToast({ show: false, message: "", type: "success" }),
          5000
        );
      }
    } catch (error) {
      setToast({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
      setTimeout(
        () => setToast({ show: false, message: "", type: "success" }),
        5000
      );
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="justify-center text-center min-h-screen px-4 sm:px-0"
      style={{
        backgroundImage: "url('/login_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Content container */}
      <div className="z-10 max-w-4xl mx-auto pt-[100px] sm:pt-[307px]">
        <div
          className="w-full sm:w-[610px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black p-8 shadow-xl justify-center mx-auto"
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
          <h1 className="text-xl sm:text-2xl font-bold text-white text-center">
            {t("welcomeBack")}
          </h1>
          <p className="text-neutral-400 text-center mb-6 text-sm sm:text-base">
            {t("enterDetails")}
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2 text-left">
              {t("emailAddress")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2 text-left">
              {t("password")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("passwordPlaceholder")}
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-white"
              >
                {showPassword ? t("hidePassword") : t("showPassword")}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
            <label className="flex items-center gap-2 text-sm text-neutral-400">
              <input
                type="checkbox"
                className="appearance-none w-[18px] h-[18px] border border-[#D6D6D6] rounded-[4px] opacity-70 align-middle cursor-pointer checked:bg-orange-400 checked:border-orange-400"
                style={{
                  left: 0,
                  top: "0.5px",
                }}
              />{" "}
              {t("rememberMe")}
            </label>
            <a href="#" className="text-sm text-cyan-400 hover:underline">
              {t("forgotPassword")}
            </a>
          </div>

          {/* Submit */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 py-3 font-semibold text-black shadow-md hover:opacity-90 transition hover:cursor-pointer"
          >
            {loading ? t("loading") : t("signIn")}
          </button>

          {/* Sign Up link */}
          <p className="mt-6 text-center text-sm text-neutral-400">
            {t("newPlatform")}{" "}
            <Link href="/signup" className="text-orange-400 hover:underline">
              {t("signUp")}
            </Link>
          </p>
        </div>
      </div>

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
    </section>
  );
}
