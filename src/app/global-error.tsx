'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';
import { routing } from '@/libs/I18nRouting';

export default function GlobalError(props: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang={routing.defaultLocale}>
      <body>
        {/* `NextError` は Next.js のデフォルトのエラーページコンポーネントです。
        その型定義には `statusCode` プロパティが必要ですが、App Router では
        エラーのステータスコードが公開されないため、一般的なエラーメッセージを
        表示するために単に 0 を渡しています。 */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
