// ルーティングモジュール - アプリケーション内のページ遷移を管理
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 各コンポーネントをインポート
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

// ルート設定 - URLパスとコンポーネントの対応を定義
export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },       // /todos でTodo一覧を表示
  { path: 'todo/:id', component: TodoDetailComponent },  // /todo/:id で個別Todo詳細を表示
  { path: 'create', component: TodoFormComponent },      // /create で新規作成フォームを表示
  { path: 'edit/:id', component: TodoEditComponent },    // /edit/:id で編集フォームを表示
  { path: '', redirectTo: '/todos', pathMatch: 'full' }  // ルートパス(/)の場合は/todosにリダイレクト
];

@NgModule({
  // RouterModule.forRoot()でルートレベルのルーティングを設定
  imports: [RouterModule.forRoot(routes)],
  // RouterModuleをエクスポートして他のモジュールで使用可能にする
  exports: [RouterModule]
})
export class TodoRoutingModule {}

