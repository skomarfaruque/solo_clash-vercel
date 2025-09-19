"use client";

import { useState } from "react";
import Image from "next/image";
export default function LoginSection() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section
      className="justify-center text-center"
      style={{
        backgroundImage: "url('/login_bg.svg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content container */}
      <div className="z-10 max-w-4xl mx-auto pt-[307px] pb-[343px]">
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-neutral-900 to-black p-8 shadow-xl">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center">
              Welcome Back!
            </h1>
            <p className="text-neutral-400 text-center mb-6">
              Please enter your details
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
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
              <label className="block text-sm text-white mb-2">Password</label>
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
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-neutral-400">
                <input
                  type="checkbox"
                  className="rounded border-neutral-700 bg-neutral-800"
                />
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
              <a href="#" className="text-orange-400 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
