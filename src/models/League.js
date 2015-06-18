import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {storage} from '../storage';

export class League extends BaseModel {
    name;
    events = [];
    positions;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.salary = json.salary || 30000;
        this.positions = json.positions.map(positionId => storage.playerPositions.getById(positionId));
        //this.events = json.events.map(eventJson => storage.leagueEventTypes.getById(eventJson.id));
        //this.events.forEach(event => event.league = this);
    }

}
export class LeagueStore extends BaseStore {}
