import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {playerPositionStore} from './PlayerPosition';
export class Player extends BaseModel {
    name;
    points;
    position;
    FPPG;
    salary;
    team;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.points = json.points;
        this.FPPG = json.FPPG;
        this.salary = json.salary;
        this.position = playerPositionStore.getById(json.positionId);
    }
}
export class PlayerStore extends BaseStore {

}

export let playerStore = new PlayerStore();
