import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Solo Clash",
  description:
    "Read our Terms & Conditions and understand the rules and guidelines for using Solo Clash services.",
};

export default function TermsConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Header */}
        <header className="absolute top-10 w-full z-50">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="relative">{children}</main>

        {/* Footer */}
        <footer className="relative">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
