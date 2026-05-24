// ────────────────────────────────────────────────────────────────
// Hero subcopy options (user picked C; A/B/D/E kept for swap)
//
// A (PM/事業観点):
//   事業課題から逆算してAI活用を組み立てるパートナーとして、
//   構想・検証・本実装・運用までを一気通貫でご支援。
//   複数の大規模プロジェクトを動かしてきたPM・事業開発の知見を、
//   御社のAI導入に持ち込みます。
//
// B (実戦経験):
//   自社プロダクトを開発・運営してきた知見と、複数の大規模プロジェクトを動かしてきた経験をもとに、
//   御社のAI活用を構想から運用までトータルでサポートします。
//
// C (current — 全領域×ディレクション):
//   PM・新規事業・C向けプロダクト開発まで複数領域を横断してきたメンバーが、
//   御社のAI活用を構想・検証・本実装・運用まで一気通貫で支援。
//   事業全体を俯瞰しながら、適切なAI活用を組み立てます。
//
// D (高速検証):
//   事業課題のヒアリングから構想設計、PoC検証、本実装、運用まで一気通貫でご支援。
//   最小構成で効果を見極めながら段階的に拡張する、リスクを抑えた進め方を採用しています。
//
// E (パートナー):
//   単純な技術提供ではなく、御社の事業課題から逆算してAI活用を組み立てる
//   事業パートナーとして伴走。構想・検証・本実装・運用まで一気通貫でご支援します。
// ────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white">
      <div className="absolute inset-0 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs text-gray-700 shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          初回相談 受付中（無料・30分）
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 md:text-[64px]">
          AIの導入支援で
          <br />
          事業の成長や効率化をサポートします。
        </h1>

        <p className="mt-7 max-w-3xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
          AI開発・PM・新規事業・C向けプロダクト開発まで複数領域をリードしてきたメンバーたちが、
          御社のAI活用を構想・検証・本実装・運用まで一気通貫で支援。
          事業全体を俯瞰しながら、適切なAI活用を組み立てます。
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
          >
            無料で相談する
            <span aria-hidden>→</span>
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-7 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            サービスを見る
          </a>
        </div>

        <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          <Stat label="初回相談" value="無料" sub="30分・オンライン" />
          <Stat label="最短" value="2週間" sub="最速で動くものを作ります" />
          <Stat label="月額運用" value="5万円〜" sub="AIの導入サポートから" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold tracking-tight text-gray-900">
        {value}
      </div>
      <div className="text-xs text-gray-500">{sub}</div>
    </div>
  );
}
