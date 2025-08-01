// メインエントリーポイント - ngModulesを使用したAngularアプリケーションの起動
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// ngModules方式でアプリケーションを起動
// platformBrowserDynamic()を使ってAppModuleをブートストラップ
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err)); // エラーハンドリング

