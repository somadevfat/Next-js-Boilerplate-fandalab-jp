import { Env } from '@/libs/Env';
import { routing } from '@/libs/I18nRouting';

/**
 * アプリケーションの公開ベース URL を解決します。
 * @responsibility 設定された公開アプリ URL またはローカル開発用 URL を返す。
 * @returns 設定済みの公開アプリ URL またはローカル開発用 URL
 */
export const getBaseUrl = () => {
  if (Env.NEXT_PUBLIC_APP_URL) {
    return Env.NEXT_PUBLIC_APP_URL;
  }

  return 'http://localhost:3000';
};

/**
 * デフォルト以外のロケールにプレフィックスを付与して、ロケールを考慮したパスを構築します。
 * @responsibility 現在のロケールに基づいて、適切な言語プレフィックスを持つパスを生成する。
 * @param url スラッシュで始まる基本の相対パス
 * @param locale アクティブなロケール識別子
 * @returns ローカライズされたパス
 */
export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};
