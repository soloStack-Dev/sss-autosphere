import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailMessageSchema } from "@/lib/validation";
import { resendConfig } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = emailMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet. Use the phone / WhatsApp options instead." },
      { status: 503 },
    );
  }

  const { name, phone, email, message } = parsed.data;
  const subject = `New enquiry from ${name}`;
  const text = `Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}

Message:
${message}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: resendConfig.from,
      to: [resendConfig.to],
      replyTo: email || undefined,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message ?? "Could not send the email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send the email. Try again shortly." },
      { status: 500 },
    );
  }
}