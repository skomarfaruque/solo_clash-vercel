import FaqHeroSection from "./FaqHeroSection";

export const metadata = {
  title: "Login | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function LoginPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <FaqHeroSection />
    </main>
  );
}
