import BannerButton from "./BannerButton";

export default function Banner() {
  return (
    <section
      className="flex items-center justify-center py-20 px-6 lg:px-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "1325px",
          height: "410px",
          backgroundImage: "url('/banner_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Banner Text */}
          <h2 className="font-bold text-5xl leading-tight text-white">
            Ready to trade real capital?
          </h2>

          {/* Button */}
          <BannerButton text="Open Your Challenge" />
        </div>
      </div>
    </section>
  );
}
