import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyRecaptcha } from '@/lib/verifyRecaptcha';
import { z } from 'zod';

const bodySchema = z.object({
  name:    z.string(),
  email:   z.string().email(),
  purpose: z.string(),
  message: z.string(),
  token:   z.string(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const parsed = bodySchema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  // ✓ reCAPTCHA
  const isHuman = await verifyRecaptcha(parsed.data.token);
  if (!isHuman) return NextResponse.json({ ok: false }, { status: 401 });

  // ✉️ send email via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:    'Talent Portfolio <noreply@talent.dev>',
      to:      [process.env.CONTACT_TO_EMAIL!],
      subject: `[${parsed.data.purpose}] from ${parsed.data.name}`,
      replyTo: parsed.data.email, 
      html: `<p>${parsed.data.message.replace(/\n/g, '<br>')}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
