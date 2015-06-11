import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {leagueEventTypeStore} from './LeagueEventType';
export class League extends BaseModel {
    name;
    events = [];
    positions;

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
