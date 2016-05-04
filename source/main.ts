import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import * as toastr from 'toastr';

// add all rx operators
import 'rxjs/Rx';

import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { BROWSER_STORE_PROVIDERS } from './services/store/store.browser';

toastr.options = {
	positionClass: 'toast-top-right',
};

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	BROWSER_STORE_PROVIDERS,
]);