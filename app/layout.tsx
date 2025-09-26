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
  title: "Scrapie's Subtember Subathon",
  description: "Join Scrapie's epic Subtember Subathon with goals, events, and more!",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png",
    shortcut: "https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png",
    apple: "https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png" type="image/png" />
        <link rel="shortcut icon" href="https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
