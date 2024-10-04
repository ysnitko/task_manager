import type { Metadata } from 'next';
import Header from '@/components/header/header';

import { Outfit } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Todo',
  description: 'todo service',
};

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`flex justify-center ${outfit.className} `}>
        <div className="flex flex-col items-center w-1/2 max-w-full gap-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
