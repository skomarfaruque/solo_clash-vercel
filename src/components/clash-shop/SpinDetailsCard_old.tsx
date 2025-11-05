import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly title: string;
  readonly tags: string[];
}

export default function SpinDetailsCard({
  iconPath,
  title,
  tags,
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
      <div className="flex gap-4 items-center">
        <Image
          src={iconPath}
          alt={title}
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          style={{ width: "40px", height: "40px" }}
        />
        <h3 className="font-normal text-[24px] leading-[150%] text-white flex flex-col items-start gap-4 text-left">
          {title}
          {tags.length > 0 && (
            <span
              className="flex flex-row justify-center items-center px-2 py-[3.5px] gap-6 bg-[#FB782D] rounded-lg backdrop-blur-[11.3px] text-black text-xs font-medium w-auto"
              style={{ backdropFilter: "blur(11.3px)" }}
            >
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex flex-row justify-center items-center px-2 py-[3.5px] gap-6 bg-[#FB782D] rounded-lg backdrop-blur-[11.3px] text-black text-xs font-medium w-auto"
                  style={{ backdropFilter: "blur(11.3px)" }}
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}
