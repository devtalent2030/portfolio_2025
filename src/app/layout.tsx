import './globals.css'  
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from '@/components/ui/Loader';


export const metadata = {
  title: 'Talent Nyota – Portfolio',
  description: 'Software Engineer | Full-Stack & Cloud',
  icons: {
    icon: '/logo4012.png', // Must be square (e.g. 64x64 or 512x512)
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Loader />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
