import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly title: string;
  readonly description: string;
}

export default function RulesCard({
  iconPath,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition flex flex-col items-center text-center p-6 relative"
      style={{
        width: "424px",
        height: "266px",
        backgroundImage: "url('/rules_card_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-4 items-start">
        <Image
          src={iconPath}
          alt={title}
          width={66}
          height={66}
          className="w-[66px] h-[66px]"
          style={{ width: "66px", height: "66px" }}
        />
        <h3 className="font-semibold text-2xl leading-relaxed mb-2 text-white">
          {title}
        </h3>
        <p
          className="font-normal text-base leading-6 text-left"
          style={{ color: "#B7B7B7" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
