import 'es6-shim/es6-shim.min';
import 'angular2/es6/dev/src/testing/shims_for_IE';
import 'angular2/bundles/angular2-polyfills';
import 'rxjs/bundles/Rx';
import 'angular2/bundles/angular2.dev';
import 'angular2/bundles/router.dev';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);