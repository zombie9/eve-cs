import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Eve Online Character Viewer',
  description: 'View your character outside of the game!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className}
        relative antialiased bg-center bg-repeat
        bg-[url('../media/bg-tiled-2.png')]`}
      >
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
