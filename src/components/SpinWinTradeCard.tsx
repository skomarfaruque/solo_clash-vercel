interface SpinWinTradeCardProps {
  readonly backgroundImage: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export default function SpinWinTradeCard({
  backgroundImage,
  icon,
  title,
  description,
}: SpinWinTradeCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative flex flex-col items-center justify-center text-center"
      style={{
        width: "424px",
        height: "415px",
        backgroundImage: `url('/${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "32px",
      }}
    >
      {/* Icon in the middle */}
      <div className="flex justify-center items-center mb-6">
        <img src={`/${icon}`} alt={title} className="w-auto h-auto" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-2xl leading-tight text-white text-center mb-4">
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-normal text-base leading-6 text-center"
        style={{ color: "#B7B7B7" }}
      >
        {description}
      </p>
    </div>
  );
}
