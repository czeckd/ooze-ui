import { EventEmitter, Injectable } from '@angular/core';

import { CircularArray } from '../common/circular-array';

@Injectable()
export class CommandService {

	private cmdList:CircularArray = new CircularArray(30);

	cmdAdded: EventEmitter<string>;

	constructor() {
		this.cmdAdded = new EventEmitter();
	}

	list(): string[] {
		return this.cmdList.list();
	}

	add(item: string): void {
		this.cmdList.push(item);
		this.cmdAdded.emit(item);
	}
}
