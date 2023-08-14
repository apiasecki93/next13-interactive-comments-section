"use strict";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Interactive comments section",
  description: "Generated by create next app",
  meta: {
    charset: "utf-8",
    name: {
      viewport: "width=device-width, initial-scale=1",
    },
  },
};

export default function RootLayout({ children }) {
  const bodyClassNames = `${inter.className} bg-lightGrayy`;

  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon-32x32.png" />
      <body className={bodyClassNames}>{children}</body>
    </html>
  );
}
