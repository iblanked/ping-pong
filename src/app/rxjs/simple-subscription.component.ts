import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RxJsService } from './rxjs.service';

@Component({
  selector: 'simple-subscription',
  template: `<span style="color:blue;margin-right:10px;">Timer Value: {{value}}</span><button (click)="unsubscribe()">Unsubscribe</button>`
})
export class SimpleSubscriptionComponent implements OnInit {
  value: number;
  subscription;
  constructor(private rxJs: RxJsService) {}

  ngOnInit() {
    this.subscription = this.rxJs.getTimerValues()
                            .subscribe(value => this.value = value);
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}