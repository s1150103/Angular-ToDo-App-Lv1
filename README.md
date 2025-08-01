# Angular ToDo App Lv1

Angular学習用のToDoアプリケーション（レベル1）です。Angularの基本的な機能を使用して、CRUD操作が可能なToDoリストを実装しています。

## 🚀 機能

### 基本機能
- ✅ **ToDo一覧表示** - 登録されたToDoをID昇順で表示
- ✅ **ToDo詳細表示** - 個別ToDoの詳細情報を表示
- ✅ **ToDo新規作成** - 新しいToDoアイテムの作成
- ✅ **ToDo編集** - 既存ToDoの編集・更新
- ✅ **ToDo削除** - 個別またはチェックボックス選択による一括削除

### UI/UX機能
- 🎨 **スタイリッシュなデザイン** - モダンなUI/UXデザイン
- ✏️ **編集ボタン** - 一覧画面から直接編集画面へ遷移
- 🗑️ **一括削除** - チェックボックスで複数選択して削除
- 📱 **レスポンシブ対応** - 様々な画面サイズに対応

## 🛠️ 技術スタック

- **フレームワーク**: Angular 18
- **言語**: TypeScript
- **スタイル**: CSS3
- **フォーム**: Template Driven Forms
- **ルーティング**: Angular Router
- **データ管理**: Angular In-Memory Web API
- **アーキテクチャ**: NgModules

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── models/
│   │   └── todo.model.ts          # ToDoデータモデル
│   ├── services/
│   │   └── todo.service.ts        # ToDoサービス（HTTP API操作）
│   ├── todo-list/                 # ToDo一覧コンポーネント
│   ├── todo-detail/               # ToDo詳細コンポーネント
│   ├── todo-form/                 # ToDo新規作成コンポーネント
│   ├── todo-edit/                 # ToDo編集コンポーネント
│   ├── todo-routing.module.ts     # ルーティング設定
│   └── app.module.ts              # メインモジュール
└── in-memory-data.service.ts      # モックデータサービス
```

## 🎯 学習目標

このプロジェクトは以下のAngular概念の学習を目的としています：

- **コンポーネント設計** - 機能別コンポーネントの作成
- **サービス** - データ操作とビジネスロジックの分離
- **ルーティング** - SPA（Single Page Application）の実装
- **フォーム処理** - Template Driven Formsの使用
- **HTTP通信** - RESTful APIの模擬実装
- **状態管理** - コンポーネント間でのデータ共有

## 🚦 セットアップ・実行方法

### 前提条件
- Node.js (推奨: v18以上)
- npm (Node.jsに含まれています)
- Angular CLI (`npm install -g @angular/cli`)

### インストールと実行

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/s1150103/Angular-ToDo-App-Lv1.git
   cd Angular-ToDo-App-Lv1
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm start
   # または
   ng serve
   ```

4. **アプリケーションへのアクセス**
   
   ブラウザで `http://localhost:4200` を開いてください

## 📖 使用方法

### 基本操作

1. **ToDo一覧表示**
   - アプリ起動時に自動で一覧が表示されます
   - 5つのサンプルデータが初期表示されます

2. **新規作成**
   - 一覧画面から「新規作成」ボタンをクリック
   - タイトルと説明を入力して保存

3. **詳細表示**
   - 一覧のToDoタイトルをクリックすると詳細画面へ遷移

4. **編集**
   - 一覧の「編集」ボタンまたは詳細画面の「編集」ボタンをクリック
   - 内容を変更して保存

5. **削除**
   - **個別削除**: 詳細・編集画面の「削除」ボタン
   - **一括削除**: 一覧でチェックボックス選択後、「削除」ボタン

## 🎨 デザイン特徴

- **カラーパレット**: モダンなグラデーションとシャドウ
- **アニメーション**: ホバーエフェクトとトランジション
- **アイコン**: 直感的な絵文字アイコン（🗑️、✏️）
- **レイアウト**: フレックスボックスによる柔軟なレイアウト

## 🔧 開発・コード品質

- **ESLint**: コード品質の静的検証
- **Prettier**: コードフォーマットの統一
- **TypeScript**: 型安全性の確保
- **Angular Style Guide**: Angularのベストプラクティスに準拠

### コマンド

```bash
# リント実行
npm run lint

# フォーマット実行
npm run format

# ビルド
npm run build

# テスト実行
npm test
```

## 📝 ToDoモデル

```typescript
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
```

## 🌟 主な学習ポイント

1. **コンポーネント間通信** - サービスを通じたデータ共有
2. **ライフサイクルフック** - ngOnInitでの初期化処理
3. **双方向データバインディング** - [(ngModel)]の使用
4. **ルートパラメータ** - URLからIDを取得してデータを表示
5. **Observable** - RxJSを使った非同期処理
6. **依存性注入** - サービスのコンストラクタインジェクション

## 🚀 今後の拡張予定

### Lv2
- **Reactive Forms** - Lv2以降はReactive Formを使って入力欄を実装する
  - [Angular - Reactive forms](https://angular.dev/guide/reactive-forms)
- **Bootstrap導入** - bootstrapをインストールし、bootstrapを利用してデザインを整える
  - [Bootstrap](https://getbootstrap.com/)
    - 見た目の設定方法は[こちらのドキュメント](https://getbootstrap.com/docs/5.3/getting-started/introduction/)を参考に
  - [NG Bootstrap](https://ng-bootstrap.github.io/)
    - Angular用のbootstrap
    - インストールは[こちらのリンクの方法](https://ng-bootstrap.github.io/#/getting-started)から行う
- **機能完全実装** - Lv1の機能をすべて実装する

## 🤝 貢献・フィードバック

学習目的のプロジェクトですが、改善提案やバグ報告は歓迎します！

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
