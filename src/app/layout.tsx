import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
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
    "中小企業・スモールビジネスのためのAI導入支援。相談・PoC・社内サービス構築・PM・アプリ開発・マーケティングまで一気通貫でサポート。月額5万円から。",
  metadataBase: new URL("https://ai.kodo-studio.com"),
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
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJp.variable} h-full antialiased`}
    >
      <head>
        {pixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
