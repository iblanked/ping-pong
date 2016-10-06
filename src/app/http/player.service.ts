import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Player } from './player';

@Injectable()
export class PlayerService {
  
  private playersUrl = 'app/players'

  constructor(private http: Http) {}

  getPlayersAsPromise() : Promise<Player[]> {
    return this.http.get(this.playersUrl)
               .map(response => response.json().data as Player[])
               .toPromise();
  }

  getPlayersAsObservable() : Observable<Player[]>{
    return this.http
               .get(this.playersUrl)
               .map(response => response.json().data as Player[])
               
  }
}