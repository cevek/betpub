import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
export class Contest extends BaseModel {
    type;
    name;
    game;
    entryFee;
    prizes;
    maxEntries;
    currEntries;
    winType;
    myLineup;
}


export class ContestStore extends BaseStore {
}

export let contestStore = new ContestStore();
