import { Component, ElementRef, Input, Pipe } from '@angular/core';


import { OozeOutputService } from './ooze-output.service';

@Component({
	selector: 'ooze-out',
	styles: ['.scroll-down-div {height:230px;overflow-y:auto;border:1px solid #ccc;border-radius:4px;padding:6px;}'],
	template: '<div class="scroll-down-div" [innerHtml]="text"></div>'
})

export class OozeOutComponent {
	@Input() lock:boolean  = typeof this.lock !== 'undefined' ? this.lock : false;

	text:string = '';

	constructor(private elem:ElementRef, private output:OozeOutputService) {
		output.logAdded.subscribe( (item:string) => this.onLog(item));
	}

	onLog(item:string) {
//		this.text += item.replace(/<\s*a/g, '&lt;a').replace(/<\s*\/\s*a\s*>/g, '&lt;/a&gt;') + '<br/>';

		this.text += item + '<br/>';
		this.scrollDown();
	}

	private scrollDown() {
		if (this.lock !== true) {
			let child:HTMLElement = this.elem.nativeElement.firstElementChild;
			if (child.scrollTop !== child.scrollHeight) {
				setTimeout( () => {
					child.scrollTop = child.scrollHeight;
				}, 50);
			}
		}
	}
}
