import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {gameStore} from './Game';

export class LeagueEventType extends BaseModel {
    name;
    games;
    salary;
    league;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.games = json.games.map(gameJson => gameStore.getById(gameJson.id));
    }
}
export class LeagueEventTypeStore extends BaseStore {

}
export let leagueEventTypeStore = new LeagueEventTypeStore();
