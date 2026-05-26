import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Contact
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
              事業を動かしてきた人材が、
              <br />
              御社の事業をサポートします。
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-700">
              事業課題、業務上の困りごと、新しいサービスの構想など、領域・フェーズを問わずご相談を承ります。
              技術や手段を売り込むのではなく、「そもそも何で解決すべきか」も含めて、
              事業視点からご回答します。
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  営業時間
                </dt>
                <dd className="mt-1 text-gray-900">平日 10:00 - 18:00</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  返信目安
                </dt>
                <dd className="mt-1 text-gray-900">2営業日以内</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  初回相談
                </dt>
                <dd className="mt-1 text-gray-900">無料（30分・オンライン）</dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-7 text-gray-700">
              <div className="font-semibold text-gray-900">
                こんなフェーズでもご相談を承ります
              </div>
              <ul className="mt-3 space-y-1.5 text-gray-700">
                <li>・ 事業課題に対して何ができるか整理したい</li>
                <li>・ 概算費用やプロジェクト期間の感覚を掴みたい</li>
                <li>・ 既存プロジェクトの方向性を相談したい</li>
                <li>・ 新規事業・プロダクトの構想段階から壁打ちしたい</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
