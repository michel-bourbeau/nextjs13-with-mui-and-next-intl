import React from 'react';
import type { ReactNode } from 'react';
import ThemeProvider from '@/mui';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="en">
      <head>
        <title>NextJS13 with MUI, React-Intl, Redux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>
          <body id="__next">{children}</body>
        </ThemeProvider>
      </NextIntlClientProvider>
    </html>
  );
}
