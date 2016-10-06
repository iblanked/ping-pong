import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RxJsService } from './rxjs.service';

@Component({
  selector: 'mapped-observable',
  template: `<span style="color:green;margin-right:10px;">Mapped Value: {{value}}</span><button (click)="unsubscribe()">Unsubscribe</button>`
})
export class MappedObservableComponent implements OnInit {
  value: string;
  subscription;
  constructor(private rxJs: RxJsService) {}

  ngOnInit() {
    this.subscription = this.rxJs.getMappedTimerValues()
                            .subscribe(value => this.value = value);
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}