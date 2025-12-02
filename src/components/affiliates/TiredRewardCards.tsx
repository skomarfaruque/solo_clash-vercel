"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BlackButton from "../buttons/BlackButton";
import SvgButton2 from "../buttons/svgButton2";
import { Plus, X } from "lucide-react";

interface SocialLinkOption {
  id: number;
  name: string;
  icon?: string;
}

interface SocialEntry {
  platform_id: number;
  platform_name: string;
  url: string;
}

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

  // Social link options from API
  const [socialLinkOptions, setSocialLinkOptions] = useState<
    SocialLinkOption[]
  >([]);
  const [loadingSocialOptions, setLoadingSocialOptions] = useState(false);

  // Form state
  const [followerCount, setFollowerCount] = useState("");
  const [hasPartnerships, setHasPartnerships] = useState<boolean | null>(null);
  const [promotionStrategy, setPromotionStrategy] = useState("");
  const [trafficStrategy, setTrafficStrategy] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [tradingContent, setTradingContent] = useState("");
  const [tradingLink, setTradingLink] = useState("");
  const [socials, setSocials] = useState<SocialEntry[]>([]);

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);

  // Fetch social link options when modal opens
  useEffect(() => {
    if (showModal && socialLinkOptions.length === 0) {
      fetchSocialLinkOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const fetchSocialLinkOptions = async () => {
    setLoadingSocialOptions(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-social-links`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );
      const data = await response.json();
      if (data.success && data.data) {
        setSocialLinkOptions(data.data.items || data.data);
      }
    } catch (error) {
      console.error("Error fetching social link options:", error);
    } finally {
      setLoadingSocialOptions(false);
    }
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      window.open("https://affiliate.soloclash.com/login", "_blank");
    }
  };

  const handleAddSocial = () => {
    setSocials([...socials, { platform_id: 0, platform_name: "", url: "" }]);
  };

  const handleRemoveSocial = (index: number) => {
    setSocials(socials.filter((_, i) => i !== index));
  };

  const handleSocialPlatformChange = (index: number, platformId: number) => {
    const platform = socialLinkOptions.find((opt) => opt.id === platformId);
    const newSocials = [...socials];
    newSocials[index] = {
      ...newSocials[index],
      platform_id: platformId,
      platform_name: platform?.name || "",
    };
    setSocials(newSocials);
  };

  const handleSocialUrlChange = (index: number, url: string) => {
    const newSocials = [...socials];
    newSocials[index] = {
      ...newSocials[index],
      url: url,
    };
    setSocials(newSocials);
  };

  const resetForm = () => {
    setFollowerCount("");
    setHasPartnerships(null);
    setPromotionStrategy("");
    setTrafficStrategy("");
    setTargetAudience("");
    setTradingContent("");
    setTradingLink("");
    setSocials([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get user_id from localStorage
    const adminUser = localStorage.getItem("adminUser");
    const userId = adminUser ? JSON.parse(adminUser).id : null;

    if (!userId) {
      setToast({
        show: true,
        message: "User not found. Please log in again.",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    // Build details array from socials
    const details = socials
      .filter((social) => social.platform_id && social.url.trim() !== "")
      .map((social) => ({
        social_type_id: social.platform_id,
        url: social.url.trim(),
      }));

    const payload = {
      user_id: userId,
      follower_count: parseInt(followerCount) || 0,
      existing_partnerships: hasPartnerships ?? false,
      promotion_strategy: promotionStrategy,
      traffic_plan: trafficStrategy,
      target_audience: targetAudience,
      trading_content_examples: tradingContent,
      affiliate_trading_platforms: tradingLink.trim(),
      details: details,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: JSON.stringify(payload),
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
        resetForm();
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
            className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background:
                "linear-gradient(306.21deg, #0a0a0a 39.33%, #1a1a1a 99.95%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer z-10"
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

            <form onSubmit={handleSubmit} className="p-8 text-left">
              <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Affiliate Application
                </h1>
                <p className="text-base text-gray-400">
                  Join our affiliate program and start earning commissions
                </p>
              </div>

              {/* Eligibility Requirements */}
              <div className="mb-8">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    Eligibility Requirements
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Please ensure you meet the following criteria before
                    applying
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          Minimum 500-1,000 active followers/subscribers
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          Public, active platform with regular futures trading
                          content
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          Demonstrated expertise in futures trading
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          Full disclosure of existing prop firm partnerships
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 font-semibold text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          Applications with private accounts or no trading
                          content will be automatically declined
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follower Count */}
              <div className="mb-8">
                <label className="block text-white font-medium text-base mb-3">
                  Current Follower/Subscriber Count
                  <span className="text-yellow-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 1500"
                  value={followerCount}
                  onChange={(e) => setFollowerCount(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Minimum: 500 followers required
                </p>
              </div>

              {/* Existing Partnerships */}
              <div className="mb-8">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    Existing Prop Firm Partnerships
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Full disclosure is required. This helps us understand your
                    current partnerships and avoid conflicts.
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-neutral-800/50 transition-colors">
                      <input
                        type="radio"
                        name="partnerships"
                        checked={hasPartnerships === true}
                        onChange={() => setHasPartnerships(true)}
                        className="w-5 h-5 accent-orange-500 cursor-pointer"
                      />
                      <span className="text-white font-medium">
                        Yes, I have existing partnerships
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-neutral-800/50 transition-colors">
                      <input
                        type="radio"
                        name="partnerships"
                        checked={hasPartnerships === false}
                        onChange={() => setHasPartnerships(false)}
                        className="w-5 h-5 accent-orange-500 cursor-pointer"
                      />
                      <span className="text-white font-medium">
                        No existing partnerships
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Promotion Strategy */}
              <div className="mb-8">
                <label className="block text-white font-medium text-base mb-3">
                  What is your promotion strategy?
                  <span className="text-yellow-500 ml-1">*</span>
                </label>
                <textarea
                  placeholder="Provide a detailed answer demonstrating your trading expertise..."
                  value={promotionStrategy}
                  onChange={(e) => setPromotionStrategy(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-colors leading-relaxed"
                />
              </div>

              {/* Traffic Strategy */}
              <div className="mb-8">
                <label className="block text-white font-medium text-base mb-3">
                  How do you plan to drive traffic to our platform?
                  <span className="text-yellow-500 ml-1">*</span>
                </label>
                <textarea
                  placeholder="Provide a detailed answer demonstrating your trading expertise..."
                  value={trafficStrategy}
                  onChange={(e) => setTrafficStrategy(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-colors leading-relaxed"
                />
              </div>

              {/* Target Audience */}
              <div className="mb-8">
                <label className="block text-white font-medium text-base mb-3">
                  What is your target audience?
                  <span className="text-yellow-500 ml-1">*</span>
                </label>
                <textarea
                  placeholder="Provide a detailed answer demonstrating your trading expertise..."
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-colors leading-relaxed"
                />
              </div>

              {/* Trading Content */}
              <div className="mb-8">
                <label className="block text-white font-medium text-base mb-3">
                  Please provide examples of your recent futures trading content
                  <span className="text-yellow-500 ml-1">*</span>
                </label>
                <textarea
                  placeholder="Provide a detailed answer demonstrating your trading expertise..."
                  value={tradingContent}
                  onChange={(e) => setTradingContent(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-colors leading-relaxed"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Provide links or descriptions of your recent content
                </p>
              </div>

              {/* Trading Platform Links */}
              <div className="mb-8">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    Trading Platform Link
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Profile must be public, active, and contain futures trading
                    content. Private accounts will be automatically declined.
                  </p>
                </div>
                <input
                  type="text"
                  value={tradingLink}
                  onChange={(e) => setTradingLink(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    Social Links
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Add your social media profiles
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                  {socials.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">No socials linked.</p>
                      <button
                        type="button"
                        onClick={handleAddSocial}
                        disabled={loadingSocialOptions}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:opacity-90 transition-opacity text-sm font-medium cursor-pointer disabled:opacity-50"
                      >
                        <Plus className="w-4 h-4" />
                        {loadingSocialOptions ? "Loading..." : "ADD"}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {socials.map((social, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row gap-2"
                        >
                          <div className="flex gap-2 w-full sm:w-auto">
                            <select
                              value={social.platform_id || ""}
                              onChange={(e) =>
                                handleSocialPlatformChange(
                                  idx,
                                  Number(e.target.value)
                                )
                              }
                              className="flex-1 sm:flex-none sm:w-40 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer"
                            >
                              <option value="" className="text-gray-500">
                                Select Platform
                              </option>
                              {socialLinkOptions.map((option) => (
                                <option
                                  key={option.id}
                                  value={option.id}
                                  className="text-black"
                                >
                                  {option.name}
                                </option>
                              ))}
                            </select>
                            <button
                              type="button"
                              onClick={() => handleRemoveSocial(idx)}
                              className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer sm:hidden"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex gap-2 flex-1">
                            <input
                              type="url"
                              value={social.url}
                              onChange={(e) =>
                                handleSocialUrlChange(idx, e.target.value)
                              }
                              placeholder="https://example.com/yourprofile"
                              className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveSocial(idx)}
                              className="hidden sm:block p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddSocial}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:opacity-90 transition-opacity text-sm font-medium mt-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        ADD
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-10 pt-8 border-t border-neutral-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Trading Affiliate Application"}
                </button>
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
