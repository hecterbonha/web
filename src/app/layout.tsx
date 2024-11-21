import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

const geistSans: NextFontWithVariable = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono:  NextFontWithVariable= localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Malah Ngoding | Lupa Makan, Lupa Tidur, Malah Ngoding",
  description:
    "Malah Ngoding adalah platform belajar pemrograman yang menyediakan tutorial, artikel, dan contoh proyek untuk membantu developer mengembangkan keterampilan coding mereka.",
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
      <nav>This is the navigation bar</nav>
        {children}
        <footer>This will be footer</footer>
      </body>
    </html>
  );
}
