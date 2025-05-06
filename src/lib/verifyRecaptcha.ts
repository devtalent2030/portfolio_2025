export async function verifyRecaptcha(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY!;
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: 'POST' },
    ).then((r) => r.json());
  
    return res.success && res.score >= 0.5; // tweak threshold if needed
  }
  