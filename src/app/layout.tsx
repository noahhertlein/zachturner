import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zachary Turner | Cybersecurity Portfolio",
  description: "Personal portfolio website of Zachary Turner, a Cybersecurity student looking for opportunities in the field.",
  keywords: ["Zachary Turner", "Cybersecurity", "Portfolio", "Security+", "Penetration Testing", "Arkansas"],
  authors: [{ name: "Zachary Turner" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white dark`}
      >
        {children}
      </body>
    </html>
  );
}
