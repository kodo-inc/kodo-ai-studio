# Kodo Studio AI — LP

中小企業・スモールビジネス向け AI 導入支援サービスのランディングページ。

- **Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Hosting**: Vercel
- **Contact form**: Resend (https://resend.com)
- **Target domain**: `ai.kodostudio.com`

---

## ローカル開発

```bash
npm install
cp .env.example .env.local   # 値を埋める
npm run dev
# → http://localhost:3000
```

問い合わせフォームをローカルで実際にメール送信して動作確認したい場合は、
`.env.local` に Resend の API キーと、自分宛の受信メールを入れてください。
（メールを送りたくない場合は、空のままでもページ表示は問題ありません。送信時にエラーが返ります）

---

## デプロイ手順（今日リリースするための最短ルート）

### 1. GitHub にプッシュ

```bash
git add -A
git commit -m "Initial Kodo Studio AI LP"
gh repo create kodostudio/kodo-ai --private --source=. --push
```

### 2. Vercel にインポート

1. https://vercel.com/new から GitHub リポジトリを選択
2. Framework Preset: **Next.js**（自動検出）
3. Root Directory: そのまま
4. **環境変数** を以下の3つ登録（次の節を参照）
5. Deploy → 数分で `kodo-ai.vercel.app` のような URL が発行される

### 3. 環境変数

Vercel の Project Settings → Environment Variables に以下を登録。
Production / Preview / Development の3つすべてにチェック。

| Key | Value | 例 |
|---|---|---|
| `RESEND_API_KEY` | Resend の API キー | `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `CONTACT_TO_EMAIL` | 問い合わせを受信するメールアドレス | `hello@kodostudio.com` |
| `CONTACT_FROM_EMAIL` | 送信元 (Resend で認証したアドレス) | 試運転中は `Kodo Studio <onboarding@resend.dev>` |

### 4. Resend のセットアップ

#### 4-a. すぐ使う場合（ドメイン認証なし）

1. https://resend.com にサインアップ
2. API Keys → Create API Key → コピーして Vercel の `RESEND_API_KEY` に貼る
3. `CONTACT_FROM_EMAIL` は `Kodo Studio <onboarding@resend.dev>` のままでOK
4. ただしこの状態だと **本人宛 (登録メール) にしか送れない** のがResend の仕様。
   → `CONTACT_TO_EMAIL` も Resend に登録したメールアドレスにする

#### 4-b. 本番運用（kodostudio.com から送信）

1. Resend → Domains → Add Domain で `kodostudio.com` または `mail.kodostudio.com` を追加
2. 表示される SPF / DKIM / Return-Path の DNS レコードを Cloudflare 等で追加
3. Verified になったら `CONTACT_FROM_EMAIL` を
   `Kodo Studio AI <noreply@kodostudio.com>` 等に変更
4. これで誰宛にでも送信可能になる

> 月3000通までは無料枠。それ以上送る場合は有料プラン（$20/月〜）

### 5. サブドメイン `ai.kodostudio.com` を割り当て

#### Vercel 側

1. Project → Settings → Domains
2. `ai.kodostudio.com` を入力 → Add
3. 表示される **CNAME レコード** をメモ（通常 `cname.vercel-dns.com`）

#### DNS 側（Cloudflare / お名前.com / Route53 etc.）

| Type | Name | Value | Proxy |
|---|---|---|---|
| CNAME | `ai` | `cname.vercel-dns.com` | DNS only (橙の雲 OFF) |

- Cloudflare の場合は **必ず Proxy をOFF** にする（オレンジ雲をグレーに）。
  Proxy ON だと Vercel の SSL 証明書発行が止まる
- 伝搬まで数分〜15分程度。Vercel 側で自動的に Let's Encrypt 証明書が発行される
- `https://ai.kodostudio.com` で開けばOK

---

## ファイル構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト, Noto Sans JP + Inter
│   ├── page.tsx            # LP本体 (各セクションを組み立て)
│   ├── globals.css         # Tailwind + デザイントークン
│   └── api/
│       └── contact/
│           └── route.ts    # 問い合わせフォームAPI (Resend)
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    └── sections/
        ├── Hero.tsx
        ├── Issues.tsx       # 「こんな課題ありませんか」
        ├── UseCases.tsx     # 横スクロールのユースケース帯
        ├── Services.tsx     # 6つのサービス
        ├── WhyUs.tsx        # 選ばれる理由
        ├── Pricing.tsx      # 3プラン
        ├── Process.tsx      # 5ステップ
        ├── FAQ.tsx
        ├── Contact.tsx      # お問い合わせセクション
        └── ContactForm.tsx  # フォーム本体 (client component)
```

---

## 文言・内容のカスタマイズ

文言は基本的に各セクションコンポーネントの先頭に配列定数で書いてあります。
編集したい場所:

- メインキャッチコピー → `src/components/sections/Hero.tsx` の `<h1>` 内
- サービス一覧 → `src/components/sections/Services.tsx` の `services` 配列
- 料金 → `src/components/sections/Pricing.tsx` の `plans` 配列
- FAQ → `src/components/sections/FAQ.tsx` の `faqs` 配列
- ユースケース帯 → `src/components/sections/UseCases.tsx` の `cases` 配列
- 会社情報・SNS等 → `src/components/Footer.tsx`
- メタ情報・タイトル・OGP → `src/app/layout.tsx` の `metadata`

---

## 今後の拡張アイデア

- お客様の声 / 実績セクション (`Testimonials.tsx`)
- 事例の個別ページ (`/cases/[slug]`)
- ブログ / 記事 (`/blog`)
- 問い合わせ受信時に Slack 通知 (`/api/contact/route.ts` に Webhook 追加)
- スパム対策の強化 (Cloudflare Turnstile / hCaptcha 追加)
- 多言語化 (next-intl)

---

## ライセンス

Private. © Kodo Studio.
