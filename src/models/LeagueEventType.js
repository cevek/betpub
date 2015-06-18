import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {storage} from '../storage';


export class LeagueEventType extends BaseModel {
    name;
    games = [];
    league;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.league = storage.leagues.getById(json.leagueId);
        //this.games = json.games.map(gameJson => storage.games.getById(gameJson.id));
        //this.games.forEach(game => game.eventType = this);
    }
}
export class LeagueEventTypeStore extends BaseStore {}
