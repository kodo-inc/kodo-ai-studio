import Image from "next/image";

// Works ordering (user-specified, latest):
//   1. KPI可視化ダッシュボード構築
//   2. メール業務の半自動化
//   3. 大規模プロダクト開発のPM・ディレクション (moved 1→3)
//   4. 新規事業のMVP高速検証
//   5. AIネイティブなアプリの企画・開発・運用
//   6. AIインフルエンサーのSNSマーケティング自動化

const works = [
  {
    category: "AI✕業務効率化",
    title: "KPI可視化ダッシュボード構築",
    description:
      "継続率・課金率・主要指標を一画面で誰でも見られる形に整理。意思決定をデータドリブンに加速する基盤を提供。",
    tags: ["KPI", "データ可視化", "意思決定"],
    image: "/images/works/01-kpi.jpg",
  },
  {
    category: "AI✕業務効率化",
    title: "メール業務の半自動化",
    description:
      "AIによる下書き生成、自動振り分け、テンプレート提案を組み合わせたメール業務オペレーションを設計・運用。判断や最終承認は人間が、繰り返し作業はAIが担う設計で、品質を保ちながら対応速度を大幅に向上させます。",
    tags: ["Claude Code", "オペレーション", "半自動化"],
    image: "/images/works/02-mail.jpg",
  },
  {
    category: "PM / 開発ディレクション",
    title: "大規模プロダクト開発のPM・ディレクション",
    description:
      "複数の大規模AIプロダクトの企画・要件定義・開発進行管理を担当。デザイナー・エンジニアチームを編成し、リリースまでの全工程をディレクション。事業課題から逆算したプロダクト設計と、関係者調整・リスク対応まで一貫して支援。",
    tags: ["PM", "開発ディレクション", "大規模PJ"],
    image: "/images/works/03-pm.jpg",
  },
  {
    category: "AIネイティブアプリ",
    title: "AIネイティブなアプリの企画・開発・運用",
    description:
      "日本・グローバルで複数のC向けアプリを企画から開発・運用まで一貫して担当。継続率・課金率を上げるためのプロダクト設計と改善サイクルを構築しています。",
    tags: ["C向け", "AIネイティブ", "グローバル"],
    image: "/images/works/04-app.jpg",
  },
  {
    category: "マーケティング",
    title: "広告運用",
    description:
      "Meta / Google / TikTok などのプラットフォームでの広告運用を、戦略設計からクリエイティブ制作・配信改善まで一気通貫でサポートします。",
    tags: ["Meta広告", "Google広告", "TikTok広告"],
    image: "/images/works/05-ads.jpg",
  },
  {
    category: "マーケティング",
    title: "SNSマーケティング",
    description:
      "AIインフルエンサーを起点としたTikTok・Instagramマーケティングの戦略設計、コンテンツ運用、アウトリーチまでを日本・グローバルで設計・運用。",
    tags: ["TikTok", "Instagram", "戦略設計"],
    image: "/images/works/06-sns.jpg",
  },
  {
    category: "Web制作",
    title: "高速ホームページ制作",
    description:
      "コーポレートサイト・LP・採用ページなどを最短1週間で公開。デザイン・構成・コピー設計からSEO基本対応・公開後の改善まで一括で対応します。",
    tags: ["LP", "コーポレート", "最短1週間"],
    image: "/images/works/07-web.jpg",
  },
  {
    category: "ゲーミフィケーション",
    title: "ゲーミフィケーションアプリの企画・開発・運用",
    description:
      "クライアントの経営者のニーズに合わせて、ゲーミフィケーション要素を活かしたアプリを企画・開発・運用。継続率や収益性を高める仕組みづくりを担当。",
    tags: [],
    image: "/images/works/08-gamification.jpg",
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
            AI導入・社内システム構築・Webサイト/アプリ/ゲーム開発・マーケティング・新規事業立ち上げなど、
            幅広い範囲でご相談を承ります。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  unoptimized={w.image.endsWith(".svg")}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex w-fit rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                  {w.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                  {w.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-700">
                  {w.description}
                </p>
                {w.tags.length > 0 && (
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
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
