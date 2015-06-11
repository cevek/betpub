let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
let {playerPositionStore} = require('./PlayerPosition');
export class Player extends BaseModel {
    name:string;
    points:number;
    position:PlayerPosition;
    FPPG:number;
    salary:number;
    team:Team;

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
