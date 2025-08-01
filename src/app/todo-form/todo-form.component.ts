// Todo新規作成フォームコンポーネント - 新しいTodoアイテムの作成機能
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',       // HTMLで使用するセレクタ名
  standalone: false,               // ngModules方式で使用
  templateUrl: './todo-form.component.html',  // HTMLテンプレートファイル
  styleUrls: ['./todo-form.component.css']    // CSSスタイルファイル
})
export class TodoFormComponent {
  // 新規作成するTodoオブジェクトの初期値
  todo: any = {
    id: 0,           // ID（自動採番される予定）
    title: '',       // タイトル
    description: '', // 説明
    completed: false // 完了状態（初期値はfalse）
  };

  // コンストラクタ - 必要なサービスを依存性注入
  constructor(
    private todoService: TodoService,  // Todo操作のサービス
    private location: Location         // ブラウザの戻る機能を使用するため
  ) {}

  // 前のページに戻る
  goBack(): void {
    this.location.back(); // ブラウザの履歴を使って前のページに戻る
  }

  // 新しいTodoを追加する
  add(): void {
    this.todo.title = this.todo.title.trim(); // 前後の空白を除去
    if (!this.todo.title) { return; } // タイトルが空の場合は何もしない
    
    // TodoServiceを使って追加
    this.todoService.addTodo(this.todo).subscribe(() => this.goBack());
  }
}