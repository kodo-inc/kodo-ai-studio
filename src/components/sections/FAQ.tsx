const faqs = [
  {
    q: "AIやITに詳しくなくても相談できますか？",
    a:
      "もちろん可能です。むしろそのフェーズの方を歓迎しています。専門用語は使わず、事業や業務の言葉でお話しします。「何ができるかも分からない」状態からでも問題ありません。",
  },
  {
    q: "AI以外の開発（ホームページ・アプリ・ゲーム・業務システムなど）も依頼できますか？",
    a:
      "可能です。ホームページ制作、Webサービス・モバイルアプリ開発、ゲーム/ゲーミフィケーション、業務システム構築まで幅広く対応しています。AIは「使った方が効果的なときに使う」スタンスで、課題に合わせて手段を選びます。",
  },
  {
    q: "どのくらいの期間で作れますか？",
    a:
      "最短で動くものなら2〜4週間、本実装は規模により1〜3ヶ月が目安です。爆速ホームページ制作は最短1週間で公開可能。「とにかく早く一度動かしてみたい」というご相談も歓迎します。",
  },
  {
    q: "PM・ディレクションだけを入れていただくことはできますか？",
    a:
      "可能です。上場企業のプロダクト開発から新規事業立ち上げまで、複数の大規模プロジェクトをリードしてきた経験を持つメンバーが、御社のプロジェクトに外部PMとして参画します。要件定義・進行管理・ステークホルダー調整・リスク対応まで実務面から担います。",
  },
  {
    q: "新規事業のアイデア検証から相談できますか？",
    a:
      "もちろん歓迎します。アイデアの解像度を上げる壁打ちからスタートし、最短2週間でMVPを構築。市場の反応を見ながら次の意思決定に進む、リスクを抑えた検証サイクルを設計します。ゼロイチで事業を立ち上げてきた経験から、検証指標の設計まで含めてサポートします。",
  },
  {
    q: "プロダクト（アプリ・ゲーム）の継続率や課金率改善の支援も可能ですか？",
    a:
      "可能です。大規模な消費者向けアプリ・ゲームの運営経験から、ユーザー行動分析、KPIダッシュボード設計、ABテスト基盤、ゲーミフィケーション要素の導入、プロダクト改善サイクルまで一貫してご支援します。「使われ続け、売上をあげるプロダクト」を作るための判断軸を提供します。",
  },
  {
    q: "広告運用・SNS運用の支援もお願いできますか？",
    a:
      "可能です。Meta / Google / TikTok などの広告運用、ソーシャルメディア運用、AIを活用したコンテンツ制作・配信オペレーションまで、戦略設計から実行まで対応します。",
  },
  {
    q: "海外展開を見据えたプロダクト設計もお願いできますか？",
    a:
      "可能です。日本とグローバル両方で事業を立ち上げ・運営してきた経験から、ローカライズ・多言語対応・海外向けプロダクト設計までご支援します。US発の最新ツールも継続的にキャッチアップしているので、グローバル水準の実装が可能です。",
  },
  {
    q: "満足いかなかった場合、返金対応は出来ますか？",
    a:
      "私たちは、お客さまの成果に真摯にコミットしたいと考えており、もし結果にご満足いただけなければご料金は全額返金いたします。",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-gray-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            FAQ
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
            よくあるご質問
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-base font-medium text-gray-900">
                <span>{item.q}</span>
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
