// ルートコンポーネント - アプリケーション全体の基盤となるコンポーネント
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',        // HTMLで使用するセレクタ名
  standalone: false,           // ngModules方式で使用するため false に設定
  templateUrl: './app.component.html',  // HTMLテンプレートファイルのパス
  styleUrls: ['./app.component.css']    // CSSスタイルファイルのパス
})
export class AppComponent {
  // アプリケーションのタイトル
  title = 'Angular ToDo App Lv1';
}

