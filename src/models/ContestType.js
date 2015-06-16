import {BaseModel} from './BaseModel';
import {BaseStore} from './BaseStore';
import {gameStore} from './Game';
export class ContestType extends BaseModel {
    name;
    maxEntries;
    entryFee;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.maxEntries = json.maxEntries;
        this.entryFee = json.entryFee;
    }
}

class ContestTypeStore extends BaseStore {}

export let contestTypeStore = new ContestTypeStore();