import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { FirebaseClientProvider } from '@/firebase';
import { FirebaseErrorListener } from '@/components/firebase-error-listener';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'PK Creative – Complete Website Development',
  description: 'Creative branding, websites, and digital experiences designed to help businesses stand out online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <FirebaseClientProvider>
          <ThemeProvider>
            {children}
            <Toaster />
            <FirebaseErrorListener />
          </ThemeProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
