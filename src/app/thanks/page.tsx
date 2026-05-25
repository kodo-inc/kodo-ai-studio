"use client";

import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center bg-white px-5 py-20">
      <div className="mx-auto w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm md:p-14">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 text-3xl text-emerald-600">
          ✓
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          ご相談を受け付けました
        </h1>
        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
          お問い合わせいただきありがとうございます。
          <br />
          2営業日以内に、ご入力いただいたメールアドレス宛にご返信いたします。
        </p>
        <p className="mt-4 text-xs leading-6 text-gray-500">
          内容によっては、こちらから日程候補をお送りすることもございます。
          <br />
          万一返信がない場合は、迷惑メールフォルダもご確認のうえ、再度ご連絡ください。
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#6848E5] px-6 text-sm font-medium text-white transition-colors hover:bg-[#5638d3]"
          >
            トップに戻る
          </Link>
          <Link
            href="/#services"
            className="inline-flex h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            サービス内容を見る
          </Link>
        </div>
      </div>
    </main>
  );
}
