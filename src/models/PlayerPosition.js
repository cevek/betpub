import {BaseModel} from './BaseModel';
import {BaseStore} from './BaseStore';
var id = 100;
export class PlayerPosition extends BaseModel {
    name;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
    }

}

export class PlayerPositionStore extends BaseStore {}
