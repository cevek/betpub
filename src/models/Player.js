let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
export class Player extends BaseModel {
    name:string;
    points:number;
    position:PlayerPosition;
    FPPG:number;
    salary:number;
    team:Team;
}
export class PlayerStore extends BaseStore {

}

export let playerStore = new PlayerStore();
