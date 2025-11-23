import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Solo Clash",
  description:
    "Read our privacy policy and understand how we protect your data.",
};

export default function PrivacyLayout({
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
        {/* Main content */}
        <main style={{ backgroundColor: "#030303" }}>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
