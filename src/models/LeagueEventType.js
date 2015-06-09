let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
let {gameStore} = require('./Game');

export class LeagueEventType extends BaseModel {
    name:string;
    games:Array<Game>;
    salary:number;
    league:League;

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
