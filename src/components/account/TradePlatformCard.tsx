import Image from "next/image";

interface TradePlatformCardProps {
  readonly brands: ReadonlyArray<{
    name: string;
    logo: string;
    width: number;
    height: number;
  }>;
}

export default function TradePlatformCard({ brands }: TradePlatformCardProps) {
  return (
    <section className="py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-[#0B0B0C] rounded-2xl flex items-center justify-center p-8 shadow-lg hover:shadow-blue-500/20 transition-shadow"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
