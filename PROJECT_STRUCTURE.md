# Angular Todo App - プロジェクト構成説明書

## プロジェクト概要
このプロジェクトは**ngModules方式**を使用したAngular Todoアプリケーションです。

## プロジェクト構成

### ルートファイル
```
angular-todo-app_lv1/
├── src/
│   ├── main.ts                        # アプリケーションエントリーポイント
│   ├── in-memory-data.service.ts      # 開発用モックAPIサービス
│   └── app/
│       ├── app.module.ts              # メインアプリケーションモジュール
│       ├── app.component.ts           # ルートコンポーネント
│       ├── app.component.html         # ルートコンポーネントテンプレート
│       ├── app.component.css          # ルートコンポーネントスタイル
│       ├── todo-routing.module.ts     # ルーティング設定モジュール
│       ├── models/
│       │   └── todo.model.ts          # Todoデータモデル
│       ├── services/
│       │   └── todo.service.ts        # Todo操作サービス
│       ├── todo-list/
│       │   ├── todo-list.component.ts
│       │   ├── todo-list.component.html
│       │   └── todo-list.component.css
│       ├── todo-detail/
│       │   ├── todo-detail.component.ts
│       │   ├── todo-detail.component.html
│       │   └── todo-detail.component.css
│       ├── todo-form/
│       │   ├── todo-form.component.ts
│       │   ├── todo-form.component.html
│       │   └── todo-form.component.css
│       └── todo-edit/
│           ├── todo-edit.component.ts
│           ├── todo-edit.component.html
│           └── todo-edit.component.css
├── angular.json                       # Angular CLI設定
├── package.json                       # npm依存関係
└── tsconfig.json                      # TypeScript設定
```

## ファイル別詳細説明

### 1. src/main.ts - エントリーポイント
**役割**: ngModules方式でアプリケーションを起動
**重要な特徴**:
- `platformBrowserDynamic().bootstrapModule(AppModule)`でngModules方式を使用
- standalone方式ではなく、従来のモジュールベースアプローチ

### 2. src/app/app.module.ts - メインモジュール
**役割**: アプリケーション全体の設定管理
**重要な設定**:
- `declarations`: 全コンポーネントを宣言
- `imports`: 必要なAngularモジュールを導入
- `bootstrap`: 起動コンポーネントを指定

### 3. コンポーネント群

#### app.component.ts - ルートコンポーネント
- `standalone: false`: ngModules方式を明示
- アプリケーション全体の基盤

#### todo-list.component.ts - Todo一覧
- Todo一覧の表示と基本操作
- 新規追加・削除機能

#### todo-detail.component.ts - Todo詳細
- 個別Todoの詳細表示
- 編集機能付き

#### todo-form.component.ts - 新規作成フォーム
- 新しいTodoアイテムの作成
- フォームバリデーション

#### todo-edit.component.ts - 編集フォーム
- 既存Todoアイテムの編集
- URLパラメータからID取得

### 4. サービス・モデル

#### services/todo.service.ts
- TodoのCRUD操作を管理
- HttpClientを使用したAPI通信

#### models/todo.model.ts
- Todoデータ構造の定義
- TypeScriptインターフェース

#### in-memory-data.service.ts
- 開発用モックAPI
- angular-in-memory-web-apiを使用

### 5. ルーティング

#### todo-routing.module.ts
- ページ遷移の管理
- URL-コンポーネント対応表

## ngModules方式の特徴

### 1. モジュール中心の構成
- すべてのコンポーネントをモジュールで宣言
- 依存関係をモジュールレベルで管理

### 2. 明示的な設定
- `standalone: false`で従来方式を指定
- 各コンポーネントは個別にインポートなし

### 3. 集中管理
- app.module.tsですべての設定を一元管理
- 依存性注入もモジュールレベル

## 開発・実行コマンド

```bash
# 開発サーバー起動
ng serve

# ビルド
ng build

# テスト実行
ng test
```

## 使用技術スタック

- **Angular**: 20.x (ngModules方式)
- **TypeScript**: 5.x
- **RxJS**: リアクティブプログラミング
- **angular-in-memory-web-api**: 開発用モックAPI

## アプリケーション機能

1. **Todo一覧表示** (`/todos`)
2. **Todo詳細表示** (`/todo/:id`) 
3. **Todo新規作成** (`/create`)
4. **Todo編集** (`/edit/:id`)

## 実装状況

現在は基本的なUI構造とルーティングが完成しており、実際のCRUD操作は暫定実装となっています。本格的なAPI連携は今後の拡張で対応予定です。