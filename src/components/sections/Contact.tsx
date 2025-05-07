'use client';

import { useState } from 'react';
import { z } from 'zod';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const schema = z.object({
  name:    z.string().min(2, 'Name is required'),
  email:   z.string().email('Invalid email'),
  purpose: z.string().default('Job Opportunity'),
  message: z.string().min(10, 'Please add a few details'),
});

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // ✉️ gather & validate client‑side
    const fd   = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    // 🔐 reCAPTCHA v3 token
    const token = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: 'contact' },
    );

    setState('submitting');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...parsed.data, token }),
    });

    setState(res.ok ? 'success' : 'error');
    if (!res.ok) setError('Something went wrong — please email me directly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-xl px-4 py-32 text-center">
      <h2 className="mb-4 text-3xl font-bold text-surge">Let’s Build Together</h2>
      <p className="mb-8 text-skin-muted">
        I’m open to full‑time, remote&nbsp;/ hybrid software‑engineering roles.
      </p>

      <form
        onSubmit={handleSubmit}
        className={twMerge(
          'space-y-4 rounded-2xl bg-white/5 p-8 backdrop-blur dark:bg-black/10',
          state === 'success' && 'pointer-events-none opacity-50',
        )}
      >
        <input
          name="name"
          placeholder="Your name"
          className="w-full rounded-md bg-skin-bg p-3 text-sm text-skin-fg"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="you@email.com"
          className="w-full rounded-md bg-skin-bg p-3 text-sm"
          required
        />

        <select
          name="purpose"
          className="w-full rounded-md bg-skin-bg p-3 text-sm"
        >
          <option>Job Opportunity</option>
          <option>Collaboration</option>
          <option>General Inquiry</option>
        </select>

        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about the project / role …"
          className="w-full rounded-md bg-skin-bg p-3 text-sm"
          required
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
  type="submit"
  disabled={state === 'submitting' || state === 'success'}
  className="w-full rounded-lg bg-emerald-500 py-3 font-medium text-white
             transition hover:scale-105 hover:bg-emerald-600 hover:shadow-xl
             focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-50"
>
  {state === 'submitting' ? 'Sending…' : 'Send Message ↗'}
</button>


        {state === 'success' && (
          <p className="text-sm text-green-400">✓ Message sent — talk soon!</p>
        )}
      </form>

      {/* ---- Social row ------------------------------------ */}
      <ul className="mt-12 flex justify-center gap-6 text-2xl">
        <li>
          <Link
            href="https://github.com/devtalent2030"
            target="_blank"
            aria-label="GitHub"
            className="transition hover:text-surge"
          >
            <i className="fa-brands fa-github" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/talentnyota/"
            target="_blank"
            aria-label="LinkedIn"
            className="transition hover:text-surge"
          >
            <i className="fa-brands fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link
            href="mailto:hello@talent.dev"
            aria-label="Email"
            className="transition hover:text-surge"
          >
            <i className="fa-solid fa-envelope" />
          </Link>
        </li>
      </ul>

      <p className="mt-6 text-xs text-skin-muted">
        Based in Toronto · Working EST (GMT‑4) · Available globally
      </p>
    </section>
  );
}
