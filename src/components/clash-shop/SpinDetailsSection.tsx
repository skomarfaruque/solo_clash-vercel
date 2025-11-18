import SpinDetailsCard from "./SpinDetailsCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
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

export default function SpinDetailsSection({
  wheelHistoryData,
}: {
  wheelHistoryData: WheelHistoryItem[];
}) {
  const t = useTranslations();
  interface SpinDetailsCardData {
    title: string;
    buttonBg: string;
    buttonTitle: string;
    date: string;
  }
  const cards: SpinDetailsCardData[] = t.raw("spinDetailsSection.cards");
  const iconPaths = [
    "/icons/spins/spin_details_1.png",
    "/icons/spins/spin_details_2.png",
    "/icons/spins/spin_details_3.png",
    "/icons/spins/spin_details_4.png",
    "/icons/spins/spin_details_5.png",
    "/icons/spins/spin_details_6.png",
  ];

  const cardsData: SpinDetailsCardData[] = [
    {
      title: "Coin Bundle",
      buttonBg: "linear-gradient(90deg, #000C40 0%, #607D8B 100%)",
      buttonTitle: "Common",
      date: "Oct 20, 2025",
    },
    {
      title: "Cold Trophy",
      buttonBg: "linear-gradient(90deg, #9400D3 0%, #4B0082 100%)",
      buttonTitle: "Epic",
      date: "Oct 20, 2025",
    },
    {
      title: "Mystery Box",
      buttonBg: "linear-gradient(90deg, #72C6EF 0%, #004E8F 100%)",
      buttonTitle: "Rare",
      date: "Oct 20, 2025",
    },
    {
      title: "Premium gift Voucher",
      buttonBg: "linear-gradient(90deg, #E65C00 0%, #F9D423 100%);",
      buttonTitle: "Legendary",
      date: "Oct 20, 2025",
    },
  ];

  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div
        className="max-w-[780px] mx-auto p-6"
        style={{
          background: "#2BB6DD",
          border: "1px solid rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/icons/clash_shop/dollar.png"
              alt="Coins Icon"
              className="w-12 h-12 mr-4"
              width={50}
              height={50}
            />
            <div className="text-left">
              <h3
                className="text-white text-lg font-semibold"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "150%",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Total coins
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  fontWeight: 800,
                  fontSize: "23px",
                  lineHeight: "130%",
                  color: "#FFFFFF",
                }}
              >
                1250
              </p>
            </div>
          </div>
          <div
            className="text-white font-bold text-2xl"
            style={{
              padding: "14px 28px",
              gap: "8px",
              width: "156px",
              height: "45px",
              left: "601px",
              top: "calc(50% - 45px/2 + 0.5px)",
              background: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "100px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#030303",
            }}
          >
            Active Balance
          </div>
        </div>
      </div>
      <h1
        className="text-white text-2xl font-bold max-w-[780px] mx-auto p-6"
        style={{
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: "150%",
          color: "#FFFFFF",
          textAlign: "left",
        }}
      >
        My Inventory
      </h1>
      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 max-w-[780px] mx-auto">
        {cardsData.map((card: SpinDetailsCardData, idx: number) => (
          <SpinDetailsCard key={idx} iconPath={iconPaths[idx]} card={card} />
        ))}
      </div>
    </section>
  );
}
