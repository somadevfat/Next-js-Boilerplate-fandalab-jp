import { createDbConnection } from '@/utils/DBConnection';
import { Env } from './Env';

declare global {
  var cachedDrizzle: ReturnType<typeof createDbConnection> | undefined;
}

/*
 * Next.js のホットリロードによる複数インスタンスの生成を防ぐため、
 * データベース接続をグローバルスコープに保存します。
 */
const db = globalThis.cachedDrizzle ?? createDbConnection();

/*
 * ホットリロードの問題を避けるため、開発環境でのみグローバルに保存します。
 */
if (Env.NODE_ENV !== 'production') {
  globalThis.cachedDrizzle = db;
}

/**
 * アプリケーション全体で使用されるデータベースインスタンスです。
 * @responsibility プロジェクト全体で一貫したデータベース操作を提供し、接続管理を行う。
 */
export { db };
