# Next.js 16+、Tailwind CSS 4、TypeScript 搭載のボイラープレート兼スターター

<p align="center">
  <a href="https://demo.nextjs-boilerplate.com">
    <img
      src="public/assets/images/nextjs-starter-banner.png?raw=true"
      alt="Next js starter banner"
      style="max-width: 100%; height: auto;"
    />
  </a>
</p>

🚀 App Router、Tailwind CSS、TypeScript を採用した Next.js 用ボイラープレート兼スターター ⚡️ 開発者体験（DX）を最優先: Next.js、TypeScript、ESLint、Prettier、Lefthook（Husky の代替）、Lint-Staged、Vitest（Jest の代替）、Testing Library、Playwright、Commitlint、VSCode、Tailwind CSS、[Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) による認証、DrizzleORM（PostgreSQL、SQLite、MySQL 対応）によるデータベース、PGlite によるローカル DB と [Neon](https://get.neon.com/BMFYNtx) による本番 DB、[Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) によるエラー監視、LogTape（Pino.js の代替）とログ管理、Monitoring as Code、Storybook、多言語対応 (i18n)、CodeRabbit による AI コードレビュー、[Arcjet](https://launch.arcjet.com/Q6eLbRE) によるセキュリティ（ボット検知、レート制限、攻撃保護など）などを備えています。

このプロジェクトをクローンして、独自の Next.js プロジェクトを作成してください。動作する認証システムを含むライブデモを [Next.js Boilerplate](https://demo.nextjs-boilerplate.com) で確認できます。

## スポンサー

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/6fb61971-3bf1-4580-98a0-10bd3f1040a2">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
          <img alt="Clerk – Next.js 用の認証およびユーザー管理" src="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/coderabbit-logo-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/coderabbit-logo-light.svg?raw=true">
          <img alt="CodeRabbit" src="public/assets/images/coderabbit-logo-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sentry-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sentry-dark.png?raw=true">
          <img alt="Sentry" src="public/assets/images/sentry-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://launch.arcjet.com/Q6eLbRE">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/arcjet-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/arcjet-light.svg?raw=true">
          <img alt="Arcjet" src="public/assets/images/arcjet-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://l.crowdin.com/next-js">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/crowdin-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/crowdin-dark.png?raw=true">
          <img alt="Crowdin" src="public/assets/images/crowdin-dark.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/better-stack-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/better-stack-dark.png?raw=true">
          <img alt="Better Stack" src="public/assets/images/better-stack-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://posthog.com/brand/posthog-logo-white.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://posthog.com/brand/posthog-logo.svg">
          <img alt="PostHog" src="https://posthog.com/brand/posthog-logo.svg">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/checkly-logo-dark.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/checkly-logo-light.png?raw=true">
          <img alt="Checkly" src="public/assets/images/checkly-logo-light.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" style=width="33%">
      <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
        <img src="public/assets/images/nextjs-boilerplate-saas.png?raw=true" alt="Next.js SaaS Boilerplate with React" />
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="mailto:contact@nextjs-boilerplate.com">
        ここにロゴを追加
      </a>
    </td>
  </tr>
</table>

### デモ

**ライブデモ: [Next.js Boilerplate](https://demo.nextjs-boilerplate.com)**

| 新規登録 | ログイン |
| --- | --- |
| [![Next.js Boilerplate SaaS Sign Up](public/assets/images/nextjs-boilerplate-sign-in.png)](https://demo.nextjs-boilerplate.com/sign-up) | [![Next.js Boilerplate SaaS Sign In](public/assets/images/nextjs-boilerplate-sign-in.png)](https://demo.nextjs-boilerplate.com/sign-in) |

### 特徴

開発者体験（DX）を最優先し、極めて柔軟なコード構造を採用。必要なものだけを残せます：

- ⚡ [Next.js](https://nextjs.org) (App Router 対応)
- 🔥 型チェック [TypeScript](https://www.typescriptlang.org)
- 💎 [Tailwind CSS](https://tailwindcss.com) との統合
- 🤖 Claude Code、Codex、Cursor、OpenCode、Copilot などの AI コーディングエージェント用手順書
- ✅ TypeScript と React 19 の Strict Mode
- 🔒 [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) による認証: 新規登録、ログイン、ログアウト、パスワード忘れ、パスワードリセットなど
- 👤 パスワードレス認証 (Magic Links、多要素認証 (MFA)、ソーシャルログイン (Google, Facebook, Twitter, GitHub, Apple など))、パスキーによるパスワードレスログイン、ユーザーなりすまし
- 📦 DrizzleORM による型安全な ORM (PostgreSQL、SQLite、MySQL 対応)
- 💽 PGlite によるオフラインおよびローカル開発用データベース
- ☁️ [Neon](https://get.neon.com/BMFYNtx) によるリモートおよび本番用データベース
- 🌐 next-intl と [Crowdin](https://l.crowdin.com/next-js) による多言語対応 (i18n)
- ♻️ T3 Env による型安全な環境変数
- ⌨️ React Hook Form によるフォーム処理
- 🔴 Zod によるバリデーションライブラリ
- 📏 Oxlint (Ultracite プリセット) によるリンター (ESLint の代替)
- 💖 Oxfmt によるコードフォーマッター (Prettier の代替)
- 🦊 Husky に代わる Lefthook による Git Hooks
- 🚫 Git のステージング済みファイルに対してリンターを実行する Lint-staged
- 🚓 Commitlint による Git コミットメッセージの検証
- 📓 Commitizen による標準準拠のコミットメッセージ作成
- 🔍 Knip による未使用ファイルと依存関係の検出
- 🌍 i18n-check による i18n の検証と翻訳漏れの検出
- 🦺 Vitest (ブラウザモード) によるユニットテスト (React Testing Library の代替)
- 🧪 Playwright による統合および E2E テスト
- 👷 GitHub Actions によるプルリクエスト時のテスト実行
- 🎉 UI 開発のための Storybook
- 🐰 [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025) による AI コードレビュー
- 🚨 [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) によるエラー監視
- 🔍 Sentry Spotlight によるローカル開発時のエラー監視
- ☂️ Codecov によるコードカバレッジ
- 📝 LogTape によるロギングと [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) によるログ管理
- 🖥️ [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) による Monitoring as Code
- 🔐 セキュリティとボット保護 ([Arcjet](https://launch.arcjet.com/Q6eLbRE))
- 📊 PostHog による分析
- 🎁 Semantic Release による変更履歴（Changelog）の自動生成
- 🔍 視覚的回帰テスト (Visual Regression Testing)
- 💡 `@` プレフィックスを使用した絶対パスインポート
- 🗂 VSCode 設定: デバッグ、設定、タスク、拡張機能
- 🤖 SEO メタデータ、JSON-LD、Open Graph タグ
- 🗺️ Sitemap.xml と robots.txt
- 👷 Dependabot による依存関係の自動更新
- ⌘ Drizzle Studio によるデータベース操作と Drizzle Kit による CLI 移行ツール
- ⚙️ バンドルアナライザー (Bundler Analyzer)
- 🌈 無料のミニマリストテーマ同梱
- 💯 Lighthouse スコアの最大化

Next.js の組み込み機能：

- ☕ HTML & CSS の圧縮
- 💨 ライブリロード
- ✅ キャッシュバースト

オプション機能 (追加が容易)：

- 🔑 マルチテナント、ロールベースアクセス制御 (RBAC)
- 🔐 シングルサインオン (SSO) 用 OAuth、エンタープライズ SSO、SAML、OpenID Connect (OIDC)、EASIE
- 🔗 Web 3 (Base, MetaMask, Coinbase Wallet, OKX Wallet)

### 理念

- 何も隠されていないため、要件や好みに合わせて自由に調整可能です。
- 依存関係は毎月定期的に更新されます。
- 初期費用なしで無料で開始できます。
- カスタマイズが容易です。
- 最小限のコード。
- スタイルなしのテンプレート。
- SEO フレンドリー。
- 🚀 本番環境対応。

### 必要条件

- Node.js 24 以上および npm

### はじめに

ローカル環境で以下のコマンドを実行してください：

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

参考までに、すべての依存関係は毎月更新されます。

次に、ライブリロードが有効な開発モードでプロジェクトをローカルで実行するには：

```shell
npm run dev
```

お好みのブラウザで http://localhost:3000 を開き、プロジェクトを確認してください。このプロジェクトは PGlite を使用したローカルデータベースが事前に設定されているため、ローカル実行に追加のセットアップは不要です。

高度な機能（マルチテナント＆チーム、ロール＆権限、Shadcn UI、oRPC によるエンドツーエンドの型安全、Stripe 決済、ライト/ダークモード）が必要な場合は、[Next.js Boilerplate Pro](https://nextjs-boilerplate.com/pro-saas-starter-kit) をお試しください。

または、セルフホスト可能な認証スタック (Better Auth) が必要な場合は、[Next.js Boilerplate Max](https://nextjs-boilerplate.com/nextjs-multi-tenant-saas-boilerplate) をお試しください。

### 認証の設定

まず、[Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) で Clerk アカウントを作成し、Clerk ダッシュボードで新しいアプリケーションを作成します。次に、`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` と `CLERK_SECRET_KEY` の値をコピーして、`.env.local` ファイル（Git では追跡されません）に追加します：

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

これで、新規登録、ログイン、ログアウト、パスワード忘れ、パスワードリセット、プロファイル更新、パスワード更新、メール更新、アカウント削除などの機能を備えた、完全に機能する Next.js 認証システムが整いました。

### リモートデータベースの設定

プロジェクトは、PostgreSQL、SQLite、MySQL データベースに対応した型安全な ORM である DrizzleORM を使用しています。デフォルトでは PostgreSQL でシームレスに動作するように設定されており、任意の PostgreSQL データベースプロバイダーを選択できます。

プロジェクトを初めてローカルで起動すると、ローカルマシン上に PostgreSQL データベースが自動的に作成されます。これにより、Docker や追加のセットアップなしで PostgreSQL データベースを使用できます。

リモートおよび本番用データベースを設定するには、PostgreSQL データベースを作成し、接続文字列を取得する必要があります。推奨されるオプションの一つは、無料の PostgreSQL データベースを提供する [Neon](https://get.neon.com/BMFYNtx) です。このデータベースは互換性があり、Next.js Boilerplate でテスト済みです。

Neon アカウント作成後、接続文字列を取得し、`.env.production` ファイルの `DATABASE_URL` 変数にコピーしてください。

> :warning: このプロジェクトは、どの PostgreSQL プロバイダーでもそのまま動作します。Neon は無料枠があるためここで言及されており、リンクはアフィリエイトリンクです。ニーズに合った任意の PostgreSQL プロバイダーを自由に使用してください。

#### データベースを初期化する場合

データベースを新しく空の状態にしたい場合は、プロジェクトのルートにある `local.db` フォルダを削除するだけです。次にプロジェクトを実行した際に、新しいデータベースが自動的に作成されます。

### 翻訳 (i18n) の設定

翻訳には、`next-intl` と [Crowdin](https://l.crowdin.com/next-js) を組み合わせて使用しています。開発者は英語（または別のデフォルト言語）バージョンのみを管理すれば済みます。他の言語への翻訳は Crowdin によって自動的に生成・処理されます。Crowdin を使用して翻訳チームと共同作業したり、機械翻訳の助けを借りて自分でメッセージを翻訳したりできます。

翻訳 (i18n) を設定するには、[Crowdin.com](https://l.crowdin.com/next-js) でアカウントを作成し、新しいプロジェクトを作成します。作成されたプロジェクトでプロジェクト ID を確認できます。また、Account Settings > API で新しいパーソナルアクセストークンを作成する必要があります。次に、GitHub Actions で以下の環境変数を定義します：`CROWDIN_PROJECT_ID` および `CROWDIN_PERSONAL_TOKEN`。

GitHub Actions で環境変数を定義すると、`main` ブランチに新しいコミットをプッシュするたびに、ローカライズファイルが Crowdin と同期されます。

### プロジェクト構造

```shell
.
├── README.md                       # README ファイル
├── .github                         # GitHub 関連フォルダ
│   ├── actions                     # 再利用可能なアクション
│   └── workflows                   # GitHub Actions ワークフロー
├── .storybook                      # Storybook 関連フォルダ
├── .vscode                         # VSCode 設定
├── migrations                      # データベース移行ファイル
├── public                          # 公開アセットフォルダ
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React コンポーネント
│   ├── libs                        # サードパーティライブラリの設定
│   ├── locales                     # ロケールフォルダ (i18n メッセージ)
│   ├── models                      # データベースモデル
│   ├── styles                      # スタイルフォルダ
│   ├── templates                   # テンプレートフォルダ
│   ├── types                       # 型定義
│   ├── utils                       # ユーティリティフォルダ
│   └── validations                 # バリデーションスキーマ
├── tests
│   ├── e2e                         # E2E テスト (Monitoring as Code も含む)
│   └── integration                 # 統合テスト
├── drizzle.config.ts               # Drizzle ORM 設定
├── eslint.config.mjs               # ESLint 設定
├── next.config.ts                  # Next JS 設定
├── package.json                    # NPM 依存関係とスクリプト
├── playwright.config.ts            # Playwright 設定
├── tsconfig.json                   # TypeScript 設定
└── vitest.config.ts                # Vitest 設定
```

### カスタマイズ

Next.js Boilerplate は、プロジェクト全体を `FIXME:` で検索することで簡単にカスタマイズできます。以下は、カスタマイズすべき重要なファイルの一部です：

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`: ウェブサイトのファビコン
- `src/utils/AppConfig.ts`: 設定ファイル
- `src/templates/BaseTemplate.tsx`: デフォルトテーマ
- `next.config.ts`: Next.js 設定
- `.env`: デフォルトの環境変数

ソースコードへは完全にアクセス可能なため、さらに自由にカスタマイズできます。提供されているコードはプロジェクトを開始するための例に過ぎません。可能性は無限大です 🚀。

### データベーススキーマの変更

プロジェクトのデータベーススキーマを変更するには、`./src/models/Schema.ts` にあるスキーマファイルを更新します。このファイルは、Drizzle ORM ライブラリを使用してデータベーステーブルの構造を定義しています。

スキーマを変更した後、以下のコマンドを実行してマイグレーションファイルを生成します：

```shell
npm run db:generate
```

これにより、スキーマの変更を反映したマイグレーションファイルが作成されます。

データベースが実行されていることを確認した後、以下のコマンドで生成されたマイグレーションを適用できます：

```shell
npm run db:migrate
```

変更を反映させるために Next.js サーバーを再起動する必要はありません。

### コミットメッセージの形式

プロジェクトは [Conventional Commits](https://www.conventionalcommits.org/) 仕様に従っており、すべてのコミットメッセージはそれに応じてフォーマットする必要があります。コミットメッセージの作成を支援するために、コミットプロセスを案内する対話型 CLI が用意されています。これを使用するには、以下のコマンドを実行します：

```shell
npm run commit
```

Conventional Commits を使用する利点の一つは、GitHub リリースを自動生成できることです。また、リリースに含まれるコミットのタイプに基づいて、次のバージョン番号を自動的に決定することもできます。

#### コミットタイプ

すべてのコミットメッセージは Conventional Commits に従い、タイプ接頭辞（例：`feat: ログインページを追加`）から開始する必要があります。以下の表に使用可能なタイプを示します：

| タイプ | 説明 |
| --- | --- |
| `feat` | 新機能や機能追加 |
| `fix` | バグ修正 |
| `docs` | ドキュメントのみの変更 |
| `style` | ロジックに変更のないコードの整形 |
| `refactor` | 振る舞いに変更のないコードの再構築 |
| `perf` | パフォーマンスの向上 |
| `test` | テストの追加や更新 |
| `build` | ビルドシステム |
| `ci` | CI 設定とスクリプト |
| `chore` | メンテナンス作業 (依存関係、設定など) |
| `revert` | 以前のコミットの取り消し |

### CodeRabbit AI コードレビュー

プロジェクトでは、AI 搭載のコードレビューツールである [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025) を使用しています。CodeRabbit はリポジトリを監視し、強力な AI エンジンを使用してすべての新しいプルリクエストに対してインテリジェントなコードレビューを自動的に提供します。

セットアップは簡単です。[coderabbit.ai](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025) にアクセスし、GitHub アカウントでサインインして、ダッシュボードからリポジトリを追加するだけです。

### テスト

すべてのユニットテストは、見つけやすいようにソースコードと同じディレクトリに配置されています。ユニットテストファイルは `*.test.ts` または `*.test.tsx` という形式です。プロジェクトでは、ユニットテストに Vitest と React Testing Library を使用しています。以下のコマンドでテストを実行できます：

```shell
npm run test
```

### 統合および E2E テスト

プロジェクトでは、統合およびエンドツーエンド (E2E) テストに Playwright を使用しています。統合テストファイルは `*.integ.ts` 拡張子を使用し、E2E テストファイルは `*.e2e.ts` 拡張子を使用します。以下のコマンドでテストを実行できます：

```shell
npx playwright install # 新しい環境で初回のみ実行
npm run test:e2e
```

### Storybook

Storybook は、UI コンポーネントの開発とテスト用に設定されています。プロジェクトは Next.js および Vite と統合された Storybook を使用しており、アクセシビリティテストやドキュメント機能も含まれています。

Story は `src` ディレクトリ内のコンポーネントと同じ場所に配置され、`*.stories.ts` または `*.stories.tsx` というパターンに従います。

開発モードで Storybook を実行するには：

```shell
npm run storybook
```

これにより、http://localhost:6006 で Storybook が起動し、UI コンポーネントを個別に表示・操作できます。

ヘッドレスモードで Storybook テストを実行するには、以下のコマンドを使用します：

```shell
npm run storybook:test
```

### ローカルでの本番用ビルド

一時的なインメモリ Postgres データベースを使用して、最適化された本番用ビルドをローカルで生成します：

```shell
npm run build-local
```

このコマンドは以下の処理を行います：

- 一時的なインメモリデータベースサーバーを起動
- Drizzle Kit によるデータベースマイグレーションの実行
- 本番用 Next.js アプリのビルド
- ビルド完了後、一時的な DB をシャットダウン

注意：

- デフォルトではローカルデータベースを使用しますが、リモートデータベースを使用して `npm run build` を実行することもできます。
- これはビルドを作成するだけで、サーバーを起動するわけではありません。ビルドをローカルで実行するには、`npm run start` を使用してください。

### 本番環境へのデプロイ

ビルドプロセス中にデータベースマイグレーションが自動的に実行されるため、手動で実行する必要はありません。ただし、環境変数に `DATABASE_URL` を定義する必要があります。任意の PostgreSQL プロバイダーを使用できますが、無料枠があり Next.js Boilerplate と互換性のある [Neon](https://get.neon.com/BMFYNtx) の使用を推奨します。

次に、以下のコマンドで本番ビルドを生成できます：

```shell
$ npm run build
```

これにより、ボイラープレートの最適化された本番用ビルドが生成されます。生成されたビルドをテストするには、以下を実行します：

```shell
$ npm run start
```

また、独自のキーを使用して環境変数 `CLERK_SECRET_KEY` を定義する必要があります。

このコマンドは、本番用ビルドを使用してローカルサーバーを起動します。ブラウザで http://localhost:3000 を開き、結果を確認できます。

### エラー監視

プロジェクトは、エラー監視に [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) を使用しています。

#### Sentry と Spotlight を使用したローカル開発

開発環境では追加のセットアップは不要です。Next.js Boilerplate には Sentry と Spotlight（開発用 Sentry）が事前に設定されています。すべてのエラーはローカルの Spotlight インスタンスによって自動的にキャプチャされ、Sentry Cloud にデータを送信することなくテストが可能です。

キャプチャされたイベントの調査、スタックトレースの表示、エラーの分析は、Spotlight UI (`http://localhost:8969`) で行えます。

#### Sentry を使用した本番環境のセットアップ

本番環境では、[Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) アカウントと新しいプロジェクトを作成する必要があります。次に、`.env.production` で以下の環境変数を更新します：

```shell
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORGANIZATION=
SENTRY_PROJECT=
```

また、ホスティングプロバイダーのダッシュボードで環境変数 `SENTRY_AUTH_TOKEN` を作成する必要があります。

### コードカバレッジ

Next.js Boilerplate は、コードカバレッジのレポートソリューションとして [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) を採用しています。Codecov を有効にするには、Codecov アカウントを作成し GitHub アカウントと連携させます。Codecov ダッシュボードにリポジトリが表示されるので、対象のリポジトリを選択してトークンをコピーします。GitHub Actions で `CODECOV_TOKEN` 環境変数を定義し、トークンを貼り付けます。

`CODECOV_TOKEN` は必ず GitHub Actions のシークレットとして作成し、ソースコードに直接貼り付けないでください。

### ロギング

プロジェクトではロギングに LogTape を使用しています。開発環境では、ログはデフォルトでコンソールに表示されます。

本番環境では、SQL を使用してログを管理・照会できる [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) と既に統合されています。Better Stack を使用するには、[Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) アカウントを作成し、新しいソースを作成します（Better Stack Logs Dashboard > Sources > Connect source）。ソースに名前を付け、プラットフォームとして Node.js を選択します。

ソース作成後、ソーストークンを表示・コピーできます。環境変数の `NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN` 変数にトークンを貼り付けてください。また、同じ場所で確認できる `NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST` 変数も定義する必要があります。

これで、すべてのログが自動的に Better Stack に送信され、取り込まれるようになります。

### Checkly による監視

プロジェクトは [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) を使用して、本番環境が常に稼働していることを確認します。Checkly は定期的に `*.check.e2e.ts` 拡張子で終わるテストを実行し、テストが失敗した場合には通知を行います。さらに、複数の場所からテストを実行して、アプリケーションが世界中で利用可能であることを確認できる柔軟性も備えています。

Checkly を使用するには、まず [公式ウェブサイト](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) でアカウントを作成してください。アカウント作成後、Checkly ダッシュボードで新しい API キーを生成し、GitHub Actions で `CHECKLY_API_KEY` 環境変数を設定します。また、Checkly ダッシュボードの User Settings > General で確認できる `CHECKLY_ACCOUNT_ID` も定義する必要があります。

セットアップを完了するには、`checkly.config.ts` ファイルを自身のメールアドレスと本番用 URL で更新してください。

### Arcjet によるセキュリティとボット保護

プロジェクトでは、サイトに多層的な防御を提供するために個別または組み合わせて使用できる複数の機能を備えた、セキュリティ・アズ・コード製品である [Arcjet](https://launch.arcjet.com/Q6eLbRE) を使用しています。

Arcjet を設定するには、[無料アカウントを作成](https://launch.arcjet.com/Q6eLbRE)して API キーを取得してください。次に、それを `ARCJET_KEY` 環境変数に追加します。

Arcjet は、ボット検知と Arcjet Shield WAF の 2 つの主要機能で構成されています：

- [ボット検知](https://docs.arcjet.com/bot-protection/concepts)は、検索エンジン、Slack や Twitter などのプレビューリンク生成ツール、一般的なアップタイム監視サービスを許可するように設定されています。スクレイパーや AI クローラーなどのその他のボットはすべてブロックされます。許可またはブロックする[追加のボットタイプを設定](https://docs.arcjet.com/bot-protection/identifying-bots)することも可能です。
- [Arcjet Shield WAF](https://docs.arcjet.com/shield/concepts) は、SQL インジェクション、クロスサイトスクリプティング、その他の OWASP Top 10 の脆弱性などの一般的な攻撃を検知してブロックします。

Arcjet は `src/libs/Arcjet.ts` にあるセントラルクライアントで Shield WAF ルールを含むように設定されています。`proxy.ts` で Arcjet が呼び出される際に追加のルールが適用されます。

### 便利なコマンド

### コード品質と検証

プロジェクトには、コードの品質と一貫性を確保するための複数のコマンドが含まれています：

- `npm run lint`: リンターによるエラーチェック
- `npm run lint:fix`: リンターによる自動修正
- `npm run check:types`: プロジェクト全体の型安全性の検証
- `npm run check:deps`: 未使用の依存関係とファイルの特定を支援
- `npm run check:i18n`: すべての翻訳が完了し、正しくフォーマットされていることを確認

#### バンドルアナライザー

Next.js Boilerplate にはバンドルアナライザーが組み込まれています。JavaScript バンドルのサイズを分析するために使用できます。開始するには、以下のコマンドを実行してください：

```shell
npm run build-stats
```

コマンドを実行すると、自動的にブラウザで結果が表示されます。

#### データベーススタジオ

プロジェクトは Drizzle Studio を使用してデータベースを操作できるように設定されています。以下のコマンドを実行してデータベーススタジオを開くことができます：

```shell
npm run db:studio
```

その後、お好みのブラウザで https://local.drizzle.studio を開き、データベースを操作できます。

### VSCode 情報 (オプション)

VSCode を使用している場合は、`.vscode/extension.json` で提案されている拡張機能をインストールすることで、より良い統合環境を得られます。スターターコードには、VSCode とのシームレスな統合のための設定が含まれています。フロントエンドとバックエンドのデバッグ体験のためのデバッグ設定も提供されています。

VSCode にプラグインをインストールすると、ESLint と Prettier が自動的にコードを修正し、エラーを表示します。テストについても同様で、VSCode Vitest 拡張機能をインストールすることで、テストを自動的に実行し、コンテキスト内でコードカバレッジを表示できます。

プロのヒント：TypeScript によるプロジェクト全体の型チェックが必要な場合は、Mac では <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> でビルドを実行できます。

### 貢献

どなたでもこのプロジェクトへの貢献を歓迎します。質問がある場合やバグを見つけた場合は、お気軽に Issue を作成してください。提案や改善も大歓迎です。

### ライセンス

MIT ライセンスの下でライセンスされています。Copyright © 2026

詳細については [LICENSE](LICENSE) をご覧ください。

## スポンサー

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/6fb61971-3bf1-4580-98a0-10bd3f1040a2">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
          <img alt="Clerk – Next.js 用の認証およびユーザー管理" src="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/coderabbit-logo-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/coderabbit-logo-light.svg?raw=true">
          <img alt="CodeRabbit" src="public/assets/images/coderabbit-logo-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sentry-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sentry-dark.png?raw=true">
          <img alt="Sentry" src="public/assets/images/sentry-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://launch.arcjet.com/Q6eLbRE">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/arcjet-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/arcjet-light.svg?raw=true">
          <img alt="Arcjet" src="public/assets/images/arcjet-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://l.crowdin.com/next-js">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/crowdin-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/crowdin-dark.png?raw=true">
          <img alt="Crowdin" src="public/assets/images/crowdin-dark.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/better-stack-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/better-stack-dark.png?raw=true">
          <img alt="Better Stack" src="public/assets/images/better-stack-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://posthog.com/brand/posthog-logo-white.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://posthog.com/brand/posthog-logo.svg">
          <img alt="PostHog" src="https://posthog.com/brand/posthog-logo.svg">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/checkly-logo-dark.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/checkly-logo-light.png?raw=true">
          <img alt="Checkly" src="public/assets/images/checkly-logo-light.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" style=width="33%">
      <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
        <img src="public/assets/images/nextjs-boilerplate-saas.png?raw=true" alt="Next.js SaaS Boilerplate with React" />
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="mailto:contact@nextjs-boilerplate.com">
        ここにロゴを追加
      </a>
    </td>
  </tr>
</table>

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

プロジェクトを開始するためのカスタムボイラープレートをお探しですか？構築のお手伝いができるよう、ぜひお話しさせてください。いつでも contact@nextjs-boilerplate.com までお気軽にご連絡ください！

[![Next JS Boilerplate をスポンサーする](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://github.com/sponsors/ixartz)
