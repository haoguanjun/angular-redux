import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Grid } from "./grid.component";
import { Cell } from "./cell.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        Grid,
        Cell
    ],
    exports: [
        Grid
    ]
})
export class GridModule {
    static withComponents(components: any[]) {
        return {
            ngModule: GridModule,
            providers: [
                // https://angular.io/docs/ts/latest/api/core/index/ANALYZE_FOR_ENTRY_COMPONENTS-let.html
                // https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-why-entry-components
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        }
    }
}