import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  PlayerProvider  from "@/context/PlayerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Ouça suas músicas favoritas neste clone do Spotify.",
  category: "music",
  keywords: ["Spotify Clone", "Next.js", "Music Player", "React", "Tailwind CSS"],
  icons:{
    icon:"/favicon_io/favicon-16x16.png",
    apple:"/favicon_io/apple-touch-icon.png",
    shortcut:"/favicon_io/favicon-32x32.png"
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  );
}
