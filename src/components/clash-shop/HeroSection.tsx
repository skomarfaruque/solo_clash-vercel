"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Heading from "../common/Heading";
import NewWheel from "../affiliates/newwheel";
import SpinDetailsSection from "./SpinDetailsSection";

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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function HeroSection() {
  const t = useTranslations();
  const [isSpinDisabled, setIsSpinDisabled] = useState(false);
  const [disabledMessage, setDisabledMessage] = useState<string>("");
  const [wheelHistoryData, setWheelHistoryData] = useState<WheelHistoryItem[]>(
    []
  );

  useEffect(() => {
    const checkWheelHistory = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const user = localStorage.getItem("adminUser");
        const userId = user ? JSON.parse(user).id : null;

        // Generate environment hash
        const envString = navigator.userAgent;
        let hash = 5381;
        for (let i = 0; i < envString.length; i++) {
          hash = (hash << 5) + hash + envString.charCodeAt(i);
          hash = hash & hash;
        }
        const environmentHash = Math.abs(hash).toString(16);

        // Build query params
        let url = `${BASE_URL}/wheel-history`;
        if (userId) {
          url += `?user_id=${userId}`;
        } else {
          url += `?environment=${environmentHash}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        if (response.ok) {
          const data = await response.json();

          if (data.data && data.data.items && data.data.items.length > 0) {
            const items = data.data.items;
            setWheelHistoryData(items);

            const lastSpin = items[0];
            const lastSpinTime = new Date(lastSpin.spining_datetime);
            const currentTime = new Date();
            const timeDifference =
              currentTime.getTime() - lastSpinTime.getTime();
            const hoursDifference = timeDifference / (1000 * 60 * 60);

            if (hoursDifference < 24) {
              setIsSpinDisabled(true);
              const remainingHours = Math.ceil(24 - hoursDifference);
              setDisabledMessage(
                `You can spin again in ${remainingHours} hour(s)`
              );
            } else {
              setIsSpinDisabled(false);
              setDisabledMessage("");
            }
          }
        }
      } catch (error) {
        console.error("Error checking wheel history:", error);
      }
    };

    checkWheelHistory();
  }, []);

  return (
    <>
      <section className="justify-center text-center px-6 lg:px-20">
        <div className="relative z-10 max-w-4xl mx-auto pt-[217px]">
          <Heading className="mb-4">{t("clashShopHero.heading")}</Heading>

          <p
            className="text-center font-playfair"
            style={{
              fontWeight: 700,
              fontSize: "55px",
              lineHeight: "110%",
              textAlign: "center",
              letterSpacing: "0.005em",
              background:
                "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("clashShopHero.subheading")}
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            {t("clashShopHero.description")}
          </p>
          {/* <SpinningWheel2 /> */}
          <div className="mt-[79px]">
            <NewWheel
              isDisabled={isSpinDisabled}
              disabledMessage={disabledMessage}
            />
          </div>
        </div>
      </section>
      <SpinDetailsSection wheelHistoryData={wheelHistoryData} />
    </>
  );
}
