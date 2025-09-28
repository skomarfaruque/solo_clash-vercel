import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly title: string;
  readonly description: string;
}

export default function WhyChooseUsCard({
  iconPath,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="bg-[#181818] rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center h-full hover:scale-105 transition relative"
      style={{
        width: "100%",
        maxWidth: "425px",
        height: "415px",
        backgroundImage: "url('/home_card_one.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center absolute"
        style={{ top: "70px" }}
      >
        <Image
          src={iconPath}
          alt={title}
          width={100}
          height={100}
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "200px", width: "80%", maxWidth: "320px" }}
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
          {title}
        </h3>
        <p
          className="text-gray-400 text-sm sm:text-base leading-6 text-center"
          style={{ color: "#B7B7B7" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
