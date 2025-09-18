import Image from "next/image";
import SubscriptionActiveButton from "../SubscriptionActiveButton";

interface TiredRewardCards {
  readonly description: string;
  readonly icon: string;
  readonly title: string;
  readonly priceRange: string;
}

export default function TiredRewardCards({
  icon,
  title,
  description,
  priceRange,
}: TiredRewardCards) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative flex flex-col w-[424px] h-[424px] p-6"
      style={{
        background:
          "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
        backdropFilter: "blur(17px)",
      }}
    >
      <div className="flex items-center gap-4">
        <Image
          src="/icons/rewards/rewards_icon_1.png"
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
          requirement
        </span>
      </div>
      <div className="flex justify-between mt-6">
        {/* Left Side */}
        <div className="flex flex-col gap-1 items-start">
          <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
            Commission:{" "}
          </span>
          <span className="font-medium text-[16px] leading-[150%] text-[#FB782D]">
            10%
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-1 items-start">
          <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
            Discount code:{" "}
          </span>
          <span className="font-medium text-[16px] leading-[150%] text-[#FD9E5B]">
            5%
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mt-6 gap-1">
        <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
          Bonus:
        </span>
        <span className="font-medium text-[16px] leading-[150%] text-white">
          One Free $50k Account
        </span>
      </div>

      <SubscriptionActiveButton text="Join now" />
    </div>
  );
}
