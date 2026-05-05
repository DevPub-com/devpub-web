import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/constants/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | 엔터프라이즈 IT 개발 · 컨설팅`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "IT 개발",
    "소프트웨어 개발",
    "웹 개발",
    "앱 개발",
    "클라우드 아키텍처",
    "B2B SaaS",
    "IT 컨설팅",
    "DevPub",
    "데브펍",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | 엔터프라이즈 IT 개발 · 컨설팅`,
    description: COMPANY.description,
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
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
