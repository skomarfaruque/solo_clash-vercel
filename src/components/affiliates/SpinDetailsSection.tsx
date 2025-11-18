import { useState, useEffect } from "react";
import HomeButton from "../HomeButton";
import SpinDetailsCard from "./SpinDetailsCard";
import NewWheel from "./newwheel";

const spinDetailsCards = [
  {
    iconPath: "/icons/spins/spin_details_1.png",
    title: "Evaluation Period",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_2.png",
    title: "End-of-Day-Drawdown",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_3.png",
    title: "Profit Consistency",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_4.png",
    title: "Daily Loss Limit",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_5.png",
    title: "Reset Policy",
    tags: [],
  },
  {
    iconPath: "/icons/spins/spin_details_6.png",
    title: "Payout Limit",
    tags: ["Legendary"],
  },
];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function SpinDetailsSection() {
  const [isSpinDisabled, setIsSpinDisabled] = useState(false);
  const [disabledMessage, setDisabledMessage] = useState<string>("");

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
        let url = `${BASE_URL}/wheel-history?environment=${environmentHash}`;
        if (userId) {
          url += `&user_id=${userId}`;
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
            const lastSpin = data.data.items[0];
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
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Wheel Component */}
        <div className="mb-20">
          <NewWheel
            isDisabled={isSpinDisabled}
            disabledMessage={disabledMessage}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spinDetailsCards.map((card, idx) => (
            <SpinDetailsCard
              key={idx}
              iconPath={card.iconPath}
              title={card.title}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
