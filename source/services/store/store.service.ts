import { Injectable } from 'angular2/core';

export abstract class StoreBackend {
	[key: string]: any;
	abstract removeItem(key: string): void;
}

@Injectable()
export class Store {
	constructor(private backend: StoreBackend) {}

	get<TDataType>(key: string): TDataType {
		return JSON.parse(this.backend[key]);
	}

	set<TDataType>(value: TDataType, key: string): void {
		if (value == null) {
			this.backend.removeItem(key);
			return;
		}

		this.backend[key] = JSON.stringify(value);
	}
}