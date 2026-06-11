import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Env } from '@/libs/Env';
import { logger } from '@/libs/Logger';
import * as schema from '@/models/Schema';

/*
 * 本番環境用のデータベースが必要な場合は、https://get.neon.com/BMFYNtx を確認してください。
 * Next.js Boilerplate との互換性がテスト済みです。
 */

/**
 * データベース接続を作成する関数です。
 * @responsibility 環境変数に基づいてデータベース接続プールを初期化し、Drizzle ORM インスタンスを返す。
 * @returns Drizzle データベース接続インスタンス
 */
export const createDbConnection = () => {
  /* 環境変数の接続文字列を使用してプールを作成します */
  const pool = new Pool({
    connectionString: Env.DATABASE_URL,
  });

  /* プール内でのエラーをハンドリングします */
  pool.on('error', (error) => {
    logger.error(`Database pool error: ${error.message}`);
  });

  return drizzle({
    client: pool,
    schema,
  });
};
