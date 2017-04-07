import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dynamic-component',
    template: '<div class="img-rounded" style="background-color: lightcoral;margin: 5px"> Red Dynamic Component! - <h3>{{ text}}</h3> </div>',
})
export class RedDynamicComponent {
    @Input() text: string;
}