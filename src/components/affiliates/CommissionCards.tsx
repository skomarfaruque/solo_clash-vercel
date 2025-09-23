import Image from "next/image";

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
      className="rounded-2xl hover:scale-105 transition relative flex w-full max-w-[550px] min-w-[220px] min-h-[100px] sm:min-h-[120px] md:min-h-[139px] h-auto p-4 sm:p-6 items-center justify-center text-center gap-4"
      style={{
        background:
          "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
        backdropFilter: "blur(17px)",
      }}
    >
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <div className="flex flex-col items-start">
        {/* Title */}
        <h3 className="font-semibold text-base sm:text-lg md:text-xl leading-[150%] text-white text-left mb-2 sm:mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="font-normal text-xs sm:text-sm md:text-base leading-[150%] text-left text-[#B7B7B7]">
          {description}
        </p>
      </div>
    </div>
  );
}
