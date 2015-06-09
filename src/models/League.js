let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
let {leagueEventTypeStore} = require('./LeagueEventType');
export class League extends BaseModel {
    name:string;
    events:Array<LeagueEventType> = [];
    positions:Array<PlayerPosition>;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.events = json.events.map(eventJson => leagueEventTypeStore.getById(eventJson.id));
    }

}
export class LeagueStore extends BaseStore {

}

export let leagueStore = new LeagueStore();
