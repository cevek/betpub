let BaseModel = require('./BaseModel');
let BaseStore = require('./BaseStore');
export class PlayerPosition extends BaseModel {
    name:string;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
    }

}

export class PlayerPositionStore extends BaseStore {

}

export let playerPositionStore = new PlayerPositionStore();
