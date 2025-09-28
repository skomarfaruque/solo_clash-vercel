import Image from "next/image";

interface TiredRewardCards {
  readonly description: string;
  readonly icon: string;
  readonly title: string;
  readonly priceRange: string;
}

export default function WhyChooseProgramCards({
  icon,
  title,
  description,
  priceRange,
}: TiredRewardCards) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition flex flex-col w-full w-[312px] h-[250px] sm:h-[312px] p-6 items-center justify-center text-center"
      style={{
        background:
          "linear-gradient(182.25deg, #000000 34.26%, #1F1E1E 147.96%)",
        backdropFilter: "blur(17px)",
      }}
    >
      <div className="flex justify-center items-center mb-4 sm:mb-6">
        <Image
          src={icon}
          alt={title}
          width={75}
          height={75}
          className="w-12 h-12 sm:w-auto sm:h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[16px] sm:text-[20px] leading-[150%] text-white text-center mb-2 sm:mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-normal text-[12px] sm:text-[14px] leading-[150%] text-center text-[#B7B7B7]">
        {description}
      </p>
    </div>
  );
}
