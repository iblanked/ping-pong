import { NgModule } from '@angular/core';

import { RxJsComponent } from './rxjs.component';
import { RxJsService } from './rxjs.service';

import { SharedModule } from '../shared/shared.module';
import { SimpleSubscriptionComponent } from './simple-subscription.component';
import { MappedObservableComponent } from './mapped-observable.component';
import { CombineObservablesComponent } from './combine-observables.component';

@NgModule({
  declarations: [RxJsComponent, SimpleSubscriptionComponent, MappedObservableComponent, CombineObservablesComponent],
  providers: [RxJsService],
  imports: [SharedModule]
})
export class RxJsDemoModule {
  
}