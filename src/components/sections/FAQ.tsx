const faqs = [
  {
    q: "AIのことが全くわからなくても相談できますか？",
    a:
      "もちろん可能です。むしろそのフェーズの方を歓迎しています。専門用語は使わず、事業や業務の言葉でお話しします。「ChatGPTを開いたことがない」状態からでも問題ありません。",
  },
  {
    q: "ChatGPTやGeminiは個人で使っていますが、社内に展開することはできますか？",
    a:
      "可能です。社内利用ルール、アカウント管理、業務に合わせたプロンプト設計、機密情報の扱い方まで含めて、安全に展開できる形を一緒に整備します。",
  },
  {
    q: "どのくらいの期間で導入できますか？",
    a:
      "最短で動くものなら2〜4週間、本実装は規模により1〜3ヶ月が目安です。「とにかく早く一度動かしてみたい」というご相談も歓迎します。",
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
    q: "効果が出なかった場合はどうなりますか？",
    a:
      "本実装には進まず、そこで止める判断もご一緒します。「やめる勇気」を持てるのが、小さく試すことの一番のメリットです。検証で得た知見は次の判断材料として残ります。なお、結果にご満足いただけなかった場合は全額返金保証を適用します。",
  },
  {
    q: "リリース後の保守だけお願いすることもできますか？",
    a:
      "可能です。自社で作ったアプリ・社内ツールについて、セキュリティレビューや運用体制の構築だけのご相談もお受けしています。",
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
