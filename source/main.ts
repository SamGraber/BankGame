import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import * as toastr from 'toastr';

// add all rx operators
import 'rxjs/Rx';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

toastr.options = {
	positionClass: 'toast-top-right',
};

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);