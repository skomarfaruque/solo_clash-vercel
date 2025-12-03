import SignupSection from "./SignupSection";

export const metadata = {
  title: "Signup | Solo Clash",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function SignupPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <SignupSection />
    </main>
  );
}
