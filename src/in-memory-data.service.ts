// インメモリデータサービス - 開発用のモックAPIデータを提供
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './app/models/todo.model';

export class InMemoryDataService implements InMemoryDbService {
  // データベースを模擬するメソッド - 初期データを定義
  createDb() {
    // 5個のサンプルTodoデータ
    const todos: any[] = [
      { id: 1, title: 'タスク1', description: '説明1', completed: false },
      { id: 2, title: 'タスク2', description: '説明2', completed: true },
      { id: 3, title: 'タスク3', description: '説明3', completed: false },
      { id: 4, title: 'タスク4', description: '説明4', completed: false },
      { id: 5, title: 'タスク5', description: '説明5', completed: true }
    ];
    // 'todos'キーでデータを返す（APIの/api/todosエンドポイントに対応）
    return { todos };
  }

  // 新しいIDを生成するメソッド - 既存のIDの最大値 + 1を返す
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  }
}

