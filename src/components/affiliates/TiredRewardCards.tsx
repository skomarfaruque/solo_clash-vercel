import Image from "next/image";
import SubscriptionActiveButton from "../SubscriptionActiveButton";
import BlackButton from "../buttons/BlackButton";

interface TiredRewardCardsProps {
  readonly description: string;
  readonly icon: string;
  readonly title: string;
  readonly priceRange: string;
  readonly requirements?: string;
  readonly commission?: string;
  readonly discount?: string;
  readonly bonus?: string;
}

export default function TiredRewardCards({
  icon,
  title,
  description,
  priceRange,
  requirements = "requirement",
  commission = "10%",
  discount = "5%",
  bonus = "One Free $50k Account",
}: TiredRewardCardsProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative flex flex-col w-full max-w-[424px] min-w-[220px] min-h-[320px] h-[424px] p-4 sm:p-6 justify-between"
      style={{
        background:
          "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
        backdropFilter: "blur(17px)",
      }}
    >
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={icon}
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
          <div className="flex flex-col gap-1 items-start">
            <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
              Commission:{" "}
            </span>
            <span className="font-medium text-[16px] leading-[150%] text-[#FB782D]">
              {commission}
            </span>
          </div>

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
        <div className="flex flex-col justify-center items-start mt-6 gap-1">
          <span className="font-normal text-[12px] leading-[150%] text-[#B7B7B7]">
            Bonus:
          </span>
          <span className="font-medium text-[16px] leading-[150%] text-white">
            {bonus}
          </span>
        </div>
      </div>
      <div className="w-full">
        <BlackButton text="Join now" />
      </div>
    </div>
  );
}
