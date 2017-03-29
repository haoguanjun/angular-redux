import { Component, OnInit, OnDestroy, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'appheader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<h1>{{title}}</h1>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
