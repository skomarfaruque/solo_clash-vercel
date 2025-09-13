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
      className="rounded-2xl hover:scale-105 transition flex flex-col items-center text-center p-8 relative"
      style={{
        width: "424px",
        height: "266px",
        backgroundImage: "url('/rules_card_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-28 h-28 flex items-center justify-center absolute"
        style={{ top: "85.5px" }}
      >
        <Image
          src={iconPath}
          alt={title}
          width={100}
          height={100}
          className="h-25 w-25"
        />
      </div>
      <div className="absolute" style={{ top: "220px", width: "320px" }}>
        <h3 className="font-semibold text-2xl leading-relaxed mb-2 text-white">
          {title}
        </h3>
        <p
          className="font-normal text-base leading-6 text-center"
          style={{ color: "#B7B7B7" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
