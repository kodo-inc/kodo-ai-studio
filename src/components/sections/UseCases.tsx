// 30 use cases — refined to avoid "things ChatGPT alone can do".
// Focused on cases that need development / integration / PM / direction.
const cases = [
  // 戦略・相談・企画系
  "AIで業務効率化したい",
  "AIで何ができるか相談したい",
  "新規事業を企画したい",
  "新規事業のAI活用を構想したい",
  "AIの導入戦略を整理したい",
  "Claude Codeの使い方を学びたい",
  "Claude Codeで社内開発を加速したい",
  // 爆速制作系
  "爆速AIアプリ開発",
  "爆速ホームページ制作",
  "採用LP・コーポレートサイトを最短で作りたい",
  // 開発・実装系
  "AI機能を自社プロダクトに組み込みたい",
  "社内向けAIシステムを開発したい",
  "AIエージェントを構築したい",
  "業務フローのAI自動化",
  // ゲーム・ゲーミフィケーション系
  "ゲームの企画・開発",
  "プロダクトにゲーミフィケーションを導入したい",
  "ゲーム/アプリの継続率を上げたい",
  "課金導線・収益性を改善したい",
  // PM / ディレクション系
  "プロジェクトのPM支援",
  "開発を行いたいけどPMが足りない",
  "開発体制の編成・ディレクション",
  // 業務統合系
  "電話予約・電話対応を自動化したい",
  "問い合わせメールの自動振り分け",
  "受発注メールの仕分けと転記",
  "議事録の自動作成・要約",
  "既存システムとのAI連携",
  "社内ナレッジの全文検索AI",
  "ヘルプデスクのチケット自動分類",
  // 業界別
  "飲食店の予約管理・口コミ対応",
  "多店舗のオペレーション改善",
  "ECサイトの運営自動化",
  // データ・マーケ・改善系
  "アプリの継続率・課金率を改善したい",
  "アプリのKPIダッシュボード構築",
  "ABテスト基盤の構築",
  "広告運用の改善",
  "ソーシャルメディアの運用支援",
  "マーケティングのAI自動化",
  "AIインフルエンサー運用の自動化",
];

export default function UseCases() {
  const row1 = [...cases, ...cases];
  const row2 = [...cases.slice().reverse(), ...cases.slice().reverse()];

  return (
    <section className="border-b border-gray-200 bg-white py-16">
      <div className="space-y-3">
        <Marquee items={row1} speed="normal" />
        <Marquee items={row2} speed="slow" />
      </div>
    </section>
  );
}

function Marquee({
  items,
  speed,
}: {
  items: string[];
  speed: "normal" | "slow";
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex w-max gap-3 ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
