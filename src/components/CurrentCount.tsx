import { eq } from 'drizzle-orm';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';

/**
 * 現在のカウント数を表示する React サーバーコンポーネントです。
 * @responsibility データベースから現在のカウント数を取得し、ローカライズされたテキストとしてレンダリングする。
 * @returns カウント数を表示する div 要素
 */
export const CurrentCount = async () => {
  const t = await getTranslations('CurrentCount');

  /* `x-e2e-random-id` は、エンドツーエンドテストでリクエストを分離するために使用されます */
  /* `x-e2e-random-id` ヘッダーがない場合のデフォルト値は 0 です */
  const headersList = await headers();
  const id = Number(headersList.get('x-e2e-random-id')) || 0;
  const result = await db.query.counterSchema.findFirst({
    where: eq(counterSchema.id, id),
  });
  const count = result?.count ?? 0;

  logger.info('Counter fetched successfully');

  return <div>{t('count', { count })}</div>;
};
