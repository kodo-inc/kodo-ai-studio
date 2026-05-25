const reasons = [
  {
    num: "01",
    title: "大規模プロジェクトのリーダー経験人材",
    body:
      "上場企業のプロダクト開発や新規事業の立ち上げなど、複数の大規模プロジェクトをリードしてきたメンバーたちが御社のAI導入プロジェクトをサポートします。",
  },
  {
    num: "02",
    title: "業務AIシステムを作ってきた実装力",
    body:
      "自社AIプロダクトの開発・運営、業務効率化システムの構築、クライアントワークでのAI開発まで、複数のシステムを設計・開発・運用してきた実装力で、御社の業務に密着した独自AIシステムを構築します。",
  },
  {
    num: "03",
    title: "全領域でのAI使用経験とディレクション",
    body:
      "経営・PM・デザイン・開発・マーケティング・データ分析の全領域でAIツールを使い込み、業務に組み込んできた経験から、御社のAI活用も事業全体を俯瞰して設計します。専門家を集めてチームを編成し、最適解を引き出すディレクションを軸にしています。",
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
      "大規模な消費者向けAIアプリ・ゲームの開発・運営経験から、継続率・課金率を上げるプロダクト設計と改善サイクルを提供します。「リリースして終わり」ではなく、「使われ続ける」プロダクトを作るための判断軸が違います。",
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
            Why KODO AI Studio
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-5xl md:leading-[1.15]">
            事業を動かしてきた人材が、
            <br className="hidden md:block" />
            御社のAI導入に入ります。
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            技術提供だけのベンダーではなく、大企業や成長スタートアップでPM・新規事業・C向けプロダクト開発をリードしてきたリーダー人材が、
            事業課題から逆算してAI活用を組み立てます。
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
