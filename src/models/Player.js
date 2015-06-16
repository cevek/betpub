import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {storage} from '../storage';
var p = 12;
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
        this.points = json.points || p++ * 14 + 5 % 30;
        this.FPPG = json.FPPG || ((p++ * 7 + 3) % 10) / 10;
        this.salary = json.salary || p++ * 18 % 200 * 100;
        var pos = storage.playerPositions.data[p++ * 19 % storage.playerPositions.data.length].id;
        this.position = storage.playerPositions.getById(json.positionId || pos);
    }
}
export class PlayerStore extends BaseStore {}
