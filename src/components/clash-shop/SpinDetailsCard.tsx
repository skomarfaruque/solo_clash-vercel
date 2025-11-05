import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly card: CardDataProps;
}
interface CardDataProps {
  title: string;
  buttonBg: string;
  buttonTitle: string;
  date: string;
}
export default function SpinDetailsCard({
  iconPath,
  card: { title, buttonBg, buttonTitle, date },
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl flex text-center w-full justify-between px-5 py-6"
      style={{
        height: "100px",
        backgroundImage: "url('/spin_details_card_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={iconPath}
          alt={title}
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          style={{ width: "40px", height: "40px" }}
        />
        <h3
          className="font-normal text-[24px] leading-[150%] text-white text-left"
          style={{
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "150%",
            color: "#FFFFFF",
          }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-white text-sm"
        style={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          color: "#FFFFFF",
        }}
      >
        {date}
      </p>
      <button
        className="text-white bg-blue-500 px-4 py-2 rounded"
        style={{
          padding: "10px",
          gap: "10px",
          width: "111px",
          height: "40px",
          background: `${buttonBg}`,
          borderRadius: "130px",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          color: "#FFFFFF",
        }}
      >
        {buttonTitle}
      </button>
    </div>
  );
}
