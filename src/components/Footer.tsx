export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center">
            <span className="text-[17px] font-bold tracking-tight text-black">
              KODO AI Studio
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            大企業や成長スタートアップでPM・新規事業・プロダクト開発をリードしてきたリーダー人材が、
            御社のAI活用を構想から運用まで一気通貫でご支援するパートナーです。
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Services
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              <a href="#services" className="hover:text-gray-900">
                AI導入支援
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-900">
                社内サービス構築
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-900">
                PM支援
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-900">
                AIアプリ開発
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-900">
                マーケティング支援
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              <a href="#contact" className="hover:text-gray-900">
                無料相談フォーム
              </a>
            </li>
            <li>
              <a
                href="https://kodo-inc.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                運営会社 ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-gray-500">
          © {new Date().getFullYear()} KODO AI Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
