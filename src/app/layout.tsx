import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio | Alex Manfait",
  description:
    "Cybersecurity professional specializing in penetration testing, threat analysis, and secure systems development. Explore my portfolio of security projects and expertise.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security engineer",
    "ethical hacking",
    "vulnerability assessment",
    "security portfolio",
  ],
  authors: [{ name: "Alex Manfait" }],
  openGraph: {
    title: "Cybersecurity Portfolio | Alex Manfait",
    description:
      "Cybersecurity professional specializing in penetration testing and secure systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Portfolio | Alex Manfait",
    description:
      "Cybersecurity professional specializing in penetration testing and secure systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
