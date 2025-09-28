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
      className="flex flex-col items-center justify-center rounded-2xl hover:scale-105 transition w-full max-w-[425px] h-[350px] sm:h-[415px] bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/home_card_one.svg')",
      }}
    >
      <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
        <Image
          src={iconPath}
          alt={title}
          width={100}
          height={100}
          className="h-16 w-16 sm:h-24 sm:w-24"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
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
