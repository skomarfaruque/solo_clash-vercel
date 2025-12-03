import ContactSection from "./ContactSection";

export const metadata = {
  title: "Contact Us | Solo Clash",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function ContactPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <ContactSection />
    </main>
  );
}
