import Image from "next/image";

interface FeatureCardProps {
  readonly iconPath: string;
  readonly wheelHistoryData?: WheelHistoryItem;
  readonly isLoading?: boolean;
}
interface WheelHistoryItem {
  id: number;
  wheel_item_id: number;
  wheel_item_value: string;
  spining_datetime: string;
  wheel_items?: {
    id: number;
    item_name: string;
    value: string;
    Image_Icon_url: string | null;
    will_select: boolean;
  };
}

const formatDate = (dateString: string): string => {
  if (!dateString) return "Date & Time";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function SpinDetailsCard({
  iconPath,
  wheelHistoryData,
  isLoading,
}: FeatureCardProps) {
  if (isLoading) {
    return (
      <div
        className="rounded-2xl flex text-center w-full justify-between px-5 py-6 items-center"
        style={{
          height: "100px",
          backgroundImage: "url('/spin_details_card_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-gray-600 animate-pulse"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            className="rounded bg-gray-600 animate-pulse"
            style={{ width: "100px", height: "16px" }}
          />
        </div>
        <div
          className="rounded bg-gray-600 animate-pulse"
          style={{ width: "120px", height: "16px" }}
        />
        <div
          className="rounded-full bg-gray-600 animate-pulse"
          style={{ width: "111px", height: "40px" }}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl flex text-center w-full justify-between px-5 py-6 items-center"
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
          alt={wheelHistoryData?.wheel_items?.item_name || "Spin Item Icon"}
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
          {wheelHistoryData?.wheel_items?.item_name || "Spin Item"}
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
        {formatDate(wheelHistoryData?.spining_datetime || "")}
      </p>
      <button
        className="text-white bg-blue-500 px-4 py-2 rounded"
        style={{
          padding: "10px",
          gap: "10px",
          width: "111px",
          height: "40px",
          // background: `${buttonBg}`,
          borderRadius: "130px",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          color: "#FFFFFF",
        }}
      >
        button
      </button>
    </div>
  );
}
