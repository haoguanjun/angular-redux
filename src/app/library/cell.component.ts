import { Component, Input, ViewContainerRef, OnInit, ComponentFactoryResolver } from "@angular/core";

@Component({
    selector: 'grid-cell',
    template: ''
})
export class Cell implements OnInit {
    @Input() componentType: any;
    @Input() text: string;

    constructor(private viewContainerRef: ViewContainerRef,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        let compFactory = this.cfr.resolveComponentFactory(this.componentType);
        let ref = this.viewContainerRef.createComponent(compFactory);
        let instance: any = ref.instance;
        instance.text = this.text;
    }
}