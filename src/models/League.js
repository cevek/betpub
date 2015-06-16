import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {leagueEventTypeStore} from './LeagueEventType';
import {storage} from '../storage';

export class League extends BaseModel {
    name;
    events = [];
    positions;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.events = json.events.map(eventJson => storage.leagueEventTypes.getById(eventJson.id));
        this.events.forEach(event => event.league = this);
    }

}
class LeagueStore extends BaseStore {}

export let leagueStore = new LeagueStore();
