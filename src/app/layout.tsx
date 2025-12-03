import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import IntercomProvider from "@/providers/IntercomProvider";
import IntercomButton from "@/components/IntercomButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as per Figma
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#030303" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
        style={{ backgroundColor: "#030303" }}
      >
        <IntercomProvider>
          <NextIntlClientProvider>
            {children}
            <IntercomButton />
          </NextIntlClientProvider>
        </IntercomProvider>
      </body>
    </html>
  );
}
