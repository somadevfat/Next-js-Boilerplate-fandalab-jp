import { enUS, frFR } from '@clerk/localizations';
import type { LocalizationResource } from '@clerk/shared/types';
import type { LocalePrefixMode } from 'next-intl/routing';

/**
 * next-intl ルーティング用のロケールプレフィックス戦略です。
 */
const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: 製品に合わせてこの設定をカスタマイズしてください
/**
 * アプリケーションの中約的な設定オブジェクトです。
 * @responsibility プロジェクト名や多言語設定（i18n）など、アプリ全体の定数を一元管理する。
 */
export const AppConfig = {
  name: 'Nextjs Starter',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localePrefix,
  },
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  fr: frFR,
};

/**
 * Clerk のローカライズ設定です。
 * @responsibility 各言語に対応した Clerk の翻訳リソースを管理する。
 */
export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
