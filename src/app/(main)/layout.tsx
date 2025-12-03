import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollHeader from "@/components/ScrollHeader";

export const metadata = {
  title: "Solo Clash",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
  icons: {
    icon: [
      { url: "/favicon.v2.svg", type: "image/svg+xml" }, // modern browsers
      { url: "/favicon.png", sizes: "128x128", type: "image/png" }, // Safari fallback
    ],
    apple: "/favicon.png", // Apple Touch Icon must be PNG
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollHeader />
      <header
        className="fixed top-10 w-full z-50 transition-opacity duration-300"
        id="main-header"
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
