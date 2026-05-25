import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜KODO AI Studio",
  description:
    "KODO AI Studio のプライバシーポリシー。個人情報の取扱い、Cookie・トラッキング技術の利用について。",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            ← トップに戻る
          </Link>
        </div>

        <h1 className="font-display text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="mt-3 text-sm text-gray-500">最終更新日: 2026年5月25日</p>

        <div className="mt-12 space-y-10 text-sm leading-7 text-gray-800 md:text-[15px] md:leading-8">
          <Section title="1. 事業者情報">
            <p>
              本ウェブサイト（以下「本サイト」）は、株式会社 KODO（以下「当社」）が運営しています。
              本プライバシーポリシー（以下「本ポリシー」）は、当社が本サイトおよび関連サービスの提供にあたって取得・利用する個人情報の取扱い方針を定めるものです。
            </p>
          </Section>

          <Section title="2. 取得する個人情報">
            <p>当社は、本サイトを通じて以下の情報を取得することがあります。</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>お問い合わせフォームにご入力いただいた情報（氏名、会社名、メールアドレス、電話番号、会社URL、ご相談内容など）</li>
              <li>本サイトの利用に関する情報（アクセスログ、IPアドレス、ブラウザ種別、リファラ、滞在時間など）</li>
              <li>Cookie、Pixelタグ等のトラッキング技術によって取得される情報</li>
            </ul>
          </Section>

          <Section title="3. 利用目的">
            <p>取得した個人情報は、以下の目的の範囲内で利用します。</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>お問い合わせ・ご相談への回答および対応</li>
              <li>サービスのご提案・お見積りのご提示</li>
              <li>本サイトおよびサービスの品質向上・新機能の検討</li>
              <li>広告効果の測定・最適化</li>
              <li>不正アクセス・不正利用の防止</li>
              <li>法令に基づく対応</li>
            </ul>
          </Section>

          <Section title="4. 第三者への提供">
            <p>
              当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </Section>

          <Section title="5. 業務委託">
            <p>
              当社は、利用目的の達成に必要な範囲で、個人情報の取扱いを外部の事業者に委託することがあります。委託先に対しては、適切な監督を行います。主な委託先は以下のとおりです。
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>ホスティング: Vercel Inc.</li>
              <li>メール送信: Resend, Inc.</li>
              <li>広告効果測定: Meta Platforms, Inc.</li>
            </ul>
          </Section>

          <Section title="6. Cookie・トラッキング技術の利用">
            <p>
              本サイトでは、ユーザー体験の向上、アクセス分析、広告効果の測定のため、Cookie および類似のトラッキング技術（Meta Pixel、Meta Conversions API（CAPI）等）を利用しています。
            </p>
            <p className="mt-3">
              これらの技術により、本サイトの閲覧情報やお問い合わせ送信などのイベントが、Meta Platforms, Inc. に送信される場合があります。送信される情報は広告配信の最適化および効果測定にのみ利用され、お問い合わせフォームに入力された個人情報のうちメールアドレス等は、Meta に送信する前にハッシュ化（一方向に変換）されます。
            </p>
            <p className="mt-3">
              Cookie の利用を希望しない場合は、ブラウザの設定により Cookie を無効化することができます。ただしその場合、本サイトの一部機能が正常に動作しないことがあります。
            </p>
          </Section>

          <Section title="7. 保管期間">
            <p>
              取得した個人情報は、利用目的の達成に必要な期間に限り保管します。お問い合わせいただいた情報については、対応完了後、合理的な期間内に削除または匿名化します。
            </p>
          </Section>

          <Section title="8. 安全管理措置">
            <p>
              当社は、取得した個人情報の漏えい、滅失または毀損を防止するため、適切な安全管理措置を講じます。
            </p>
          </Section>

          <Section title="9. 開示・訂正・削除等のご請求">
            <p>
              ご本人から個人情報の開示、訂正、利用停止、削除等のご請求があった場合は、ご本人であることを確認のうえ、合理的な期間内に対応します。下記のお問い合わせ先までご連絡ください。
            </p>
          </Section>

          <Section title="10. 本ポリシーの改定">
            <p>
              当社は、必要に応じて本ポリシーを改定することがあります。重要な変更がある場合は、本サイト上で適切に通知します。
            </p>
          </Section>

          <Section title="11. お問い合わせ先">
            <p>
              本ポリシーに関するお問い合わせは、以下までご連絡ください。
            </p>
            <ul className="mt-3 space-y-1 pl-1">
              <li>株式会社 KODO</li>
              <li>
                Email: <a href="mailto:support@kodo-inc.jp" className="text-[#6848E5] underline">support@kodo-inc.jp</a>
              </li>
            </ul>
          </Section>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
