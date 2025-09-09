interface FeatureCardProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl p-8 hover:scale-105 transition relative"
      style={{
        width: "425px",
        height: "415px",
        backgroundImage: "url('/home_card_one.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500/20 to-orange-400/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
