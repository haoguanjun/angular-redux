import { Component, OnInit, Input } from "@angular/core";
import { RedDynamicComponent } from "./red-dynamic.component";
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="page-header">
                <h1>Creating AOT Friendly Dynamic Components with Angular 2</h1>
            </div>
            <div>
                <ul>
                    <li><a target="article" href="https://www.ag-grid.com/ag-grid-angular-aot-dynamic-components/">Understanding AOT and Dynamic Components in Angular 2</a></li>
                    <li><a target="github" href="https://github.com/seanlandsman/angular2-dynamic-components">example in GitHub</a></li>
                    <li><a target="live" href="https://seanlandsman.github.io/angular2-dynamic-components/">Live Demo</a></li>
                    <li><a target="aggrid" href="https://www.ag-grid.com/best-angular-2-data-grid/#gsc.tab=0/">ag Grid</a></li>
                </ul>
                
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Application Code</div>
                        <div class="panel-body">
                            <div class="input-group">
                               <input [(ngModel)]="text">
                                <select class="form-control" [(ngModel)]="selectedComponentType">
                                    <option *ngFor="let cellComponentType of componentTypes" [ngValue]="cellComponentType">{{cellComponentType.name}}</option>
                                </select>
                                 <span class="input-group-btn">
                                    <button type="button" class="btn btn-primary" (click)="grid.addDynamicCellComponent(selectedComponentType, text)">Add Dynamic Grid component</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Library Code</div>
                        <div class="panel-body">
                            <grid-component #grid></grid-component>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
            <h3>entryComponents</h3>
            <p>A list of components that are <em>not</em> <a href="#q-template-reference">referenced</a> in a reachable component template.</p>
<p>Most developers never set this property.
The <a href="#q-angular-compiler">Angular compiler</a> must know about every component actually used in the application.
The compiler can discover most components by walking the tree of references
from one component template to another.</p>
<p>But there's always at least one component that's not referenced in any template:
the root component, <code>AppComponent</code>, that you bootstrap to launch the app.
That's why it's called an <em>entry component</em>.</p>
<p>Routed components are also <em>entry components</em> because they aren't referenced in a template either.
The router creates them and drops them into the DOM near a <code>&lt;router-outlet&gt;</code>.</p>
<p>While the bootstrapped and routed components are <em>entry components</em>,
you usually don't have to add them to a module's <code>entryComponents</code> list.</p>
<p>Angular automatically adds components in the module's <code>bootstrap</code> list to the <code>entryComponents</code> list.
The <code>RouterModule</code> adds routed components to that list.</p>
<p>That leaves only the following sources of undiscoverable components:</p>
<ul>
<li>Components bootstrapped using one of the imperative techniques.</li>
<li>Components dynamically loaded into the DOM by some means other than the router.</li>
</ul>
<p>Both are advanced techniques that few developers ever employ.
If you are one of those few, you must add these components to the
<code>entryComponents</code> list yourself, either programmatically or by hand.</p>
</div>
        </div>
    `
})
export class DynamicComponent implements OnInit {
    @Input() componentTypes: any[] = [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
    @Input() selectedComponentType: any;
    public text: string;
    ngOnInit(): void {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;

    }
}