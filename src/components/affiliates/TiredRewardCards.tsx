"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BlackButton from "../buttons/BlackButton";
import SvgButton2 from "../buttons/svgButton2";

interface TiredRewardCardsProps {
  readonly title: string;
  readonly index: number;
  readonly requirements?: string;
  readonly commission?: string;
  readonly discount?: string;
  readonly bonus?: string;
  readonly buttonText?: string;
}

export default function TiredRewardCards({
  index,
  title,
  requirements = "requirement",
  commission = "10%",
  discount = "5%",
  bonus = "One Free $50k Account",
  buttonText = "Join now",
}: TiredRewardCardsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      window.open("https://affiliate.soloclash.com/login", "_blank");
    }
  };

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
      // TODO: Replace with actual API endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/affiliate/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setToast({
          show: true,
          message: "Application submitted successfully!",
          type: "success",
        });
        setShowModal(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          show: true,
          message: data.message || "Failed to submit. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting affiliate form:", error);
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
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-[60] animate-fadeIn ${
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-md mx-4 p-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-bold text-white mb-6">
              Join Affiliate Program
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us why you want to join..."
                  rows={4}
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              <div className="pt-4">
                <SvgButton2
                  label={isSubmitting ? "Submitting..." : "Submit Application"}
                  fullWidth
                  radius={50}
                  textStyle="font-normal"
                  isDisabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className="rounded-2xl relative flex flex-col w-full max-w-[424px] min-w-[220px] min-h-[320px] h-[424px] p-4 sm:p-6 justify-between"
        style={{
          background:
            "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
          backdropFilter: "blur(17px)",
        }}
      >
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/tiered_icon.png"
              alt={title}
              width={66}
              height={66}
              className="w-auto h-auto"
            />
            <h3 className="font-semibold text-[24px] leading-[150%] text-white">
              {title}
            </h3>
          </div>
          <div className="flex flex-col justify-center items-start mt-8 gap-1">
            <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
              Requirements:
            </span>
            <span className="font-medium text-[16px] leading-[150%]">
              {requirements}
            </span>
          </div>
          <div className="flex justify-between mt-6">
            {/* Left Side */}
            {commission ? (
              <div className="flex flex-col gap-1 items-start">
                <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
                  Commission:{" "}
                </span>
                <span className="font-medium text-[16px] leading-[150%] text-[#FB782D]">
                  {commission}
                </span>
              </div>
            ) : null}

            {/* Right Side */}
            <div className="flex flex-col gap-1 items-start">
              <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
                Discount code:{" "}
              </span>
              <span className="font-medium text-[16px] leading-[150%] text-[#FD9E5B]">
                {discount}
              </span>
            </div>
          </div>
          {bonus ? (
            <div className="flex flex-col justify-center items-start mt-6 gap-1">
              <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
                Bonus:
              </span>
              <span className="font-medium text-[16px] leading-[150%] text-white">
                {bonus}
              </span>
            </div>
          ) : null}
        </div>
        <div className="w-full">
          {index === 0 ? (
            <SvgButton2
              label={buttonText}
              fullWidth
              radius={50}
              textStyle="font-normal"
              onClick={handleButtonClick}
            />
          ) : (
            <BlackButton text={buttonText} />
          )}
        </div>
      </div>
    </>
  );
}
