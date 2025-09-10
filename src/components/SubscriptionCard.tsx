interface SubscriptionCardProps {
  readonly backgroundImage: string;
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export default function SubscriptionCard({
  backgroundImage,
  step,
  title,
  description,
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
        paddingLeft: "32px",
        paddingTop: "31px",
        paddingRight: "29px",
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3
            className="font-semibold text-2xl leading-tight text-white text-left"
            style={{ width: "326px" }}
          >
            {title}
          </h3>
          <span className="font-normal text-sm leading-6 uppercase text-[#FB782D]">
            {step}
          </span>
        </div>
        <p
          className="font-normal text-base leading-6 text-left"
          style={{ color: "#B7B7B7", width: "326px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
