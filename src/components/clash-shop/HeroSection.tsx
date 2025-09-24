import SpinningWheel2 from "../affiliates/SpinnerWheel2";
import SpinningWheel from "../affiliates/SpinningWheel";
import StartNowButton from "../StartNowButton";

export default function HeroSection() {
  return (
    <section className="justify-center text-center px-6 lg:px-20">
      <div className="relative z-10 max-w-4xl mx-auto pt-[217px]">
        <h2
          className="mb-4"
          style={{
            fontWeight: 700,
            fontSize: "55px",
            lineHeight: "110%",
            letterSpacing: "0.005em",
          }}
        >
          Clash Shop
        </h2>
        <p
          className="text-center"
          style={{
            fontWeight: 700,
            fontSize: "55px",
            lineHeight: "110%",
            textAlign: "center",
            letterSpacing: "0.005em",
            background:
              "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Rewards, spins & daily wins
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
          Daily spins, tournaments, and a shop full of trader goodies. Earn
          coins from the Lucky Wheel and events, spend them on discount codes,
          free tournament entries, or even funded accounts.
        </p>
        <SpinningWheel2 />
      </div>
    </section>
  );
}
