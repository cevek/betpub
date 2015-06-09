let BaseStore = require('./BaseStore');
let BaseModel = require('./BaseModel');
export class Contest extends BaseModel {
    type:ContestType;
    name:string;
    game:Game;
    entryFee:number;
    prizes:number;
    maxEntries:number;
    currEntries:number;
    winType:ContestWinType;
    myLineup:Array<Player>;
}


export class ContestStore extends BaseStore {
}

export let contestStore = new ContestStore();
