import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { applyMiddleware, compose, createStore } from 'redux';

import { AppStore } from '../angular-redux/app.store';

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
