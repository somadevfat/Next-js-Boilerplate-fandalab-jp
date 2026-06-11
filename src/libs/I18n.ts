import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './I18nRouting';

/*
 * NextJS Boilerplate はローカライゼーションソフトウェアとして Crowdin を使用しています。
 * 開発者は英語（または別のデフォルト言語）バージョンのみを管理すれば済みます。
 * 他の言語は Crowdin によって自動的に生成および処理されます。
 */

/*
 * ローカライズファイルは GitHub Actions を使用して Crowdin と同期されます。
 * デフォルトでは、メッセージファイルを同期する方法が3つあります：
 * 1. `main` ブランチへのプッシュ時に自動的に同期
 * 2. GitHub Actions で手動でワークフローを実行
 * 3. 毎日午前5時（UTC）にワークフローが自動的に実行
 */

/**
 * i18n のリクエスト設定を生成するデフォルト関数です。
 * @responsibility リクエストされたロケールに基づいて、適切な翻訳メッセージと設定をロードする。
 * @param options リクエストオプション（requestLocale を含む）
 * @returns ロケールとメッセージを含む設定オブジェクト
 */
export default getRequestConfig(async (options) => {
  /* 通常、`[locale]` セグメントに対応します */
  const requested = await options.requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    /* oxlint-disable-next-line unicorn/no-await-expression-member */
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
