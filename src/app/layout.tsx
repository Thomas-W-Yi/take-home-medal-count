import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medal Count App',
  description: 'A simple app to track medal counts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
