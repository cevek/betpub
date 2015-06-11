import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {playerStore} from './Player';
export class Team extends BaseModel {
    name;
    players = [];

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.players = json.players.map(playerId => playerStore.getById(playerId));
    }
}

export class TeamStore extends BaseStore {

}
export let teamStore = new TeamStore();