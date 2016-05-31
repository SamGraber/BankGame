import * as _ from 'lodash';

export class ArrayUtility {
	remove(array: any[], item: any): void {
		_.remove(array, x => x === item);
	}
}