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
  title: "Lakshmikar Reddy Polamreddy | AI Research & Computer Vision",
  description:
    "Research portfolio of Lakshmikar Reddy Polamreddy, specializing in computer vision, multimodal AI, medical image analysis, and generative models.",
  keywords: [
    "Lakshmikar Reddy Polamreddy",
    "AI Research",
    "Computer Vision",
    "Multimodal Learning",
    "Medical Image Analysis",
    "Diffusion Models",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
