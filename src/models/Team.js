let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
let {playerStore} = require('./Player');
export class Team extends BaseModel {
    name:string;
    players:Array<Player> = [];

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