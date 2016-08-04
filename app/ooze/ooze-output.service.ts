import { EventEmitter, Injectable } from '@angular/core';

import { CircularArray } from '../common/circular-array';

@Injectable()
export class OozeOutputService {

	private log:CircularArray = new CircularArray(200);

	logAdded:EventEmitter<string> = new EventEmitter();

	list(): string[] {
		return this.log.list();
	}

	add(item: string): void {
		this.log.push(item);
		this.logAdded.emit(item);
	}
}
