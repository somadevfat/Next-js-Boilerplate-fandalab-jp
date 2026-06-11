import arcjet, { shield } from '@arcjet/next';

/**
 * 基本となる Arcjet インスタンスを作成します。
 * @responsibility セキュリティとボット保護のための共通設定を提供し、各ルートで拡張可能にする。
 * @returns 設定済みの Arcjet インスタンス
 */
export default arcjet({
  /* https://launch.arcjet.com/Q6eLbRE からサイトキーを取得してください */
  /* ミドルウェアのバンドルサイズを削減するため、Env ではなく `process.env` を直接使用します */
  key: process.env.ARCJET_KEY ?? '',
  /* IPアドレスによってユーザーを識別します */
  characteristics: ['ip.src'],
  rules: [
    /* Arcjet Shield を使用して一般的な攻撃から保護します */
    shield({
      mode: 'LIVE' /* リクエストをブロックします。ログのみの場合は "DRY_RUN" を使用してください */,
    }),
    /* 他のルールは各ルートで追加されます */
  ],
});
