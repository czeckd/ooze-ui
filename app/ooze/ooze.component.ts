import { Component } from '@angular/core';

import { OozeHostService } from './ooze-host.service';
import { OozeOutputService } from './ooze-output.service';

@Component({
	selector: 'ooze',
	providers: [ OozeHostService, OozeOutputService ],
	template:
`<div style="margin-top:20px;width:400px;">
	<ooze-out></ooze-out>
	<ooze-in></ooze-in>
</div>
`
})

export class OozeComponent {
}
