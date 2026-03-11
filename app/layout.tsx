import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const heading = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["700", "800", "900"]
});

const body = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Makgromart Agro Services | Trusted Farm Supplies",
  description: "Direct suppliers for quality farm produce and equipment across Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}