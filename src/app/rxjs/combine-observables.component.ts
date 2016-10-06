import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RxJsService } from './rxjs.service';

@Component({
  selector: 'combine-observables',
  template: `<div style="color:blue;margin-right:10px;">FlatMap Value: {{value1.outer}} {{value1.inner}}</div>
             <div style="color:blue;margin-right:10px;">SwitchMap Value: {{value2.outer}} {{value2.inner}}</div>
             <div *ngFor="let mergedValue of mergedValues" style="color:blue;margin-right:10px;">Merged Value: {{mergedValue.source}}</div>
             <div *ngFor="let concatValue of concatValues" style="color:green;margin-right:10px;">Concatenaded Value: {{concatValue.source}}</div>
             <button (click)="unsubscribe()">Unsubscribe</button>
  `
})
export class CombineObservablesComponent implements OnInit {
  value1 = {};
  value2 = {};
  mergedValues = [];
  concatValues = [];

  subscription1;
  subscription2;
  subscription3;
  subscription4;

  constructor(private rxJs: RxJsService) {}

  ngOnInit() {
    this.subscription1 = this.rxJs.getFlatMappedObservable()
                             .subscribe(value => this.value1 = value);

    this.subscription2 = this.rxJs.getSwitchMappedObservable()
                             .subscribe(value => this.value2 = value);

    this.subscription3 = this.rxJs.getMergedObservables().subscribe(value => this.mergedValues = [...this.mergedValues, value]); 

    this.subscription4 = this.rxJs.getConcatenadedObservables().subscribe(value => this.concatValues = [...this.concatValues, value]);     
  }

  unsubscribe() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}