// Todo編集フォームコンポーネント - 既存Todoアイテムの編集機能
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit',       // HTMLで使用するセレクタ名
  standalone: false,               // ngModules方式で使用
  templateUrl: './todo-edit.component.html',  // HTMLテンプレートファイル
  styleUrls: ['./todo-edit.component.css']    // CSSスタイルファイル
})
export class TodoEditComponent implements OnInit {
  // 編集対象のTodoオブジェクトを保持
  todo!: any;

  // コンストラクタ - 必要なサービスを依存性注入
  constructor(
    private route: ActivatedRoute,      // ルートパラメータを取得するため
    private todoService: TodoService,   // Todo操作のサービス
    private location: Location          // ブラウザの戻る機能を使用するため
  ) {}

  // コンポーネント初期化時に実行
  ngOnInit(): void {
    this.getTodo(); // URLからIDを取得してTodoを読み込む
  }

  // URLパラメータからIDを取得してTodoデータを取得
  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // URLパラメータからIDを取得
    
    // 本来のサービス呼び出し（現在はコメントアウト）
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo);
    
    // 暫定実装：サンプルデータを設定
    // this.todo = { id: id, title: 'Sample Todo', description: 'Sample Description', completed: false };
  }

  // 前のページに戻る
  goBack(): void {
    this.location.back(); // ブラウザの履歴を使って前のページに戻る
  }

  // Todoの変更を保存する
  save(): void {
    if (this.todo) {
      // 本来のサービス呼び出し（現在はコメントアウト）
      this.todoService.updateTodo(this.todo).subscribe(() => this.goBack());
      
      // 暫定実装：コンソールにログ出力して前のページに戻る
      // console.log('Saving todo:', this.todo);
      // this.goBack();
    }
  }

  // Todoを削除する
  delete(): void {
    if (this.todo) {
      this.todoService.deleteTodo(this.todo.id).subscribe(() => this.goBack());
    }
  }
}