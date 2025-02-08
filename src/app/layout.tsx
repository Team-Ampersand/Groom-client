import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groom",
  description: "GSM 공간 대여 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
