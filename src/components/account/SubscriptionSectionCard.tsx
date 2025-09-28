import SubscriptionButton from "../SubscriptionButton";
import SubscriptionActiveButton from "../SubscriptionActiveButton";

interface SubscriptionCardProps {
  readonly backgroundImage: string;
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly isActive: boolean;
}

export default function SubscriptionSectionCard({
  backgroundImage,
  step,
  title,
  description,
  isActive,
}: SubscriptionCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative w-full max-w-[424px] h-[420px] sm:h-[498px] bg-cover bg-center bg-no-repeat p-5 sm:p-8"
      style={{
        backgroundImage: `url('/${backgroundImage}')`,
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Pricing Header */}
        <div className="flex justify-between items-center mb-3 sm:mb-4 gap-2">
          <div>
            <div className="text-white text-lg sm:text-2xl font-bold text-left">
              $25K
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-left">
              Buying Power
            </div>
          </div>
          <div
            className="text-right font-semibold text-lg sm:text-2xl leading-6"
            style={{ color: "#2AB6DC" }}
          >
            $49/mo{" "}
            <sup
              className="font-normal text-xs sm:text-sm leading-6"
              style={{ color: "#B7B7B7" }}
            >
              USD
            </sup>
          </div>
        </div>

        {/* Account Size Section */}
        <div className="mb-3 sm:mb-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                Account Size
              </span>
              <span className="text-white text-xs sm:text-sm">$25,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                Row 2 left
              </span>
              <span className="text-white text-xs sm:text-sm">Row 2 right</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                Row 3 left
              </span>
              <span className="text-white text-xs sm:text-sm">$90000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                Row 4 left
              </span>
              <span className="text-white text-xs sm:text-sm">$4000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                Row 5 left
              </span>
              <span className="text-white text-xs sm:text-sm">$100</span>
            </div>
            <div className="flex justify-start items-center">
              <span className="font-normal text-sm sm:text-base leading-6 text-[#B7B7B7]">
                VolSys & VolBook included
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        {isActive ? (
          <SubscriptionActiveButton text="Current Plan" />
        ) : (
          <SubscriptionButton text="Start challenge" />
        )}
      </div>
    </div>
  );
}
