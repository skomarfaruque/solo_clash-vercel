"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default function SignupSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
              Welcome to Solo Clash
            </h1>
            <p className="text-neutral-400 text-center mb-6">
              Please enter your details
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="example@email.com"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                Password <span className="text-red-500">*</span>
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

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
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
                <span>
                  I agree with the Privacy{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    Terms &amp; Conditions
                  </a>
                  .
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-neutral-700 bg-neutral-800"
                />
                <span>
                  I would like to subscribe to the Solo Clash Futures
                  newsletter.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button className="w-full relative rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 py-3 font-semibold text-black shadow-md hover:opacity-90 transition overflow-hidden">
              <span className="relative z-10">SIGN UP</span>
              {/* glowing orange light effect */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-orange-300 blur-2xl opacity-70" />
            </button>

            {/* Already have account */}
            <p className="mt-6 text-center text-sm text-neutral-400">
              Have an account?{" "}
              <a href="#" className="text-orange-400 hover:underline">
                Sign In
              </a>
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
              Before you Start
            </h1>
            <p className="text-neutral-400 text-center mb-6">
              Please complete these fields to proceed
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jenny"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Wilson"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Address line 1<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  placeholder="2715 Ash Dr. San Jose"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Address line 2<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  placeholder="2715 Ash Dr. San Jose"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="United States"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Postcode<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="2715"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select an option</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Alaska"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="dd/mm/yyyy"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  I confirm that my name is correct and matches my government
                  issued ID
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
              >
                SUBMIT
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
