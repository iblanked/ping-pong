import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  template: `<div>Http content to come</div>`
})
export class HttpComponent {

  constructor(private http: Http) {

  }
}