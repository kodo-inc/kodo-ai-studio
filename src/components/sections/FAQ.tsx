const faqs = [
  {
    q: "AIのことが全くわからなくても相談できますか？",
    a:
      "もちろん可能です。むしろそのフェーズの方を歓迎しています。専門用語は使わず、事業や業務の言葉でお話しします。「ChatGPTを開いたことがない」状態からでも問題ありません。",
  },
  {
    q: "どのくらいの期間で導入できますか？",
    a:
      "最短で動くものなら2〜4週間、本実装は規模により1〜3ヶ月が目安です。「とにかく早く一度動かしてみたい」というご相談も歓迎します。",
  },
  {
    q: "PMだけを入れていただくことはできますか？",
    a:
      "可能です。上場企業のプロダクト開発から新規事業立ち上げまで、複数の大規模プロジェクトをリードしてきた経験を持つメンバーが、御社のプロジェクトに外部PMとして参画します。要件定義・進行管理・ステークホルダー調整・リスク対応まで実務面から担います。",
  },
  {
    q: "新規事業のアイデア検証から相談できますか？",
    a:
      "もちろん歓迎します。アイデアの解像度を上げる壁打ちからスタートし、最短2週間でMVPを構築。市場の反応を見ながら次の意思決定に進む、リスクを抑えた検証サイクルを設計します。ゼロイチで事業を立ち上げてきた経験から、検証指標の設計まで含めてサポートします。",
  },
  {
    q: "C向けプロダクト（アプリ・サービス）の継続率や課金率改善の支援も可能ですか？",
    a:
      "可能です。大規模な消費者向けAIアプリ・ゲームの運営経験から、ユーザー行動分析、KPIダッシュボード設計、ABテスト基盤、プロダクト改善サイクルまで一貫してご支援します。「使われ続け、売上をあげるプロダクト」を作るための判断軸を提供します。",
  },
  {
    q: "海外展開を見据えたプロダクト設計もお願いできますか？",
    a:
      "可能です。日本とグローバル両方で事業を立ち上げ・運営してきた経験から、ローカライズ・多言語対応・海外向けプロダクト設計までご支援します。US発の最新AIツールも継続的にキャッチアップしているので、グローバル水準の実装が可能です。",
  },
  {
    q: "他社のAI開発ベンダーと比べた強みは何ですか？",
    a:
      "技術提供だけのベンダーではなく、大企業や成長スタートアップでPM・新規事業・C向けプロダクト開発をリードしてきたリーダー人材が、事業課題から逆算してAI活用を組み立てます。「作って終わり」ではなく、現場で使われ続け、事業数字を動かすところまで責任を持つことが強みです。",
  },
  {
    q: "個人情報や機密情報を扱うAIも作れますか？",
    a:
      "可能です。OpenAI / Anthropic / Google などの法人向けプラン、Azure OpenAI、または社内ネットワーク内で動くオープンソースモデルなど、扱う情報の機密度に合わせて構成を選定します。",
  },
  {
    q: "今使っているSaaSと連携できますか？",
    a:
      "ほとんどのSaaSはAPI連携が可能です。すでに使っているサービスを置き換えるのではなく、AIを足す形で導入できるよう設計します。",
  },
  {
    q: "開発したアプリの所有権はどうなりますか？",
    a:
      "ソースコードはお客様に納品します。GitHubでの管理体制構築や、内製化に向けたドキュメント整備もサポートします。",
  },
  {
    q: "リリース後の保守だけお願いすることもできますか？",
    a:
      "可能です。自社で作ったアプリ・社内ツールについて、セキュリティレビューや運用体制の構築だけのご相談もお受けしています。",
  },
  {
    q: "効果が出なかった場合はどうなりますか？",
    a:
      "ご満足いただけなかった場合は、ご料金を全額返金いたします。検証で得た知見は次の意思決定の材料として活かしていただけます。",
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
