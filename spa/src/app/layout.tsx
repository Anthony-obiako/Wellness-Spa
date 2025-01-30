import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Load Manrope from Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Wellness Spa",
  description: "A Wellness Spa app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
