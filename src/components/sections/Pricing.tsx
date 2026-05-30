const plans = [
  {
    name: "AI導入サポート",
    price: "5万円〜",
    sub: "AI活用をサポート",
    description:
      "AI活用フェーズの全般を伴走支援します。ツール選定、社内運用ルール整備、メンバーからの相談対応など、AIを業務に定着させるまでの伴走を継続的に提供します。",
    emphasis: false,
  },
  {
    name: "サービス開発",
    price: "10万円〜",
    sub: "Webサイト・業務AIアプリの設計・開発・導入",
    description:
      "小規模なWebサイトや業務支援アプリから対応可能です。課題整理 / 仕様設計 / 開発 / 導入支援を含みます。",
    emphasis: false,
  },
  {
    name: "その他",
    price: "要相談",
    sub: "PM支援・新規事業・マーケティング・DX推進など",
    description:
      "PM・ディレクション支援、新規事業の企画・検証、広告運用・SNS運用、DX・業務改善など、上記に収まらないご相談も幅広く対応しています。まずはお気軽にご相談ください。",
    emphasis: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-gray-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Pricing
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
            料金の目安
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            フェーズや課題に応じて、各メニューを組み合わせてご活用いただけます。
            詳細は初回ヒアリングの上で、個別にお見積りいたします。
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7"
            >
              <div className="text-sm font-semibold text-gray-700">
                {p.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <div className="font-display text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                  {p.price}
                </div>
              </div>
              <div className="mt-1 text-xs text-gray-500">{p.sub}</div>
              <p className="mt-5 text-sm leading-7 text-gray-700">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-8 space-y-2 text-xs leading-6 text-gray-500">
          <li>
            ※ 上記は目安です。機能・利用人数・データ量・セキュリティ要件・外部システム連携の有無により変動します。
          </li>
          <li>
            ※ AI API・サーバー等の利用料は別途実費精算となります。
          </li>
          <li>
            ※ ご要望に応じて、できるだけ月額負担を抑えた構成をご提案します。
          </li>
        </ul>
      </div>
    </section>
  );
}
