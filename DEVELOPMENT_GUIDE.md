# Angular Todo App - 開発ガイド

## はじめに
このドキュメントは、Angular ngModulesを使用したTodoアプリケーションの開発ガイドです。

## セットアップ手順

### 1. 環境要件
- Node.js 18.x以上
- npm 9.x以上
- Angular CLI 20.x以上

### 2. プロジェクトの起動
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
ng serve

# ブラウザで http://localhost:4200 にアクセス
```

### 3. ビルドとテスト
```bash
# プロダクションビルド
ng build

# テスト実行
ng test

# E2Eテスト実行
ng e2e
```

## ngModules方式について

### 特徴
1. **モジュール中心の構成**: すべてのコンポーネントをモジュールで宣言
2. **集中管理**: app.module.tsで依存関係を一元管理
3. **明示的設定**: `standalone: false`で従来方式を指定

### standalone方式との違い
| 項目 | ngModules方式 | standalone方式 |
|------|---------------|----------------|
| 起動方法 | `platformBrowserDynamic().bootstrapModule()` | `bootstrapApplication()` |
| コンポーネント宣言 | モジュールのdeclarations | `standalone: true` |
| 依存関係 | モジュールのimports | コンポーネントのimports |
| 設定場所 | app.module.ts | 各コンポーネント |

## ファイル構成の理解

### コアファイル
1. **main.ts**: アプリケーションの起動点
2. **app.module.ts**: メインモジュール（最重要）
3. **app.component.ts**: ルートコンポーネント

### 機能別ファイル
1. **コンポーネント**: 画面表示とユーザー操作
2. **サービス**: ビジネスロジックとAPI通信
3. **モデル**: データ構造の定義
4. **ルーティング**: ページ遷移の管理

## 開発の進め方

### 1. 新しいコンポーネントの追加
```bash
# Angular CLIでコンポーネント生成
ng generate component component-name

# app.module.tsのdeclarationsに追加が必要
```

### 2. 新しいサービスの追加
```bash
# Angular CLIでサービス生成
ng generate service service-name

# @Injectable({providedIn: 'root'})で自動的に提供される
```

### 3. 新しいルートの追加
```typescript
// todo-routing.module.tsに追加
{ path: 'new-path', component: NewComponent }
```

## 実装のポイント

### 1. コンポーネント設計
- `standalone: false`を明示的に設定
- テンプレートとスタイルは別ファイルに分離
- 責任を明確に分割（表示・操作・データ）

### 2. サービス設計
- 単一責任の原則を適用
- APIとの通信はサービスで実装
- エラーハンドリングを適切に行う

### 3. ルーティング設計
- RESTfulなURL設計
- パラメータの適切な使用
- ガードの実装（認証など）

## 現在の実装状況

### ✅ 完成している機能
- 基本的なUI構造
- ルーティング設定
- コンポーネント間の遷移
- モックデータの表示

### 🚧 暫定実装（今後改善予定）
- CRUD操作（現在はコンソール出力のみ）
- データの永続化
- エラーハンドリング
- フォームバリデーション

### 📋 今後の拡張予定
1. **完全なCRUD操作実装**
   - TodoServiceの完全実装
   - HTTP通信の実装
   - エラーハンドリング

2. **UI/UX改善**
   - レスポンシブデザイン
   - ローディング表示
   - 通知機能

3. **データ管理**
   - 状態管理（NgRx検討）
   - データの永続化
   - バックエンドAPI連携

4. **テスト実装**
   - ユニットテスト
   - インテグレーションテスト
   - E2Eテスト

## トラブルシューティング

### 1. よくある問題

#### ビルドエラー: "Component is standalone"
**原因**: コンポーネントがstandalone方式として認識されている
**解決方法**: `standalone: false`を明示的に設定

#### ルーティングが動作しない
**原因**: RouterModuleの設定不備
**解決方法**: `RouterModule.forRoot(routes)`を確認

#### サービスが注入されない
**原因**: プロバイダー設定の不備
**解決方法**: `@Injectable({providedIn: 'root'})`を確認

### 2. デバッグ方法
- Chrome DevToolsの活用
- Angular DevToolsの使用
- コンソールログの確認

## ベストプラクティス

### 1. コード品質
- TypeScriptの型を適切に使用
- 一貫したコーディングスタイル
- 意味のある変数・関数名

### 2. パフォーマンス
- OnPush Change Detection戦略の使用
- Lazy Loadingの実装
- 不要なSubscriptionの解除

### 3. メンテナンス性
- 適切なコメントの記載
- ドキュメントの更新
- リファクタリングの実施

## 参考資料

### 公式ドキュメント
- [Angular公式ガイド](https://angular.dev/)
- [Angular CLI](https://angular.dev/cli)
- [RxJS](https://rxjs.dev/)

### 学習リソース
- Angular日本語ドキュメント
- コミュニティフォーラム
- サンプルプロジェクト集

## まとめ
このプロジェクトは、ngModules方式でのAngular開発を学習するための実践的なサンプルです。段階的に機能を拡張していくことで、本格的なWebアプリケーション開発のスキルを身につけることができます。