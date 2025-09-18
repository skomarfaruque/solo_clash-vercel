import Image from "next/image";
import SubscriptionActiveButton from "../SubscriptionActiveButton";
import BlackButton from "../buttons/BlackButton";

interface CommissionCardsProps {
  readonly description: string;
  readonly icon: string;
  readonly title: string;
  readonly priceRange: string;
}

export default function CommissionCards({
  icon,
  title,
  description,
  priceRange,
}: CommissionCardsProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative flex w-[550px] h-[139px] p-6 items-center justify-center text-center gap-4"
      style={{
        background:
          "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
        backdropFilter: "blur(17px)",
      }}
    >
      <Image
        src="/icons/rewards/commission_card_1.png"
        alt={title}
        width={64}
        height={64}
        className="w-auto h-auto"
      />
      <div className="flex flex-col items-start">
        {/* Title */}
        <h3 className="font-semibold text-[20px] leading-[150%] text-white text-center mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="font-normal text-[14px] leading-[150%] text-center text-[#B7B7B7]">
          {description}
        </p>
      </div>
    </div>
  );
}
