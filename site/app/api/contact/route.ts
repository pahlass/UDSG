import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, reason: "invalid_input" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, reason: "not_configured" });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Pahlass <onboarding@resend.dev>",
    to,
    replyTo: body.email,
    subject: `Nuevo contacto — ${body.name}`,
    text: [
      `Nombre: ${body.name}`,
      `Email: ${body.email}`,
      body.organization ? `Organización: ${body.organization}` : null,
      "",
      body.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { ok: false, reason: "send_failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
