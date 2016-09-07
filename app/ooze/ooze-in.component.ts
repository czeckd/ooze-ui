import { Component } from '@angular/core';

import { CommandService } from '../command/command.service';
import { OozeHostService } from './ooze-host.service';

@Component({
	selector: 'ooze-in',
	template: `
<form style="margin-top:1em;">
	<div class="form-group">
		<input ooze-history name="command" autocomplete="off" type="text" class="form-control" (keyup.enter)="doIt($event)" [(ngModel)]="cmd">
	</div>
</form>`
})

export class OozeInComponent {
	private cmd:string = null;

	constructor(private host:OozeHostService, private cmds:CommandService) {
	}

	doIt(e:KeyboardEvent) {
		if (this.cmd !== null) {

			if (this.host.send(this.cmd)) {
				this.cmds.add(this.cmd);
				this.cmd = null;
			}
		}
	}
}
