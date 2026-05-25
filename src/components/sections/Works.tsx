// Works ordering (user-specified, latest):
//   1. KPI可視化ダッシュボード構築
//   2. メール業務の半自動化
//   3. 大規模プロダクト開発のPM・ディレクション (moved 1→3)
//   4. 新規事業のMVP高速検証
//   5. AIネイティブなアプリの企画・開発・運用
//   6. AIインフルエンサーのSNSマーケティング自動化

const works = [
  {
    category: "業務効率化",
    title: "KPI可視化ダッシュボード構築",
    description:
      "継続率・課金率・主要指標を一画面で誰でも見られる形に整理。意思決定をデータドリブンに加速する基盤を提供。",
    tags: ["KPI", "データ可視化", "意思決定"],
  },
  {
    category: "業務効率化",
    title: "メール業務の半自動化",
    description:
      "AIによる下書き生成、自動振り分け、テンプレート提案を組み合わせたメール業務オペレーションを設計・運用。判断や最終承認は人間が、繰り返し作業はAIが担う設計で、品質を保ちながら対応速度を大幅に向上させます。",
    tags: ["Claude Code", "オペレーション", "半自動化"],
  },
  {
    category: "PM / 開発ディレクション",
    title: "大規模プロダクト開発のPM・ディレクション",
    description:
      "複数の大規模AIプロダクトの企画・要件定義・開発進行管理を担当。デザイナー・エンジニアチームを編成し、リリースまでの全工程をディレクション。事業課題から逆算したプロダクト設計と、関係者調整・リスク対応まで一貫して支援。",
    tags: ["PM", "開発ディレクション", "大規模PJ"],
  },
  {
    category: "新規事業",
    title: "新規事業のMVP高速検証",
    description:
      "アイデア段階の事業を2〜4週間でMVP化し、市場の反応を高速検証。日本・グローバル両方の事業立ち上げ経験を活かしてサポート。",
    tags: ["MVP", "新規事業", "グローバル"],
  },
  {
    category: "AIネイティブアプリ",
    title: "AIネイティブなアプリの企画・開発・運用",
    description:
      "日本・グローバルで複数のC向けAIアプリを企画から開発・運用まで一貫して担当。継続率・課金率を上げるためのプロダクト設計と改善サイクルを構築しています。",
    tags: ["C向け", "AIネイティブ", "グローバル"],
  },
  {
    category: "マーケティング",
    title: "AIインフルエンサーのSNSマーケティング",
    description:
      "AIキャラクターを起点としたTikTok・Instagramマーケティングの戦略設計、コンテンツ運用、アウトリーチまでを設計・運用。",
    tags: ["TikTok", "Instagram", "戦略設計"],
  },
  {
    category: "Web制作",
    title: "高速ホームページ制作",
    description:
      "コーポレートサイト・LP・採用ページなどを最短1週間で公開。デザイン・構成・コピー設計からSEO基本対応・公開後の改善まで一括で対応します。",
    tags: ["LP", "コーポレート", "最短1週間"],
  },
  {
    category: "マーケティング",
    title: "グローバルSNSマーケティング",
    description:
      "日本・北米・アジア圏など海外市場に向けたSNS運用・広告戦略の設計と実行。ローカライズ・カルチャー設計・KPI設計までを一気通貫でサポートします。",
    tags: ["グローバル", "SNS運用", "海外展開"],
  },
  {
    category: "個人向けアプリ",
    title: "個人用英語学習アプリ",
    description:
      "クライアントの経営者のニーズに合わせて、学習履歴・レベルに沿って出題・会話練習をパーソナライズするAI英語学習アプリを企画・開発・運用。",
    tags: ["AIネイティブ", "EdTech", "パーソナライズ"],
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="border-b border-gray-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Works
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-5xl md:leading-[1.15]">
            実績
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            AIを使った社内サービス構築、Webサイト構築、AIアプリ開発、PM支援、新規事業立ち上げなど、
            幅広い範囲でご相談を承ります。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-gray-300"
            >
              <span className="inline-flex w-fit rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                {w.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                {w.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-gray-700">
                {w.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {w.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] text-gray-600 ring-1 ring-gray-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
