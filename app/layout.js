import { ThemeProvider } from '@/components/theme-provider';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

import { Toaster } from 'sonner';
import { ClientSessionProvider } from '@/components/ClientSessionProvider';
import Footer from './components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tassir - Time is all',
  description: 'the local tit mellil delivery food.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} min-h-screen flex flex-col antialiased`}>
        <ClientSessionProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <Header />
            <Toaster richColors position='top-right' />
            <main className='flex-1'>{children}</main>
            <Footer />
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
