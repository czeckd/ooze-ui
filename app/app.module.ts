import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CommandService } from './command/command.service';
import { OozeModule } from './ooze/ooze.module';

@NgModule({
	imports:         [ BrowserModule, FormsModule, OozeModule ],
	declarations:    [ AppComponent ],
	bootstrap:       [ AppComponent ]
})
export class AppModule { }


