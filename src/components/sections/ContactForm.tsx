"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const interestOptions = [
  "AI導入相談",
  "業務AIシステム",
  "爆速ホームページ制作",
  "アプリ開発",
  "ゲーム/ゲーミフィケーション",
  "マーケティング・広告運用",
  "PM・ディレクション",
  "新規事業の企画・検証",
  "まだ漠然としている",
  "その他",
];

type Status = "idle" | "submitting" | "error";

// Cookie reader to forward fbp/fbc to API (helps Meta CAPI dedup/attribution)
const readCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
};

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      website: String(formData.get("website") ?? ""),
      interests,
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      hp: String(formData.get("hp_field") ?? ""),
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `送信に失敗しました (${res.status})`);
      }

      router.push("/thanks");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="お名前" required>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputCls}
          />
        </Field>
        <Field label="会社名" required>
          <input
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputCls}
          />
        </Field>
        <Field label="メールアドレス" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
          />
        </Field>
        <Field label="電話番号">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="会社サイトURL">
          <input
            name="website"
            type="url"
            placeholder="https://"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-7">
        <div className="text-sm font-medium text-gray-900">
          ご相談内容（複数選択可）
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {interestOptions.map((opt) => {
            const selected = interests.includes(opt);
            return (
              <button
                type="button"
                key={opt}
                onClick={() => toggleInterest(opt)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  selected
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <Field label="詳細なご相談内容" required>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="例) 社内で使える問い合わせFAQボットを作りたい。データはGoogleドライブにあり、社員30名が利用予定。月額費用は5万円以内におさえたい。"
            className={`${inputCls} resize-y`}
          />
        </Field>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Leave this empty
          <input
            type="text"
            name="hp_field"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
        />
        <span>
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">プライバシーポリシー</a>
          に同意の上、送信します。
          いただいた情報はご相談対応の目的にのみ使用します。
        </span>
      </label>

      {status === "error" && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage || "送信に失敗しました。時間を置いて再度お試しください。"}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#6848E5] px-7 text-sm font-medium text-white transition-colors hover:bg-[#5638d3] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "送信中…" : "ご相談を送信する"}
        {status !== "submitting" && <span aria-hidden>→</span>}
      </button>

      <p className="mt-4 text-xs text-gray-500">
        平日 10:00 - 18:00 / 2営業日以内に返信 / 初回相談無料
      </p>
    </form>
  );
}

const inputCls =
  "block w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-900">
        {label}
        {required && (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold text-gray-700">
            必須
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
