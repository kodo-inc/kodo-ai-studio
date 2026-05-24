const steps = [
  {
    num: "01",
    title: "初回相談（無料・30分）",
    body:
      "事業課題やAI活用に関するご状況をお伺いします。AIで解決すべきか、別の手段が適しているか、その場で素直にご回答します。",
  },
  {
    num: "02",
    title: "ヒアリング",
    body:
      "事業内容、業務フロー、現状のシステム構成、AI導入に向けた要望などを詳しくお伺いします。技術選定の前に、課題の構造を一緒に整理するフェーズです。",
  },
  {
    num: "03",
    title: "調査・プランのご提案",
    body:
      "ヒアリング内容をもとに、AI活用の方向性・優先順位・期間・費用感を整理した提案書とロードマップをご提示します。やるべきこと/やらないことを明確にします。",
  },
  {
    num: "04",
    title: "プロジェクト支援・開発",
    body:
      "プロジェクトに必要な体制を編成し、開発・PM支援・サービス構築などを進めます。要件・進捗・品質を一貫してコントロールし、御社の意思決定を支えます。",
  },
  {
    num: "05",
    title: "運用・改善の伴走",
    body:
      "リリース後も、改善・機能追加・運用ルール見直しを継続支援。月額の伴走で「使い続けられる」状態を維持します。",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-gray-200 bg-gray-50/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Process
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
            相談から運用まで、
            <br />
            5つのステップで。
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            最初に大きく決めません。各ステップで「次に進むか、やめるか」を一緒に判断していきます。
          </p>
        </div>

        <ol className="mt-14 space-y-4">
          {steps.map((s) => (
            <li
              key={s.num}
              className="grid items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-[120px_1fr] md:p-7"
            >
              <div>
                <div className="font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900">
                  {s.num}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
