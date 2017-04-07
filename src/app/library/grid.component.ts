import { Component, Input } from "@angular/core";

@Component({
    selector: 'grid-component',
    template: `
        <div class="row" *ngFor="let item of cellComponentTypes">
            <div class="col-lg-12">
                <grid-cell [componentType]="item.ComponentType" [text]="item.Text"></grid-cell>
            </div>
        </div>
    `
})
export class Grid {
    @Input() componentTypes: any;

    cellComponentTypes: any[] = [];

    addDynamicCellComponent(selectedComponentType: any, text: string) {
        this.cellComponentTypes.push(
            {
                ComponentType: selectedComponentType,
                Text: text
            });
    }
}