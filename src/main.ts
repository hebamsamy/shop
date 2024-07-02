import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ShopModule } from './app/shop.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(ShopModule)
.catch((err) => console.error(err));

