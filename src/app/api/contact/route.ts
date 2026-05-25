import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createHash } from "node:crypto";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  interests?: string[];
  message?: string;
  consent?: boolean;
  hp?: string;
  fbp?: string;
  fbc?: string;
};

const escapeHtml = (input: string) =>
  input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sha256 = (value: string) =>
  createHash("sha256").update(value).digest("hex");

const getClientIp = (request: Request): string | undefined => {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return undefined;
};

// Cookie value extractor (fbp / fbc set by Meta Pixel on client)
const getCookie = (cookieHeader: string | null, name: string): string | undefined => {
  if (!cookieHeader) return undefined;
  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
};

// Send Lead event to Meta Conversions API
const sendMetaCapiLead = async ({
  email,
  phone,
  request,
  fbpFromBody,
  fbcFromBody,
}: {
  email: string;
  phone: string;
  request: Request;
  fbpFromBody?: string;
  fbcFromBody?: string;
}): Promise<void> => {
  const pixelId = process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return; // CAPI not configured; silently skip
  }

  const cookieHeader = request.headers.get("cookie");
  const fbp = fbpFromBody ?? getCookie(cookieHeader, "_fbp");
  const fbc = fbcFromBody ?? getCookie(cookieHeader, "_fbc");
  const userAgent = request.headers.get("user-agent") ?? undefined;
  const clientIp = getClientIp(request);

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPhone = phone.replace(/[^\d]/g, "");

  const userData: Record<string, unknown> = {
    em: [sha256(normalizedEmail)],
  };
  if (normalizedPhone) userData.ph = [sha256(normalizedPhone)];
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: "https://ai.kodo-studio.com/",
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_name: "Contact Form Submission",
          currency: "JPY",
        },
      },
    ],
  };

  try {
    const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[contact] Meta CAPI error", res.status, text);
    }
  } catch (err) {
    console.error("[contact] Meta CAPI exception", err);
  }
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "リクエスト形式が正しくありません" },
      { status: 400 }
    );
  }

  // honeypot: if filled, silently accept without sending
  if (body.hp && body.hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const company = (body.company ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const website = (body.website ?? "").trim();
  const message = (body.message ?? "").trim();
  const interests = Array.isArray(body.interests) ? body.interests : [];
  const consent = body.consent === true;

  if (!name || !company || !email || !message) {
    return NextResponse.json(
      { error: "必須項目が入力されていません" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません" },
      { status: 400 }
    );
  }
  if (!consent) {
    return NextResponse.json(
      { error: "プライバシーポリシーへの同意が必要です" },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "ご相談内容が長すぎます (5000文字まで)" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL ?? "Kodo Studio <onboarding@resend.dev>";

  if (!apiKey || !toAddress) {
    console.error(
      "[contact] missing env vars: RESEND_API_KEY or CONTACT_TO_EMAIL"
    );
    return NextResponse.json(
      { error: "メール送信の設定が未完了です。管理者にご連絡ください。" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const interestList = interests.length > 0 ? interests.join(" / ") : "（未選択）";

  const textBody = [
    "Kodo Studio AI への新しいお問い合わせがありました。",
    "",
    `お名前: ${name}`,
    `会社名: ${company}`,
    `メール: ${email}`,
    `電話番号: ${phone || "（未入力）"}`,
    `会社URL: ${website || "（未入力）"}`,
    `ご相談内容: ${interestList}`,
    "",
    "─── 詳細 ───",
    message,
    "",
    "─── meta ───",
    `受信日時: ${new Date().toISOString()}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1c1917; max-width: 600px;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">Kodo Studio AI への新しいお問い合わせ</h2>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tbody>
          ${[
            ["お名前", escapeHtml(name)],
            ["会社名", escapeHtml(company)],
            ["メール", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`],
            ["電話番号", escapeHtml(phone || "（未入力）")],
            ["会社URL", website ? `<a href="${escapeHtml(website)}" target="_blank">${escapeHtml(website)}</a>` : "（未入力）"],
            ["ご相談内容", escapeHtml(interestList)],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <th align="left" style="padding: 8px 12px; background: #f5f5f4; border: 1px solid #e7e5e4; width: 120px;">${label}</th>
              <td style="padding: 8px 12px; border: 1px solid #e7e5e4;">${value}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="margin: 20px 0 8px; font-size: 14px; color: #57534e;">詳細</h3>
      <div style="padding: 14px 16px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.7;">${escapeHtml(message)}</div>
      <p style="margin-top: 16px; font-size: 12px; color: #78716c;">受信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `【お問い合わせ】${company} / ${name} 様`,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      console.error("[contact] resend error:", result.error);
      return NextResponse.json(
        { error: "メール送信に失敗しました。時間を置いて再度お試しください。" },
        { status: 502 }
      );
    }

    // Fire Meta CAPI Lead event (non-blocking — don't fail the response if CAPI fails)
    await sendMetaCapiLead({
      email,
      phone,
      request,
      fbpFromBody: body.fbp,
      fbcFromBody: body.fbc,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] exception:", err);
    return NextResponse.json(
      { error: "送信中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
