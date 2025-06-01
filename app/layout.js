import { ThemeProvider } from '@/components/theme-provider';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

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
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
