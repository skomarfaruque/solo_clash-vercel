import SubscriptionButton from "./SubscriptionButton";
import SubscriptionActiveButton from "./SubscriptionActiveButton";

interface SubscriptionCardProps {
  readonly backgroundImage: string;
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly isActive: boolean;
}

export default function SubscriptionCard({
  backgroundImage,
  step,
  title,
  description,
  isActive,
}: SubscriptionCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative"
      style={{
        width: "424px",
        height: "498px",
        backgroundImage: `url('/${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "32px",
      }}
    >
      <div className="flex flex-col gap-8">
        {/* Pricing Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-white text-2xl font-bold text-left">$25K</div>
            <div className="text-gray-400 text-sm text-left">Buying Power</div>
          </div>
          <div
            className="text-right font-semibold text-2xl leading-6"
            style={{ color: "#2AB6DC" }}
          >
            $49/mo{" "}
            <sup
              className="font-normal text-sm leading-6"
              style={{ color: "#B7B7B7" }}
            >
              USD
            </sup>
          </div>
        </div>

        {/* Account Size Section */}
        <div className="mb-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                Account Size
              </span>
              <span className="text-white text-sm">$25,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                Row 2 left
              </span>
              <span className="text-white text-sm">Row 2 right</span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                Row 3 left
              </span>
              <span className="text-white text-sm">$90000</span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                Row 4 left
              </span>
              <span className="text-white text-sm">$4000</span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                Row 5 left
              </span>
              <span className="text-white text-sm">$100</span>
            </div>
            <div className="flex justify-start items-center">
              <span
                className="font-normal text-base leading-6"
                style={{ color: "#B7B7B7" }}
              >
                VolSys & VolBook included
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        {isActive ? (
          <SubscriptionActiveButton text="Current Plan" />
        ) : (
          <SubscriptionButton text="Start challenge" />
        )}
      </div>
    </div>
  );
}
