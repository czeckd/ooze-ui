import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

import { CommandService } from '../command/command.service';
import { Keyboard } from '../command/keyboard';

@Directive({
	selector: '[ooze-history]'
})

export class OozeHistoryDirective {
	private last:number = -1;
	private history:Array<any>;

	constructor(private elem:ElementRef, private model:NgModel, private cmdService:CommandService) {
	}

	@HostListener('keyup', ['$event'])
	doKeyUp(e:KeyboardEvent) {
		let key:string = Keyboard.getKey(e).toLowerCase();

		if (key === 'enter' && this.elem.nativeElement.value !== null) {
			this.last = -1;
		} else if (key.indexOf('up') !== -1) {
			if (this.last === -1) {
				this.history = this.cmdService.list();
				this.last = this.history.length;
			}
			this.last -= 1;
			if (this.last < 0) {
				this.last = 0;
			} else {
				this.updateValue(this.history[this.last]);
			}
		} else if (key.indexOf('down') !== -1) {
			if (this.last > -1) {
				this.last += 1;
				if (this.last >= this.history.length) {
					this.last = this.history.length - 1;
					this.updateValue(null);
				} else {
					this.updateValue(this.history[this.last]);
				}
			}
		}
	}

	private updateValue(value:string) {
		this.model.viewToModelUpdate(value);
		this.elem.nativeElement.value = value;
	}

}

