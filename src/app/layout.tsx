import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KODO AI Studio｜あなたのビジネスにAIを導入して、成長や効率化を",
  description:
    "中小企業・スモールビジネスのためのAI導入支援。相談・PoC・社内サービス構築・PM・アプリ開発・マーケティングまで一気通貫でサポート。月額3万円から。",
  metadataBase: new URL("https://ai.kodostudio.com"),
  openGraph: {
    title: "KODO AI Studio｜AIで、あなたのビジネスを次のフェーズへ",
    description:
      "AI導入支援から開発・PM・マーケティングまで。中小企業のAI活用を一気通貫で伴走します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
