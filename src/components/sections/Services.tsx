// ────────────────────────────────────────────────────────────────
// Body / motivation options (user picked A for each; B/C/D/E kept for swap)
//
// ─── 01 AI導入支援 ─────────
//   A (current — 戦略整理路線):
//     事業課題と業務フローを起点に、AIで効果が出るポイントを構造的に洗い出します。
//     手段から入らず、目的・成果指標・優先度を整理した上で、御社の規模・体制・予算に
//     合わせた導入ロードマップをご提示します。
//
//   B (経営伴走路線):
//     経営課題やKPIの議論からスタートし、AIで実現可能な打ち手を構想・整理します。
//     技術選定だけでなく、社内体制・運用設計・効果測定の仕組みまで含めて、
//     御社の意思決定を支える形で伴走します。
//
//   C (構想設計路線):
//     AI活用の構想設計から、優先度の高い領域の検証、社内合意形成まで一気通貫でご支援します。
//     最新のAI動向と御社の事業フェーズを照らし合わせ、投資対効果が見込めるテーマを選定。
//     実装に進める前提でロードマップを設計します。
//
// ─── 02 業務AIシステム モチベセクション ─────────
//   A (current — 汎用ツールでは届かない深さ):
//     ・ ChatGPT等の汎用ツールでは扱えない、社内データを安全に活用したAI活用が可能
//     ・ 業務フローに密結合させることで、汎用ツールでは出せない深い業務効率化を実現
//     ・ 一度作れば社内資産として残り、外部サービスの利用料増加に左右されない投資効率
//
//   B (競争優位):
//     ・ 御社の業務ノウハウを取り込んだ独自AIで、競合にはない競争優位を構築
//     ・ 機密情報や個人情報を安全に扱える、御社専用環境での運用
//     ・ 業務にフィットした設計で、現場の運用に「ちゃんと使われる」AIに
//
//   C (定着・拡張):
//     ・ 御社の業務に最適化された設計で、現場の運用に確実に定着
//     ・ セキュリティ・権限管理を含めた、機密情報も扱える環境設計
//     ・ 業務の変化に合わせて継続的に拡張・改善できる、御社の資産として残る
//
// ─── 03 PM支援 ボディ ─────────
//   A (current — 即戦力PM):
//     複数の大規模プロジェクトをリードしてきた経験を持つPMが、要件定義・仕様策定・
//     ベンダーマネジメント・進捗管理・リスク対応までを一気通貫で担います。
//     社内に専任PMがいない場合の即戦力としてご活用いただけます。
// ────────────────────────────────────────────────────────────────

const featured = [
  {
    num: "01",
    title: "AI導入支援",
    sub: "ゼロからの相談から、御社に合うロードマップまで",
    body:
      "事業課題と業務フローを起点に、AIで効果が出るポイントを構造的に洗い出します。手段から入らず、目的・成果指標・優先度を整理した上で、御社の規模・体制・予算に合わせた導入ロードマップをご提示します。",
    tags: ["事業課題ヒアリング", "投資対効果試算", "優先度設計", "導入ロードマップ"],
  },
  {
    num: "02",
    title: "業務AIシステムの設計・開発",
    sub: "現場の業務フローに即した、専用AIシステムを",
    body:
      "業務効率化、問い合わせ対応、レポート作成、データ活用など、御社の課題に合わせたAIシステムを設計・開発します。課題整理から仕様策定、開発、導入後の改善まで、現場で実際に使われる形を目指して支援します。",
    tags: ["業務効率化", "問い合わせ対応", "レポート自動化", "データ活用"],
  },
];

const others = [
  {
    num: "03",
    title: "PM支援",
    body:
      "複数の大規模プロジェクトをリードしてきた経験を持つPMが、要件定義・仕様策定・ベンダーマネジメント・進捗管理・リスク対応までを一気通貫で担います。社内に専任PMがいない場合の即戦力としてご活用いただけます。",
  },
  {
    num: "04",
    title: "AIアプリ開発",
    body:
      "AIを使ったWebサービスやモバイルアプリの企画・開発・運営を行います。プロトタイプから本リリース、運用改善まで、スピードを保ちながら品質を担保します。",
  },
  {
    num: "05",
    title: "爆速ホームページ制作",
    body:
      "コーポレートサイト・LPなどを最短1週間で納品。デザイン・構成・コピーの設計からSEO基本対応まで一括で対応し、まず公開して育てるスタイルで進めます。",
  },
  {
    num: "06",
    title: "AIマーケティング支援",
    body:
      "AIを使ったTikTokやInstagramなどのSNSマーケティング、広告運用のサポートなどを行います。",
  },
  {
    num: "07",
    title: "保守・改善",
    body:
      "導入後の不具合対応、改善、機能追加、セキュリティ面の見直しまで継続的に支援します。一度作って終わりではなく、業務に合わせて育てます。",
  },
  {
    num: "08",
    title: "新規事業の高速検証",
    body:
      "アイデアから最短2週間でMVPを構築し、市場の反応を検証。仮説立案、要件設計、プロトタイプ開発、検証指標の設計まで、新規事業をゼロイチで立ち上げてきた経験を活かしてサポートします。",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-gray-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Services
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-5xl md:leading-[1.15]">
            AI導入相談から
            <br className="hidden md:block" />
            PM・開発・マーケティング支援まで
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            あらゆる領域であなたのビジネスをお手伝いいたします。
          </p>
        </div>

        {/* Featured 01 / 02 — large cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((s) => (
            <article
              key={s.num}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50/60 to-white p-8 md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

              <div className="flex items-baseline justify-between">
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-gray-500">
                  {s.num}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                {s.sub}
              </p>

              <p className="mt-6 flex-1 text-sm leading-7 text-gray-700 md:text-[15px] md:leading-7">
                {s.body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white px-3 py-1 text-[11px] text-gray-600 ring-1 ring-gray-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* 03-07 — smaller grid (last item spans full width if alone) */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {others.map((s, i) => {
            const isLastAlone =
              i === others.length - 1 && others.length % 2 !== 0;
            return (
              <article
                key={s.num}
                className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-7 ${
                  isLastAlone ? "md:col-span-2" : ""
                }`}
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-gray-500">
                  {s.num}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
