import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';

export class RxJsService {
  
  encodingString = 'ABCDEFGHIJKLMNOPQRST';

  getTimerValues() : Observable<number> {
    return Observable.timer(1000, 1000);
  }

  getMappedTimerValues() : Observable<string> {
    return this.getTimerValues().map(value => {
      let index = (value + 1) % this.encodingString.length;
      return this.encodingString[index];
    });
  }

  getFlatMappedObservable() {
    return Observable.of({name:'flat map'})
                     .flatMap(a => {
                       return Observable.timer(100, 100).map(b => { 
                         return {outer:a.name, inner:b}
                       });
                     });
  }

  getSwitchMappedObservable() {
    return Observable.of({name:'switch map'})
                     .switchMap(a => {
                       return Observable.timer(100, 100).map(b => { 
                         return {outer:a.name, inner:b}
                       });
                     });
  }

  getMergedObservables() {
    let a = Observable.timer(100, 500).map(v => {
      return {value:v, source:'A'};
    }).take(10);

    let b = Observable.timer(100, 1000).map(v => {
      return {value:v, source:'B'};
    }).take(10);

    return a.merge(b);
  }

  getConcatenadedObservables() {
    let a = Observable.timer(100, 500).map(v => {
      return {value:v, source:'A'};
    }).take(10);

    let b = Observable.timer(100, 1000).map(v => {
      return {value:v, source:'B'};
    }).take(10);

    return a.concat(b);
  }

}