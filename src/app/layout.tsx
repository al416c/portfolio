import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Portfolio | Alex Manfait",
  description: "Cybersecurity professional specializing in penetration testing and secure systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth bg-slate-50 text-slate-900">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex`}>
        {/* The Sidebar (Left) */}
        <Sidebar />

        {/* The Main Content Area (Right) */}
        <main className="flex-1 min-w-0 bg-slate-50">
          {/* Centering & Spacing Container */}
          <div className="mx-auto w-full max-w-[1200px] p-8 md:p-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
