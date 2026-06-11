import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

/*
 * このファイルは Drizzle ORM を使用してデータベーステーブルの構造を定義します。
 */

/*
 * データベーススキーマを変更する手順：
 * 1. このファイルを希望の変更内容で更新する。
 * 2. `npm run db:generate` を実行して新しいマイグレーションを生成する。
 */

/*
 * 生成されたマイグレーションファイルにはスキーマの変更が反映されます。
 * 開発モードでは Next.js が起動する前に `db-server:file` コマンドが実行され、自動的にマイグレーションが適用されます。
 * あるいは、データベースが稼働している場合は `npm run db:migrate` を実行することで、サーバーを再起動せずに適用可能です。
 */

/*
 * 本番環境用のデータベースが必要な場合は、https://get.neon.com/BMFYNtx を確認してください。
 * Next.js Boilerplate との互換性がテスト済みです。
 */

/**
 * カウンターテーブルのスキーマ定義です。
 * @responsibility カウント数、更新日時、作成日時を保持する counter テーブルの構造を定義する。
 */
export const counterSchema = pgTable('counter', {
  id: serial('id').primaryKey(),
  count: integer('count').default(0),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});
