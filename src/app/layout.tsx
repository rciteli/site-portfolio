import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { fonteTitulo, fonteBotao } from '../lib/fonts'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meu Portfólio | Desenvolvedor Full Stack',
  description: 'Portfólio criado com Next.js e TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fonteTitulo.variable} ${fonteBotao.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
