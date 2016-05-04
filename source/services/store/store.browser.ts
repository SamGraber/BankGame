import { provide, Provider } from 'angular2/core';
import { StoreBackend, Store } from './store.service';

export const BROWSER_STORE_PROVIDERS = [
	provide(StoreBackend, { useValue: localStorage }),
	Store,
]