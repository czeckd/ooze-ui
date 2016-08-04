import { Component } from '@angular/core';

import { OozeInComponent } from './ooze-in.component';
import { OozeOutComponent } from './ooze-out.component';
import { OozeHostService } from './ooze-host.service';
import { OozeOutputService } from './ooze-output.service';

@Component({
	selector: 'ooze',
	providers: [ OozeHostService, OozeOutputService ],
	directives: [ OozeInComponent, OozeOutComponent ],
	template:
`<div style="margin-top:20px;width:400px;">
	<ooze-out></ooze-out>
	<ooze-in></ooze-in>
</div>
`
})

export class OozeComponent {
}
