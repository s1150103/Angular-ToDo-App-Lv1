// Todo一覧表示コンポーネント - Todoリストの表示と基本操作を管理
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',      // HTMLで使用するセレクタ名
  standalone: false,              // ngModules方式で使用
  templateUrl: './todo-list.component.html',  // HTMLテンプレートファイル
  styleUrls: ['./todo-list.component.css']    // CSSスタイルファイル
})
export class TodoListComponent implements OnInit {
  // Todoアイテムの配列を保持
  todos: any[] = [];

  // コンストラクタ - TodoServiceを依存性注入
  constructor(private todoService: TodoService) {}

  // コンポーネント初期化時に実行される
  ngOnInit(): void {
    this.getTodos(); // Todo一覧を取得
  }

  // Todo一覧をサービスから取得する
  getTodos(): void {
    this.todoService.getTodos().subscribe((todos: any) => {
      // IDの昇順でソート（1, 2, 3, 4, 5の順で表示）
      this.todos = todos.sort((a: any, b: any) => a.id - b.id);
    });
  }

  // Todoを削除する
  delete(todo: any): void {
    // 配列から該当のTodoを除去
    this.todos = this.todos.filter(t => t !== todo);
    
    // 本来のサービス呼び出し（現在はコメントアウト）
    this.todoService.deleteTodo(todo.id).subscribe();
    
    // 暫定実装：コンソールにログ出力
    // console.log('Deleting todo:', todo);
  }

  // 選択されたTodoを取得する
  getSelectedTodos(): any[] {
    return this.todos.filter(todo => todo.selected);
  }

  // 選択があるかチェック
  hasSelection(): boolean {
    return this.getSelectedTodos().length > 0;
  }

  // 削除ボタンのテキストを取得
  getDeleteButtonText(): string {
    const selectedCount = this.getSelectedTodos().length;
    if (selectedCount === 0) {
      return '削除するアイテムを選択してください';
    } else if (selectedCount === 1) {
      return '選択したアイテムを削除';
    } else {
      return `選択した${selectedCount}件を削除`;
    }
  }

  // 削除を実行
  performDelete(): void {
    const selectedTodos = this.getSelectedTodos();
    
    if (selectedTodos.length === 0) return;

    // 確認ダイアログ
    const message = selectedTodos.length === 1 
      ? `「${selectedTodos[0].title}」を削除しますか？`
      : `選択した${selectedTodos.length}件のアイテムを削除しますか？`;
    
    if (confirm(message)) {
      // 選択されたTodoを配列から除去
      selectedTodos.forEach(todo => {
        this.todos = this.todos.filter(t => t !== todo);
        // サービス呼び出しで削除
        this.todoService.deleteTodo(todo.id).subscribe();
      });
    }
  }
}
