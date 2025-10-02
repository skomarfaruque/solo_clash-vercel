import PaymentSection from "./Payment";

export const metadata = {
  title: "Payment | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function PaymentPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <PaymentSection />
    </main>
  );
}
