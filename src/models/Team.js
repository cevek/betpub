let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
export class Team extends BaseModel {
    name:string;
    players:Array<Player>;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
    }
}

export class TeamStore extends BaseStore {

}
export let teamStore = new TeamStore();