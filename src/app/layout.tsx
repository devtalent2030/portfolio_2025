import './globals.css'  
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const metadata = {
  title: 'Talent Nyota – Portfolio',
  description: 'Software Engineer | Full-Stack & Cloud',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
