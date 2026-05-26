const reasons = [
  {
    num: "01",
    title: "事業課題から逆算するPM・ディレクション力",
    body:
      "上場企業のプロダクト開発・新規事業立ち上げ・大規模プロジェクトのPMを担ってきたメンバーが、要件定義から仕様策定・開発進行・関係者調整・リスク対応まで、事業課題から逆算してプロジェクトを推進します。",
  },
  {
    num: "02",
    title: "Webサイト・アプリ・ゲーム・業務システムの実装力",
    body:
      "自社プロダクトの開発・運営、クライアントワーク、業務効率化システム構築まで、用途・領域を問わず複数のプロジェクトを設計・開発・運用してきた実装力で、御社の課題に密着したシステムを構築します。",
  },
  {
    num: "03",
    title: "ゲーム企画・開発",
    body:
      "ゲームの企画・開発、ゲーミフィケーション要素の導入を通じて、継続率や収益性の向上を実現してきた経験を提供します。プロダクト設計、KPI設計、運用改善まで一貫して支援し、ユーザーが熱中する仕組みづくりを得意としています。",
  },
  {
    num: "04",
    title: "最新AI動向と日本×グローバル事業経験",
    body:
      "US発の最新AIツール・モデルを継続的にキャッチアップして実務で使い込みつつ、国内事業とグローバル事業の両方で立ち上げ・運営してきた経験を提供します。世界最前線のAI活用ノウハウを、御社のプロジェクトに取り入れます。",
  },
  {
    num: "05",
    title: "新規事業立ち上げの伴走",
    body:
      "MVP設計、仮説検証、スケール戦略まで、ゼロイチで事業を立ち上げてきた経験を活かし、御社の新規事業をAIで高速に検証・拡張します。成功パターンだけでなく、失敗の知見も含めて共有します。",
  },
  {
    num: "06",
    title: "C向けプロダクト開発の知見",
    body:
      "大規模な消費者向けアプリ・ゲームの開発・運営経験から、継続率・課金率を上げるプロダクト設計と改善サイクルを提供します。「リリースして終わり」ではなく、「使われ続ける」プロダクトを作るための判断軸が違います。",
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
