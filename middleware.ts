import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  });
  const res = handleI18nRouting(req);

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
  fallback: 'en',
};
