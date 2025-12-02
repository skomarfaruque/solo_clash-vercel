import LoginSection from "./LoginSection";

export const metadata = {
  title: "Login | Solo Clash",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function LoginPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <LoginSection />
    </main>
  );
}
