import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {storage} from '../storage';

export class Team extends BaseModel {
    name;
    players = [];

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        //this.players = json.players.map(playerId => storage.players.getById(playerId));
        //this.players.forEach(player => player.team = this);
    }
}

export class TeamStore extends BaseStore {}