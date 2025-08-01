import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'api/todos';  // in-memory-apiのURL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
  addTodo(todo: Todo): Observable<Todo> {
      return this.http.post<Todo>(this.todosUrl, todo);
    }
     updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

    deleteTodo(id: number): Observable<Todo> {
      const url = `${this.todosUrl}/${id}`;
      return this.http.delete<Todo>(url);
    }

    getTodo(id: number): Observable<Todo> {
      const url = `${this.todosUrl}/${id}`;
      return this.http.get<Todo>(url);
    }

}

