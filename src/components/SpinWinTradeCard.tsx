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
      className="rounded-2xl hover:scale-105 transition relative flex flex-col items-center justify-center text-center w-full max-w-[424px] min-w-[220px] min-h-[260px] sm:min-h-[320px] md:min-h-[370px] lg:min-h-[415px] aspect-[424/415] p-4 sm:p-6 md:p-8 lg:p-8"
      style={{
        backgroundImage: `url('/${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Icon in the middle */}
      <div className="flex justify-center items-center mb-4 sm:mb-6">
        <img
          src={`/${icon}`}
          alt={title}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-tight text-white text-center mb-2 sm:mb-4">
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-normal text-sm sm:text-base leading-5 sm:leading-6 text-center"
        style={{ color: "#B7B7B7" }}
      >
        {description}
      </p>
    </div>
  );
}
