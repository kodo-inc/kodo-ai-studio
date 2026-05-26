const reasons = [
  {
    num: "01",
    title: "事業課題から逆算するPM・ディレクション力",
    body:
      "上場企業のプロダクト開発・新規事業立ち上げ・大規模プロジェクトのPMを担ってきたメンバーが、要件定義から仕様策定・開発進行・関係者調整・リスク対応まで、事業課題から逆算してプロジェクトを推進します。",
  },
  {
    num: "02",
    title: "Webサイト・アプリ・業務システムの実装力",
    body:
      "自社プロダクトの開発・運営、クライアントワーク、業務効率化システム構築まで、用途・領域を問わず複数のプロジェクトを設計・開発・運用してきた実装力で、御社の課題に密着したシステムを構築します。",
  },
  {
    num: "03",
    title: "ゲーム企画・開発ノウハウ",
    body:
      "ゲームの企画・開発で培ったユーザーが熱中する仕組みや継続率、収益性の向上を提供します。",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="border-b border-gray-200 bg-gray-50/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Why KODO SOLUTIONS
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-5xl md:leading-[1.15]">
            事業を動かしてきた人材が、
            <br className="hidden md:block" />
            御社の事業をサポートします。
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            技術提供だけのベンダーではなく、大企業や成長スタートアップで新規事業・プロダクト開発・ゲーム開発・マーケティングをリードしてきたメンバーが、
            事業課題から逆算して打ち手を組み立てます。
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-t border-gray-200 pt-6">
              <div className="font-display text-xs font-semibold tracking-[0.2em] text-gray-500">
                {r.num}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-gray-900">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
