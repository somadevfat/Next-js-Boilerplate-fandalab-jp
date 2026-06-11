import { expect, test } from '@playwright/test';

/*
 * Checkly は、本番環境やプレビュー環境などのデプロイ済み環境を監視するためのツールです。
 * デプロイ後に `.check.e2e.ts` 拡張子を持つエンドツーエンドテストを実行し、環境が正常に動作しているかを確認します。
 * Checkly を使用すると、本番環境を監視し、選択した頻度で定期的に `*.check.e2e.ts` テストを実行できます。
 * テストが失敗した場合、Checkly はメール、Slack、またはその他の選択したチャネル経由で通知します。
 * 一方、`*.e2e.ts` で終わる E2E テストはデプロイ前にのみ実行されます。
 * これらはローカルまたは CI 上で実行され、アプリケーションがデプロイ可能な状態であることを確認します。
 */

test.describe('Sanity (サニティチェック)', () => {
  test.describe('Static pages (静的ページ)', () => {
    test('ホームページが表示されること', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS',
        }),
      ).toBeVisible();
    });

    test('About ページに遷移できること', async ({ page }) => {
      await page.goto('/');

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page).toHaveURL(/about$/u);

      await expect(page.getByText('Welcome to our About page', { exact: false })).toBeVisible();
    });

    test('Portfolio ページに遷移できること', async ({ page }) => {
      await page.goto('/');

      await page.getByRole('link', { name: 'Portfolio' }).click();

      await expect(page).toHaveURL(/portfolio$/u);

      await expect(page.locator('main').getByRole('link', { name: /^Portfolio/u })).toHaveCount(6);
    });
  });
});
