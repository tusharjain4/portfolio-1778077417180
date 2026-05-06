import type { Metadata } from 'next';
import { Manrope, Source_Serif_4, DotGothic16, Archivo, Archivo_Narrow, Inter } from 'next/font/google';
import './globals.css';

// Template fonts
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

const dotgothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dotgothic16',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

// Theme font (using Inter as a fallback or for generic elements if needed)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Pooja R. Sonar - Software Developer',
  description: 'Full-Stack Developer with a focus on building robust real-time systems and intelligent AI-powered applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceSerif4.variable} ${dotgothic16.variable} ${archivo.variable} ${archivoNarrow.variable} ${inter.variable} font-manrope bg-white text-adizen-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}