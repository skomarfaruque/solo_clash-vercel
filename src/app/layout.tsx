"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Decide where to show navbar/footer
  const hideLayout = pathname.startsWith("/login"); // e.g. hide for auth pages
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Header */}
        <header className="absolute top-10 w-full z-50">
          {!hideLayout && <Navbar />}
        </header>

        {/* Main content */}
        <div>{children}</div>

        {/* Footer */}
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
