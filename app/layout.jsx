import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

import { Toaster } from 'sonner';
import { ClientSessionProvider } from '@/components/ClientSessionProvider';
import Footer from './components/layout/Footer';

const inter = Inter({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
  ],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tassir - Time is all',
  description: 'the local tit mellil delivery food.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative min-h-dvh flex flex-col justify-between antialiased`}
      >
        <ClientSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <Toaster richColors position="top-right" />

            {/* Main Home Page */}
            <main className="flex-1">{children}</main>

            <Footer />
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
