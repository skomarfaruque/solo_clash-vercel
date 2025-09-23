interface HowItWorksCardProps {
  readonly backgroundImage: string;
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export default function HowItWorksCard({
  backgroundImage,
  step,
  title,
  description,
}: HowItWorksCardProps) {
  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative w-full max-w-[500px] h-[320px] sm:h-[365px] bg-cover bg-center bg-no-repeat px-4 pt-6 sm:px-8 sm:pt-8"
      style={{
        backgroundImage: `url('/${backgroundImage}')`,
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-semibold text-lg sm:text-2xl leading-tight text-white text-left max-w-[70%] sm:max-w-[326px]">
            {title}
          </h3>
          <span className="font-normal text-xs sm:text-sm leading-6 uppercase text-[#FB782D]">
            {step}
          </span>
        </div>
        <p className="font-normal text-sm sm:text-base leading-6 text-left text-[#B7B7B7] max-w-full sm:max-w-[326px]">
          {description}
        </p>
      </div>
    </div>
  );
}
