const reasons = [
  {
    num: "01",
    title: "経営層と並走するPM・事業開発力",
    body:
      "上場企業の事業責任者・プロダクトマネージャー経験者が、経営課題から逆算したプロジェクト推進を担当。要件定義・仕様策定・進行管理・意思決定支援まで、経営層と並走する精度で支援します。",
  },
  {
    num: "02",
    title: "高品質な企画・開発・ディレクション",
    body:
      "大規模プロダクトの開発・運営などで培った高品質開発のスタンスとノウハウ。設計から実装・品質管理・運用までを一気通貫でディレクションし、長期運用に耐えるプロダクトを構築します。",
  },
  {
    num: "03",
    title: "事業を前に進める実行力",
    body:
      "事業課題のヒアリング、KPI設計、仮説検証、施策の実行・効果測定まで、事業を前に進める実行力を提供します。技術選定だけでなく、ビジネス成果に向けた泥臭い推進まで一気通貫で支援します。",
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
