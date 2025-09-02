import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ppEditorialNew = localFont({
  src: [
    {
      path: "../public/fonts/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPEditorialNew-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial-new",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotionField",
  description: "Transform your video footage into actionable insights with AI-powered motion analysis, object tracking, and measurement tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ppEditorialNew.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
