// メインアプリケーションモジュール - ngModules方式のルートモジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// アプリケーションのコンポーネントをインポート
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoRoutingModule } from './todo-routing.module';
import { InMemoryDataService } from '../in-memory-data.service';

@NgModule({
  // ngModulesの宣言：このモジュールで使用するコンポーネントを宣言
  declarations: [
    AppComponent,        // ルートコンポーネント
    TodoListComponent,   // Todo一覧表示コンポーネント
    TodoDetailComponent, // Todo詳細表示コンポーネント
    TodoFormComponent,   // Todo新規作成フォームコンポーネント
    TodoEditComponent    // Todo編集フォームコンポーネント
  ],
  // 必要なモジュールをインポート
  imports: [
    BrowserModule,       // ブラウザ用の基本機能モジュール
    CommonModule,        // 基本的なAngularディレクティブ（*ngFor, *ngIfなど）
    FormsModule,         // フォーム機能（ngModel）のためのモジュール
    HttpClientModule,    // HTTP通信のためのモジュール
    // インメモリAPI（開発用のモックAPI）
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TodoRoutingModule    // ルーティング設定モジュール
  ],
  // サービスプロバイダー（今回は空）
  providers: [],
  // アプリケーション起動時にブートストラップするコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }

