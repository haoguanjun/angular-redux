import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { GridModule } from "../library/grid.module";
import { DynamicComponent } from "./dynamic.component";
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";
import { RedDynamicComponent } from "./red-dynamic.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        GridModule.withComponents([
            BlueDynamicComponent,
            GreenDynamicComponent,
            RedDynamicComponent])
    ],
    declarations: [
        DynamicComponent,
        BlueDynamicComponent,
        GreenDynamicComponent,
        RedDynamicComponent
    ],
    bootstrap: [DynamicComponent]
})
export class DynamicModule { }
