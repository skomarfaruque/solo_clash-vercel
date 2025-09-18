import BannerButton from "./BannerButton";
import BannerRulesButton from "./BannerRulesButton";
import Image from "next/image";
import WhiteButton from "./buttons/WhiteButton";

export default function Banner({
  page,
  bannerIconPath,
  title,
  description,
}: Readonly<{
  page: string;
  title: string | null;
  description?: string | null;
  bannerIconPath?: string | null;
}>) {
  return (
    <section
      className="flex items-center justify-center py-20 px-6 lg:px-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "1325px",
          minHeight: "410px",
          backgroundImage: "url('/banner_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Banner Text */}
          {bannerIconPath && (
            <Image
              src={bannerIconPath}
              alt="Banner Icon"
              width={66}
              height={66}
              className="w-[66px] h-[66px]"
            />
          )}
          <h2 className="font-bold text-5xl leading-tight text-white max-w-[583px]">
            {title}
          </h2>
          {description && (
            <p
              className="font-normal text-lg leading-7 max-w-2xl"
              style={{ color: "#B7B7B7" }}
            >
              {description}
            </p>
          )}
          {/* Banner Button */}
          {page === "account" && <BannerButton text="Get Started" />}

          {/* BannerRulesButton for rules page */}
          {page === "rules" && <BannerRulesButton text="Start Challenge" />}

          {/* BannerRulesButton for rules page */}
          {page === "clash-shop" && (
            <WhiteButton text="Redeem Free Ticket Now" iconPath="/trophy.png" />
          )}
        </div>
      </div>
    </section>
  );
}
