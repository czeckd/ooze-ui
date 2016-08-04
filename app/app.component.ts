import { Component } from '@angular/core';

import { CommandService } from './command/command.service';
import { OozeComponent } from './ooze/ooze.component';

@Component({
	selector: 'my-app',
	providers: [ CommandService ],
	directives: [ OozeComponent ],
	template: `<div><ooze></ooze></div>`
})

export class AppComponent {
}
