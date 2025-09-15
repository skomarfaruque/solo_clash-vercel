import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly title: string;
  readonly description: string;
}

export default function SpinDetailsCard({
  iconPath,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition flex flex-col text-center p-6 relative w-full justify-center"
      style={{
        height: "100px",
        backgroundImage: "url('/spin_details_card_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex gap-4 items-start">
        <Image
          src={iconPath}
          alt={title}
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          style={{ width: "40px", height: "40px" }}
        />
        <h3 className="font-normal text-[24px] leading-[150%] text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}
