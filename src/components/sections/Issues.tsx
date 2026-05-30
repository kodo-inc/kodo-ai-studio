import Image from "next/image";

const issues = [
  "AIを導入したいが、何から始めれば良いか分からない",
  "電話予約・メール対応をAIで自動化したい",
  "業務を効率化する社内サービス・アプリを開発したい",
  "マーケティングや広告運用を改善したい",
  "AIでワークフローを効率化したい",
  "開発したいプロダクトはあるが、PM・ディレクターが足りない",
  "最速でホームページを作りたい",
  "最速でアプリを作りたい",
  "新規事業の企画から検証まで伴走してほしい",
  "プロダクトにゲーミフィケーション要素を入れたい",
  "日々の業務を効率化したい",
  "業者に頼むと高そう・重そうで踏み切れない",
];

export default function Issues() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50/50 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/bg/issues.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Issues
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-5xl md:leading-[1.15]">
            このような課題は
            <br className="md:hidden" />
            ありませんか？
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600">
            AI導入、業務効率化、企画・PM支援、マーケティング、新規事業の検証など
            ── ご相談いただく内容の一例です。
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
          {issues.map((text) => (
            <li
              key={text}
              className="group flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-50 text-sm text-gray-400 ring-1 ring-gray-200 group-hover:bg-gray-900 group-hover:text-white group-hover:ring-gray-900">
                ?
              </span>
              <span className="text-sm leading-6 text-gray-800">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-gray-200 bg-white px-10 py-8 text-center shadow-sm md:px-14 md:py-10">
            <div className="space-y-1">
              <div className="font-display text-lg font-semibold text-gray-900 md:text-xl">
                1つでも当てはまれば
              </div>
              <div className="font-display text-lg font-semibold text-gray-900 md:text-xl">
                お気軽にご相談ください
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#6848E5] px-7 text-sm font-medium text-white transition-colors hover:bg-[#5638d3]"
            >
              まずは相談してみる <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
