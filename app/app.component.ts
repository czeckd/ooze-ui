import { Component } from '@angular/core';

import { CommandService } from './command/command.service';

@Component({
	selector: 'my-app',
	providers: [ CommandService ],
	template: `<div><ooze></ooze></div>`
})

export class AppComponent {
}
