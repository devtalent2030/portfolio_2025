interface Grecaptcha {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  }
  
  declare const grecaptcha: Grecaptcha;
  