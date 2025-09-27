"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function LoginSection() {
  const [showPassword, setShowPassword] = useState(false);
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
            Welcome Back!
          </h1>
          <p className="text-neutral-400 text-center mb-6 text-sm sm:text-base">
            Please enter your details
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2 text-left">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2 text-left">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
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
              Remember me
            </label>
            <a href="#" className="text-sm text-cyan-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 py-3 font-semibold text-black shadow-md hover:opacity-90 transition">
            SIGN IN
          </button>

          {/* Sign Up link */}
          <p className="mt-6 text-center text-sm text-neutral-400">
            New on our platform?{" "}
            <Link href="/signup" className="text-orange-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
