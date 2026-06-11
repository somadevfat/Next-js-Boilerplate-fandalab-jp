import { sql } from 'drizzle-orm';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import * as z from 'zod';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import { CounterValidation } from '@/validations/CounterValidation';

/**
 * カウンターをインクリメントする API ルートハンドラーです。
 * @responsibility リクエストボディを検証し、データベース内の対応するカウンターの値を更新する。
 * @param request HTTP リクエストオブジェクト
 * @returns 更新後のカウント数を含む JSON レスポンス
 */
export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
  }

  /* `x-e2e-random-id` は、エンドツーエンドテストでリクエストを分離するために使用されます */
  /* `x-e2e-random-id` ヘッダーがない場合のデフォルト値は 0 です */
  const headersList = await headers();
  const id = Number(headersList.get('x-e2e-random-id')) || 0;

  const count = await db
    .insert(counterSchema)
    .values({ id, count: parse.data.increment })
    .onConflictDoUpdate({
      target: counterSchema.id,
      set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
    })
    .returning();

  logger.info('Counter has been incremented');

  return NextResponse.json({
    count: count[0]?.count,
  });
};
