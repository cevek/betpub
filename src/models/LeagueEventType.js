import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {gameStore} from './Game';
import {storage} from '../storage';


export class LeagueEventType extends BaseModel {
    name;
    games;
    salary;
    league;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.games = json.games.map(gameJson => storage.games.getById(gameJson.id));
        this.games.forEach(game => game.eventType = this);
    }
}
class LeagueEventTypeStore extends BaseStore {}
export let leagueEventTypeStore = new LeagueEventTypeStore();
