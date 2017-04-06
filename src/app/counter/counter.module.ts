import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CounterMainComponent } from './counter.main.component';
import { HeaderComponent } from './header.component';
import { CounterComponent } from './counter.component';
import { PingpongComponent } from './pingpong.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        CounterMainComponent,
        HeaderComponent,
        CounterComponent,
        PingpongComponent
    ],
    exports: [CounterMainComponent]
})
export class CounterModule {
}
