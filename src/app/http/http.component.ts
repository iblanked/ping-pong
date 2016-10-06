import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
  template: `
             <button (click)="loadPlayersFromObservable()">Load Players Using Observables</button>
             <span class="playerName" *ngFor="let player of playersFromObservable">{{player.name}}</span>
             
             <div>  
              <button (click)="loadPlayersFromPromise()">Load Players Using Promise</button>
              <span class="playerName" *ngFor="let player of playersFromPromise">{{player.name}}</span>
             </div>
             `
})
export class HttpComponent {

  playersFromObservable: Player[];
  playersFromPromise: Player[];

  constructor(private playerService: PlayerService) {
  }

  loadPlayersFromPromise() {
    this.playerService
        .getPlayersAsPromise()
        .then(res => this.playersFromPromise = res);    
  }

  loadPlayersFromObservable() {
    this.playerService
        .getPlayersAsObservable()
        .subscribe(res => this.playersFromObservable = res);
  }
}