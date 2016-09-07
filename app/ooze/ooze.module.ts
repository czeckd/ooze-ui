import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OozeComponent } from './ooze.component';
import { OozeHistoryDirective } from './ooze-history.directive';
import { OozeInComponent } from './ooze-in.component';
import { OozeOutComponent } from './ooze-out.component';


@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpModule ],
	declarations: [ OozeComponent, OozeHistoryDirective, OozeInComponent, OozeOutComponent ],
	exports:      [ OozeComponent ]
})

export class OozeModule {}
