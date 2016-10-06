import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = [
      {id: 1, name: 'Player1'},
      {id: 2, name: 'Player2'},
      {id: 3, name: 'Player3'},
      {id: 4, name: 'Player4'},
      {id: 5, name: 'Player5'},
      {id: 6, name: 'Player6'},
      {id: 7, name: 'Player7'},
      {id: 8, name: 'Player8'},
      {id: 9, name: 'Player9'}
    ];
    return {players};
  }
}