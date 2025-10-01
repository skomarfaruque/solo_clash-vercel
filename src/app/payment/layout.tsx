import type { Metadata } from "next";

import AccountNavBar from "../AccountNavbar";

export const metadata: Metadata = {
  title: "Login - SoloClash",
  description: "Login to your SoloClash account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Header */}
        <header className="absolute top-10 w-full z-50">
          <AccountNavBar />
        </header>
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
