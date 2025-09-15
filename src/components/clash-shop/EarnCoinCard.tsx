import Image from "next/image";

interface EarnCoinCardProps {
  readonly description: string;
  readonly icon: string;
  readonly title: string;
  readonly priceRange: string;
}

export default function EarnCoinCard({
  icon,
  title,
  description,
  priceRange,
}: EarnCoinCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative flex flex-col items-center justify-center text-center"
      style={{
        width: "312px",
        height: "312px",
        backgroundImage: "url(coin_card_bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "46px 30px",
      }}
    >
      <div className="flex justify-center items-center mb-6">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="w-auto h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="font-normal font-semibold text-[20px] leading-[150%] text-white text-center mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-normal text-[14px] leading-[150%] text-center text-[#B7B7B7]">
        {description}
      </p>
      <div className="flex justify-center items-center mt-4 gap-2">
        <Image src="/paisa.png" alt={title} width={20} height={20} />
        <span className="font-semibold text-[16px] leading-[150%] text-center text-[#2BB6DD]">
          {priceRange}
        </span>
      </div>
    </div>
  );
}
