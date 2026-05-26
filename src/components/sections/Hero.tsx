import RotatingHeadline from "../RotatingHeadline";

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
          <RotatingHeadline />
          <br />
          事業の成長や効率化をサポートします。
        </h1>

        <p className="mt-7 max-w-3xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
          AI開発・プロダクト開発・ゲーム開発・新規事業などをリードしてきたメンバーたちが、
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#6848E5] px-7 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5638d3]"
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
          <Stat label="最低価格" value="5万円〜" sub="AIの導入サポートから" />
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
